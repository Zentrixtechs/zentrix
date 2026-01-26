"use client";
import { useEffect } from "react";

export default function MagicCursor() {
  useEffect(() => {
    function setupMagicCursor() {
      const cursor = document.getElementById("nav-magic-cursor");
      const links = document.querySelectorAll(".nav-link");
      if (!cursor) return;

      window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          const r = link.getBoundingClientRect();
          cursor.classList.add("active", "box");
          cursor.style.left = r.left + r.width / 2 + "px";
          cursor.style.top = r.top + r.height / 2 + "px";
          cursor.style.width = r.width + 20 + "px";
          cursor.style.height = r.height + 12 + "px";
        });

        link.addEventListener("mouseleave", () => {
          cursor.classList.remove("box");
          cursor.style.width = "14px";
          cursor.style.height = "14px";
          setTimeout(() => cursor.classList.remove("active"), 150);
        });
      });
    }

    setupMagicCursor();
  }, []);

  return null;
}
