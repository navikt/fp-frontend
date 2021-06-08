import React, { FunctionComponent } from 'react';
import { Hovedknapp } from 'nav-frontend-knapper';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';

import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { Kodeverk } from '@fpsak-frontend/types';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';

type FormValuesUtrekk = {
  ankeVurdering?: Kodeverk;
  erSubsidiartRealitetsbehandles?: boolean;
  ankeOmgjoerArsak?: Kodeverk;
  ankeVurderingOmgjoer?: Kodeverk;
  vedtak?: string;
  begrunnelse?: string;
  fritekstTilBrev?: string;
};

type FormValues = {
  erGodkjentAvMedunderskriver?: boolean;
  erAnkerIkkePart?: boolean;
  erIkkeKonkret: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeSignert: boolean;
} & FormValuesUtrekk

const lagreVurderingOmgjoer = (values: FormValues): Kodeverk | string => (ankeVurdering.ANKE_OMGJOER === values.ankeVurdering?.kode
  ? values.ankeVurderingOmgjoer : '-');

const lagreOmgjoerAarsak = (values: FormValues): Kodeverk | string => (ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE === values.ankeVurdering?.kode
  || ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV === values.ankeVurdering?.kode
  || ankeVurdering.ANKE_OMGJOER === values.ankeVurdering?.kode ? values.ankeOmgjoerArsak : '-');

export const transformValues = (values: FormValues): AnkeVurderingResultatAp => ({
  vedtakBehandlingUuid: values.vedtak === '0' || !values.vedtak ? null : values.vedtak,
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
}) => (
  <>
    {!readOnly && (
      <Hovedknapp
        mini
        htmlType="button"
        spinner={spinner}
        onClick={handleSubmit((values: FormValues) => saveAnke(transformValues(
          values,
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
