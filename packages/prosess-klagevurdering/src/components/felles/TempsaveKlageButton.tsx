import React, { FunctionComponent } from 'react';
import { Hovedknapp } from 'nav-frontend-knapper';
import { FormattedMessage } from 'react-intl';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';

const transformValues = (klageVurdering: string, klageMedholdArsak: string, klageVurderingOmgjoer: string,
  fritekstTilBrev: string, begrunnelse: string, aksjonspunktCode: string) => ({
  kode: aksjonspunktCode,
  klageMedholdArsak: (klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE
    || klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK) ? klageMedholdArsak : null,
  klageVurderingOmgjoer: klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE ? klageVurderingOmgjoer : null,
  fritekstTilBrev,
  begrunnelse,
  klageVurdering,
});

interface OwnProps {
  aksjonspunktCode: string;
  klageVurdering: string,
  klageMedholdArsak: string,
  klageVurderingOmgjoer: string,
  fritekstTilBrev: string,
  begrunnelse: string,
  saveKlage: (data: any) => Promise<any>;
  spinner?: boolean;
  readOnly?: boolean;
}

const TempsaveKlageButton: FunctionComponent<OwnProps> = ({
  klageVurdering,
  klageMedholdArsak,
  klageVurderingOmgjoer,
  fritekstTilBrev,
  begrunnelse,
  saveKlage,
  spinner,
  aksjonspunktCode,
  readOnly,
}) => {
  const tempSave = (event: any) => {
    event.preventDefault();
    saveKlage(transformValues(klageVurdering, klageMedholdArsak, klageVurderingOmgjoer, fritekstTilBrev,
      begrunnelse, aksjonspunktCode));
  };

  return (
    <div>
      {!readOnly && (
        <Hovedknapp
          mini
          htmlType="button"
          spinner={spinner}
          onClick={(event) => tempSave(event)}
        >
          <FormattedMessage id="Klage.ResolveKlage.TempSaveButton" />
        </Hovedknapp>
      )}
    </div>
  );
};

TempsaveKlageButton.defaultProps = {
  spinner: false,
  readOnly: false,
};

export default TempsaveKlageButton;
