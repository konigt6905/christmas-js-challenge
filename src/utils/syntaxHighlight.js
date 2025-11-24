export const highlightJavaScript = (code) => {
  if (!code) return '';

  const keywords = [
    'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
    'do', 'switch', 'case', 'break', 'continue', 'true', 'false', 'null',
    'undefined', 'new', 'this', 'class', 'extends', 'import', 'export',
    'default', 'async', 'await', 'try', 'catch', 'throw', 'typeof', 'in',
    'of', 'delete', 'void', 'yield', 'static', 'get', 'set'
  ];

  // Escape HTML first
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Create tokens to preserve order and prevent overlap
  const tokens = [];
  let lastIndex = 0;

  // Tokenize the code
  const patterns = [
    // Comments (highest priority)
    { regex: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, type: 'comment' },
    // Strings
    { regex: /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g, type: 'string' },
    // Numbers
    { regex: /\b(\d+\.?\d*)\b/g, type: 'number' },
    // Function calls
    { regex: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, type: 'function' },
    // Keywords
    {
      regex: new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'),
      type: 'keyword'
    },
  ];

  // Find all matches
  const matches = [];
  patterns.forEach(({ regex, type }) => {
    let match;
    const reg = new RegExp(regex.source, regex.flags);
    while ((match = reg.exec(escaped)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
        type: type
      });
    }
  });

  // Sort by position and filter overlaps
  matches.sort((a, b) => a.start - b.start);
  const filteredMatches = [];
  let lastEnd = 0;

  matches.forEach(match => {
    if (match.start >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.end;
    }
  });

  // Build highlighted string
  let result = '';
  let pos = 0;

  filteredMatches.forEach(match => {
    // Add text before match
    result += escaped.substring(pos, match.start);

    // Add highlighted match
    const colorClass = {
      comment: 'text-gray-500 italic',
      string: 'text-christmas-green font-semibold',
      number: 'text-blue-600 font-semibold',
      function: 'text-purple-600 font-semibold',
      keyword: 'text-christmas-red font-bold'
    }[match.type];

    result += `<span class="${colorClass}">${match.text}</span>`;
    pos = match.end;
  });

  // Add remaining text
  result += escaped.substring(pos);

  return result;
};
