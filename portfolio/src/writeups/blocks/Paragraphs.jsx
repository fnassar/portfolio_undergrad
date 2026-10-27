export default function Paragraphs({ items }) {
  return items.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}
