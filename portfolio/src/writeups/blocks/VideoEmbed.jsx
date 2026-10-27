import styles from "./blocks.module.css";

export default function VideoEmbed({ src, title }) {
  return (
    <div className={styles.video}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
