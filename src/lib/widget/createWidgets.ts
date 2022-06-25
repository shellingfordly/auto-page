import {
  ContainerSchema,
  ImageSchema,
  TextSchema,
  NoticeSchema,
  SlideshowSchema,
} from "@/schemas";

export function createWidgets() {
  const imageSchema = new ImageSchema();
  const containerSchema = new ContainerSchema();
  const textSchema = new TextSchema();
  const noticeSchema = new NoticeSchema();
  const slideshowSchema = new SlideshowSchema();

  return [
    imageSchema,
    containerSchema,
    textSchema,
    noticeSchema,
    slideshowSchema,
  ];
}
