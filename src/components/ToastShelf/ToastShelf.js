import React, { useContext, useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey';

function ToastShelf() {
  const { toasts, dismissToast, clearToasts } = useContext(ToastContext)

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      {toasts && toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} handleDismiss={() => {
              dismissToast(id);
            }
            }>
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
