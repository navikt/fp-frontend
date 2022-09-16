import React, { FunctionComponent } from 'react';
import { Button } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';

import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';

type FormValuesUtrekk = {
  ankeVurdering?: string;
  erSubsidiartRealitetsbehandles?: boolean;
  ankeOmgjoerArsak?: string;
  ankeVurderingOmgjoer?: string;
  vedtak?: string;
  begrunnelse?: string;
  fritekstTilBrev?: string;
  sendTilKabal?: boolean;
  klageHjemmel?: string;
};

type FormValues = {
  erGodkjentAvMedunderskriver?: boolean;
  erAnkerIkkePart?: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
} & FormValuesUtrekk

const lagreVurderingOmgjoer = (values: FormValues): string => (ankeVurdering.ANKE_OMGJOER === values.ankeVurdering
  ? values.ankeVurderingOmgjoer : '-');

const lagreOmgjoerAarsak = (values: FormValues): string => (ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE === values.ankeVurdering
  || ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV === values.ankeVurdering
  || ankeVurdering.ANKE_OMGJOER === values.ankeVurdering ? values.ankeOmgjoerArsak : '-');

export const transformValues = (values: FormValues): AnkeVurderingResultatAp => ({
  påAnketKlageBehandlingUuid: values.vedtak === '0' || !values.vedtak ? null : values.vedtak,
  sendTilKabal: values.sendTilKabal,
  klageHjemmel: values.klageHjemmel,
  ankeVurdering: values.ankeVurdering,
  begrunnelse: values.begrunnelse,
  fritekstTilBrev: values.fritekstTilBrev,
  erGodkjentAvMedunderskriver: values.erGodkjentAvMedunderskriver,
  erAnkerIkkePart: values.erAnkerIkkePart,
  erIkkeKonkret: values.erIkkeKonkret,
  erFristIkkeOverholdt: values.erFristIkkeOverholdt,
  erIkkeSignert: values.erIkkeSignert,
  erSubsidiartRealitetsbehandles: values.erSubsidiartRealitetsbehandles,
  ankeOmgjoerArsak: lagreOmgjoerAarsak(values),
  ankeVurderingOmgjoer: lagreVurderingOmgjoer(values),
  kode: AksjonspunktKode.MANUELL_VURDERING_AV_ANKE,
});

interface OwnProps {
  saveAnke: (data: AnkeVurderingResultatAp) => Promise<any>;
  spinner?: boolean;
  readOnly?: boolean;
  handleSubmit: InjectedFormProps['handleSubmit'];
}

export const TempsaveAnkeButton: FunctionComponent<OwnProps> = ({
  saveAnke,
  spinner,
  readOnly,
  handleSubmit,
}) => {
  if (!readOnly) {
    return (
      <Button
        variant="primary"
        size="small"
        loading={spinner}
        onClick={handleSubmit((values: FormValues) => saveAnke(transformValues(
          values,
        )))}
        type="button"
      >
        <FormattedMessage id="Ankebehandling.TempSaveButton" />
      </Button>
    );
  }
  return null;
};

TempsaveAnkeButton.defaultProps = {
  spinner: false,
  readOnly: false,
};

export default TempsaveAnkeButton;
