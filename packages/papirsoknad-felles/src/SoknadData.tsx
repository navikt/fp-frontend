import { notNull } from '@fpsak-frontend/utils';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

class SoknadData {
  fagsakYtelseType: string;

  familieHendelseType: string;

  foreldreType: string;

  constructor(selectedFagsakYtelseType: string, selectedFamilieHendelseType: any, selectedForeldreType: string) {
    this.fagsakYtelseType = notNull(selectedFagsakYtelseType);
    if (selectedFagsakYtelseType === fagsakYtelseType.SVANGERSKAPSPENGER) {
      this.familieHendelseType = familieHendelseType.FODSEL;
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

export default SoknadData;
