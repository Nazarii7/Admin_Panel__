import { MotionProps, Variants } from "framer-motion";

export const FADE_IN: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.4 },
};

export const MENU_ANIMATION: Variants = {
  open: {
    scaleZ: 1,
    scaleY: 1,
    scaleX: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 8 },
  },
  closed: {
    scaleZ: 0.3,
    scaleY: 0.3,
    scaleX: 0.3,
    opacity: 0,
    transition: { type: "spring", stiffness: 80, damping: 8 },
  },
};
