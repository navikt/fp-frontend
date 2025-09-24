import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { dateFormat } from '@navikt/ft-utils';

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
  const ytelser = innvilgetRelatertTilgrensendeYtelserForAnnenForelder;

  return (
    <FaktaKort label={intl.formatMessage({ id: 'RettighetFaktaPanel.Tittel' })}>
      <VStack gap="space-16">
        <ReadOnlyField
          size="medium"
          label={<FormattedMessage id="RettighetFaktaPanel.FarSøkerType" />}
          value={farSøkerTypeNavn}
        />

        <ReadOnlyField
          size="medium"
          label={<FormattedMessage id="RettighetFaktaPanel.AndreYtelseTilMor" />}
          value={
            <>
              {ytelser.map(ytelse =>
                getLopendeOrAvsluttetYtelser(ytelse).map(y => (
                  <FormattedMessage
                    id="RettighetFaktaPanel.YtelseIverksatt"
                    key={`${ytelse.relatertYtelseNavn}-${y.periodeFraDato}`}
                    values={{
                      ytelseType: ytelse.relatertYtelseNavn,
                      dato: dateFormat(y.periodeFraDato),
                      br: <br />,
                    }}
                  />
                )),
              )}
              {!ytelser.some(y => getLopendeOrAvsluttetYtelser(y).length > 0) && '-'}
            </>
          }
        />
      </VStack>
    </FaktaKort>
  );
};

const getLopendeOrAvsluttetYtelser = (
  ytelse: RelatertTilgrensedYtelse,
): RelatertTilgrensedYtelse['tilgrensendeYtelserListe'] =>
  ytelse.tilgrensendeYtelserListe.filter(y => y.statusNavn !== 'Åpen');
