import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { RhfForm } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import {
  AksjonspunktKode,
  BehandlingArsakType as klageBehandlingArsakType,
  BehandlingResultatType,
  FagsakYtelseType,
  isAvslag,
  isInnvilget,
  isKlageOmgjort,
  VedtakbrevType,
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

import type { VedtakForhåndsvisData } from '../../types/VedtakForhåndsvisData';
import type { VedtakFormValues } from '../../types/VedtakFormValues';
import { useVedtakEditeringContext } from '../../VedtakEditeringContext';
import { VedtakFellesPanel } from '../felles/VedtakFellesPanel';
import { getTilbakekrevingText } from '../felles/VedtakHelper';
import { VedtakAvslagPanel } from './VedtakAvslagPanel';
import { VedtakInnvilgetPanel } from './VedtakInnvilgetPanel';

const finnAvslagResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
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

const finnInnvilgetResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
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

const hentForhåndsvisManueltBrevCallback =
  (forhåndsvisCallback: (data: VedtakForhåndsvisData) => void, trigger: () => void, begrunnelse?: string) =>
  (e: React.MouseEvent): void => {
    e.preventDefault();

    trigger();

    forhåndsvisCallback({
      fritekst: begrunnelse,
      dokumentMal: undefined,
      tittel: undefined,
      automatiskVedtaksbrev: true,
    });
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
  values: VedtakFormValues,
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

const finnBegrunnelse = (behandling: Behandling): string | undefined => {
  return behandling.behandlingsresultat?.avslagsarsakFritekst
    ? decodeHtmlEntity(behandling.behandlingsresultat.avslagsarsakFritekst)
    : undefined;
};

export const buildInitialValues = (behandling: Behandling): VedtakFormValues => ({
  begrunnelse: finnBegrunnelse(behandling),
});

type VedtakAksjonspunkter =
  | ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | VurdereAnnenYtelseForVedtakAp
  | VurdereDokumentForVedtakAp;

interface Props {
  previewCallback: (data: VedtakForhåndsvisData) => void;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar?: Vilkar[];
  beregningErManueltFastsatt: boolean;
  oppgaver?: Oppgave[];
  ferdigstillOppgave: (oppgaveId: string) => Promise<void>;
}

export const VedtakForm = ({
  previewCallback,
  beregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  vilkar,
  beregningErManueltFastsatt,
  oppgaver,
  ferdigstillOppgave,
}: Props) => {
  const { behandling, fagsak, alleKodeverk, submitCallback, isReadOnly } =
    usePanelDataContext<VedtakAksjonspunkter[]>();

  const { aksjonspunkt, behandlingsresultat, språkkode } = behandling;

  const intl = useIntl();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<VedtakFormValues>();

  const formMethods = useForm<VedtakFormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(behandling),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const { trigger } = formMethods;

  const { harRedigertBrev } = useVedtakEditeringContext();

  const [harValgtÅRedigereVedtaksbrev, setHarValgtÅRedigereVedtaksbrev] = useState(
    harRedigertBrev || behandlingsresultat?.vedtaksbrev === VedtakbrevType.FRITEKST,
  );

  const erBehandlingEtterKlage = erÅrsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker);
  const tilbakekrevingtekst = getTilbakekrevingText(simuleringResultat, tilbakekrevingvalg);
  const vedtakstatusTekst = finnVedtakstatusTekst(intl, fagsak.fagsakYtelseType, behandlingsresultat);

  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(previewCallback, trigger, begrunnelse);

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: VedtakFormValues) =>
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
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetPanel
                behandlingsresultat={behandlingsresultat}
                isReadOnly={isReadOnly}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
                ytelseTypeKode={fagsak.fagsakYtelseType}
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
    </RhfForm>
  );
};
