import { IMAGE_INFO_SYMBOL } from "@/constants";
import { ImageInfoType } from "@/types";

export function createImageInfo(item: Partial<ImageInfoType>): ImageInfoType {
  return {
    uid: Symbol(IMAGE_INFO_SYMBOL),
    url: item.url || "",
    link: item.link || "",
  };
}
