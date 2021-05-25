const encrypt = (value) => {
  return Buffer.from(value).toString("base64");
};

const decrypt = (value) => {
  return Buffer.from(value, "base64");
};

export { encrypt, decrypt };
