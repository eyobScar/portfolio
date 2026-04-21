import { useScrollReveal } from "../Hooks/useScrollReveal";

export const ScrolReveal = (
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  children,
) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const animationClasses = {
    fadeUp: "opacity-0 translate-y-10",
    fadeIn: "opacity-0",
    slideLeft: "opacity-0 -translate-x-13",
    slideRight: "opacity-0 translate-x-[13]",
    scaleIn: "opacity-0 scale-90",
  };
  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";
  return (
    <div
      className={`transition-all ease-out ${isVisible ? visibleClasses : animationClasses(animation)}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};
