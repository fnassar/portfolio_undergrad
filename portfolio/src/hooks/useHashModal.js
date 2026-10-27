import { useEffect, useState } from "react";

const PREFIX = "#project-";

export function projectHash(id) {
  return `${PREFIX}${id}`;
}

function readId() {
  const { hash } = window.location;
  return hash.startsWith(PREFIX) ? hash.slice(PREFIX.length) : null;
}

export default function useHashModal() {
  const [id, setId] = useState(readId);

  useEffect(() => {
    const sync = () => setId(readId());
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function close() {
    window.history.replaceState(null, "", window.location.pathname);
    setId(null);
  }

  return { id, close };
}
