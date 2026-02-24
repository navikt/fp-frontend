import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { RhfForm } from '@navikt/ft-form-hooks';
import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import {
  type Aksjonspunkt,
  type AlleKodeverk,
  type BehandlingArsakType,
  type BehandlingFpSak,
  type Behandlingsresultat,
  type BeregningsresultatDagytelse,
  type BeregningsresultatEs,
  type Fagsak,
  isAvslag,
  isOpphor,
  type KonsekvensForYtelsen,
  type Oppgave,
  type SimuleringResultat,
  type TilbakekrevingValg,
} from '@navikt/fp-types';
import type {
  ForeslaVedtakAp,
  ForeslaVedtakManueltAp,
  KontrollAvManueltOpprettetRevurderingsbehandlingAp,
  KontrollerRevurderingsBehandlingAp,
  VurdereAnnenYtelseForVedtakAp,
  VurdereDokumentForVedtakAp,
  VurdereInntektsmeldingKlageForVedtakAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { VedtakResultType } from '../../kodeverk/vedtakResultType';
import type { VedtakForhåndsvisData } from '../../types/VedtakForhåndsvisData';
import type { VedtakFormValues } from '../../types/VedtakFormValues';
import { useVedtakEditeringContext } from '../../VedtakEditeringContext';
import { VedtakFellesPanel } from '../felles/VedtakFellesPanel';
import { getTilbakekrevingText } from '../felles/VedtakHelper';
import { buildInitialValues } from '../forstegang/VedtakForm';
import { VedtakAvslagArsakOgBegrunnelsePanel } from './VedtakAvslagArsakOgBegrunnelsePanel';
import { VedtakInnvilgetRevurderingPanel } from './VedtakInnvilgetRevurderingPanel';
import { VedtakOpphorRevurderingPanel } from './VedtakOpphorRevurderingPanel';
import { isInnvilget } from '../../vedtakUtils.ts';

type RevurderingVedtakAksjonspunkter =
  | ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | VurdereAnnenYtelseForVedtakAp
  | VurdereDokumentForVedtakAp
  | VurdereInntektsmeldingKlageForVedtakAp
  | KontrollerRevurderingsBehandlingAp
  | KontrollAvManueltOpprettetRevurderingsbehandlingAp;

const hentForhåndsvisManueltBrevCallback =
  (forhåndsvisCallback: (data: VedtakForhåndsvisData) => void, begrunnelse?: string) =>
  (e: React.MouseEvent): void => {
    e.preventDefault();

    const data = {
      fritekst: begrunnelse,
      dokumentMal: undefined,
      tittel: undefined,
      automatiskVedtaksbrev: true,
    };

    forhåndsvisCallback(data);
  };

const erÅrsakTypeBehandlingEtterKlage = (behandlingArsakTyper: BehandlingFpSak['behandlingÅrsaker'] = []): boolean =>
  behandlingArsakTyper
    .map(({ behandlingArsakType }) => behandlingArsakType)
    .some(bt => bt === 'ETTER_KLAGE' || bt === 'RE-KLAG-U-INNTK' || bt === 'RE-KLAG-M-INNTK');

const lagÅrsakString = (revurderingAarsaker: BehandlingArsakType[], alleKodeverk: AlleKodeverk): string => {
  // Dersom en av årsakene er "RE_ENDRING_FRA_BRUKER" skal den alltid vises først
  return revurderingAarsaker
    .toSorted((a, b) => {
      if (a === 'RE-END-FRA-BRUKER') return -1;
      if (b === 'RE-END-FRA-BRUKER') return 1;
      return 0;
    })
    .map(årsakskode => alleKodeverk['BehandlingÅrsakType'].find(({ kode }) => kode === årsakskode)?.navn ?? '')
    .join(', ');
};

const erNyttBehandlingResult = (
  harBeregningsresultat: boolean,
  originaltBeregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
): boolean => {
  const vedtakResult = harBeregningsresultat ? VedtakResultType.INNVILGET : VedtakResultType.AVSLAG;
  const vedtakResultOriginal = originaltBeregningResultat ? VedtakResultType.INNVILGET : VedtakResultType.AVSLAG;
  return vedtakResultOriginal !== vedtakResult;
};

const lagKonsekvensForYtelsenTekst = (alleKodeverk: AlleKodeverk, konsekvenser?: KonsekvensForYtelsen[]): string => {
  if (!konsekvenser || konsekvenser.length < 1) {
    return '';
  }
  return konsekvenser
    .map(k => alleKodeverk['KonsekvensForYtelsen'].find(kodeverk => kodeverk.kode === k)?.navn ?? '')
    .join(' og ');
};

const erTilkjentYtelseEllerAntallBarnEndret = (
  erInnvilget: boolean,
  beregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
): boolean => {
  if (!beregningResultat) {
    return false;
  }

  if (!originaltBeregningResultat) {
    return true;
  }

  if (
    erInnvilget &&
    'beregnetTilkjentYtelse' in beregningResultat &&
    'beregnetTilkjentYtelse' in originaltBeregningResultat
  ) {
    return beregningResultat.beregnetTilkjentYtelse !== originaltBeregningResultat.beregnetTilkjentYtelse;
  }

  if ('antallBarn' in beregningResultat && 'antallBarn' in originaltBeregningResultat) {
    return beregningResultat.antallBarn !== originaltBeregningResultat.antallBarn;
  }
  return false;
};

const hentResultattekst = (
  erInnvilget: boolean,
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
): string => {
  if (erNyttBehandlingResult(!!beregningsresultat, originaltBeregningResultat)) {
    return beregningsresultat ? 'VedtakForm.Resultat.EndretTilInnvilget' : 'VedtakForm.Resultat.EndretTilAvslag';
  }
  if (erInnvilget) {
    return erTilkjentYtelseEllerAntallBarnEndret(erInnvilget, beregningsresultat, originaltBeregningResultat)
      ? 'VedtakForm.Resultat.EndretTilkjentYtelse'
      : 'VedtakForm.Resultat.IngenEndring';
  }
  return erTilkjentYtelseEllerAntallBarnEndret(erInnvilget, beregningsresultat, originaltBeregningResultat)
    ? 'VedtakForm.Resultat.EndretAntallBarn'
    : 'VedtakForm.Resultat.IngenEndring';
};

const transformValues = (
  values: VedtakFormValues,
  aksjonspunkterForPanel: Aksjonspunkt[],
  harOverstyrtVedtaksbrev: boolean,
): RevurderingVedtakAksjonspunkter[] =>
  aksjonspunkterForPanel
    .filter(ap => ap.kanLoses)
    .map(ap => ({
      kode: validerApKodeOgHentApEnum(
        ap.definisjon,
        AksjonspunktKode.FORESLÅ_VEDTAK,
        AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT,
        AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK,
        AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK,
        AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK,
        AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
        AksjonspunktKode.UTGÅTT_5056,
      ),
      begrunnelse: values.begrunnelse,
      skalBrukeOverstyrendeFritekstBrev: harOverstyrtVedtaksbrev,
    }));

interface Props {
  previewCallback: (data: VedtakForhåndsvisData) => void;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  beregningErManueltFastsatt: boolean;
  beregningsresultatOriginalBehandling?: BeregningsresultatDagytelse | BeregningsresultatEs;
  oppgaver?: Oppgave[];
  ferdigstillOppgave: (oppgaveId: string) => Promise<void>;
}

export const VedtakRevurderingForm = ({
  previewCallback,
  beregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  beregningErManueltFastsatt,
  beregningsresultatOriginalBehandling,
  oppgaver,
  ferdigstillOppgave,
}: Props) => {
  const intl = useIntl();

  const { behandling, fagsak, alleKodeverk, submitCallback, isReadOnly, aksjonspunkterForPanel } =
    usePanelDataContext<RevurderingVedtakAksjonspunkter[]>();

  const { harRedigertBrev } = useVedtakEditeringContext();

  const [harValgtÅRedigereVedtaksbrev, setHarValgtÅRedigereVedtaksbrev] = useState(
    harRedigertBrev || behandling.behandlingsresultat?.vedtaksbrev === 'FRITEKST',
  );

  const { behandlingsresultat, språkkode, behandlingÅrsaker, vilkår } = behandling;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<VedtakFormValues>();

  const formMethods = useForm<VedtakFormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(behandling),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const erBehandlingEtterKlage = erÅrsakTypeBehandlingEtterKlage(behandlingÅrsaker);
  const revurderingsÅrsakString = lagÅrsakString(
    behandlingÅrsaker.map(arsak => arsak.behandlingArsakType),
    alleKodeverk,
  );
  const tilbakekrevingtekst = getTilbakekrevingText(simuleringResultat, tilbakekrevingvalg);

  const vedtakstatusTekst =
    behandlingsresultat &&
    lagVedtakstatusTekst(
      behandlingsresultat,
      intl,
      fagsak,
      alleKodeverk,
      tilbakekrevingtekst,
      beregningsresultat,
      beregningsresultatOriginalBehandling,
    );

  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(previewCallback, begrunnelse);

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: VedtakFormValues) =>
        submitCallback(transformValues(values, aksjonspunkterForPanel, harValgtÅRedigereVedtaksbrev))
      }
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VedtakFellesPanel
        vedtakstatusTekst={vedtakstatusTekst}
        previewAutomatiskBrev={forhåndsvisDefaultBrev}
        previewCallback={previewCallback}
        tilbakekrevingtekst={tilbakekrevingtekst}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        oppgaver={oppgaver}
        ferdigstillOppgave={ferdigstillOppgave}
        setHarValgtÅRedigereVedtaksbrev={setHarValgtÅRedigereVedtaksbrev}
        harValgtÅRedigereVedtaksbrev={harValgtÅRedigereVedtaksbrev}
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt, erOpphor) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetRevurderingPanel
                ytelseTypeKode={fagsak.fagsakYtelseType}
                revurderingsÅrsakString={revurderingsÅrsakString}
                isReadOnly={isReadOnly}
                beregningsresultat={beregningsresultat}
                språkkode={språkkode}
                behandlingsresultat={behandlingsresultat}
                beregningErManueltFastsatt={beregningErManueltFastsatt}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
              />
            );
          }

          if (erAvslatt) {
            return (
              <VedtakAvslagArsakOgBegrunnelsePanel
                vilkår={vilkår}
                behandlingsresultat={behandlingsresultat}
                språkkode={språkkode}
                isReadOnly={isReadOnly}
                alleKodeverk={alleKodeverk}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
              />
            );
          }

          return erOpphor ? (
            <VedtakOpphorRevurderingPanel
              revurderingsÅrsakString={revurderingsÅrsakString}
              isReadOnly={isReadOnly}
              behandlingsresultat={behandlingsresultat}
              språkkode={språkkode}
              beregningErManueltFastsatt={beregningErManueltFastsatt}
              skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
            />
          ) : null;
        }}
      />
    </RhfForm>
  );
};

