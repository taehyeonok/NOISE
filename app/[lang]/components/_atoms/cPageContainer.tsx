import { cPageContainerProps } from "@/@types/components";

export default function CPageContainer({ children, className }: cPageContainerProps) {
  return <div className={`cPageContainer ${className}`}>{children}</div>;
}
