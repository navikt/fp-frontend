import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { IntlShape, useIntl } from 'react-intl';
import moment from 'moment';

import {
  DDMMYYYY_DATE_FORMAT, decodeHtmlEntity, getKodeverknavnFn,
} from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { isAvslag, isInnvilget, isOpphor } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import BehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import { Form } from '@fpsak-frontend/form-hooks';
import {
  AlleKodeverk, Behandling, BeregningsresultatFp, BeregningsresultatEs, Vilkar,
  Aksjonspunkt, SimuleringResultat, Kodeverk, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import {
  BekreftVedtakUtenTotrinnskontrollAp, ForeslaVedtakAp, ForeslaVedtakManueltAp, KontrollAvManueltOpprettetRevurderingsbehandlingAp,
  KontrollerRevurderingsBehandlingAp, VurdereAnnenYtelseForVedtakAp, VurdereDokumentForVedtakAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import VedtakResultType from '../../kodeverk/vedtakResultType';
import VedtakInnvilgetRevurderingPanel from './VedtakInnvilgetRevurderingPanel';
import VedtakAvslagArsakOgBegrunnelsePanel from './VedtakAvslagArsakOgBegrunnelsePanel';
import VedtakOpphorRevurderingPanel from './VedtakOpphorRevurderingPanel';
import VedtakFellesPanel from '../felles/VedtakFellesPanel';
import { getTilbakekrevingText } from '../felles/VedtakHelper';
import VedtakFritekstbrevModal from '../felles/svp/VedtakFritekstbrevModal';

type RevurderingVedtakAksjonspunkter = ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | BekreftVedtakUtenTotrinnskontrollAp
  | VurdereAnnenYtelseForVedtakAp
  | VurdereDokumentForVedtakAp
  | KontrollerRevurderingsBehandlingAp
  | KontrollAvManueltOpprettetRevurderingsbehandlingAp;

type ForhandsvisData = {
  fritekst: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  vedtaksbrev?: { kode: string };
}

const hentForhåndsvisManueltBrevCallback = (
  isValid: boolean,
  isDirty: boolean,
  begrunnelse: string,
  brodtekst: string,
  overskrift: string,
  skalOverstyre: boolean,
  forhåndsvisCallback: (data: ForhandsvisData) => void,
) => (e: React.MouseEvent): void => {
  if (isValid || !isDirty) {
    const data = {
      fritekst: skalOverstyre ? brodtekst : begrunnelse,
      dokumentMal: skalOverstyre ? 'FRITKS' : undefined,
      tittel: skalOverstyre ? overskrift : undefined,
      gjelderVedtak: true,
      vedtaksbrev: !skalOverstyre ? {
        kode: 'AUTOMATISK',
      } : undefined,
    };

    forhåndsvisCallback(data);
  }
  e.preventDefault();
};

const erÅrsakTypeBehandlingEtterKlage = (
  behandlingArsakTyper: Behandling['behandlingÅrsaker'] = [],
): boolean => behandlingArsakTyper
  .map(({ behandlingArsakType }) => behandlingArsakType)
  .some((bt) => bt.kode === BehandlingArsakType.ETTER_KLAGE
    || bt.kode === BehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === BehandlingArsakType.KLAGE_M_INNTK);

const lagÅrsakString = (
  revurderingAarsaker: Kodeverk[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
): string | undefined => {
  if (revurderingAarsaker === undefined || revurderingAarsaker.length < 1) {
    return undefined;
  }
  const aarsakTekstList = [];
  const endringFraBrukerAarsak = revurderingAarsaker
    .find((aarsak) => aarsak.kode === BehandlingArsakType.RE_ENDRING_FRA_BRUKER);
  const alleAndreAarsakerNavn = revurderingAarsaker
    .filter((aarsak) => aarsak.kode !== BehandlingArsakType.RE_ENDRING_FRA_BRUKER)
    .map((aarsak) => getKodeverknavn(aarsak));
  // Dersom en av årsakene er "RE_ENDRING_FRA_BRUKER" skal alltid denne vises først
  if (endringFraBrukerAarsak !== undefined) {
    aarsakTekstList.push(getKodeverknavn(endringFraBrukerAarsak));
  }
  aarsakTekstList.push(...alleAndreAarsakerNavn);
  return aarsakTekstList.join(', ');
};

const erNyttBehandlingResult = (
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
): boolean => {
  const vedtakResult = beregningResultat ? VedtakResultType.INNVILGET : VedtakResultType.AVSLAG;
  const vedtakResultOriginal = originaltBeregningResultat ? VedtakResultType.INNVILGET : VedtakResultType.AVSLAG;
  return vedtakResultOriginal !== vedtakResult;
};

export const lagKonsekvensForYtelsenTekst = (
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  konsekvenser?: Behandling['behandlingsresultat']['konsekvenserForYtelsen'],
): string => {
  if (!konsekvenser || konsekvenser.length < 1) {
    return '';
  }
  return konsekvenser.map((k) => getKodeverknavn(k)).join(' og ');
};

const erTilkjentYtelseEllerAntallBarnEndret = (
  erInnvilget: boolean,
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
): boolean => {
  if (!beregningResultat) {
    return false;
  }

  if (!originaltBeregningResultat) {
    return true;
  }

  if (erInnvilget
    && 'beregnetTilkjentYtelse' in beregningResultat
    && 'beregnetTilkjentYtelse' in originaltBeregningResultat) {
    return beregningResultat.beregnetTilkjentYtelse !== originaltBeregningResultat.beregnetTilkjentYtelse;
  }

  if ('antallBarn' in beregningResultat
    && 'antallBarn' in originaltBeregningResultat) {
    return beregningResultat.antallBarn !== originaltBeregningResultat.antallBarn;
  }
  return false;
};

const hentResultattekst = (
  erInnvilget: boolean,
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
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
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  tilbakekrevingText: string,
  konsekvenserForYtelsen?: Behandling['behandlingsresultat']['konsekvenserForYtelsen'],
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
): string => {
  if (ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD) {
    return intl.formatMessage({ id: hentResultattekst(true, beregningResultat, originaltBeregningResultat) });
  }
  const konsekvens = lagKonsekvensForYtelsenTekst(getKodeverknavn, konsekvenserForYtelsen);
  return `${konsekvens}${konsekvens !== '' ? tilbakekrevingText : '. '}`;
};

const getOpphorsdato = (
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs,
  medlemskapFom?: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): string => {
  if (resultatstruktur && 'opphoersdato' in resultatstruktur && resultatstruktur.opphoersdato) {
    return resultatstruktur.opphoersdato;
  }
  if (medlemskapFom) {
    return medlemskapFom;
  }
  return behandlingsresultat.skjæringstidspunkt
    ? behandlingsresultat.skjæringstidspunkt.dato : '';
};

const transformValues = (
  values: FormValues,
): RevurderingVedtakAksjonspunkter[] => values.aksjonspunktKoder.map((apCode) => ({
  kode: validerApKodeOgHentApEnum(apCode, AksjonspunktCode.FORESLA_VEDTAK,
    AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
    AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL,
    AksjonspunktCode.VURDERE_ANNEN_YTELSE,
    AksjonspunktCode.VURDERE_DOKUMENT,
    AksjonspunktCode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
    AksjonspunktCode.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING),
  begrunnelse: values.begrunnelse,
  fritekstBrev: values.brødtekst,
  skalBrukeOverstyrendeFritekstBrev: !!values.brødtekst,
  overskrift: values.overskrift,
}));

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  behandling: Behandling,
): FormValues => ({
  aksjonspunktKoder: aksjonspunkter.filter((ap) => ap.kanLoses).map((ap) => ap.definisjon.kode),
  overskrift: decodeHtmlEntity(behandling.behandlingsresultat.overskrift),
  brødtekst: decodeHtmlEntity(behandling.behandlingsresultat.fritekstbrev),
});

interface FormValues {
  aksjonspunktKoder?: string[];
  begrunnelse?: string;
  brødtekst?: string;
  overskrift?: string;
}

interface OwnProps {
  behandling: Behandling;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  previewCallback: (data: ForhandsvisData) => void,
  ytelseTypeKode: string;
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
  alleKodeverk: AlleKodeverk;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar?: Vilkar[];
  beregningErManueltFastsatt: boolean;
  medlemskapFom?: string;
  resultatstrukturOriginalBehandling?: BeregningsresultatFp | BeregningsresultatEs;
  submitCallback: (data: RevurderingVedtakAksjonspunkter[]) => Promise<void>;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const VedtakRevurderingForm: FunctionComponent<OwnProps> = ({
  behandling,
  readOnly,
  aksjonspunkter,
  previewCallback,
  ytelseTypeKode,
  resultatstruktur,
  alleKodeverk,
  tilbakekrevingvalg,
  simuleringResultat,
  vilkar,
  beregningErManueltFastsatt,
  medlemskapFom,
  resultatstrukturOriginalBehandling,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkter, behandling),
  });

  const begrunnelse = formMethods.watch('begrunnelse');
  const overskrift = formMethods.watch('overskrift');
  const brødtekst = formMethods.watch('brødtekst');

  const { formState: { isValid, isDirty } } = formMethods;

  const {
    behandlingsresultat, sprakkode, status, behandlingÅrsaker,
  } = behandling;

  const erBehandlingEtterKlage = useMemo(() => erÅrsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker), [behandling.behandlingÅrsaker]);
  const revurderingsÅrsakString = useMemo(() => lagÅrsakString(behandlingÅrsaker
    .map((arsak) => arsak.behandlingArsakType), getKodeverknavnFn(alleKodeverk, kodeverkTyper)), [behandlingÅrsaker]);
  const tilbakekrevingtekst = useMemo(() => getTilbakekrevingText(alleKodeverk, simuleringResultat, tilbakekrevingvalg), [
    simuleringResultat, tilbakekrevingvalg]);

  let vedtakstatusTekst = '';
  if (isInnvilget(behandlingsresultat.type.kode)) {
    const konsekvenserForYtelsen = behandlingsresultat !== undefined ? behandlingsresultat.konsekvenserForYtelsen : undefined;
    vedtakstatusTekst = finnInvilgetRevurderingTekst(intl, ytelseTypeKode, getKodeverknavnFn(alleKodeverk, kodeverkTyper), tilbakekrevingtekst,
      konsekvenserForYtelsen, resultatstruktur, resultatstrukturOriginalBehandling);
  }
  if (isAvslag(behandlingsresultat.type.kode)) {
    vedtakstatusTekst = intl.formatMessage({ id: hentResultattekst(false, resultatstruktur, resultatstrukturOriginalBehandling) });
  }
  if (isOpphor(behandlingsresultat.type.kode)) {
    vedtakstatusTekst = intl.formatMessage({
      id: ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER
        ? 'VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer' : 'VedtakForm.RevurderingFP.ForeldrepengerOpphoerer',
    }, { dato: moment(getOpphorsdato(resultatstruktur, medlemskapFom, behandlingsresultat)).format(DDMMYYYY_DATE_FORMAT) });
  }

  const forhåndsvisOverstyrtBrev = hentForhåndsvisManueltBrevCallback(isValid, isDirty, begrunnelse, brødtekst, overskrift, true, previewCallback);
  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(isValid, isDirty, begrunnelse, brødtekst, overskrift, false, previewCallback);

  return (
    <>
      {ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER && (
        <VedtakFritekstbrevModal
          readOnly={readOnly}
          behandlingsresultat={behandlingsresultat}
        />
      )}
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <VedtakFellesPanel
          behandling={behandling}
          vedtakstatusTekst={vedtakstatusTekst}
          aksjonspunkter={aksjonspunkter}
          readOnly={readOnly}
          previewAutomatiskBrev={forhåndsvisDefaultBrev}
          previewOverstyrtBrev={forhåndsvisOverstyrtBrev}
          tilbakekrevingtekst={tilbakekrevingtekst}
          erBehandlingEtterKlage={erBehandlingEtterKlage}
          renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt, erOpphor) => {
            if (erInnvilget) {
              return (
                <VedtakInnvilgetRevurderingPanel
                  ytelseTypeKode={ytelseTypeKode}
                  revurderingsÅrsakString={revurderingsÅrsakString}
                  isReadOnly={readOnly}
                  resultatstruktur={resultatstruktur}
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
                  behandlingStatusKode={status.kode}
                  vilkar={vilkar}
                  behandlingsresultat={behandlingsresultat}
                  språkKode={sprakkode}
                  erReadOnly={readOnly}
                  alleKodeverk={alleKodeverk}
                  skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
                />
              );
            }

            return erOpphor ? (
              <VedtakOpphorRevurderingPanel
                revurderingsÅrsakString={revurderingsÅrsakString}
                isReadOnly={readOnly}
                behandlingsresultat={behandlingsresultat}
                språkKode={sprakkode}
                beregningErManueltFastsatt={beregningErManueltFastsatt}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
              />
            ) : null;
          }}
        />
      </Form>
    </>
  );
};

export default VedtakRevurderingForm;