const lagVedtakstatusTekst = (
  { type, opphørsdato, konsekvenserForYtelsen }: Behandlingsresultat,
  intl: IntlShape,
  fagsak: Fagsak,
  alleKodeverk: AlleKodeverk,
  tilbakekrevingtekst: string | undefined,
  beregningsresultat: BeregningsresultatDagytelse | BeregningsresultatEs | undefined,
  beregningsresultatOriginalBehandling: BeregningsresultatDagytelse | BeregningsresultatEs | undefined,
): string | undefined => {
  if (isInnvilget(type) && fagsak.fagsakYtelseType === 'ES') {
    return intl.formatMessage({
      id: hentResultattekst(true, beregningsresultat, beregningsresultatOriginalBehandling),
    });
  } else if (isInnvilget(type)) {
    const konsekvens = lagKonsekvensForYtelsenTekst(alleKodeverk, konsekvenserForYtelsen);
    return `${konsekvens}${konsekvens === '' ? '. ' : (tilbakekrevingtekst ?? '')}`;
  } else if (isAvslag(type)) {
    return intl.formatMessage({
      id: hentResultattekst(false, beregningsresultat, beregningsresultatOriginalBehandling),
    });
  } else if (isOpphor(type) && opphørsdato) {
    return intl.formatMessage({ id: 'VedtakForm.Revurdering.Opphoerer' }, { dato: dateFormat(opphørsdato) });
  }
  return undefined;
};
