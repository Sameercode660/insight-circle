'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PropTypes {
    image: string;
    name: string;
    bio: string;
    expertIn: string;
}

const MentorCard = ({ image, name, bio, expertIn }: PropTypes) => {
    return (
        <motion.div
            className="w-full max-w-sm mx-auto p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <motion.div
                    className="relative w-full h-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover fill"
                    />
                </motion.div>
                <div className="p-6">
                    <motion.h2
                        className="text-2xl font-bold mb-2 text-center"
                        whileHover={{ scale: 1.1 }}
                    >
                        {name}
                    </motion.h2>
                    <p className="text-base text-center mb-4">{bio}</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Expert in:</h3>
                        <motion.p
                            className="bg-white text-indigo-500 px-3 py-1 rounded-full text-sm font-medium"
                            whileHover={{ scale: 1.1 }}
                        >
                            {expertIn}
                        </motion.p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MentorCard;