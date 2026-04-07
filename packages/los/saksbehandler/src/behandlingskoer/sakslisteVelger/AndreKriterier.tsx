import type { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';

import type { AndreKriterieDto } from '@navikt/fp-types';

import { useLosKodeverk } from '../../data/useLosKodeverk';

interface Props {
  andreKriterie: AndreKriterieDto;
}

export const AndreKriterier = ({ andreKriterie: { inkluder, ekskluder } }: Props): ReactNode => {
  const andreKriterierTyper = useLosKodeverk('AndreKriterierType');

  if (inkluder.length === 0 && ekskluder.length === 0) {
    return <FormattedMessage tagName={BodyShort} id="SakslisteVelgerForm.Alle" />;
  }
  return (
    <>
      {inkluder.map(ak => (
        <BodyShort key={ak}>{andreKriterierTyper.find(akt => akt.kode === ak)?.navn}</BodyShort>
      ))}
      {ekskluder.map(ak => (
        <BodyShort key={ak}>
          <FormattedMessage
            id="SakslisteVelgerForm.Uten"
            values={{ kriterie: andreKriterierTyper.find(akt => akt.kode === ak)?.navn }}
          />
        </BodyShort>
      ))}
    </>
  );
};
