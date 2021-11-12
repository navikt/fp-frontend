declare global {
  interface Document {
      documentMode?: any;
  }
}

// @ts-ignore
export const isIE11 = (): boolean => !!window.MSInputMethodContext && !!document.documentMode;

export const isEdge = (): boolean => /Edge/.test(navigator.userAgent);

/**
 * IE11 workaround for åpen bug i React: https://github.com/facebook/react/issues/3751
 *
 * Workaround hentet herfra: https://github.com/facebook/react/issues/6410#issuecomment-354163472
 */
export const getRelatedTargetIE11 = () => new Promise((resolve) => {
  setTimeout(() => resolve(document.activeElement));
});

export const forhandsvisDokument = (data: any) => {
  // @ts-ignore
  if (window.navigator.msSaveOrOpenBlob) {
    // @ts-ignore
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};
