import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { IntlShape, useIntl } from 'react-intl';

import {
  AlleKodeverk,
  Behandling,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Vilkar,
  Aksjonspunkt,
  SimuleringResultat,
  TilbakekrevingValg,
  Behandlingsresultat,
} from '@navikt/fp-types';
import {
  isAvslag,
  isInnvilget,
  isKlageOmgjort,
  behandlingResultatType,
  behandlingArsakType as klageBehandlingArsakType,
  fagsakYtelseType,
  AksjonspunktCode,
  dokumentMalType,
} from '@navikt/fp-kodeverk';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import { Form } from '@navikt/ft-form-hooks';
import {
  ForeslaVedtakAp,
  ForeslaVedtakManueltAp,
  VurdereAnnenYtelseForVedtakAp,
  VurdereDokumentForVedtakAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import { getTilbakekrevingText } from '../felles/VedtakHelper';
import VedtakInnvilgetPanel from './VedtakInnvilgetPanel';
import VedtakAvslagPanel from './VedtakAvslagPanel';
import VedtakFellesPanel from '../felles/VedtakFellesPanel';

export const finnAvslagResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET) {
    return 'VedtakForm.ResultatKlageYtelsesvedtakOpphevet';
  }
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_AVVIST) {
    return 'VedtakForm.ResultatKlageAvvist';
  }

  if (ytelseType === fagsakYtelseType.ENGANGSSTONAD) {
    return 'VedtakForm.EngangsstonadIkkeInnvilget';
  }

  if (ytelseType === fagsakYtelseType.SVANGERSKAPSPENGER) {
    return 'VedtakForm.SvangerskapspengerIkkeInnvilget';
  }

  return 'VedtakForm.ForeldrepengerIkkeInnvilget';
};

export const finnInnvilgetResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET) {
    return 'VedtakForm.ResultatOpprettholdVedtak';
  }
  if (isKlageOmgjort(behandlingResultatTypeKode)) {
    return 'VedtakForm.ResultatKlageMedhold';
  }

  if (ytelseType === fagsakYtelseType.ENGANGSSTONAD) {
    return 'VedtakForm.VilkarStatusInnvilgetEngangsstonad';
  }

  if (ytelseType === fagsakYtelseType.SVANGERSKAPSPENGER) {
    return 'VedtakForm.SvangerskapspengerInnvilget';
  }

  return 'VedtakForm.VilkarStatusInnvilgetForeldrepenger';
};

export type ForhandsvisData = {
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  automatiskVedtaksbrev?: boolean;
};

