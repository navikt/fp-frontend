import { dateFormat } from '@navikt/ft-utils';

import type { BarnHendelseData, FødselGjeldende } from '@navikt/fp-types';

export const formaterLiv = ({ fødselsdato, dødsdato }: BarnHendelseData): string => {
  const født = dateFormat(fødselsdato);
  const død = dødsdato ? dateFormat(dødsdato) : null;
  return dødsdato ? `f. ${født} - d. ${død}` : `f. ${født}`;
};

export const erGjeldendeBarnLike = (alleBarn: FødselGjeldende['barn']) =>
  alleBarn.length > 0 &&
  !alleBarn.some(({ barn, kilde }) => kilde !== alleBarn[0].kilde || erBarnUlike(alleBarn[0].barn)(barn));

export const erBarnUlike = (sammenlignbartBarn: BarnHendelseData) => (barn: BarnHendelseData) =>
  barn.fødselsdato !== sammenlignbartBarn.fødselsdato || barn.dødsdato !== sammenlignbartBarn.dødsdato;
