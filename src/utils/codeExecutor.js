export const executeCode = (userCode, testCode) => {
  try {
    // Create a safe execution context
    const wrappedCode = `
      ${userCode}
      ${testCode}
    `;

    // Execute the code
    // eslint-disable-next-line no-new-func
    const result = new Function(wrappedCode)();

    return {
      success: result === true,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

export const validateSyntax = (code) => {
  try {
    // eslint-disable-next-line no-new-func
    new Function(code);
    return {
      valid: true,
      error: null,
    };
  } catch (error) {
    return {
      valid: false,
      error: error.message,
    };
  }
};
