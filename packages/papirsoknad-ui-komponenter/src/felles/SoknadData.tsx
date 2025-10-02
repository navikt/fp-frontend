import type { FagsakYtelseType, FamilieHendelseType, ForeldreType } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

export class SoknadData {
  fagsakYtelseType: FagsakYtelseType;

  familieHendelseType: FamilieHendelseType;

  foreldreType: ForeldreType;

  constructor(
    selectedFagsakYtelseType: FagsakYtelseType,
    selectedFamilieHendelseType: FamilieHendelseType,
    selectedForeldreType: ForeldreType,
  ) {
    this.fagsakYtelseType = notEmpty(selectedFagsakYtelseType);
    if (selectedFagsakYtelseType === 'SVP') {
      this.familieHendelseType = 'FODSL';
    } else {
      this.familieHendelseType = notEmpty(selectedFamilieHendelseType);
    }
    this.foreldreType = notEmpty(selectedForeldreType);
  }

  getFagsakYtelseType(): FagsakYtelseType {
    return this.fagsakYtelseType;
  }

  getFamilieHendelseType(): FamilieHendelseType {
    return this.familieHendelseType;
  }

  getForeldreType(): ForeldreType {
    return this.foreldreType;
  }
}
