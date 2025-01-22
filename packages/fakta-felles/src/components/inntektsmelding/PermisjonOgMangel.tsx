import React from 'react';

import { BodyShort } from '@navikt/ds-react';

import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import { formaterPeriode } from '../../utils/periodeUtils';
import { InfoBlokk } from './InfoBlokk';

interface Props {
  fom: string;
  tom?: string;
  type: string;
  alleKodeverk: AlleKodeverk;
}

export const PermisjonOgMangel = ({ alleKodeverk, type, fom, tom }: Props) => {
  return (
    <InfoBlokk tittel={getKodeverknavnFraKode(alleKodeverk, KodeverkType.PERMISJONSBESKRIVELSE_TYPE, type)}>
      <BodyShort>
        {formaterPeriode({
          fom,
          tom,
        })}
      </BodyShort>
    </InfoBlokk>
  );
};
