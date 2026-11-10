import React from "react";

export default function ContentRenderer({ content }) {
  if (!content || !Array.isArray(content)) return null;

  return (
    <div className="prose prose-blue max-w-none dark:prose-invert font-lato">
      {content.map((block, idx) => {
        if (!block || typeof block !== "object") return null;

        const { type, value } = block;

        switch (type) {
          case "paragraph":
            return (
              <p key={idx} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {value}
              </p>
            );

          case "h2":
            // Slugify the heading text so we can link to it from TOC
            const h2Id = typeof value === "string" ? value.toLowerCase().replace(/[^a-z0-9]+/g, "-") : `h2-${idx}`;
            return (
              <h2 key={idx} id={h2Id} className="text-lg font-bold text-[#212844] dark:text-white mt-6 mb-3 scroll-mt-20">
                {value}
              </h2>
            );

          case "h3":
            const h3Id = typeof value === "string" ? value.toLowerCase().replace(/[^a-z0-9]+/g, "-") : `h3-${idx}`;
            return (
              <h3 key={idx} id={h3Id} className="text-base font-bold text-[#212844] dark:text-white mt-5 mb-2 scroll-mt-20">
                {value}
              </h3>
            );

          case "h4":
            const h4Id = typeof value === "string" ? value.toLowerCase().replace(/[^a-z0-9]+/g, "-") : `h4-${idx}`;
            return (
              <h4 key={idx} id={h4Id} className="text-sm font-bold text-[#212844] dark:text-white mt-4 mb-2 scroll-mt-20">
                {value}
              </h4>
            );

          case "quote":
            return (
              <blockquote key={idx} className="border-l-4 border-[#5B04C5] bg-gray-50 dark:bg-gray-800/50 pl-4 py-2 italic text-gray-600 dark:text-gray-400 my-4 rounded-r-lg text-sm">
                {value}
              </blockquote>
            );

          case "list":
            const isOrdered = block.style === "ordered";
            const ListTag = isOrdered ? "ol" : "ul";
            return (
              <ListTag key={idx} className={`list-outside pl-5 mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-1.5 ${isOrdered ? 'list-decimal' : 'list-disc'}`}>
                {Array.isArray(value) && value.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ListTag>
            );

          case "image":
            return (
              <figure key={idx} className="my-6">
                <img
                  src={value.url || value.image}
                  alt={value.alt || "Blog image description"}
                  className="rounded-xl max-h-[450px] w-full object-cover border border-gray-100 dark:border-gray-700"
                  loading="lazy"
                />
                {value.caption && (
                  <figcaption className="text-center text-xs text-[#8487A8] dark:text-gray-400 mt-2 italic">
                    {value.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "code":
            return (
              <pre key={idx} className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-xs my-4 font-mono">
                <code>{value}</code>
              </pre>
            );

          case "callout":
            return (
              <div key={idx} className="bg-[#EFEFFD] dark:bg-gray-800 border border-[#5B04C5]/20 rounded-xl p-4 my-4 flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-[#5B04C5] font-bold">ℹ</span>
                <div>{value}</div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
