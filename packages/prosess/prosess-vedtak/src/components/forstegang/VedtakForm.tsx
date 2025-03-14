import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import {
  AksjonspunktKode,
  BehandlingArsakType as klageBehandlingArsakType,
  BehandlingResultatType,
  DokumentMalType,
  FagsakYtelseType,
  isAvslag,
  isInnvilget,
  isKlageOmgjort,
} from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
  Behandling,
  Behandlingsresultat,
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
  VurdereAnnenYtelseForVedtakAp,
  VurdereDokumentForVedtakAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { VedtakFellesPanel } from '../felles/VedtakFellesPanel';
import { getTilbakekrevingText } from '../felles/VedtakHelper';
import { VedtakAvslagPanel } from './VedtakAvslagPanel';
import { VedtakInnvilgetPanel } from './VedtakInnvilgetPanel';

export const finnAvslagResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
  if (behandlingResultatTypeKode === BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET) {
    return 'VedtakForm.ResultatKlageYtelsesvedtakOpphevet';
  }
  if (behandlingResultatTypeKode === BehandlingResultatType.KLAGE_AVVIST) {
    return 'VedtakForm.ResultatKlageAvvist';
  }

  if (ytelseType === FagsakYtelseType.ENGANGSSTONAD) {
    return 'VedtakForm.EngangsstonadIkkeInnvilget';
  }

  if (ytelseType === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return 'VedtakForm.SvangerskapspengerIkkeInnvilget';
  }

  return 'VedtakForm.ForeldrepengerIkkeInnvilget';
};

export const finnInnvilgetResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
  if (behandlingResultatTypeKode === BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET) {
    return 'VedtakForm.ResultatOpprettholdVedtak';
  }
  if (isKlageOmgjort(behandlingResultatTypeKode)) {
    return 'VedtakForm.ResultatKlageMedhold';
  }

  if (ytelseType === FagsakYtelseType.ENGANGSSTONAD) {
    return 'VedtakForm.VilkarStatusInnvilgetEngangsstonad';
  }

  if (ytelseType === FagsakYtelseType.SVANGERSKAPSPENGER) {
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
    forhåndsvisCallback: (data: ForhandsvisData) => void,
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
      AksjonspunktKode.FORESLA_VEDTAK,
      AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
      AksjonspunktKode.VURDERE_ANNEN_YTELSE,
      AksjonspunktKode.VURDERE_DOKUMENT,
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

interface Props {
  previewCallback: (data: ForhandsvisData) => void;
  ytelseTypeKode: string;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar?: Vilkar[];
  beregningErManueltFastsatt: boolean;
  oppgaver?: Oppgave[];
}

export const VedtakForm = ({
  previewCallback,
  ytelseTypeKode,
  beregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  vilkar,
  beregningErManueltFastsatt,
  oppgaver,
}: Props) => {
  const { behandling, alleKodeverk, submitCallback, isReadOnly } = usePanelDataContext<VedtakAksjonspunkter[]>();

  const { aksjonspunkt } = behandling;

  const intl = useIntl();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || buildInitialValues(aksjonspunkt, behandling, beregningErManueltFastsatt),
  });

  const begrunnelse = formMethods.watch('begrunnelse');
  const overskrift = formMethods.watch('overskrift');
  const brødtekst = formMethods.watch('brødtekst');

  const { trigger } = formMethods;

  const { behandlingsresultat, språkkode } = behandling;

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
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VedtakFellesPanel
        vedtakstatusTekst={vedtakstatusTekst}
        previewAutomatiskBrev={forhåndsvisDefaultBrev}
        previewOverstyrtBrev={forhåndsvisOverstyrtBrev}
        tilbakekrevingtekst={tilbakekrevingtekst}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        oppgaver={oppgaver}
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetPanel
                behandlingsresultat={behandlingsresultat}
                isReadOnly={isReadOnly}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
                ytelseTypeKode={ytelseTypeKode}
                språkkode={språkkode}
                beregningsresultat={beregningsresultat}
                beregningErManueltFastsatt={beregningErManueltFastsatt}
              />
            );
          }

          return erAvslatt ? (
            <VedtakAvslagPanel
              behandlingsresultat={behandlingsresultat}
              isReadOnly={isReadOnly}
              språkkode={språkkode}
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
