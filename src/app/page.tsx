"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPaperPlane, FaGithub, FaWhatsapp, FaBars, FaTimes, FaDownload, FaAddressCard, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <main className="min-h-screen font-sans scroll-smooth bg-white text-black dark:text-white dark:bg-gray-900 transition-colors duration-300">
      
      <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 bg-black text-white dark:bg-gray-800 sticky top-0 z-50">
        <div className="text-xl sm:text-2xl font-bold">T.B.M</div>

       
        <nav className="hidden sm:flex space-x-6 text-sm uppercase font-medium">
          <Link href="/about" className="hover:text-gray-300">about</Link>
          <Link href="/featured" className="hover:text-gray-300">featured</Link>
          <Link href="/portfolio" className="hover:text-gray-300">portfolio</Link>
          <Link href="/blog" className="hover:text-gray-300">blog</Link>
          <Link href="/contact" className="hover:text-gray-300">contact</Link>
        </nav>

        
        <div className="flex items-center gap-3 sm:gap-4 text-lg">
          <a href="https://www.facebook.com/blessing.tariro.431192"
                target="_blank" 
                rel="noopener noreferrer"          
                className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="https://github.com/Blessing-T" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-500"><FaGithub /></a>
          <a href="https://wa.me/263785432857"
                target="_blank" 
                rel="noopener noreferrer"          
                className="hover:text-green-500"><FaWhatsapp /></a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xs px-2 py-1 border rounded hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          
          <button onClick={toggleMenu} className="sm:hidden text-xl ml-2">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden flex flex-col items-center bg-black dark:bg-gray-800 text-white text-sm uppercase font-medium py-4 space-y-4"
        >
          <Link href="/about" onClick={toggleMenu}>about</Link>
          <Link href="/featured" onClick={toggleMenu}>featured</Link>
          <Link href="/portfolio" onClick={toggleMenu}>portfolio</Link>
          <Link href="/blog" onClick={toggleMenu}>blog</Link>
          <Link href="/contact" onClick={toggleMenu}>contact</Link>
        </motion.nav>
      )}

      
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row bg-[url('/banner2.jpg')] bg-cover bg-center items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-16 gap-8 text-center lg:text-left min-h-[600px]"
      >
        <div className="flex-1 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold transition-transform duration-500 hover:scale-105">Designer</h1>
          <p className="mt-2 sm:mt-4 text-gray-600 dark:text-gray-300 max-w-sm mx-auto lg:mx-0 text-xs sm:text-base">
            UI/UX Designer with a passion for designing beautiful and functional user experiences.
          </p>
        </div>

        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 transform hover:scale-105 transition duration-500">
          <Image
            src="/Cover.jpg"
            alt="Profile Picture"
            width={256}
            height={256}
            unoptimized
            className="rounded-full border-4 border-black object-cover"
          />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold transition-transform duration-500 hover:scale-105">&lt;Coder&gt;</h1>
          <p className="mt-2 sm:mt-4 text-gray-600 dark:text-gray-300 max-w-sm mx-auto lg:ml-auto text-xs sm:text-base">
            Full Stack Developer who focuses on writing clean, elegant and efficient code.
          </p>
        </div>
      </motion.section>

     
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-gray-100 dark:bg-gray-800"
      >
       
<footer className="bg-black dark:bg-gray-900 text-white px-6 md:px-12 py-10 mt-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


    <div>
      <h3 className="text-lg font-bold mb-3 text-center">Proof I’m More Than Just a Pretty Face</h3>
      <p className="text-gray-400 text-sm text-center">
        Ready to see what I bring to the table? Download my CV to explore my full range of skills, experience, and accomplishments—everything you need to know about how I can add value and make an impact!.
      </p>
      <a
  href="/Tariro Musiringofa Cv.pdf"
  download
  className="inline-flex items-center ml-18 mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-700 transition"
>
  <FaDownload className="mr-2" /> Get My Resume
</a>

    </div>

   
    <div>
      <h3 className="text-lg font-bold mb-3">Let’s Connect</h3>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded bg-gray-800 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="3"
          className="p-2 rounded bg-gray-800 text-white focus:outline-none"
        ></textarea>
         <button
    type="submit"
    className="mt-auto px-4 py-2 bg-blue-500 text-black font-semibold rounded hover:bg-blue-400 transition flex justify-center items-center"
  >
    <FaPaperPlane size={20} />
  </button>
      </form>
    </div>

    
    <div>
      <h3 className="text-lg font-bold mb-3 inline-flex items-center mt-4 px-4 py-2">< FaAddressCard className="mr-2"/>How to Find Me</h3>
      <p className="text-gray-400 text-sm inline-flex items-center mt-4 px-4 py-2">< FaMapMarkerAlt className="mr-2 hover:text-red-500 transition"/>4422 Chinotimba Township, Victoria Falls, Zimbabwe</p>
      <p className="text-gray-400 text-sm inline-flex items-center mt-4 px-4 py-2">< FaEnvelope className="mr-2 hover:text-red-300  transition" /> musiringofatariro@gmail.com</p>
      <p className="text-gray-400 text-sm inline-flex items-center mt-4 px-4 py-2">< FaPhone className="mr-2 hover:text-blue-500 transition"/> +263 78 543 2857</p>

      <div className="flex gap-4 text-xl mt-4">
        <a
          href="https://www.facebook.com/blessing.tariro.431192"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com/Blessing_Taker"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/tariro-musiringofa-357152321"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Blessing-T"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/263785432857"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  </div>

  
  <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} Tariro Blessing Musiringofa. All Rights Reserved.
  </div>
</footer>

      </motion.section>

     
    </main>
  );
}
