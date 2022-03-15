import React from "react";
import useHover from "../hook/useHover";
import useLinkNewTab from "../hook/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        voluptates aperiam nobis voluptatibus repellendus non, dignissimos,
        molestias sunt quia doloremque reprehenderit aliquam! Minus ad quae
        aspernatur, commodi placeat ratione odio!
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        voluptates aperiam nobis voluptatibus repellendus non, dignissimos,
        molestias sunt quia doloremque reprehenderit aliquam! Minus ad quae
        aspernatur, commodi placeat ratione odio!
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        voluptates aperiam nobis voluptatibus repellendus non, dignissimos,
        molestias sunt quia doloremque reprehenderit aliquam! Minus ad quae
        aspernatur, commodi placeat ratione odio!
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
