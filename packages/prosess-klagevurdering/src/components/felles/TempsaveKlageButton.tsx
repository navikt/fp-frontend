import React, { FunctionComponent } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { Kodeverk } from '@fpsak-frontend/types';

type FormValues = {
  klageVurdering?: Kodeverk;
  fritekstTilBrev?: string;
  klageMedholdArsak?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  begrunnelse?: string;
};

export type TransformedValues = {
  kode: string;
  klageMedholdArsak?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: Kodeverk;
}

const transformValues = (
  values: FormValues,
  aksjonspunktCode: string,
): TransformedValues => ({
  kode: aksjonspunktCode,
  klageMedholdArsak: (values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE
    || values.klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK) ? values.klageMedholdArsak : null,
  klageVurderingOmgjoer: values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : null,
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  klageVurdering: values.klageVurdering,
});

interface OwnProps {
  aksjonspunktCode: string;
  saveKlage: (data: TransformedValues) => Promise<any>;
  spinner?: boolean;
  readOnly?: boolean;
  handleSubmit: UseFormHandleSubmit<any>;
}

const TempsaveKlageButton: FunctionComponent<OwnProps> = ({
  saveKlage,
  spinner,
  aksjonspunktCode,
  readOnly,
  handleSubmit,
}) => {
  if (!readOnly) {
    return (
      <Hovedknapp
        mini
        htmlType="button"
        spinner={spinner}
        onClick={handleSubmit((values: FormValues) => saveKlage(transformValues(
          values,
          aksjonspunktCode,
        )))}
      >
        <FormattedMessage id="Klage.ResolveKlage.TempSaveButton" />
      </Hovedknapp>
    );
  }
  return null;
};

TempsaveKlageButton.defaultProps = {
  spinner: false,
  readOnly: false,
};

export default TempsaveKlageButton;
