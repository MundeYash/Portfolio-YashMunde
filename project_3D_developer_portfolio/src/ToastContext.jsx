import React, { createContext, useContext, useState } from "react";
import Toast from "./components/Toast";

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = (type, message, subMessage = "", duration = 5000) => {
        const id = Date.now() + Math.random();
        const newToast = { id, type, message, subMessage, duration };

        setToasts(prev => [...prev, newToast]);

        // Auto-hide after duration
        if (duration > 0) {
            setTimeout(() => {
                hideToast(id);
            }, duration);
        }
    };

    const hideToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast, hideToast }}>
            {children}
            {/* Render all active toasts */}
            <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center pointer-events-none">
                <div className="w-full max-w-7xl px-4">
                    {toasts.map((toast, index) => (
                        <div
                            key={toast.id}
                            className="pointer-events-auto flex justify-center py-2"
                            style={{
                                transform: `translateY(${index * 300}px)`
                            }}
                        >
                            <Toast
                                type={toast.type}
                                message={toast.message}
                                subMessage={toast.subMessage}
                                onClose={() => hideToast(toast.id)}
                                duration={0} // Disable auto-dismiss in component since we handle it here
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ToastContext.Provider>
    );
};
