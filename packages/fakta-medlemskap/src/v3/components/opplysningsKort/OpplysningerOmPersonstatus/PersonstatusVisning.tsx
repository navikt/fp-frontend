import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { AlleKodeverk, PersonstatusPeriode } from '@navikt/fp-types';
import { BodyLong, BodyShort, Box, Label } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { KodeverkType, personstatusType } from '@navikt/fp-kodeverk';

import { sorterPerioder } from '../../../utils/periodeUtils';

interface Props {
  personstatuser: PersonstatusPeriode[];
  erAnnenpart?: boolean;
  alleKodeverk: AlleKodeverk;
}

const PersonstatusVisning: FC<Props> = ({ personstatuser, erAnnenpart = false, alleKodeverk }) => {
  const kodeverkNavn = alleKodeverk[KodeverkType.PERSONSTATUS_TYPE];

  const getPersonstatus = (verdi: PersonstatusPeriode): string => {
    const kodeverk = kodeverkNavn.find(it => it.kode === verdi.type);
    return kodeverk?.navn ?? `Ukjent personstatus: ${verdi?.type.toLowerCase()}`;
  };

  const nyesteInnslag = personstatuser.sort(sorterPerioder).at(0);
  if (!nyesteInnslag)
    return (
      <Box>
        <Label size="small">
          <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusLabel" />
        </Label>
        <BodyLong textColor="subtle">
          <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusIngen" values={{ erAnnenpart }} />
        </BodyLong>
      </Box>
    );

  return (
    <>
      <Box>
        <Label size="small">
          <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusLabel" />
        </Label>
        <BodyShort>{getPersonstatus(nyesteInnslag)}</BodyShort>
      </Box>
      {nyesteInnslag.type === personstatusType.UTVANDRET && (
        <Box>
          <Label size="small">
            <FormattedMessage id="OpplysningerOmPersonstatus.UtvandretLabel" />
          </Label>
          <BodyShort>
            <DateLabel dateString={nyesteInnslag.fom} />
          </BodyShort>
        </Box>
      )}
    </>
  );
};

export default PersonstatusVisning;
