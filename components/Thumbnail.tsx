import { cn, getFileIcon } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  type: string;
  extension: string;
  url?: string;
  imageClassName?: string;
  Classname?: string;
}

const Thumbnail = ({
  type,
  extension,
  url = "",
  imageClassName,
  Classname,
}: Props) => {
  const isImage = type === "image" && extension !== "svg";
  return (
    <figure className={cn('thumbnail', Classname)}>
      <Image
        src={isImage ? url : getFileIcon(extension, type)}
        alt="thumbnaill"
        width={100}
        height={100}
        className={cn(
          "size-8 object-contain",
          imageClassName,
          isImage && "thumbnail-image",
        )}
      />
    </figure>
  );
};

export default Thumbnail;
