import { useToast } from "../../context/ToastContext.jsx";
import "./Toast.css";

function Toast() {
  const { toast, hideToast } = useToast();

  if (!toast.visible) return null;

  return (
    <div className={`toast toast--${toast.type}`}>
      <div className="toast__content">
        <span className="toast__icon">
          {toast.type === "success" && "✔"}
          {toast.type === "error" && "✖"}
          {toast.type === "info" && "ℹ"}
        </span>
        <p className="toast__message">{toast.message}</p>
      </div>
      <button className="toast__close" onClick={hideToast}>
        &#10005;
      </button>
    </div>
  );
}

export default Toast;