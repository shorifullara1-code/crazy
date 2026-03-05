import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  duration = 0.5,
  direction = "up",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    const variants: { hidden: Variant; visible: Variant } = {
      hidden: { opacity: 0, y: 0, x: 0 },
      visible: { opacity: 1, y: 0, x: 0 }
    };

    if (direction === "up") variants.hidden.y = 75;
    if (direction === "down") variants.hidden.y = -75;
    if (direction === "left") variants.hidden.x = 75;
    if (direction === "right") variants.hidden.x = -75;

    return variants;
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = "", staggerDelay = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}> = ({ children, className = "", direction = "up" }) => {
  const getVariants = () => {
    const variants: { hidden: Variant; visible: Variant } = {
      hidden: { opacity: 0, y: 0, x: 0 },
      visible: { opacity: 1, y: 0, x: 0 }
    };

    if (direction === "up") variants.hidden.y = 20;
    if (direction === "down") variants.hidden.y = -20;
    if (direction === "left") variants.hidden.x = 20;
    if (direction === "right") variants.hidden.x = -20;

    return variants;
  };

  return (
    <motion.div variants={getVariants()} className={className}>
      {children}
    </motion.div>
  );
};
