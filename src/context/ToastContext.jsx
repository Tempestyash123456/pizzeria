import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    message: "",
    visible: false,
    type: "info",
  });

  const showToast = useCallback((message, type = "info") => {
    setToast({ message, visible: true, type });
    setTimeout(() => {
      setToast({ message: "", visible: false, type: "info" });
    }, 3000);
  }, []);

  const hideToast = useCallback(() => {
    setToast({ message: "", visible: false, type: "info" });
  }, []);

  return (
    <ToastContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  return useContext(ToastContext);
}