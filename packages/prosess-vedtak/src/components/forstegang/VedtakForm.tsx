import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { IntlShape, useIntl } from 'react-intl';

import {
  AlleKodeverk, Behandling, BeregningsresultatFp, BeregningsresultatEs, Vilkar,
  Aksjonspunkt, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import klageBehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import behandlingResultatType, { isAvslag, isInnvilget } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';
import { Form } from '@fpsak-frontend/form-hooks';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  BekreftVedtakUtenTotrinnskontrollAp, ForeslaVedtakAp, ForeslaVedtakManueltAp, VurdereAnnenYtelseForVedtakAp, VurdereDokumentForVedtakAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { getTilbakekrevingText } from '../felles/VedtakHelper';
import VedtakInnvilgetPanel from './VedtakInnvilgetPanel';
import VedtakAvslagPanel from './VedtakAvslagPanel';
import VedtakFellesPanel from '../felles/VedtakFellesPanel';
import VedtakFritekstbrevModal from '../felles/svp/VedtakFritekstbrevModal';

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

export const finnInnvilgetResultatText = (
  behandlingResultatTypeKode: string,
  ytelseType: string,
): string => {
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET) {
    return 'VedtakForm.ResultatOpprettholdVedtak';
  }
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_MEDHOLD) {
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
  forhåndsvisCallback: (data: ForhandsvisData) => Promise<any>,
  trigger: () => void,
) => (e: React.MouseEvent): void => {
  if (!skalOverstyre || isValid) {
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
  } else {
    trigger();
  }
  e.preventDefault();
};

const erÅrsakTypeBehandlingEtterKlage = (
  behandlingArsakTyper: Behandling['behandlingÅrsaker'] = [],
): boolean => behandlingArsakTyper
  .map(({ behandlingArsakType }) => behandlingArsakType)
  .some((bt) => bt.kode === klageBehandlingArsakType.ETTER_KLAGE
    || bt.kode === klageBehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === klageBehandlingArsakType.KLAGE_M_INNTK);

const finnVedtakstatusTekst = (behandlingsresultat: Behandling['behandlingsresultat'], intl: IntlShape, ytelseTypeKode: string): string => {
  const erInnvilget = isInnvilget(behandlingsresultat.type.kode);
  const erAvslatt = isAvslag(behandlingsresultat.type.kode);

  if (erInnvilget) {
    return intl.formatMessage({ id: finnInnvilgetResultatText(behandlingsresultat.type.kode, ytelseTypeKode) });
  }
  if (erAvslatt) {
    return intl.formatMessage({ id: finnAvslagResultatText(behandlingsresultat.type.kode, ytelseTypeKode) });
  }
  return '';
};

const transformValues = (
  values: FormValues,
): VedtakAksjonspunkter[] => values.aksjonspunktKoder.map((apCode) => ({
  kode: validerApKodeOgHentApEnum(apCode, AksjonspunktCode.FORESLA_VEDTAK,
    AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
    AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL,
    AksjonspunktCode.VURDERE_ANNEN_YTELSE,
    AksjonspunktCode.VURDERE_DOKUMENT),
  begrunnelse: values.begrunnelse,
  fritekstBrev: values.brødtekst,
  skalBrukeOverstyrendeFritekstBrev: !!values.brødtekst,
  overskrift: values.overskrift,
}));

const finnBegrunnelse = (
  behandling: Behandling,
  beregningErManueltFastsatt: boolean,
): string | undefined => {
  if (!beregningErManueltFastsatt) {
    return undefined;
  }
  return behandling.behandlingsresultat?.avslagsarsakFritekst
    ? decodeHtmlEntity(behandling.behandlingsresultat.avslagsarsakFritekst) : undefined;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  behandling: Behandling,
  beregningErManueltFastsatt: boolean,
): FormValues => ({
  beregningErManueltFastsatt,
  aksjonspunktKoder: aksjonspunkter.filter((ap) => ap.kanLoses).map((ap) => ap.definisjon.kode),
  overskrift: decodeHtmlEntity(behandling.behandlingsresultat.overskrift),
  brødtekst: decodeHtmlEntity(behandling.behandlingsresultat.fritekstbrev),
  begrunnelse: finnBegrunnelse(behandling, beregningErManueltFastsatt),
});

type VedtakAksjonspunkter = ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | BekreftVedtakUtenTotrinnskontrollAp
  | VurdereAnnenYtelseForVedtakAp
  | VurdereDokumentForVedtakAp;

type FormValues = {
  beregningErManueltFastsatt?: boolean;
  aksjonspunktKoder?: string[];
  overskrift?: string;
  brødtekst?: string;
  begrunnelse?: string;
}

interface OwnProps {
  behandling: Behandling;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  previewCallback: (data: ForhandsvisData) => Promise<any>,
  ytelseTypeKode: string;
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
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

  const { formState: { isValid, isDirty }, trigger } = formMethods;

  const {
    behandlingsresultat, sprakkode, status,
  } = behandling;

  const erBehandlingEtterKlage = useMemo(() => erÅrsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker), [behandling.behandlingÅrsaker]);
  const tilbakekrevingtekst = useMemo(() => getTilbakekrevingText(alleKodeverk, simuleringResultat, tilbakekrevingvalg), [
    simuleringResultat, tilbakekrevingvalg]);
  const vedtakstatusTekst = useMemo(() => finnVedtakstatusTekst(behandlingsresultat, intl, ytelseTypeKode), [behandlingsresultat]);

  const forhåndsvisOverstyrtBrev = hentForhåndsvisManueltBrevCallback(isValid, isDirty, begrunnelse, brødtekst, overskrift, true, previewCallback, trigger);
  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(isValid, isDirty, begrunnelse, brødtekst, overskrift, false, previewCallback, trigger);

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
                behandlingStatusKode={status.kode}
                behandlingsresultat={behandlingsresultat}
                isReadOnly={readOnly}
                ytelseTypeKode={ytelseTypeKode}
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
    </>
  );
};

export default VedtakForm;
