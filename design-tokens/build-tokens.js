const StyleDictionary = require('style-dictionary');

const convertPxToRem = (pxValue) => {
  return (pxValue * 0.0625).toFixed(4) + 'rem';
};

StyleDictionary.registerTransform({
  name: 'sizing/pxToRem',
  type: 'value',
  matcher: (token) => {
    return token.original.type === 'sizing';
  },
  transformer: (token) => {
    return convertPxToRem(token.original.value);
  }
});

StyleDictionary.registerTransform({
  name: 'spacing/pxToRem',
  type: 'value',
  matcher: (token) => {
    return token.original.type === 'spacing';
  },
  transformer: (token) => {
    return convertPxToRem(token.original.value);
  }
});

StyleDictionary.registerTransform({
  name: 'shadow/css',
  type: 'value',
  matcher: (token) => {
    return token.original.type === 'boxShadow';
  },
  transformer: (token) => {
    const {
      blur,
      color,
      x,
      y,
      spread,
    } = token.original.value;
    return  `${x}px ${y}px ${blur}px ${spread}px ${color}`
  }
});

StyleDictionary.extend('./design-tokens/config.json').buildAllPlatforms();