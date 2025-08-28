import { type IntlShape, useIntl } from 'react-intl';

import { HStack, Tag } from '@navikt/ds-react';

import { AndreKriterierType, BehandlingTypeEnum } from '@navikt/fp-kodeverk';
import { type Oppgave } from '@navikt/fp-los-felles';
import type { LosKodeverkMedNavn } from '@navikt/fp-types';

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
      <Tag
        size="small"
        variant="warning-filled"
        title={behandlingTyper.find(b => b.kode === oppgave.behandlingstype)?.navn}
      >
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
  [AndreKriterierType.ENDRINGSSOKNAD]: 'alt1',
  [AndreKriterierType.REVURDERING_INNTEKTSMELDING]: 'alt1',
  [AndreKriterierType.KLAGE_PÅ_TILBAKEBETALING]: 'alt1',
  [AndreKriterierType.BERØRT_BEHANDLING]: 'alt1',
  [AndreKriterierType.PLEIEPENGER]: 'alt1',
  [AndreKriterierType.UTSATT_START]: 'alt1',
  [AndreKriterierType.TIL_BESLUTTER]: 'alt3',
  [AndreKriterierType.PAPIRSOKNAD]: 'alt3',
  [AndreKriterierType.VURDER_EØS_OPPTJENING]: 'alt3',
  [AndreKriterierType.ARBEID_INNTEKT]: 'alt3',
  [AndreKriterierType.TERMINBEKREFTELSE]: 'alt3',
  [AndreKriterierType.VURDER_FORMKRAV]: 'alt3',
  [AndreKriterierType.VURDER_FARESIGNALER]: 'alt3',
  [AndreKriterierType.VURDER_SYKDOM]: 'alt3',
  [AndreKriterierType.IKKE_VARSLET]: 'alt3',
  [AndreKriterierType.OVER_FIRE_RETTSGEBYR]: 'alt3',
  [AndreKriterierType.BARE_FAR_RETT]: 'alt2',
  [AndreKriterierType.UTLANDSSAK]: 'alt2',
  [AndreKriterierType.DØD]: 'alt2',
  [AndreKriterierType.EØS_SAK]: 'alt2',
  [AndreKriterierType.MOR_UKJENT_UTLAND]: 'alt2',
  [AndreKriterierType.KODE7_SAK]: 'alt2',
  [AndreKriterierType.NYTT_VEDTAK]: 'alt2',
  [AndreKriterierType.PRAKSIS_UTSETTELSE]: 'alt2',
  [AndreKriterierType.RETURNERT_FRA_BESLUTTER]: 'alt2',
  [AndreKriterierType.SAMMENSATT_KONTROLL]: 'alt2',
  [AndreKriterierType.NÆRING]: 'alt2',
  [AndreKriterierType.UTBETALING_TIL_BRUKER]: 'alt2',
} satisfies Record<AndreKriterierType, React.ComponentProps<typeof Tag>['variant']>;

const sorterAndreKriterier = (a: AndreKriterierType, b: AndreKriterierType) => {
  const kriterier = Object.keys(MAP_ANDRE_KRITERIER_TIL_LABEL_FARGE_SORTERT);
  return kriterier.indexOf(a) - kriterier.indexOf(b);
};

const hentAlleBehandlingstypeKortnavn = (intl: IntlShape) => ({
  [BehandlingTypeEnum.ANKE]: intl.formatMessage({ id: 'OppgaveLabels.Anke' }),
  [BehandlingTypeEnum.DOKUMENTINNSYN]: intl.formatMessage({ id: 'OppgaveLabels.Innsyn' }),
  [BehandlingTypeEnum.FORSTEGANGSSOKNAD]: intl.formatMessage({ id: 'OppgaveLabels.Forstegang' }),
  [BehandlingTypeEnum.KLAGE]: intl.formatMessage({ id: 'OppgaveLabels.Klage' }),
  [BehandlingTypeEnum.REVURDERING]: intl.formatMessage({ id: 'OppgaveLabels.Revurdering' }),
  [BehandlingTypeEnum.TILBAKEKREVING]: intl.formatMessage({ id: 'OppgaveLabels.Tilbake' }),
  [BehandlingTypeEnum.TILBAKEKREVING_REVURDERING]: intl.formatMessage({ id: 'OppgaveLabels.TilbakeRev' }),
  '-': intl.formatMessage({ id: 'OppgaveLabels.TilbakeRev' }), // TODO: finnes bare for TS, fjernes?
});

const hentAndreKriterierNavn = (
  intl: IntlShape,
  kode: AndreKriterierType,
  andreKriterier: LosKodeverkMedNavn<'AndreKriterierType'>[],
) => {
  if (AndreKriterierType.REVURDERING_INNTEKTSMELDING === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.RevurderingInntekstmelding' });
  }
  if (AndreKriterierType.BERØRT_BEHANDLING === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.BerortBehandling' });
  }
  if (AndreKriterierType.KLAGE_PÅ_TILBAKEBETALING === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.KlageTilbakebetaling' });
  }
  if (AndreKriterierType.DØD === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Dod' });
  }
  if (AndreKriterierType.PAPIRSOKNAD === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Papirsoknad' });
  }
  if (AndreKriterierType.RETURNERT_FRA_BESLUTTER === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.FraBeslutter' });
  }
  if (AndreKriterierType.NÆRING === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Naring' });
  }
  if (AndreKriterierType.UTBETALING_TIL_BRUKER === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.Utbetaling' });
  }
  if (AndreKriterierType.VURDER_EØS_OPPTJENING === kode) {
    return intl.formatMessage({ id: 'OppgaveLabels.VurderSed' });
  }

  return andreKriterier.find(b => b.kode === kode)?.navn;
};
