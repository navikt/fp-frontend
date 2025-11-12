import { type IntlShape, useIntl } from 'react-intl';

import { HStack, Tag } from '@navikt/ds-react';

import { type Oppgave } from '@navikt/fp-los-felles';
import type { AndreKriterierType, LosKodeverkMedNavn } from '@navikt/fp-types';

import { useLosKodeverk } from '../../data/useLosKodeverk';

type Props = {
  oppgave: Oppgave;
};

export const OppgaveLabels = ({ oppgave }: Props) => {
  const intl = useIntl();

  const behandlingTyper = useLosKodeverk('BehandlingType');
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');
  const andreKriterier = useLosKodeverk('AndreKriterierType');

  return (
    <HStack gap="space-8">
      <Tag
        size="small"
        variant="success"
        title={fagsakYtelseTyper.find(b => b.kode === oppgave.fagsakYtelseType)?.navn}
      >
        {oppgave.fagsakYtelseType}
      </Tag>
      <Tag size="small" variant="error" title={behandlingTyper.find(b => b.kode === oppgave.behandlingstype)?.navn}>
        {hentAlleBehandlingstypeKortnavn(intl)[oppgave.behandlingstype]}
      </Tag>
      {oppgave.andreKriterier.sort(sorterAndreKriterier).map(kode => (
        <Tag
          key={kode}
          size="small"
          variant={MAP_ANDRE_KRITERIER_TIL_LABEL_FARGE_SORTERT[kode]}
          title={andreKriterier.find(b => b.kode === kode)?.navn}
        >
          {hentAndreKriterierNavn(intl, kode, andreKriterier)}
        </Tag>
      ))}
    </HStack>
  );
};

// Rekkefølgen her styrer rekkefølgen på labels i tabellrad
const MAP_ANDRE_KRITERIER_TIL_LABEL_FARGE_SORTERT = {
  ['ENDRINGSSOKNAD']: 'alt1',
  ['REVURDERING_INNTEKTSMELDING']: 'alt1',
  ['KLAGE_PÅ_TILBAKEBETALING']: 'alt1',
  ['BERØRT_BEHANDLING']: 'alt1',
  ['PLEIEPENGER']: 'alt1',
  ['UTSATT_START']: 'alt1',
  ['TIL_BESLUTTER']: 'alt3',
  ['PAPIRSOKNAD']: 'alt3',
  ['VURDER_EØS_OPPTJENING']: 'alt3',
  ['ARBEID_INNTEKT']: 'alt3',
  ['TERMINBEKREFTELSE']: 'alt3',
  ['VURDER_FORMKRAV']: 'alt3',
  ['VURDER_FARESIGNALER']: 'alt3',
  ['VURDER_SYKDOM']: 'alt3',
  ['IKKE_VARSLET']: 'alt3',
  ['OVER_FIRE_RETTSGEBYR']: 'alt3',
  ['BARE_FAR_RETT']: 'alt2',
  ['UTLANDSSAK']: 'alt2',
  ['DØD']: 'alt2',
  ['EØS_SAK']: 'alt2',
  ['MOR_UKJENT_UTLAND']: 'alt2',
  ['KODE7_SAK']: 'alt2',
  ['NYTT_VEDTAK']: 'alt2',
  ['PRAKSIS_UTSETTELSE']: 'alt2',
  ['RETURNERT_FRA_BESLUTTER']: 'alt2',
  ['SAMMENSATT_KONTROLL']: 'alt2',
  ['NÆRING']: 'alt2',
  ['UTBETALING_TIL_BRUKER']: 'alt2',
  ['HASTER']: 'alt2',
} satisfies Record<AndreKriterierType, React.ComponentProps<typeof Tag>['variant']>;

const kriterier = Object.keys(MAP_ANDRE_KRITERIER_TIL_LABEL_FARGE_SORTERT);
const sorterAndreKriterier = (a: AndreKriterierType, b: AndreKriterierType) => {
  return kriterier.indexOf(a) - kriterier.indexOf(b);
};

const hentAlleBehandlingstypeKortnavn = (intl: IntlShape) => ({
  ['BT-008']: intl.formatMessage({ id: 'OppgaveLabels.Anke' }),
  ['BT-006']: intl.formatMessage({ id: 'OppgaveLabels.Innsyn' }),
  ['BT-002']: intl.formatMessage({ id: 'OppgaveLabels.Forstegang' }),
  ['BT-003']: intl.formatMessage({ id: 'OppgaveLabels.Klage' }),
  ['BT-004']: intl.formatMessage({ id: 'OppgaveLabels.Revurdering' }),
  ['BT-007']: intl.formatMessage({ id: 'OppgaveLabels.Tilbake' }),
  ['BT-009']: intl.formatMessage({ id: 'OppgaveLabels.TilbakeRev' }),
  '-': intl.formatMessage({ id: 'OppgaveLabels.TilbakeRev' }), // TODO: finnes bare for TS, fjernes?
});

const hentAndreKriterierNavn = (
  intl: IntlShape,
  kode: AndreKriterierType,
  andreKriterier: LosKodeverkMedNavn<'AndreKriterierType'>[],
) => {
  if ('REVURDERING_INNTEKTSMELDING' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.RevurderingInntekstmelding' });
  }
  if ('BERØRT_BEHANDLING' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.BerortBehandling' });
  }
  if ('KLAGE_PÅ_TILBAKEBETALING' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.KlageTilbakebetaling' });
  }
  if ('DØD' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Dod' });
  }
  if ('PAPIRSOKNAD' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Papirsoknad' });
  }
  if ('RETURNERT_FRA_BESLUTTER' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.FraBeslutter' });
  }
  if ('NÆRING' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Naring' });
  }
  if ('UTBETALING_TIL_BRUKER' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Utbetaling' });
  }
  if ('VURDER_EØS_OPPTJENING' === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.VurderSed' });
  }

  return andreKriterier.find(b => b.kode === kode)?.navn;
};
