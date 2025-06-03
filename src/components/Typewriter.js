"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  texts,
  typingSpeed = 95,
  pauseTime = 1500,
  loop = true,
}) {

  // text is the current text being typed
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingInterval;

    // current is text to type in list of texts
    // fullText is the complete text to type out
    const current = texts[index];
    const fullText = current + "...";

    // If we are deleting, we slice the last character off
    if (isDeleting) {
      typingInterval = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, typingSpeed / 2);
    }
    // If we are typing, we slice the next character off
    else {
      typingInterval = setTimeout(() => {
        setText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // When typing is done, pause then delete
    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    }

    // When deleting is done, go to next word
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) =>
        loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1)
      );
    }

    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, index, texts, typingSpeed, pauseTime, loop]);

  return (
    <span>
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
}
