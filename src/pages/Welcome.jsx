import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

const buttonHover = {
  scale: 1.1,
  boxShadow: "0 0 15px rgba(109, 40, 217, 0.8)",
  transition: { yoyo: Infinity, duration: 0.6 },
};

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-indigo-900 px-6"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div
        className="relative max-w-md w-full bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-black/90 rounded-2xl shadow-[0_0_30px_rgba(109,40,217,0.7)] p-12 text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-400 via-indigo-500 to-purple-400 animate-pulse rounded-l-2xl"></div>

        <SubTitulo
          titulo="Bienvenido a la Aplicación CRUD"
          className="text-white text-3xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
        />
        <p className="text-gray-300 mb-10 text-base leading-relaxed">
          Gracias por visitar nuestra aplicación CRUD. Prepárate para una experiencia eficiente, moderna y confiable.
        </p>
        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            onClick={handleAccept}
            text="Aceptar"
            className="relative inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
