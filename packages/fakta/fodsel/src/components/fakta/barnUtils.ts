import { dateFormat } from '@navikt/ft-utils';

import type { BarnHendelseData, FødselGjeldende } from '@navikt/fp-types';

export const formaterLiv = ({ fødselsdato, dødsdato }: BarnHendelseData): string => {
  const født = dateFormat(fødselsdato);
  const død = dødsdato ? dateFormat(dødsdato) : null;
  return dødsdato ? `f. ${født} - d. ${død}` : `f. ${født}`;
};

export const erGjeldendeBarnLike = (alleBarn: FødselGjeldende['barn']) => {
  const barnet = alleBarn[0];
  if (!barnet) {
    return false;
  }
  return !alleBarn.some(({ barn, kilde }) => kilde !== barnet.kilde || erBarnUlike(barnet.barn)(barn));
};

export const erBarnUlike = (sammenlignbartBarn: BarnHendelseData) => (barn: BarnHendelseData) =>
  barn.fødselsdato !== sammenlignbartBarn.fødselsdato || barn.dødsdato !== sammenlignbartBarn.dødsdato;
