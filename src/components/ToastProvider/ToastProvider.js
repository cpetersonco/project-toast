import React, { createContext, useEffect, useState } from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  const addToast = ({ variant, message }) => {
    const newToasts = [...toasts, { id: crypto.randomUUID(), variant, message }]
    setToasts(newToasts);
  }

  const dismissToast = (id) => {
    const newToasts = toasts.filter((t) => t.id != id);
    setToasts(newToasts);
  }

  const clearToasts = () => {
    setToasts([]);
  }

  return (
    <ToastContext.Provider value={
      {
        toasts,
        addToast,
        dismissToast,
        clearToasts
      }
    }>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
