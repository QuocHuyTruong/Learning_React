import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    setTextareaHeight("auto");
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        className="transition-all w-full max-w-[400px] p-5 rounded-lg border border-gray-100 bg-gray-100 overflow-hidden"
        placeholder="Please enter your enter"
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
