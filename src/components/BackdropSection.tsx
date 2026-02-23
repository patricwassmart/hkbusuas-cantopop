import { useScroll } from "../hooks";
import { cn } from "../utils";
import { useRef, useState, type ComponentProps } from "react";

type BackdropSectionProps = {
  backdropImage: string;
} & ComponentProps<"section">;

export function BackdropSection({
  backdropImage,
  children,
  ...props
}: BackdropSectionProps) {
  return (
    <section {...props}>
      <div className="sticky h-lvh w-screen top-0 left-0 -z-10">
        <img
          src={backdropImage}
          className="h-full object-cover w-full blur-xs"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-800/80"></div>
      </div>
      <div className="p-8">{children}</div>
    </section>
  );
}

type FadeInOutParagraphProps = {
  focusThreshold?: number;
} & ComponentProps<"p">;

export function FadeInOutParagraph({
  className,
  focusThreshold = 0.5,
  children,
  ...props
}: FadeInOutParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [inFocus, setInFocus] = useState(false);
  useScroll(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.max(
        0,
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0),
      );
      const visibilityRatio = visibleHeight / rect.height;
      setInFocus(visibilityRatio >= focusThreshold);
    }
  });
  return (
    <p
      ref={ref}
      style={{ opacity: inFocus ? 1 : 0 }}
      className={cn(className, "transition-opacity duration-500")}
      {...props}
    >
      {children}
    </p>
  );
}
