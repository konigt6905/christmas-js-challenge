import { useEffect, useRef, useState } from 'react';
import { highlightJavaScript } from '../utils/syntaxHighlight';

const CodeEditor = ({ value, onChange, readOnly = false }) => {
  const textareaRef = useRef(null);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    setHighlightedCode(highlightJavaScript(value));
  }, [value]);

  const handleChange = (e) => {
    if (!readOnly && onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onChange(newValue);
      setTimeout(() => {
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="relative font-mono text-sm bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
      {/* Highlighted Code Display */}
      <pre
        className="absolute top-0 left-0 w-full h-full p-4 overflow-auto pointer-events-none"
        aria-hidden="true"
      >
        <code
          className="block whitespace-pre-wrap break-words leading-normal"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>

      {/* Actual Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        className={`relative w-full min-h-[300px] p-4 bg-transparent resize-y outline-none font-mono text-sm caret-christmas-red ${
          readOnly ? 'cursor-default' : ''
        }`}
        style={{
          color: 'transparent',
          caretColor: '#C41E3A',
        }}
        spellCheck="false"
      />

      {/* Read-only Overlay */}
      {readOnly && (
        <div className="absolute top-2 right-2 px-3 py-1 bg-christmas-gold/80 text-white text-xs font-semibold rounded-full">
          Solution
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
