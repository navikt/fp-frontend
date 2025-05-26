import { type IntlShape, useIntl } from 'react-intl';

import { HStack, Tag } from '@navikt/ds-react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { AndreKriterierType, type Oppgave } from '@navikt/fp-los-felles';
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
    <HStack gap="2">
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
      {oppgave.andreKriterier
        .filter(ak => BEHANDLINGSÅRSAKER.includes(ak))
        .map(kode => (
          <Tag
            key={kode}
            size="small"
            variant={MAP_ANDRE_KRITERIER_TIL_LABEL_FARGE[kode]}
            title={andreKriterier.find(b => b.kode === kode)?.navn}
          >
            {hentBehandlingsårsakNavn(intl, kode, andreKriterier)}
          </Tag>
        ))}
    </HStack>
  );
};

// Dette bør ein  endra på om me bestemmer oss for å ikkje visa alle som labels
export const MAP_ANDRE_KRITERIER_TIL_LABEL_FARGE = {
  [AndreKriterierType.ENDRINGSSOKNAD]: 'alt1',
  [AndreKriterierType.REVURDERING_INNTEKTSMELDING]: 'alt1',
  [AndreKriterierType.KLAGE_PÅ_TILBAKEBETALING]: 'alt1',
  [AndreKriterierType.BERØRT_BEHANDLING]: 'alt1',
  [AndreKriterierType.PLEIEPENGER]: 'alt1',
  [AndreKriterierType.UTSATT_START]: 'alt1',
  [AndreKriterierType.PAPIRSOKNAD]: 'alt2',
  [AndreKriterierType.TIL_BESLUTTER]: 'alt2',
  [AndreKriterierType.UTBETALING_TIL_BRUKER]: 'alt2',
} satisfies Record<AndreKriterierType, React.ComponentProps<typeof Tag>['variant']>;

const BEHANDLINGSÅRSAKER = [
  AndreKriterierType.ENDRINGSSOKNAD,
  AndreKriterierType.REVURDERING_INNTEKTSMELDING,
  AndreKriterierType.KLAGE_PÅ_TILBAKEBETALING,
  AndreKriterierType.BERØRT_BEHANDLING,
  AndreKriterierType.PLEIEPENGER,
  AndreKriterierType.UTSATT_START,
];

export const hentAlleBehandlingstypeKortnavn = (intl: IntlShape) => ({
  [BehandlingType.ANKE]: intl.formatMessage({ id: 'OppgaveLabels.Anke' }),
  [BehandlingType.DOKUMENTINNSYN]: intl.formatMessage({ id: 'OppgaveLabels.Innsyn' }),
  [BehandlingType.FORSTEGANGSSOKNAD]: intl.formatMessage({ id: 'OppgaveLabels.Forstegang' }),
  [BehandlingType.KLAGE]: intl.formatMessage({ id: 'OppgaveLabels.Klage' }),
  [BehandlingType.REVURDERING]: intl.formatMessage({ id: 'OppgaveLabels.Revurdering' }),
  [BehandlingType.TILBAKEKREVING]: intl.formatMessage({ id: 'OppgaveLabels.Tilbake' }),
  [BehandlingType.TILBAKEKREVING_REVURDERING]: intl.formatMessage({ id: 'OppgaveLabels.TilbakeRev' }),
});

export const hentBehandlingsårsakNavn = (
  intl: IntlShape,
  kode: string,
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
  return andreKriterier.find(b => b.kode === kode)?.navn;
};
