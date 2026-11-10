"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Info, AlertTriangle, AlertCircle, X } from "lucide-react";
import toast from "react-hot-toast";

// Queue State
let toastQueue = [];
let isToastActive = false;

// Process the queue
const processQueue = () => {
  if (isToastActive || toastQueue.length === 0) return;

  isToastActive = true;
  const { message, param2, param3 } = toastQueue.shift();

  // 1. Robust Argument Parsing
  let type = "i";
  let title = "";

  if (param3 && ["s", "e", "w", "i"].includes(param3)) {
    type = param3;
    title = param2;
  } else if (param2 && ["s", "e", "w", "i"].includes(param2)) {
    type = param2;
  } else if (param2 && typeof param2 === "string") {
    title = param2;
  }

  // 2. Default Titles
  if (!title) {
    const titles = { s: "Success", e: "Error", w: "Warning", i: "Information" };
    title = titles[type] || "Information";
  }

  // 3. Message Formatting
  let msgText = message;
  if (typeof message === "object" && message !== null) {
    if (Array.isArray(message)) {
      msgText = message.join("\n");
    } else {
      try {
        msgText = JSON.stringify(message);
      } catch (e) {
        msgText = String(message);
      }
    }
  }

  // 4. Exact CSS from the user's HTML/CSS example
  const styles = {
    s: {
      bg: "linear-gradient(90deg, rgba(236, 253, 245, 0.85) 0%, rgba(255, 255, 255, 0.85) 35%)",
      icon: <CheckCircle color="#10b981" size={20} strokeWidth={2} />,
    },
    e: {
      bg: "linear-gradient(90deg, rgba(255, 240, 242, 0.85) 0%, rgba(255, 255, 255, 0.85) 35%)",
      icon: <AlertCircle color="#e11d48" size={20} strokeWidth={2} />,
    },
    w: {
      bg: "linear-gradient(90deg, rgba(255, 251, 235, 0.85) 0%, rgba(255, 255, 255, 0.85) 35%)",
      icon: <AlertTriangle color="#f59e0b" size={20} strokeWidth={2} />,
    },
    i: {
      bg: "linear-gradient(90deg, rgba(240, 249, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 35%)",
      icon: <Info color="#38bdf8" size={20} strokeWidth={2} />,
    },
  };

  const currentStyle = styles[type] || styles.i;
  const isMobile = window.innerWidth <= 768;

  const handleUnmount = () => {
    isToastActive = false;
    // Process the next toast in the queue after a tiny delay for smooth visual transition
    setTimeout(processQueue, 200);
  };

  toast.custom(
    (t) => (
      <ToastComponent
        t={t}
        title={title}
        msgText={msgText}
        currentStyle={currentStyle}
        isMobile={isMobile}
        onUnmount={handleUnmount}
      />
    ),
    {
      position: isMobile ? "top-center" : "top-right",
      duration: 5000,
    }
  );
};

// Internal Component to handle lifecycle for the queue
const ToastComponent = ({ t, title, msgText, currentStyle, isMobile, onUnmount }) => {
  // Trigger onUnmount exactly when react-hot-toast removes this component from the DOM
  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, []); // Empty dependency array ensures it only runs on unmount

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: isMobile ? -20 : 20, scale: 0.95 }}
      animate={{
        opacity: t.visible ? 1 : 0,
        y: t.visible ? 0 : (isMobile ? -20 : 20),
        scale: t.visible ? 1 : 0.95,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        width: "380px",
        maxWidth: "90vw",
        padding: "16px",
        borderRadius: "12px",
        background: currentStyle.bg,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
        pointerEvents: "auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
        {currentStyle.icon}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
        <p style={{ color: "#0f172a", fontSize: "15px", fontWeight: "600", margin: 0, paddingRight: "16px" }}>
          {title}
        </p>
        <p style={{ color: "#8c8c8c", fontSize: "14px", fontWeight: "400", margin: 0, wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
          {msgText}
        </p>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={() => toast.dismiss(t.id)}
        style={{
          flexShrink: 0,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#94a3b8",
        }}
        aria-label="Close toast"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};

// Exported Toast Function
export const Toast = (message, param2, param3) => {
  // Push to queue
  toastQueue.push({ message, param2, param3 });
  // Attempt to process
  processQueue();
};
