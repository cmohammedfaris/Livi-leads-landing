"use client";

import React from "react";
import {
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Baseline,
  PaintBucket,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Subscript,
  Superscript,
  ChevronUp,
} from "lucide-react";

const ToolbarButton = ({ children, onClick, active, title }) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className={`p-1 rounded hover:bg-gray-100 transition-colors ${
      active ? "text-[#5B04C5] bg-indigo-50" : "text-[#212844]"
    }`}
  >
    {children}
  </button>
);

const ToolbarDropdown = ({ label, options, value, onChange }) => (
  <div className="relative group">
    <button
      type="button"
      className="flex items-center gap-2 px-2 h-8 hover:bg-gray-50 rounded transition-colors border-r border-[#DEDFEE]"
    >
      <span className="text-sm font-medium text-[#212844] whitespace-nowrap">
        {value || label}
      </span>
      <div className="flex flex-col -gap-1">
        <ChevronUp size={10} className="text-[#9397BB]" />
        <ChevronDown size={10} className="text-[#9397BB]" />
      </div>
    </button>
    {/* Simple Dropdown Menu (UI only for now) */}
    <div className="absolute top-full left-0 mt-1 bg-white border border-[#DEDFEE] rounded-lg shadow-lg py-1 z-50 hidden group-hover:block min-w-[100px]">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className="w-full px-4 py-1.5 text-left text-sm text-[#212844] hover:bg-gray-50 font-medium"
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const Divider = () => <div className="w-[1px] h-6 bg-[#DEDFEE] mx-1" />;

const RichTextEditor = ({ value, onChange, placeholder, id }) => {
  const [font, setFont] = React.useState("Roboto");
  const [size, setSize] = React.useState("12px");
  const [weight, setWeight] = React.useState("Regular");
  const editorRef = React.useRef(null);

  React.useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value && value !== undefined) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const handleInput = () => {
    if (onChange) {
      onChange({
        target: {
          id: id,
          name: id,
          value: editorRef.current.innerHTML,
        },
      });
    }
  };

  const execCmd = (command, cmdValue = null) => {
    document.execCommand(command, false, cmdValue);
    if (editorRef.current) {
      editorRef.current.focus();
    }
    handleInput();
  };

  return (
    <div className="border border-[#DEDFEE] rounded-lg bg-white shadow-sm flex flex-col">
      {/* Toolbar */}
      <div className="bg-[#F8F9FB] border-b border-[#DEDFEE] p-2 flex flex-wrap gap-1 items-center rounded-t-lg z-10">
        <ToolbarDropdown
          label="Font"
          value={font}
          options={["Roboto", "Inter", "Lato", "Sans Serif"]}
          onChange={setFont}
        />
        <ToolbarDropdown
          label="Size"
          value={size}
          options={["10px", "12px", "14px", "16px", "18px"]}
          onChange={setSize}
        />
        <ToolbarDropdown
          label="Weight"
          value={weight}
          options={["Light", "Regular", "Medium", "Bold"]}
          onChange={setWeight}
        />

        <div className="flex items-center gap-0.5 px-2">
          <ToolbarButton title="Bold" onClick={() => execCmd("bold")}>
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton title="Italic" onClick={() => execCmd("italic")}>
            <Italic size={18} />
          </ToolbarButton>
          <ToolbarButton title="Underline" onClick={() => execCmd("underline")}>
            <Underline size={18} />
          </ToolbarButton>
          <ToolbarButton title="Strikethrough" onClick={() => execCmd("strikeThrough")}>
            <Strikethrough size={18} />
          </ToolbarButton>
        </div>

        <Divider />

        <div className="flex items-center gap-0.5 px-2">
          <ToolbarButton title="Text Color">
            <div className="flex flex-col items-center">
              <span className="text-[14px] font-bold h-4 leading-none">A</span>
              <div className="w-3 h-0.5 bg-[#212844] mt-0.5" />
            </div>
          </ToolbarButton>
          <ToolbarButton title="Background Color">
            <PaintBucket size={18} />
          </ToolbarButton>
        </div>

        <Divider />

        <div className="flex items-center gap-0.5 px-2">
          <ToolbarButton title="Unordered List" onClick={() => execCmd("insertUnorderedList")}>
            <List size={18} />
          </ToolbarButton>
          <ToolbarButton title="Ordered List" onClick={() => execCmd("insertOrderedList")}>
            <ListOrdered size={18} />
          </ToolbarButton>
        </div>

        <Divider />

        <div className="flex items-center gap-0.5 px-2">
          <ToolbarButton title="Align Left" onClick={() => execCmd("justifyLeft")}>
            <AlignLeft size={18} />
          </ToolbarButton>
          <ToolbarButton title="Align Center" onClick={() => execCmd("justifyCenter")}>
            <AlignCenter size={18} />
          </ToolbarButton>
          <ToolbarButton title="Align Right" onClick={() => execCmd("justifyRight")}>
            <AlignRight size={18} />
          </ToolbarButton>
          <ToolbarButton title="Justify" onClick={() => execCmd("justifyFull")}>
            <AlignJustify size={18} />
          </ToolbarButton>
        </div>

        <Divider />

        <div className="flex items-center gap-0.5 px-2">
          <ToolbarButton title="Subscript" onClick={() => execCmd("subscript")}>
            <Subscript size={18} />
          </ToolbarButton>
          <ToolbarButton title="Superscript" onClick={() => execCmd("superscript")}>
            <Superscript size={18} />
          </ToolbarButton>
        </div>
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        id={id}
        contentEditable
        onInput={handleInput}
        style={{
          fontFamily: font === "Sans Serif" ? "sans-serif" : font,
          fontSize: size,
          fontWeight: weight === "Bold" ? "bold" : weight === "Medium" ? "500" : weight === "Light" ? "300" : "normal",
          outline: "none"
        }}
        className="w-full min-h-[160px] p-4 text-[#212844] text-base font-normal overflow-y-auto leading-relaxed empty:before:content-[attr(data-placeholder)] empty:before:text-[#9397BB] cursor-text"
        data-placeholder={placeholder}
      />
    </div>
  );
};

export default RichTextEditor;
