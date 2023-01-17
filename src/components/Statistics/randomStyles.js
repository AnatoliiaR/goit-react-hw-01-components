const styles = {
  style1: {
    background: '#99ffff',
  },

  style2: {
    background: '#ff66ff',
  },

  style3: {
    background: '#b2ff66',
  },
  style4: {
    background: '#ffff66',
  },
  style5: {
    background: '#ff9999',
  },
  style6: {
    background: '#ff99cc',
  },
  style7: {
    background: '#cc99ff',
  },
  style8: {
    background: '#e5ffcc',
  },
  style9: {
    background: '#e0e0e0',
  },
  style10: {
    background: '#ccffe5',
  },
};

export const getRandomStyle = () => {
  var keys = Object.keys(styles);

  return styles[keys[(keys.length * Math.random()) << 0]];
};
