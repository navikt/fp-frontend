import { type UseFormHandleSubmit } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button } from '@navikt/ds-react';

import type { ProsessStegBegrunnelseTextFieldFormValues } from '@navikt/fp-prosess-felles';

import type { AvsluttetBehandling } from '../types/avsluttetBehandlingTsType';
import type { FormkravMellomlagretDataType } from '../types/FormkravMellomlagretDataType';

export const IKKE_PA_KLAGD_VEDTAK = 'ikkePaklagdVedtak';

export type FormValues = {
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  vedtak?: string;
  mottattDato?: string;
  fritekstTilBrev?: string;
} & ProsessStegBegrunnelseTextFieldFormValues;

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
  påklagdVedtak?: string,
): AvsluttetBehandling | undefined => avsluttedeBehandlinger.find(behandling => behandling.uuid === påklagdVedtak);

export const erTilbakekreving = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak?: string): boolean => {
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return !!behandling && (behandling.type === 'BT-007' || behandling.type === 'BT-009');
};

export const påklagdTilbakekrevingInfo = (
  avsluttedeBehandlinger: AvsluttetBehandling[],
  påklagdVedtak?: string,
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
  begrunnelse: values.begrunnelse,
  behandlingUuid,
  erKlagerPart: !!values.erKlagerPart,
  erFristOverholdt: !!values.erFristOverholdt,
  erKonkret: !!values.erKonkret,
  erSignert: !!values.erSignert,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  klageTilbakekreving: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
  paKlagdBehandlingUuid: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? undefined : values.vedtak,
  fritekstTilBrev: skalLagreFritekstfelt(values) ? values.fritekstTilBrev : undefined,
  mottattDato: values.mottattDato,
});

interface Props {
  behandlingUuid: string;
  aksjonspunktCode: string;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  saveKlage: (data: FormkravMellomlagretDataType) => void;
  spinner?: boolean;
  readOnly?: boolean;
  handleSubmit: UseFormHandleSubmit<FormValues>;
}

export const TempsaveKlageButton = ({
  behandlingUuid,
  saveKlage,
  avsluttedeBehandlinger,
  spinner = false,
  aksjonspunktCode,
  readOnly = false,
  handleSubmit,
}: Props) => {
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
