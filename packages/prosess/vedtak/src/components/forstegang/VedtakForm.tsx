import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { RhfForm } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import {
  type Aksjonspunkt,
  type BehandlingFpSak,
  type BehandlingResultatType,
  type Behandlingsresultat,
  type BeregningsresultatDagytelse,
  type BeregningsresultatEs,
  isAvslag,
  isKlageOmgjort,
  type Oppgave,
  type SimuleringResultat,
  type TilbakekrevingValg,
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
import { isInnvilget } from '../../vedtakUtils.ts';

const finnAvslagResultatText = (behandlingResultatTypeKode: BehandlingResultatType, ytelseType: string): string => {
  if (behandlingResultatTypeKode === 'KLAGE_YTELSESVEDTAK_OPPHEVET') {
    return 'VedtakForm.ResultatKlageYtelsesvedtakOpphevet';
  }
  if (behandlingResultatTypeKode === 'KLAGE_AVVIST') {
    return 'VedtakForm.ResultatKlageAvvist';
  }

  if (ytelseType === 'ES') {
    return 'VedtakForm.EngangsstonadIkkeInnvilget';
  }

  if (ytelseType === 'SVP') {
    return 'VedtakForm.SvangerskapspengerIkkeInnvilget';
  }

  return 'VedtakForm.ForeldrepengerIkkeInnvilget';
};

const finnInnvilgetResultatText = (behandlingResultatTypeKode: BehandlingResultatType, ytelseType: string): string => {
  if (behandlingResultatTypeKode === 'KLAGE_YTELSESVEDTAK_STADFESTET') {
    return 'VedtakForm.ResultatOpprettholdVedtak';
  }
  if (isKlageOmgjort(behandlingResultatTypeKode)) {
    return 'VedtakForm.ResultatKlageMedhold';
  }

  if (ytelseType === 'ES') {
    return 'VedtakForm.VilkarStatusInnvilgetEngangsstonad';
  }

  if (ytelseType === 'SVP') {
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

const erÅrsakTypeBehandlingEtterKlage = (behandlingArsakTyper: BehandlingFpSak['behandlingÅrsaker'] = []): boolean =>
  behandlingArsakTyper
    .map(({ behandlingArsakType }) => behandlingArsakType)
    .some(bt => bt === 'ETTER_KLAGE' || bt === 'RE-KLAG-U-INNTK' || bt === 'RE-KLAG-M-INNTK');

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
  aksjonspunkterForPanel: Aksjonspunkt[],
  harOverstyrtVedtaksbrev: boolean,
): VedtakAksjonspunkter[] =>
  aksjonspunkterForPanel
    .filter(ap => ap.kanLoses)
    .map(ap => ({
      kode: validerApKodeOgHentApEnum(
        ap.definisjon,
        AksjonspunktKode.FORESLÅ_VEDTAK,
        AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT,
        AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK,
        AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK,
      ),
      begrunnelse: values.begrunnelse,
      skalBrukeOverstyrendeFritekstBrev: harOverstyrtVedtaksbrev,
    }));

const finnBegrunnelse = (behandling: BehandlingFpSak): string | undefined => {
  return behandling.behandlingsresultat?.avslagsarsakFritekst
    ? decodeHtmlEntity(behandling.behandlingsresultat.avslagsarsakFritekst)
    : undefined;
};

export const buildInitialValues = (behandling: BehandlingFpSak): VedtakFormValues => ({
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
  beregningErManueltFastsatt: boolean;
  oppgaver?: Oppgave[];
  ferdigstillOppgave: (oppgaveId: string) => Promise<void>;
}

export const VedtakForm = ({
  previewCallback,
  beregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  beregningErManueltFastsatt,
  oppgaver,
  ferdigstillOppgave,
}: Props) => {
  const { behandling, fagsak, alleKodeverk, submitCallback, isReadOnly, aksjonspunkterForPanel } =
    usePanelDataContext<VedtakAksjonspunkter[]>();

  const { behandlingsresultat, språkkode, vilkår } = behandling;

  const intl = useIntl();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<VedtakFormValues>();

  const formMethods = useForm<VedtakFormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(behandling),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const { harRedigertBrev } = useVedtakEditeringContext();

  const [harValgtÅRedigereVedtaksbrev, setHarValgtÅRedigereVedtaksbrev] = useState(
    harRedigertBrev || behandlingsresultat?.vedtaksbrev === 'FRITEKST',
  );

  const erBehandlingEtterKlage = erÅrsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker);
  const tilbakekrevingtekst = getTilbakekrevingText(simuleringResultat, tilbakekrevingvalg);
  const vedtakstatusTekst = finnVedtakstatusTekst(intl, fagsak.fagsakYtelseType, behandlingsresultat);

  const forhåndsvisDefaultBrev = hentForhåndsvisManueltBrevCallback(previewCallback, formMethods.trigger, begrunnelse);

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
              vilkår={vilkår}
              beregningErManueltFastsatt={beregningErManueltFastsatt}
              skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
            />
          ) : null;
        }}
      />
    </RhfForm>
  );
};
