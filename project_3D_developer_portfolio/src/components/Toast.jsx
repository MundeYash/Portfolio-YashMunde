import React, { useEffect } from "react";

const Toast = ({
    type = "success",
    message,
    subMessage = "",
    onClose,
    duration = 5000
}) => {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const toastStyles = {
        success: {
            bg: "bg-green-500 dark:bg-green-600",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        error: {
            bg: "bg-red-500 dark:bg-red-600",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
            )
        },
        info: {
            bg: "bg-blue-500 dark:bg-blue-600",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        warning: {
            bg: "bg-yellow-500 dark:bg-yellow-600",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
            )
        }
    };

    const currentStyle = toastStyles[type] || toastStyles.success;

    return (
        <div className={`w-3/5 ${currentStyle.bg} text-white p-4 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out animate-slide-in-right`}>
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                    {currentStyle.icon}
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-sm">{message}</p>
                    {subMessage && (
                        <p className="text-xs mt-1 opacity-90">{subMessage}</p>
                    )}
                </div>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-white hover:text-gray-200 transition-colors duration-200 ml-2"
                    aria-label="Close notification"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Progress bar for auto-dismiss */}
            {duration > 0 && (
                <div className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-30 rounded-b-lg overflow-hidden">
                    <div
                        className="h-full bg-white bg-opacity-60 animate-progress-bar"
                        style={{ animationDuration: `${duration}ms` }}
                    />
                </div>
            )}
        </div>
    );
};

export default Toast;
