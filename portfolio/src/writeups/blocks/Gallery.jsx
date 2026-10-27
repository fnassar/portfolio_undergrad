import styles from "./blocks.module.css";

export default function Gallery({ images, columns = 3 }) {
  return (
    <div className={styles.gallery} style={{ "--columns": columns }}>
      {images.map((image) => (
        <figure key={image.src} className={styles.figure}>
          <img src={image.src} alt={image.alt ?? image.caption ?? ""} loading="lazy" />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
