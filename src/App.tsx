import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function App() {
  const controlsUp = useAnimation();
  const controlsDown = useAnimation();
  
  const controlsUp2 = useAnimation();
  const controlsDown2 = useAnimation();

  const animateLines = async () => {
    await controlsUp.start({ y: -600 }); 
    await controlsDown.start({ y: 600 }); 

    controlsUp.start({ y: 0 }, { duration: 10, repeat: Infinity });
    controlsDown.start({ y: 0 }, { duration: 10, repeat: Infinity });
  };

  useEffect(() => {
    animateLines();
  }, []);

  return (
    <>
    <motion.div className="text-5xl font-extrabold flex overflow-hidden h-screen bg-black w-screen relative" >
      <motion.img src="line 1.svg" alt="" animate={controlsDown}/>
      <motion.img src="line 2.svg" alt="" animate={controlsUp} />
      <motion.img src="line 3.svg" alt="" animate={controlsDown} />
      <motion.img src="line 4.svg" alt="" animate={controlsUp} />
      <motion.img src="line 5.svg" alt="" animate={controlsDown} />
      <motion.img src="line 6.svg" alt="" animate={controlsUp} />
      <motion.img src="line 7.svg" alt="" animate={controlsDown} />
      <motion.img src="line 8.svg" alt="" animate={controlsUp} />
    </motion.div>
    </>
  );
}

