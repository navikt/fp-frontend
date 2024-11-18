import { notNull } from '@navikt/ft-utils';

import { FagsakYtelseType, FamilieHendelseType } from '@navikt/fp-kodeverk';

export class SoknadData {
  fagsakYtelseType: string;

  familieHendelseType: string;

  foreldreType: string;

  constructor(selectedFagsakYtelseType: string, selectedFamilieHendelseType: any, selectedForeldreType: string) {
    this.fagsakYtelseType = notNull(selectedFagsakYtelseType);
    if (selectedFagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER) {
      this.familieHendelseType = FamilieHendelseType.FODSEL;
    } else {
      this.familieHendelseType = notNull(selectedFamilieHendelseType);
    }
    this.foreldreType = notNull(selectedForeldreType);
  }

  getFagsakYtelseType(): string {
    return this.fagsakYtelseType;
  }

  getFamilieHendelseType(): string {
    return this.familieHendelseType;
  }

  getForeldreType(): string {
    return this.foreldreType;
  }
}
