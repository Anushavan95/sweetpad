export const changeAnchor = (anchor, classes) => {
  switch (anchor) {
    case "left":
      return classes.left;
    case "right":
      return classes.right;
    default:
      return classes.left;
  }
};
