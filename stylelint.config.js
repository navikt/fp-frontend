module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-alphabetical-order': true,
    'color-hex-length': 'short',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'length-zero-no-unit': true,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-type-case': 'lower',
    'unit-allowed-list': [
      'em',
      'ex',
      'rem', // Font-relative lengths
      'pt',
      'px', // Absolute lengths
      'vh',
      'vw',
      'vmin',
      'vmax', // Viewport-percentage lengths
      'deg',
      'grad',
      'rad',
      'turn', // Angle
      'ms',
      's', // Duration
      'dpi',
      'dpcm',
      'dppx', // Resolution
      '%',
      'fr', // Other
    ],
  },
};
