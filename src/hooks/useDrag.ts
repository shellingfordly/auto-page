export function useDrag() {
  const x = ref(0);
  const y = ref(0);

  function onDragover(event: DragEvent) {
    x.value = event.x - 200 - 50 / 2;
    y.value = event.y - 58 - 50 / 2;
  }

  return {
    position: computed(() => ({ x: unref(x), y: unref(y) })),
    onDragover,
  };
}
