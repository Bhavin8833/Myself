import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ComponentProps, type ReactNode } from "react";

type Props = Omit<ComponentProps<typeof motion.a>, "children"> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticButton({ children, strength = 0.35, className = "", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      data-cursor="hover"
      {...rest}
    >
      {children}
    </motion.a>
  );
}