'use client'
import {motion} from 'framer-motion'

const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.div
          className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.div>
      </div>
    );
  };
export default Loader
  