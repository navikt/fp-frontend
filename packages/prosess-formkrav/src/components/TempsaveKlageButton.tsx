import React, { FunctionComponent } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Button } from '@navikt/ds-react';

import { behandlingType as BehandlingType } from '@navikt/fp-kodeverk';
import FormkravMellomlagretDataType from '../types/FormkravMellomlagretDataType';
import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';

export const IKKE_PA_KLAGD_VEDTAK = 'ikkePaklagdVedtak';

type FormValues = {
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  begrunnelse?: string;
  vedtak?: string;
  fritekstTilBrev?: string;
};

type TilbakekrevingInfo = {
  tilbakekrevingUuid: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
};

export const skalLagreFritekstfelt = (formVerdier: FormValues): boolean =>
  formVerdier.erKlagerPart === false ||
  formVerdier.erFristOverholdt === false ||
  formVerdier.erKonkret === false ||
  formVerdier.erSignert === false ||
  formVerdier.vedtak === IKKE_PA_KLAGD_VEDTAK;

const getPåklagdBehandling = (
  avsluttedeBehandlinger: AvsluttetBehandling[],
  påklagdVedtak: string,
): AvsluttetBehandling | undefined => avsluttedeBehandlinger.find(behandling => behandling.uuid === påklagdVedtak);

export const erTilbakekreving = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string): boolean => {
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return (
    !!behandling &&
    (behandling.type === BehandlingType.TILBAKEKREVING || behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING)
  );
};

export const påklagdTilbakekrevingInfo = (
  avsluttedeBehandlinger: AvsluttetBehandling[],
  påklagdVedtak: string,
): TilbakekrevingInfo | undefined => {
  const erTilbakekrevingVedtak = erTilbakekreving(avsluttedeBehandlinger, påklagdVedtak);
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return behandling && erTilbakekrevingVedtak
    ? {
        tilbakekrevingUuid: behandling.uuid,
        tilbakekrevingVedtakDato: behandling.avsluttet,
        tilbakekrevingBehandlingType: behandling.type,
      }
    : undefined;
};

const transformValues = (
  values: FormValues,
  behandlingUuid: string,
  avsluttedeBehandlinger: AvsluttetBehandling[],
  aksjonspunktCode: string,
): FormkravMellomlagretDataType => ({
  kode: aksjonspunktCode,
  begrunnelse: values.begrunnelse!,
  behandlingUuid,
  erKlagerPart: values.erKlagerPart!,
  erFristOverholdt: values.erFristOverholdt!,
  erKonkret: values.erKonkret!,
  erSignert: values.erSignert!,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak!),
  klageTilbakekreving: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak!),
  paKlagdBehandlingUuid: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? undefined : values.vedtak,
  fritekstTilBrev: skalLagreFritekstfelt(values) ? values.fritekstTilBrev : undefined,
});

interface OwnProps {
  behandlingUuid: string;
  aksjonspunktCode: string;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  saveKlage: (data: FormkravMellomlagretDataType) => Promise<any>;
  spinner?: boolean;
  readOnly?: boolean;
  handleSubmit: UseFormHandleSubmit<FormValues>;
}

const TempsaveKlageButton: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  saveKlage,
  avsluttedeBehandlinger,
  spinner,
  aksjonspunktCode,
  readOnly,
  handleSubmit,
}) => {
  if (!readOnly) {
    return (
      <Button
        size="small"
        variant="primary"
        loading={spinner}
        onClick={handleSubmit((values: FormValues) =>
          saveKlage(transformValues(values, behandlingUuid, avsluttedeBehandlinger, aksjonspunktCode)),
        )}
        type="button"
      >
        <FormattedMessage id="TempsaveKlageButton.TempSaveButton" />
      </Button>
    );
  }
  return null;
};

TempsaveKlageButton.defaultProps = {
  spinner: false,
  readOnly: false,
};

export default TempsaveKlageButton;
