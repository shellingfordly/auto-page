import type { MaybeRef, PositionType, CommonRef } from "@/types";
import { useEventListener, isClient } from "@vueuse/core";

type DragRef = MaybeRef<HTMLElement | SVGElement | null | undefined>;

interface UseBoxDraggableOptions {
  boxElement: DragRef;
  onMoving?: (pos: PositionType) => void;
  status?: CommonRef<boolean | undefined>;
  format?: boolean;
}

export function useBoxDraggable(
  target: DragRef,
  options: UseBoxDraggableOptions
) {
  const boxElement = options.boxElement;
  const position = reactive({ x: 0, y: 0 });
  const status = ref(false);

  const handleEvent = (e?: PointerEvent) => {
    e && e.preventDefault();
    e && e.stopPropagation();
  };

  function move(e: PointerEvent) {
    if (
      !unref(options.status) ||
      !unref(status) ||
      !unref(target) ||
      !unref(boxElement)
    ) {
      return;
    }
    const _target = (unref(target) as any).$el ?? unref(target);
    const _boxElement = (unref(boxElement) as any).$el ?? unref(boxElement);
    const rect = _target!.getBoundingClientRect();
    const rectBox = _boxElement!.getBoundingClientRect() || {
      left: 0,
      top: 0,
    };
    const x = e.pageX - rectBox.left - rect.width / 2;
    const y = e.pageY - rectBox.top - rect.height / 2;
    if (x > 0 && x < rectBox.width - rect.width)
      position.x = options.format ? Math.floor(x) : x;
    if (y > 0 && y < rectBox.height - rect.height)
      position.y = options.format ? Math.floor(y) : y;
    options.onMoving && options.onMoving(position);
    handleEvent(e);
  }

  function leave(e?: PointerEvent) {
    status.value = false;
    handleEvent(e);
  }

  function start(e?: PointerEvent) {
    status.value = true;
    handleEvent(e);
  }

  function end(e?: PointerEvent) {
    status.value = false;
    handleEvent(e);
  }

  if (isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(boxElement, "pointermove", move, true);
    useEventListener(boxElement, "pointerup", end, true);
    useEventListener(boxElement, "pointerleave", leave, true);
  }

  return { position, ...toRefs(position), status, start, move, end, leave };
}
