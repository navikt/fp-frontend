import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

const validerApKodeOgHentApEnum = <T extends AksjonspunktCode>(kode: string, ...kodeEnums: T[]): T => {
  const kodeEnum = kodeEnums.find((k) => k === kode);
  if (!kodeEnum) {
    throw Error(`Det finnes ikke enum for kode ${kode}`);
  }
  return kodeEnum;
};

export default validerApKodeOgHentApEnum;
