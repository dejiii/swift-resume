// Hero Section

export const navBarSection = {
  visible: {
    opacity: 1,
    y: '0px',
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.3,
    },
  },
  hidden: {
    y: '-100px',
    opacity: 0,
  },
};

export const catchPhrase = {
  visible: {
    y: '150px',
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.3,
      delay: 0.3,
    },
  },
  hidden: { y: '0px', opacity: 0 },
};

export const heroButton = {
  visible: {
    opacity: 1,
    delay: 0.9,
  },
  hidden: {
    y: '200px',
    opacity: 0,
  },
};
