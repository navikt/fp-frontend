import { FormattedMessage, useIntl } from 'react-intl';

import { Label, Link, List, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { periodFormat } from '@navikt/ft-utils';

import type {
  foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType,
  RelatertTilgrensedYtelse,
} from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
  farSøkerType: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType | undefined;
}

export const RettighetFaktaPanel = ({ farSøkerType, innvilgetRelatertTilgrensendeYtelserForAnnenForelder }: Props) => {
  const intl = useIntl();
  const { alleKodeverk } = usePanelDataContext();

  const farSøkerTypeNavn = alleKodeverk['FarSøkerType'].find(k => k.kode === farSøkerType)?.navn ?? '-';
  const iverksattYtelseForAnnenPart =
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder.flatMap(mapTilYtelserPerioder);

  return (
    <FaktaKort label={intl.formatMessage({ id: 'RettighetFaktaPanel.Tittel' })}>
      <VStack gap="space-16">
        <ReadOnlyField
          size="medium"
          label={<FormattedMessage id="RettighetFaktaPanel.FarSøker" />}
          value={farSøkerTypeNavn}
        />

        <Label size="medium">
          <FormattedMessage id="RettighetFaktaPanel.AndreYtelseTilMor" />
        </Label>
        {iverksattYtelseForAnnenPart.length > 0 ? (
          <List as="ul">
            {iverksattYtelseForAnnenPart.map(y => (
              <List.Item title={`${y.ytelseNavn}: ${y.periode}`} key={`${y.ytelseNavn}-${y.periode}`}>
                {y.saksnummer} ({y.status})
              </List.Item>
            ))}
          </List>
        ) : (
          '-'
        )}
      </VStack>
    </FaktaKort>
  );
};

const mapTilYtelserPerioder = ({ relatertYtelseNavn, tilgrensendeYtelserListe }: RelatertTilgrensedYtelse) => {
  const skalViseLenke = ['Engangsstonad', 'Foreldrepenger', 'Svangerskapspenger'].includes(relatertYtelseNavn);
  return tilgrensendeYtelserListe
    .filter(y => y.statusNavn !== 'Åpen')
    .map(y => ({
      periode: periodFormat(y.periodeFraDato, y.periodeTilDato),
      ytelseNavn: relatertYtelseNavn,
      status: y.statusNavn,
      saksnummer: skalViseLenke ? (
        <Link href={`/fagsak/${y.saksNummer}`} target="_blank">
          {y.saksNummer}
        </Link>
      ) : (
        y.saksNummer
      ),
    }));
};
