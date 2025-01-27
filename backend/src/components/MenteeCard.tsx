'use client'
import {motion} from 'framer-motion'

interface propTypes {
  name: string;
  email: string;
  planType: string;
  registeredDate: string
}

const MenteeCard = ({ name, email, planType, registeredDate }: propTypes) => {
  const formattedDate = new Date(registeredDate).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const generateAvatar = (name: string) => {
    const initial = name.charAt(0).toUpperCase();
    return (
      <div className="flex items-center justify-center w-16 h-16 bg-indigo-500 text-white text-2xl font-bold rounded-full">
        {initial}
      </div>
    );
  };

  return (
    <motion.div
      className="w-full max-w-sm mx-auto p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <motion.div
          className="flex items-center justify-center w-full h-48 bg-gray-100"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {generateAvatar(name)}
        </motion.div>
        <div className="p-6">
          <motion.h2
            className="text-2xl font-bold mb-2 text-center"
            whileHover={{ scale: 1.1 }}
          >
            {name}
          </motion.h2>
          <p className="text-base text-center mb-2">{email}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Plan Type:</h3>
            <motion.p
              className="bg-white text-green-500 px-3 py-1 rounded-full text-sm font-medium text-center"
              whileHover={{ scale: 1.1 }}
            >
              {planType}
            </motion.p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Registered On:</h3>
            <motion.p
              className="bg-white text-green-500 px-3 py-1 rounded-full text-sm font-medium text-center"
              whileHover={{ scale: 1.1 }}
            >
              {formattedDate}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenteeCard