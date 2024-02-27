export const isEmail = (value) => {
  return value.includes("@");
};

export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

export const hasMinLength = (value, minLength) => {
  return value.length >= minLength;
};

export const isEqualsToOtherValue = (value, otherValue) => {
  return value === otherValue;
};
