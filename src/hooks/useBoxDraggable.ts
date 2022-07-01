import { MaybeRef } from "@/types";
import { useEventListener, isClient } from "@vueuse/core";

type DragElement = MaybeRef<HTMLElement | SVGElement | null | undefined>;

export function useBoxDraggable(target: DragElement, boxElement: DragElement) {
  const position = reactive({ x: 0, y: 0 });
  let status = ref(false);

  const handleEvent = (e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function move(e: PointerEvent) {
    if (!unref(status) || e.target !== unref(target)) return;
    const dom = unref(target)!.getBoundingClientRect();
    const rect = unref(boxElement)!.getBoundingClientRect() || {
      left: 0,
      top: 0,
    };
    const x = e.pageX - rect.left - dom.width / 2;
    const y = e.pageY - rect.top - dom.height / 2;
    if (x > 0 && x < rect.width - dom.width) {
      position.x = x;
    }
    if (y > 0 && y < rect.height - dom.height) {
      position.y = y;
    }
    handleEvent(e);
  }

  function leave(e: PointerEvent) {
    status.value = false;
    handleEvent(e);
  }

  function start(e: PointerEvent) {
    status.value = true;
    handleEvent(e);
  }

  function end(e: PointerEvent) {
    status.value = false;
    handleEvent(e);
  }

  if (isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(boxElement, "pointermove", move, true);
    useEventListener(boxElement, "pointerup", end, true);
    useEventListener(boxElement, "pointerleave", leave, true);
  }

  return { position, ...toRefs(position), status };
}
