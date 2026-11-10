import React from "react";

export default function TableOfContents({ content }) {
  if (!content || !Array.isArray(content)) return null;

  // Filter out h2, h3 headlines
  const headings = content
    .filter((block) => block && (block.type === "h2" || block.type === "h3"))
    .map((block, idx) => {
      const text = block.value;
      const id = typeof text === "string" ? text.toLowerCase().replace(/[^a-z0-9]+/g, "-") : `heading-${idx}`;
      return {
        id,
        text,
        level: block.type, // "h2" or "h3"
      };
    });

  if (headings.length === 0) return null;

  const scrollToHeading = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/80 rounded-2xl p-5 mb-6 font-lato">
      <h4 className="text-xs font-bold text-[#212844] dark:text-white uppercase tracking-wider mb-3">
        Table of Contents
      </h4>
      <nav className="space-y-2">
        {headings.map((heading, idx) => (
          <a
            key={idx}
            href={`#${heading.id}`}
            onClick={(e) => scrollToHeading(e, heading.id)}
            className={`block text-xs transition-colors hover:text-[#5B04C5] ${
              heading.level === "h3"
                ? "pl-4 text-textsecondary dark:text-gray-400 font-normal"
                : "text-[#212844] dark:text-gray-200 font-semibold"
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
