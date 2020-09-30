import React, { FunctionComponent } from 'react';
import { Hovedknapp } from 'nav-frontend-knapper';
import { FormattedMessage } from 'react-intl';

const transformValues = (fritekstTilBrev: string, begrunnelse: string, aksjonspunktCode: string) => ({
  kode: aksjonspunktCode,
  fritekstTilBrev,
  begrunnelse,
});

interface OwnProps {
  aksjonspunktCode: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  saveAnke: (...args: any[]) => any;
  spinner?: boolean;
  readOnly?: boolean;
}

export const TempsaveAnkeButton: FunctionComponent<OwnProps> = ({
  fritekstTilBrev,
  begrunnelse,
  saveAnke,
  spinner,
  aksjonspunktCode,
  readOnly,
}) => {
  const tempSave = (event: any) => {
    event.preventDefault();
    saveAnke(transformValues(fritekstTilBrev, begrunnelse, aksjonspunktCode));
  };

  return (
    <div>
      {!readOnly && (
        <Hovedknapp
          mini
          htmlType="button"
          spinner={spinner}
          onClick={(event) => { tempSave(event); }}
        >
          <FormattedMessage id="Ankebehandling.TempSaveButton" />
        </Hovedknapp>
      )}
    </div>
  );
};

TempsaveAnkeButton.defaultProps = {
  spinner: false,
  readOnly: false,
};

export default TempsaveAnkeButton;
