import { MedlemskapVurdering } from '../../types/vurderingMedlemskapForm';

const oppfylt = {
  label: 'Oppfylt',
  value: MedlemskapVurdering.OPPFYLT,
};

const delvisOppfylt = {
  label: 'Delvis oppfylt',
  value: MedlemskapVurdering.DELVIS_OPPFYLT,
};

const ikkeOppfylt = {
  label: 'Ikke oppfylt',
  value: MedlemskapVurdering.IKKE_OPPFYLT,
};

type RadioOption = {
  value: string;
  label: string;
};

export const lagVurderingsAlternativer = (
  ytelse: string,
  erForutgående: boolean,
  erRevurdering: boolean,
): RadioOption[] => {
  if (ytelse === 'ES') {
    return erForutgående ? [oppfylt, delvisOppfylt, ikkeOppfylt] : [oppfylt, ikkeOppfylt];
  }
  if (erRevurdering) {
    return [oppfylt, delvisOppfylt, ikkeOppfylt];
  }
  return [oppfylt, ikkeOppfylt];
};
