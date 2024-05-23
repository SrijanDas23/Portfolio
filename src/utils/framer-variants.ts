export const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(94,0,0)",
  },
};

export const midVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

export const endVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(94,0,0)",
  },
};

export const createLinkVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -130 : 130 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 12,
    },
  },
});
