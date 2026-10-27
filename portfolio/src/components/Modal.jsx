import { useEffect, useRef } from "react";
import GeoFrame from "../animations/GeoFrame.jsx";
import styles from "./Modal.module.css";

export default function Modal({ label, color, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current.open) dialogRef.current.showModal();
  }, []);

  return (
    // Backdrop clicks land on the <dialog> itself; keyboard users close it with Esc.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={label}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <GeoFrame color={color}>
        <button className={styles.close} onClick={onClose}>
          Close ✕
        </button>
        {children}
      </GeoFrame>
    </dialog>
  );
}
