import { type UseFormHandleSubmit } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button } from '@navikt/ds-react';

import { KlageVurdering as klageVurderingType } from '@navikt/fp-kodeverk';

import type { KlageFormType } from '../../types/klageFormType';

type FormValues = {
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  begrunnelse?: string;
};

export type TransformedValues = {
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
};

const transformValues = (values: FormValues, aksjonspunktCode: string): TransformedValues => ({
  kode: aksjonspunktCode,
  klageMedholdArsak:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ||
    values.klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK
      ? values.klageMedholdArsak
      : undefined,
  klageVurderingOmgjoer:
    values.klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : undefined,
  klageHjemmel: values.klageHjemmel,
  fritekstTilBrev: values.fritekstTilBrev!,
  begrunnelse: values.begrunnelse!,
  klageVurdering: values.klageVurdering!,
});

interface Props {
  aksjonspunktCode: string;
  saveKlage: (data: TransformedValues) => void;
  spinner?: boolean;
  readOnly?: boolean;
  handleSubmit: UseFormHandleSubmit<KlageFormType>;
}

export const TempsaveKlageButton = ({
  saveKlage,
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
        onClick={handleSubmit((values: FormValues) => saveKlage(transformValues(values, aksjonspunktCode)))}
        type="button"
      >
        <FormattedMessage id="Klage.ResolveKlage.TempSaveButton" />
      </Button>
    );
  }
  return null;
};
