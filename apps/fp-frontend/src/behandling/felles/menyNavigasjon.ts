/**
 * Finn id-en til neste eller forrige panel i ein meny, basert på kva som er aktivt no.
 * Sykler rundt (wraps), og handterer tilfellet der ingen panel er aktive.
 *
 * @param retning 1 for neste, -1 for forrige.
 */
export const finnNabopanelId = (menyData: { id: string; erAktiv: boolean }[], retning: 1 | -1): string | undefined => {
  if (menyData.length === 0) {
    return undefined;
  }
  const aktivIndex = menyData.findIndex(d => d.erAktiv);
  let startIndex = aktivIndex;
  if (aktivIndex === -1) {
    startIndex = retning === 1 ? -1 : 0;
  }
  const nyIndex = (startIndex + retning + menyData.length) % menyData.length;
  return menyData[nyIndex]?.id;
};
