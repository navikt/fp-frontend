import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity } from '@navikt/ft-utils';
import moment from 'moment';

import {
  AksjonspunktKode,
  BehandlingArsakType,
  DokumentMalType,
  FagsakYtelseType,
  getKodeverknavnFn,
  isAvslag,
  isInnvilget,
  isOpphor,
  KodeverkType,
} from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
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
import { VedtakFellesPanel } from '../felles/VedtakFellesPanel';
import { getTilbakekrevingText } from '../felles/VedtakHelper';
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

type ForhandsvisData = {
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
};

const hentForhåndsvisManueltBrevCallback =
  (
    skalOverstyre: boolean,
    forhåndsvisCallback: (data: ForhandsvisData) => void,
    overskrift?: string,
    brodtekst?: string,
    begrunnelse?: string,
  ) =>
  (e: React.MouseEvent): void => {
    e.preventDefault();

    const erFeltUtfylt = skalOverstyre ? !!brodtekst && !!overskrift : !!begrunnelse;

    if (!skalOverstyre || erFeltUtfylt) {
      const data = {
        fritekst: skalOverstyre ? brodtekst : begrunnelse,
        dokumentMal: skalOverstyre ? DokumentMalType.FRITEKST : undefined,
        tittel: skalOverstyre ? overskrift : undefined,
        gjelderVedtak: true,
        automatiskVedtaksbrev: !skalOverstyre ? true : undefined,
      };

      forhåndsvisCallback(data);
    }
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

const lagÅrsakString = (
  revurderingAarsaker: string[],
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
): string | undefined => {
  if (revurderingAarsaker === undefined || revurderingAarsaker.length < 1) {
    return undefined;
  }
  const aarsakTekstList = [];
  const endringFraBrukerAarsak = revurderingAarsaker.find(
    aarsak => aarsak === BehandlingArsakType.RE_ENDRING_FRA_BRUKER,
  );
  const alleAndreAarsakerNavn = revurderingAarsaker
    .filter(aarsak => aarsak !== BehandlingArsakType.RE_ENDRING_FRA_BRUKER)
    .map(aarsak => getKodeverknavn(aarsak, KodeverkType.BEHANDLING_AARSAK));
  // Dersom en av årsakene er "RE_ENDRING_FRA_BRUKER" skal alltid denne vises først
  if (endringFraBrukerAarsak !== undefined) {
    aarsakTekstList.push(getKodeverknavn(endringFraBrukerAarsak, KodeverkType.BEHANDLING_AARSAK));
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
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
  konsekvenser?: string[],
): string => {
  if (!konsekvenser || konsekvenser.length < 1) {
    return '';
  }
  return konsekvenser.map(k => getKodeverknavn(k, KodeverkType.KONSEKVENS_FOR_YTELSEN)).join(' og ');
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
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
  tilbakekrevingText: string,
  konsekvenserForYtelsen?: string[],
  beregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatDagytelse | BeregningsresultatEs,
): string => {
  if (ytelseTypeKode === FagsakYtelseType.ENGANGSSTONAD) {
    return intl.formatMessage({ id: hentResultattekst(true, beregningResultat, originaltBeregningResultat) });
  }
  const konsekvens = lagKonsekvensForYtelsenTekst(getKodeverknavn, konsekvenserForYtelsen);
  return `${konsekvens}${konsekvens !== '' ? tilbakekrevingText : '. '}`;
};

const transformValues = (values: FormValues): RevurderingVedtakAksjonspunkter[] =>
  values.aksjonspunktKoder.map(apCode => ({
    kode: validerApKodeOgHentApEnum(
      apCode,
      AksjonspunktKode.FORESLA_VEDTAK,
      AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
      AksjonspunktKode.VURDERE_ANNEN_YTELSE,
      AksjonspunktKode.VURDERE_DOKUMENT,
      AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE,
      AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
      AksjonspunktKode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
    ),
    begrunnelse: values.begrunnelse,
    fritekstBrev: values.brødtekst,
    skalBrukeOverstyrendeFritekstBrev: !!values.brødtekst,
    overskrift: values.overskrift,
  }));

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[], behandling: Behandling): FormValues => ({
  aksjonspunktKoder: aksjonspunkter.filter(ap => ap.kanLoses).map(ap => ap.definisjon),
  overskrift: decodeHtmlEntity(behandling.behandlingsresultat?.overskrift),
  brødtekst: decodeHtmlEntity(behandling.behandlingsresultat?.fritekstbrev),
});

interface FormValues {
  aksjonspunktKoder: string[];
  begrunnelse?: string;
  brødtekst?: string;
  overskrift?: string;
}

interface Props {
  previewCallback: (data: ForhandsvisData) => void;
  ytelseTypeKode: string;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar: Vilkar[];
  beregningErManueltFastsatt: boolean;
  beregningsresultatOriginalBehandling?: BeregningsresultatDagytelse | BeregningsresultatEs;
  oppgaver?: Oppgave[];
}

export const VedtakRevurderingForm = ({
  previewCallback,
  ytelseTypeKode,
  beregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  vilkar,
  beregningErManueltFastsatt,
  beregningsresultatOriginalBehandling,
  oppgaver,
}: Props) => {
  const intl = useIntl();

  const { behandling, alleKodeverk, submitCallback, isReadOnly } =
    usePanelDataContext<RevurderingVedtakAksjonspunkter[]>();

  const { aksjonspunkt } = behandling;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || buildInitialValues(aksjonspunkt, behandling),
  });

  const begrunnelse = formMethods.watch('begrunnelse');
  const overskrift = formMethods.watch('overskrift');
  const brødtekst = formMethods.watch('brødtekst');

  const { behandlingsresultat, sprakkode, behandlingÅrsaker } = behandling;

  const erBehandlingEtterKlage = useMemo(
    () => erÅrsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker),
    [behandling.behandlingÅrsaker],
  );
  const revurderingsÅrsakString = useMemo(
    () =>
      lagÅrsakString(
        behandlingÅrsaker.map(arsak => arsak.behandlingArsakType),
        getKodeverknavnFn(alleKodeverk),
      ),
    [behandlingÅrsaker],
  );
  const tilbakekrevingtekst = useMemo(
    () => getTilbakekrevingText(alleKodeverk, simuleringResultat, tilbakekrevingvalg),
    [simuleringResultat, tilbakekrevingvalg],
  );

  let vedtakstatusTekst = '';
  if (behandlingsresultat && isInnvilget(behandlingsresultat.type)) {
    const konsekvenserForYtelsen = behandlingsresultat.konsekvenserForYtelsen;
    vedtakstatusTekst = finnInvilgetRevurderingTekst(
      intl,
      ytelseTypeKode,
      getKodeverknavnFn(alleKodeverk),
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
        dato: moment(behandlingsresultat.opphørsdato).format(DDMMYYYY_DATE_FORMAT),
      },
    );
  }

  const forhåndsvisOverstyrtBrev = hentForhåndsvisManueltBrevCallback(
    true,
    previewCallback,
    overskrift,
    brødtekst,
    begrunnelse,
  );
  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(
    false,
    previewCallback,
    overskrift,
    brødtekst,
    begrunnelse,
  );

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VedtakFellesPanel
        vedtakstatusTekst={vedtakstatusTekst}
        previewAutomatiskBrev={forhåndsvisDefaultBrev}
        previewOverstyrtBrev={forhåndsvisOverstyrtBrev}
        tilbakekrevingtekst={tilbakekrevingtekst}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        oppgaver={oppgaver}
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt, erOpphor) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetRevurderingPanel
                ytelseTypeKode={ytelseTypeKode}
                revurderingsÅrsakString={revurderingsÅrsakString}
                isReadOnly={isReadOnly}
                beregningsresultat={beregningsresultat}
                språkKode={sprakkode}
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
                språkKode={sprakkode}
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
              språkKode={sprakkode}
              beregningErManueltFastsatt={beregningErManueltFastsatt}
              skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
            />
          ) : null;
        }}
      />
    </Form>
  );
};
