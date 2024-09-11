import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { AlleKodeverk, RegionPeriode } from '@navikt/fp-types';
import { BodyLong, BodyShort, Box, Label } from '@navikt/ds-react';
import { KodeverkType } from '@navikt/fp-kodeverk';

import { sorterPerioder } from '../../../utils/periodeUtils';

interface Props {
  regioner: RegionPeriode[];
  alleKodeverk: AlleKodeverk;
  erAnnenpart?: boolean;
}

const RegionVisning: FC<Props> = ({ regioner, erAnnenpart = false, alleKodeverk }) => {
  const kodeverkNavn = alleKodeverk[KodeverkType.REGION];

  const getRegion = (verdi: RegionPeriode): string => {
    return kodeverkNavn.find(it => it.kode === verdi.type)?.navn ?? `Ukjent region: ${verdi?.type.toLowerCase()}`;
  };

  const nyesteRegion = regioner.sort(sorterPerioder).at(0);

  return (
    <Box>
      <Label size="small">
        <FormattedMessage id="OpplysningerOmPersonstatus.RegionLabel" />
      </Label>
      {!nyesteRegion ? (
        <BodyLong textColor="subtle">
          <FormattedMessage
            id="OpplysningerOmPersonstatus.RegionIngen"
            values={{ type: KodeverkType.REGION, erAnnenpart }}
          />
        </BodyLong>
      ) : (
        <BodyShort>{getRegion(nyesteRegion)}</BodyShort>
      )}
    </Box>
  );
};

export default RegionVisning;
