import { notNull } from '@fpsak-frontend/utils';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

class SoknadData {
  constructor(selectedFagsakYtelseType: any, selectedFamilieHendelseType: any, selectedForeldreType: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'fagsakYtelseType' does not exist on type... Remove this comment to see the full error message
    this.fagsakYtelseType = notNull(selectedFagsakYtelseType);
    if (selectedFagsakYtelseType === fagsakYtelseType.SVANGERSKAPSPENGER) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'familieHendelseType' does not exist on t... Remove this comment to see the full error message
      this.familieHendelseType = familieHendelseType.FODSEL;
    } else {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'familieHendelseType' does not exist on t... Remove this comment to see the full error message
      this.familieHendelseType = notNull(selectedFamilieHendelseType);
    }
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'foreldreType' does not exist on type 'So... Remove this comment to see the full error message
    this.foreldreType = notNull(selectedForeldreType);
  }

  getFagsakYtelseType() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'fagsakYtelseType' does not exist on type... Remove this comment to see the full error message
    return this.fagsakYtelseType;
  }

  getFamilieHendelseType() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'familieHendelseType' does not exist on t... Remove this comment to see the full error message
    return this.familieHendelseType;
  }

  getForeldreType() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'foreldreType' does not exist on type 'So... Remove this comment to see the full error message
    return this.foreldreType;
  }
}

export default SoknadData;
