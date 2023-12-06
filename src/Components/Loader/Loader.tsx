import { motion } from "framer-motion";
const Loader = () => {
  const letters = ["C", "A", "B", "J"];
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-loader">
      <div className="flex flex-col justify-center items-center px-8 py-4 bg-[#001D63]">
      <motion.div className="font-cabj text-7xl sml:text-8xl dm:text-9xl">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index / 2, duration: 1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.span
        className="font-cabj text-xl sml:text-2xl dm:text-2xl uppercase "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Monte Caseros
      </motion.span>
      </div>
    </div>
  );
};

export default Loader;
