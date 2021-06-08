import React, { FunctionComponent } from 'react';
import { Hovedknapp } from 'nav-frontend-knapper';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';

export type AnkeData = {
  kode: string;
  fritekstTilBrev: string;
  begrunnelse: string;
}

type FormValues = {
  begrunnelse?: string;
  fritekstTilBrev?: string;
};

const transformValues = (values: FormValues, aksjonspunktCode: string): AnkeData => ({
  kode: aksjonspunktCode,
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
});

interface OwnProps {
  aksjonspunktCode: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  saveAnke: (data: AnkeData) => Promise<any>;
  spinner?: boolean;
  readOnly?: boolean;
  handleSubmit: InjectedFormProps['handleSubmit'];
}

export const TempsaveAnkeButton: FunctionComponent<OwnProps> = ({
  saveAnke,
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
        onClick={handleSubmit((values: FormValues) => saveAnke(transformValues(
          values,
          aksjonspunktCode,
        )))}
      >
        <FormattedMessage id="Ankebehandling.TempSaveButton" />
      </Hovedknapp>
    )}
  </>
);

TempsaveAnkeButton.defaultProps = {
  spinner: false,
  readOnly: false,
};

export default TempsaveAnkeButton;
