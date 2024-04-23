import Image from "next/image";
import { imageButtonProps } from "@/@types/components";

export default function CImageButton({
  image,
  title,
  classList,
  imagePosition = "front",
  onClick,
  titleHidden = false,
}: imageButtonProps) {
  return (
    <button
      className={"rounded flex justify-center items-center gap-1 " + classList}
      onClick={onClick}
      type={"button"}
    >
      {imagePosition === "front" && <Image src={image} alt={title} />}
      {titleHidden ? <p className={"sr_only"}>{title}</p> : title}
      {imagePosition === "back" && <Image src={image} alt={title} />}
    </button>
  );
}
