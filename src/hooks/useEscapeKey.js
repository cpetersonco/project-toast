import React, { useState, useEffect } from 'react';

export function useEscapeKey(callback) {
  useEffect(() => {
    const handleEsc = ({ key }) => {
      if (key === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [callback])
}
