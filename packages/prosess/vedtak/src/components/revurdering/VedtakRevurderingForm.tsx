import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { dateFormat } from '@navikt/ft-utils';

import {
  AksjonspunktKode,
  BehandlingArsakType,
  DokumentMalType,
  FagsakYtelseType,
  isAvslag,
  isInnvilget,
  isOpphor,
  KonsekvensForYtelsen,
} from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
  AlleKodeverk,
  Behandling,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Oppgave,
  SimuleringResultat,
  TilbakekrevingValg,
  Vilkar,
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
import { useVedtakEditeringContext } from '../../VedtakEditeringContext';
import { VedtakFellesPanel } from '../felles/VedtakFellesPanel';
import { getTilbakekrevingText } from '../felles/VedtakHelper';
import { buildInitialValues } from '../forstegang/VedtakForm';
import { VedtakAvslagArsakOgBegrunnelsePanel } from './VedtakAvslagArsakOgBegrunnelsePanel';
import { VedtakInnvilgetRevurderingPanel } from './VedtakInnvilgetRevurderingPanel';
import { VedtakOpphorRevurderingPanel } from './VedtakOpphorRevurderingPanel';

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

const erÅrsakTypeBehandlingEtterKlage = (behandlingArsakTyper: Behandling['behandlingÅrsaker'] = []): boolean =>
  behandlingArsakTyper
    .map(({ behandlingArsakType }) => behandlingArsakType)
    .some(
      bt =>
        bt === BehandlingArsakType.ETTER_KLAGE ||
        bt === BehandlingArsakType.KLAGE_U_INNTK ||
        bt === BehandlingArsakType.KLAGE_M_INNTK,
    );

const lagÅrsakString = (revurderingAarsaker: BehandlingArsakType[], alleKodeverk: AlleKodeverk): string | undefined => {
  if (revurderingAarsaker === undefined || revurderingAarsaker.length < 1) {
    return undefined;
  }
  const aarsakTekstList = [];
  const endringFraBrukerAarsak = revurderingAarsaker.find(
    aarsak => aarsak === BehandlingArsakType.RE_ENDRING_FRA_BRUKER,
  );
  const alleAndreAarsakerNavn = revurderingAarsaker
    .filter(aarsak => aarsak !== BehandlingArsakType.RE_ENDRING_FRA_BRUKER)
    .map(aarsak => alleKodeverk['BehandlingÅrsakType'].find(({ kode }) => kode === aarsak)?.navn ?? '');
  // Dersom en av årsakene er "RE_ENDRING_FRA_BRUKER" skal alltid denne vises først
  if (endringFraBrukerAarsak !== undefined) {
    aarsakTekstList.push(
      alleKodeverk['BehandlingÅrsakType'].find(({ kode }) => kode === endringFraBrukerAarsak)?.navn ?? '',
    );
  }
  aarsakTekstList.push(...alleAndreAarsakerNavn);
  return aarsakTekstList.join(', ');
};

const erNyttBehandlingResult = (
  beregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
): boolean => {
  const vedtakResult = beregningResultat ? VedtakResultType.INNVILGET : VedtakResultType.AVSLAG;
  const vedtakResultOriginal = originaltBeregningResultat ? VedtakResultType.INNVILGET : VedtakResultType.AVSLAG;
  return vedtakResultOriginal !== vedtakResult;
};

export const lagKonsekvensForYtelsenTekst = (
  alleKodeverk: AlleKodeverk,
  konsekvenser?: KonsekvensForYtelsen[],
): string => {
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
  beregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
): string => {
  if (erNyttBehandlingResult(beregningResultat, originaltBeregningResultat)) {
    return beregningResultat ? 'VedtakForm.Resultat.EndretTilInnvilget' : 'VedtakForm.Resultat.EndretTilAvslag';
  }
  if (erInnvilget) {
    return erTilkjentYtelseEllerAntallBarnEndret(erInnvilget, beregningResultat, originaltBeregningResultat)
      ? 'VedtakForm.Resultat.EndretTilkjentYtelse'
      : 'VedtakForm.Resultat.IngenEndring';
  }
  return erTilkjentYtelseEllerAntallBarnEndret(erInnvilget, beregningResultat, originaltBeregningResultat)
    ? 'VedtakForm.Resultat.EndretAntallBarn'
    : 'VedtakForm.Resultat.IngenEndring';
};

