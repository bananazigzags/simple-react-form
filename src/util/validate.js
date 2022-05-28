export const  validateInput = (string, validator) => {
  return string && validator.test(string.trim());
}