const hentForhåndsvisManueltBrevCallback =
  (
    skalOverstyre: boolean,
    forhåndsvisCallback: (data: ForhandsvisData) => Promise<any>,
    trigger: () => void,
    begrunnelse?: string,
    brodtekst?: string,
    overskrift?: string,
  ) =>
  (e: React.MouseEvent): void => {
    e.preventDefault();

    const erFeltUtfylt = skalOverstyre ? !!brodtekst && !!overskrift : !!begrunnelse;
    trigger();

    if (!skalOverstyre || erFeltUtfylt) {
      const data = {
        fritekst: skalOverstyre ? brodtekst : begrunnelse,
        dokumentMal: skalOverstyre ? dokumentMalType.FRITEKST : undefined,
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
        bt === klageBehandlingArsakType.ETTER_KLAGE ||
        bt === klageBehandlingArsakType.KLAGE_U_INNTK ||
        bt === klageBehandlingArsakType.KLAGE_M_INNTK,
    );

const finnVedtakstatusTekst = (
  intl: IntlShape,
  ytelseTypeKode: string,
  behandlingsresultat?: Behandlingsresultat,
): string => {
  if (behandlingsresultat && isInnvilget(behandlingsresultat.type)) {
    return intl.formatMessage({ id: finnInnvilgetResultatText(behandlingsresultat.type, ytelseTypeKode) });
  }
  if (behandlingsresultat && isAvslag(behandlingsresultat.type)) {
    return intl.formatMessage({ id: finnAvslagResultatText(behandlingsresultat.type, ytelseTypeKode) });
  }
  return '';
};

const transformValues = (values: FormValues): VedtakAksjonspunkter[] =>
  values.aksjonspunktKoder.map(apCode => ({
    kode: validerApKodeOgHentApEnum(
      apCode,
      AksjonspunktCode.FORESLA_VEDTAK,
      AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
      AksjonspunktCode.VURDERE_ANNEN_YTELSE,
      AksjonspunktCode.VURDERE_DOKUMENT,
    ),
    begrunnelse: values.begrunnelse,
    fritekstBrev: values.brødtekst,
    skalBrukeOverstyrendeFritekstBrev: !!values.brødtekst,
    overskrift: values.overskrift,
  }));

const finnBegrunnelse = (behandling: Behandling, beregningErManueltFastsatt: boolean): string | undefined => {
  if (!beregningErManueltFastsatt) {
    return undefined;
  }
  return behandling.behandlingsresultat?.avslagsarsakFritekst
    ? decodeHtmlEntity(behandling.behandlingsresultat.avslagsarsakFritekst)
    : undefined;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  behandling: Behandling,
  beregningErManueltFastsatt: boolean,
): FormValues => ({
  beregningErManueltFastsatt,
  aksjonspunktKoder: aksjonspunkter.filter(ap => ap.kanLoses).map(ap => ap.definisjon),
  overskrift: decodeHtmlEntity(behandling.behandlingsresultat?.overskrift),
  brødtekst: decodeHtmlEntity(behandling.behandlingsresultat?.fritekstbrev),
  begrunnelse: finnBegrunnelse(behandling, beregningErManueltFastsatt),
});

type VedtakAksjonspunkter =
  | ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | VurdereAnnenYtelseForVedtakAp
  | VurdereDokumentForVedtakAp;

type FormValues = {
  beregningErManueltFastsatt?: boolean;
  aksjonspunktKoder: string[];
  overskrift?: string;
  brødtekst?: string;
  begrunnelse?: string;
};

interface OwnProps {
  behandling: Behandling;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  previewCallback: (data: ForhandsvisData) => Promise<any>;
  ytelseTypeKode: string;
  resultatstruktur?: BeregningsresultatDagytelse | BeregningsresultatEs;
  alleKodeverk: AlleKodeverk;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar?: Vilkar[];
  beregningErManueltFastsatt: boolean;
  submitCallback: (data: VedtakAksjonspunkter[]) => Promise<void>;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

const VedtakForm: FunctionComponent<OwnProps> = ({
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
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkter, behandling, beregningErManueltFastsatt),
  });

  const begrunnelse = formMethods.watch('begrunnelse');
  const overskrift = formMethods.watch('overskrift');
  const brødtekst = formMethods.watch('brødtekst');

  const { trigger } = formMethods;

  const { behandlingsresultat, sprakkode } = behandling;

  const erBehandlingEtterKlage = useMemo(
    () => erÅrsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker),
    [behandling.behandlingÅrsaker],
  );
  const tilbakekrevingtekst = useMemo(
    () => getTilbakekrevingText(alleKodeverk, simuleringResultat, tilbakekrevingvalg),
    [simuleringResultat, tilbakekrevingvalg],
  );
  const vedtakstatusTekst = useMemo(
    () => finnVedtakstatusTekst(intl, ytelseTypeKode, behandlingsresultat),
    [behandlingsresultat],
  );

  const forhåndsvisOverstyrtBrev = hentForhåndsvisManueltBrevCallback(
    true,
    previewCallback,
    trigger,
    begrunnelse,
    brødtekst,
    overskrift,
  );
  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(
    false,
    previewCallback,
    trigger,
    begrunnelse,
    brødtekst,
    overskrift,
  );

  return (
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
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetPanel
                behandlingsresultat={behandlingsresultat}
                isReadOnly={readOnly}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
                ytelseTypeKode={ytelseTypeKode}
                språkKode={sprakkode}
                resultatstruktur={resultatstruktur}
                beregningErManueltFastsatt={beregningErManueltFastsatt}
              />
            );
          }

          return erAvslatt ? (
            <VedtakAvslagPanel
              behandlingsresultat={behandlingsresultat}
              isReadOnly={readOnly}
              språkKode={sprakkode}
              alleKodeverk={alleKodeverk}
              vilkar={vilkar}
              beregningErManueltFastsatt={beregningErManueltFastsatt}
              skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
            />
          ) : null;
        }}
      />
    </Form>
  );
};

export default VedtakForm;
