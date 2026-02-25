import { HStack, Tag } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import {
  type AlleKodeverkLos,
  type AndreKriterierType,
  type LosBehandlingType,
  type LosFagsakYtelseType,
  type LosKodeverkMedNavn,
  type LosKodeverkType,
} from '@navikt/fp-types';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

type Props = {
  behandlingType: LosBehandlingType;
  fagsakYtelseType: LosFagsakYtelseType;
  kriterier: AndreKriterierType[];
  hentKodeverk: <T extends LosKodeverkType>(type: T) => AlleKodeverkLos[T];
};

export const OppgaveLabels = ({ behandlingType, fagsakYtelseType, kriterier, hentKodeverk }: Props) => {
  const behandlingTyper = hentKodeverk('BehandlingType');
  const fagsakYtelseTyper = hentKodeverk('FagsakYtelseType');
  const andreKriterier = hentKodeverk('AndreKriterierType');

  return (
    <HStack gap="space-8">
      <Tag
        data-color="success"
        size="small"
        variant="outline"
        title={fagsakYtelseTyper.find(b => b.kode === fagsakYtelseType)?.navn}
      >
        {fagsakYtelseType}
      </Tag>
      <Tag
        data-color="danger"
        size="small"
        variant="outline"
        title={behandlingTyper.find(b => b.kode === behandlingType)?.navn}
      >
        {MAP_BEHANDLINGTYPE_TIL_KORTNAVN[behandlingType]}
      </Tag>
      {kriterier.toSorted(sorterAndreKriterier).map(kode => (
        <Tag
          key={kode}
          size="small"
          variant={MAP_ANDRE_KRITERIER_TIL_LABEL_FARGE_SORTERT[kode]}
          title={andreKriterier.find(b => b.kode === kode)?.navn}
        >
          {hentAndreKriterierNavn(kode, andreKriterier)}
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

const MAP_BEHANDLINGTYPE_TIL_KORTNAVN = {
  ['BT-002']: intl.formatMessage({ id: 'OppgaveLabels.Forstegang' }),
  ['BT-003']: intl.formatMessage({ id: 'OppgaveLabels.Klage' }),
  ['BT-004']: intl.formatMessage({ id: 'OppgaveLabels.Revurdering' }),
  ['BT-006']: intl.formatMessage({ id: 'OppgaveLabels.Innsyn' }),
  ['BT-007']: intl.formatMessage({ id: 'OppgaveLabels.Tilbake' }),
  ['BT-008']: intl.formatMessage({ id: 'OppgaveLabels.Anke' }),
  ['BT-009']: intl.formatMessage({ id: 'OppgaveLabels.TilbakeRev' }),
} satisfies Record<LosBehandlingType, string>;

const hentAndreKriterierNavn = (
  kode: AndreKriterierType,
  andreKriterier: LosKodeverkMedNavn<'AndreKriterierType'>[],
) => {
  switch (kode) {
    case 'REVURDERING_INNTEKTSMELDING':
      return intl.formatMessage({ id: 'OppgaveLabels.RevurderingInntekstmelding' });
    case 'BERØRT_BEHANDLING':
      return intl.formatMessage({ id: 'OppgaveLabels.BerortBehandling' });
    case 'KLAGE_PÅ_TILBAKEBETALING':
      return intl.formatMessage({ id: 'OppgaveLabels.KlageTilbakebetaling' });
    case 'DØD':
      return intl.formatMessage({ id: 'OppgaveLabels.Dod' });
    case 'PAPIRSOKNAD':
      return intl.formatMessage({ id: 'OppgaveLabels.Papirsoknad' });
    case 'RETURNERT_FRA_BESLUTTER':
      return intl.formatMessage({ id: 'OppgaveLabels.FraBeslutter' });
    case 'NÆRING':
      return intl.formatMessage({ id: 'OppgaveLabels.Naring' });
    case 'UTBETALING_TIL_BRUKER':
      return intl.formatMessage({ id: 'OppgaveLabels.Utbetaling' });
    case 'VURDER_EØS_OPPTJENING':
      return intl.formatMessage({ id: 'OppgaveLabels.VurderSed' });
    default:
      return andreKriterier.find(b => b.kode === kode)?.navn;
  }
};