const finnInvilgetRevurderingTekst = (
  intl: IntlShape,
  ytelseTypeKode: string,
  alleKodeverk: AlleKodeverk,
  tilbakekrevingText: string | undefined,
  konsekvenserForYtelsen?: KonsekvensForYtelsen[],
  beregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
): string => {
  if (ytelseTypeKode === FagsakYtelseType.ENGANGSSTONAD) {
    return intl.formatMessage({ id: hentResultattekst(true, beregningResultat, originaltBeregningResultat) });
  }
  const konsekvens = lagKonsekvensForYtelsenTekst(alleKodeverk, konsekvenserForYtelsen);
  return `${konsekvens}${konsekvens !== '' ? (tilbakekrevingText ?? '') : '. '}`;
};

const transformValues = (
  values: FormValues,
  aksjonspunkter: Aksjonspunkt[],
  harOverstyrtVedtaksbrev: boolean,
): RevurderingVedtakAksjonspunkter[] =>
  aksjonspunkter
    .filter(ap => ap.kanLoses)
    .map(ap => ({
      kode: validerApKodeOgHentApEnum(
        ap.definisjon,
        AksjonspunktKode.FORESLA_VEDTAK,
        AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
        AksjonspunktKode.VURDERE_ANNEN_YTELSE,
        AksjonspunktKode.VURDERE_DOKUMENT,
        AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE,
        AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
        AksjonspunktKode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
      ),
      begrunnelse: values.begrunnelse,
      skalBrukeOverstyrendeFritekstBrev: harOverstyrtVedtaksbrev,
    }));

interface FormValues {
  begrunnelse?: string;
}

interface Props {
  previewCallback: (data: VedtakForhåndsvisData) => void;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar: Vilkar[];
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
  vilkar,
  beregningErManueltFastsatt,
  beregningsresultatOriginalBehandling,
  oppgaver,
  ferdigstillOppgave,
}: Props) => {
  const intl = useIntl();

  const { behandling, fagsak, alleKodeverk, submitCallback, isReadOnly } =
    usePanelDataContext<RevurderingVedtakAksjonspunkter[]>();

  const { harRedigertBrev } = useVedtakEditeringContext();

  const [harValgtÅRedigereVedtaksbrev, setHarValgtÅRedigereVedtaksbrev] = useState(
    harRedigertBrev || behandling.behandlingsresultat?.vedtaksbrev === DokumentMalType.FRITEKST,
  );

  const { behandlingsresultat, språkkode, aksjonspunkt, behandlingÅrsaker } = behandling;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(behandling),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const erBehandlingEtterKlage = erÅrsakTypeBehandlingEtterKlage(behandlingÅrsaker);
  const revurderingsÅrsakString = lagÅrsakString(
    behandlingÅrsaker.map(arsak => arsak.behandlingArsakType),
    alleKodeverk,
  );
  const tilbakekrevingtekst = getTilbakekrevingText(simuleringResultat, tilbakekrevingvalg);

  let vedtakstatusTekst = '';
  if (behandlingsresultat && isInnvilget(behandlingsresultat.type)) {
    const konsekvenserForYtelsen = behandlingsresultat.konsekvenserForYtelsen;
    vedtakstatusTekst = finnInvilgetRevurderingTekst(
      intl,
      fagsak.fagsakYtelseType,
      alleKodeverk,
      tilbakekrevingtekst,
      konsekvenserForYtelsen,
      beregningsresultat,
      beregningsresultatOriginalBehandling,
    );
  }
  if (behandlingsresultat && isAvslag(behandlingsresultat.type)) {
    vedtakstatusTekst = intl.formatMessage({
      id: hentResultattekst(false, beregningsresultat, beregningsresultatOriginalBehandling),
    });
  }
  if (behandlingsresultat && isOpphor(behandlingsresultat.type) && behandlingsresultat.opphørsdato) {
    vedtakstatusTekst = intl.formatMessage(
      {
        id: 'VedtakForm.Revurdering.Opphoerer',
      },
      {
        dato: dateFormat(behandlingsresultat.opphørsdato),
      },
    );
  }

  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(previewCallback, begrunnelse);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) =>
        submitCallback(transformValues(values, aksjonspunkt, harValgtÅRedigereVedtaksbrev))
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
                vilkar={vilkar}
                behandlingsresultat={behandlingsresultat}
                språkkode={språkkode}
                erReadOnly={isReadOnly}
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
    </Form>
  );
};
