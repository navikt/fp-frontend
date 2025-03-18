import React, { useState } from 'react';
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
  GenererHtmlDokument,
  Oppgave,
  OverstyrtDokument,
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
  (forhåndsvisCallback: (data: ForhandsvisData) => void, trigger: () => void, begrunnelse?: string) =>
  (e: React.MouseEvent): void => {
    e.preventDefault();

    trigger();

    const data = {
      fritekst: begrunnelse,
      dokumentMal: undefined,
      tittel: undefined,
      gjelderVedtak: true,
      automatiskVedtaksbrev: true,
    };
    forhåndsvisCallback(data);
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

const transformValues = (
  values: FormValues,
  aksjonspunkter: Aksjonspunkt[],
  harOverstyrtVedtaksbrev: boolean,
): VedtakAksjonspunkter[] =>
  aksjonspunkter
    .filter(ap => ap.kanLoses)
    .map(ap => ({
      kode: validerApKodeOgHentApEnum(
        ap.definisjon,
        AksjonspunktKode.FORESLA_VEDTAK,
        AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
        AksjonspunktKode.VURDERE_ANNEN_YTELSE,
        AksjonspunktKode.VURDERE_DOKUMENT,
      ),
      begrunnelse: values.begrunnelse,
      skalBrukeOverstyrendeFritekstBrev: harOverstyrtVedtaksbrev,
    }));

const finnBegrunnelse = (behandling: Behandling, beregningErManueltFastsatt: boolean): string | undefined => {
  if (!beregningErManueltFastsatt) {
    return undefined;
  }
  return behandling.behandlingsresultat?.avslagsarsakFritekst
    ? decodeHtmlEntity(behandling.behandlingsresultat.avslagsarsakFritekst)
    : undefined;
};

const buildInitialValues = (behandling: Behandling, beregningErManueltFastsatt: boolean): FormValues => ({
  begrunnelse: finnBegrunnelse(behandling, beregningErManueltFastsatt),
});

type VedtakAksjonspunkter =
  | ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | VurdereAnnenYtelseForVedtakAp
  | VurdereDokumentForVedtakAp;

type FormValues = {
  begrunnelse?: string;
};

interface Props {
  previewCallback: (data: ForhandsvisData) => void;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar?: Vilkar[];
  beregningErManueltFastsatt: boolean;
  oppgaver?: Oppgave[];
  hentBrevHtml: (params: GenererHtmlDokument) => Promise<OverstyrtDokument>;
  forkastManueltBrev: () => Promise<void>;
  lagreManueltBrev: (html: string) => Promise<void>;
}

export const VedtakForm = ({
  previewCallback,
  beregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  vilkar,
  beregningErManueltFastsatt,
  oppgaver,
  hentBrevHtml,
  forkastManueltBrev,
  lagreManueltBrev,
}: Props) => {
  const { behandling, fagsak, alleKodeverk, submitCallback, isReadOnly } =
    usePanelDataContext<VedtakAksjonspunkter[]>();

  const { aksjonspunkt, behandlingsresultat, sprakkode } = behandling;

  const intl = useIntl();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || buildInitialValues(behandling, beregningErManueltFastsatt),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const { trigger } = formMethods;

  const [harOverstyrtVedtaksbrev, setHarOverstyrtVedtaksbrev] = useState(
    behandling.behandlingsresultat?.vedtaksbrev === DokumentMalType.FRITEKST_HTML ||
      behandling.behandlingsresultat?.vedtaksbrev === DokumentMalType.FRITEKST,
  );

  const erBehandlingEtterKlage = erÅrsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker);
  const tilbakekrevingtekst = getTilbakekrevingText(alleKodeverk, simuleringResultat, tilbakekrevingvalg);
  const vedtakstatusTekst = finnVedtakstatusTekst(intl, fagsak.fagsakYtelseType, behandlingsresultat);

  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(previewCallback, trigger, begrunnelse);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkt, harOverstyrtVedtaksbrev))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VedtakFellesPanel
        vedtakstatusTekst={vedtakstatusTekst}
        previewAutomatiskBrev={forhåndsvisDefaultBrev}
        previewCallback={previewCallback}
        tilbakekrevingtekst={tilbakekrevingtekst}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        oppgaver={oppgaver}
        hentBrevHtml={hentBrevHtml}
        forkastManueltBrev={forkastManueltBrev}
        lagreManueltBrev={lagreManueltBrev}
        setHarOverstyrtVedtaksbrev={setHarOverstyrtVedtaksbrev}
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetPanel
                behandlingsresultat={behandlingsresultat}
                isReadOnly={isReadOnly}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
                ytelseTypeKode={fagsak.fagsakYtelseType}
                språkKode={sprakkode}
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
