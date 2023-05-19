import React, { useEffect } from "react";
import styles from "./Feedback.module.css";
import { motion } from "framer-motion";
import { useActionContext } from "@/src/contexts/actionsContext";

const Feedback = () => {
  const { message } = useActionContext();

  return (
    <motion.div
      initial={{ opacity: 0.2, bottom: 0 }}
      animate={{ opacity: 1, bottom: 24 }}
      exit={{ opacity: 0, bottom: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
      className={`body-S ${styles.container}`}
    >
      {message}
    </motion.div>
  );
};

export default Feedback;
