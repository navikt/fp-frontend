import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from '@navikt/ds-react';
import fagsakStatus from '@navikt/fp-kodeverk/src/fagsakStatus';
import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import JournalFagsak from '../typer/journalFagsakTsType';

const velgSakLenke = (saksnummer: string): string => (`/fagsak/${saksnummer}/`);

const finnStatusTekst = (statusKode: string): string => {
  switch (statusKode) {
    case fagsakStatus.AVSLUTTET:
      return 'Journal.Sak.Avsluttet';
    case fagsakStatus.LOPENDE:
      return 'Journal.Sak.Løpende';
    case fagsakStatus.OPPRETTET:
      return 'Journal.Sak.Opprettet';
    case fagsakStatus.UNDER_BEHANDLING:
      return 'Journal.Sak.UnderBehandling';
    default:
      return '';
  }
};

export const finnYtelseTekst = (ytelseKode: string): string => {
  switch (ytelseKode) {
    case fagsakYtelseType.ENGANGSSTONAD:
      return 'Journal.Sak.Ytelse.Engangsstønad';
    case fagsakYtelseType.FORELDREPENGER:
      return 'Journal.Sak.Ytelse.Foreldrepenger';
    case fagsakYtelseType.SVANGERSKAPSPENGER:
      return 'Journal.Sak.Ytelse.Svangerskapspenger';
    default:
      return 'Journal.Sak.Ytelse.Ukjent';
  }
};

type OwnProps = Readonly<{
  sak: JournalFagsak;
}>;

/**
 * SakDetaljer - Inneholder en lenke som åpner en sak i fpsak.
 */
const SakDetaljer: FunctionComponent<OwnProps> = ({
  sak,
}) => {
  const fetTekst = useCallback((chunks: any) => (<b>{chunks}</b>), [sak]);
  const intl = useIntl();
  const lenke = velgSakLenke(sak.saksnummer);
  return (
    <>
      <Link href={lenke} target="_blank">
        {sak.saksnummer}
      </Link>
      <FormattedMessage
        id="Journal.Sak.Beskrivelse"
        values={{
          b: fetTekst,
          ytelse: intl.formatMessage({ id: finnYtelseTekst(sak.ytelseType) }),
          endret: dayjs(sak.sistEndret).format(DDMMYYYY_DATE_FORMAT),
          opprettet: dayjs(sak.datoOpprettet).format(DDMMYYYY_DATE_FORMAT),
          status: intl.formatMessage({ id: finnStatusTekst(sak.status) }),
        }}
      />
    </>
  );
};
export default SakDetaljer;
