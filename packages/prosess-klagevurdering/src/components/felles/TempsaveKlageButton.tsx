import React, { FunctionComponent } from 'react';
import { Hovedknapp } from 'nav-frontend-knapper';
import { FormattedMessage } from 'react-intl';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { Kodeverk } from '@fpsak-frontend/types';
import { InjectedFormProps } from 'redux-form';

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
  handleSubmit: InjectedFormProps['handleSubmit'];
}

const TempsaveKlageButton: FunctionComponent<OwnProps> = ({
  saveKlage,
  spinner,
  aksjonspunktCode,
  readOnly,
  handleSubmit,
}) => (
  <>
    {!readOnly && (
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
    )}
  </>
);

TempsaveKlageButton.defaultProps = {
  spinner: false,
  readOnly: false,
};

export default TempsaveKlageButton;
