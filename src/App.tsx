import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function App() {
  const controls = useAnimation();
  const control1 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      controls.start({ scale: 1 + scrollPosition * 0.002 });

      const yPos = -scrollPosition * 0.5;
      const rotation = scrollPosition * 0.0;
      control1.start({ y: yPos, rotate: rotation });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, control1]);

  return (
    <>
      <motion.div className="flex  overflow-x-hidden bg-black w-full relative h-[53rem]">
        <motion.img
          src="line 1.svg"
          className="h-screen fixed -left-20 -top-20"
          animate={control1}
          initial={{ y: 0 }}
          transition={{ duration: "0.8" }}
        />
        <motion.img
          src="line 2.svg"
          className="h-screen fixed left-[11%]"
          animate={controls}
          transition={{ duration: "0.8" }}
        />
        <motion.img
          src="line 3.svg"
          className="h-screen fixed left-[26%]"
          animate={control1}
          initial={{ y: 0 }}
          transition={{ duration: "0.8" }}
        />
        <motion.img
          src="line 4.svg"
          className="h-screen fixed left-[38%]"
          animate={controls}
          transition={{ duration: "0.8" }}
        />
        <motion.img
          src="line 5.svg"
          className="h-screen fixed left-[54%]"
          animate={control1}
          initial={{ y: 0 }}
          transition={{ duration: "0.8" }}
        />
        <motion.img
          src="line 6.svg"
          className="h-screen fixed left-[66%]"
          animate={controls}
          transition={{ duration: "0.8" }}
        />
        <motion.img
          src="line 7.svg"
          className="h-screen fixed left-[82%]"
          animate={control1}
          initial={{ y: 0 }}
          transition={{ duration: "0.8" }}
        />
        <motion.img
          src="line 8.svg"
          className="h-screen fixed left-[96%]"
          animate={controls}
          transition={{ duration: "0.8" }}
        />
      </motion.div>
    </>
  );
}
