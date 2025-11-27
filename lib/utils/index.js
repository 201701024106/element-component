const o = (e) => e.replace(new RegExp("(?<!^)([A-Z])", "g"), "-$1").toLowerCase();
export {
  o as toLine
};
