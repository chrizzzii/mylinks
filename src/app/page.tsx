"use client";

import { links } from "@/data/links";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <main className="w-full max-w-md p-6 text-center backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={110}
            height={110}
            priority
            className="mx-auto rounded-full border-4 border-white shadow-lg"
          />

          <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-white drop-shadow whitespace-nowrap">
            Agustinus Adven Christo
          </h1>
          <p className="text-white/90 text-sm">Software Engineer</p>

          <div className="mt-8 space-y-4">
            {links.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-between bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-md 
                   shadow-md rounded-2xl px-5 py-3 text-gray-800 font-semibold 
                   hover:shadow-xl hover:from-white hover:to-white/90 transition duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-indigo-600" />
                    <span>{link.title}</span>
                  </div>
                  <FiExternalLink  className="w-4 h-4 text-gray-600" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
