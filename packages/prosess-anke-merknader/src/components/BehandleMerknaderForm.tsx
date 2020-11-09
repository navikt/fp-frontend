import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, WrappedComponentProps, injectIntl } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';

import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import {
  AksjonspunktHelpTextTemp, FadingPanel, VerticalSpacer, ArrowBox,
} from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, behandlingForm, SelectField, behandlingFormValueSelector,
  hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt, AnkeVurdering, Kodeverk } from '@fpsak-frontend/types';
import CheckboxField from '@fpsak-frontend/form/src/CheckboxField';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import FritekstAnkeMerknaderTextField from './FritekstAnkeMerknaderTextField';

import styles from './behandleMerknaderForm.less';

const omgjorArsakValues = [
  { kode: ankeOmgjorArsak.PROSESSUELL_FEIL, navn: 'Ankebehandling.OmgjoeringArsak.ProsessuellFeil' },
  { kode: ankeOmgjorArsak.ULIK_VURDERING, navn: 'Ankebehandling.OmgjoeringArsak.UlikVurdering' },
  { kode: ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING, navn: 'Ankebehandling.OmgjoeringArsak.UlikRegelverkstolkning' },
  { kode: ankeOmgjorArsak.NYE_OPPLYSNINGER, navn: 'Ankebehandling.OmgjoeringArsak.NyeOpplysninger' },
];

interface OwnProps {
  saveAnke: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
  aksjonspunktCode: string;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  behandlingId: number;
  sprakkode: Kodeverk;
  behandlingVersjon: number;
  valgtTrygderettVurdering?: Kodeverk;
}

const AnkeMerknader: FunctionComponent<OwnProps & WrappedComponentProps & InjectedFormProps> = ({
  readOnly,
  handleSubmit,
  readOnlySubmitButton,
  aksjonspunktCode,
  behandlingId,
  behandlingVersjon,
  sprakkode,
  valgtTrygderettVurdering,
  intl,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <FadingPanel>
      <Undertittel><FormattedMessage id="Ankebehandling.Merknad.Title" /></Undertittel>
      <VerticalSpacer fourPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
        {[<FormattedMessage id="Ankebehandling.Merknad.HelpText" key={aksjonspunktCode} />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="7">
          <FormattedMessage id="Ankebehandling.Merknad.Merknader" />
          <RadioGroupField
            name="erMerknaderMottatt"
            validate={[required]}
            direction="horizontal"
            readOnly={readOnly}
          >
            <RadioOption value label={{ id: 'Ankebehandling.Merknad.Merknader.Ja' }} />
            <RadioOption value={false} label={{ id: 'Ankebehandling.Merknad.Merknader.Nei' }} />
          </RadioGroupField>
        </Column>
      </Row>

      <Normaltekst><FormattedMessage id="Ankebehandling.Resultat" /></Normaltekst>
      <RadioGroupField
        name="trygderettVurdering.kode"
        validate={[required]}
        readOnly={readOnly}
      >
        <RadioOption value={ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK} label={{ id: 'Ankebehandling.Resultat.Stadfest' }} />
        <RadioOption value={ankeVurderingType.ANKE_OMGJOER} label={{ id: 'Ankebehandling.Resultat.Omgjør' }} />
        <RadioOption value={ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE} label={{ id: 'Ankebehandling.Resultat.OpphevHjemsend' }} />
      </RadioGroupField>
      {ankeVurderingType.ANKE_OMGJOER === valgtTrygderettVurdering?.kode && (
        <Row>
          <Column xs="7">
            <ArrowBox alignOffset={164}>
              <RadioGroupField
                name="trygderettVurderingOmgjoer.kode"
                validate={[required]}
                readOnly={readOnly}
                className={readOnly ? styles.selectReadOnly : null}
                direction="horizontal"
              >
                <RadioOption value={ankeVurderingOmgjoer.ANKE_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Gunst' }} />
                <RadioOption value={ankeVurderingOmgjoer.ANKE_TIL_UGUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Ugunst' }} />
                <RadioOption value={ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Delvis' }} />
              </RadioGroupField>
              <VerticalSpacer fourPx />
              <SelectField
                readOnly={readOnly}
                name="trygderettOmgjoerArsak.kode"
                selectValues={omgjorArsakValues.map((arsak) => <option key={arsak.kode} value={arsak.kode}>{intl.formatMessage({ id: arsak.navn })}</option>)}
                className={readOnly ? styles.selectReadOnly : null}
                label={<FormattedMessage id="Ankebehandling.OmgjoeringArsak" />}
                validate={[required]}
                bredde="xl"
              />
            </ArrowBox>
          </Column>
        </Row>
      )}

      <VerticalSpacer sixteenPx />
      <FritekstAnkeMerknaderTextField
        sprakkode={sprakkode}
        readOnly={readOnly}
      />
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="8">
          <ProsessStegSubmitButton
            formName={formProps.form}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            isReadOnly={readOnly}
            isSubmittable={!readOnly}
            isBehandlingFormSubmitting={isBehandlingFormSubmitting}
            isBehandlingFormDirty={isBehandlingFormDirty}
            hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
            textCode="Ankebehandling.Merknad.Merknader.LagreKommentarer"
          />
        </Column>
        {!readOnly && (
          <Column xs="3">
            <CheckboxField name="avsluttBehandling" label={<FormattedMessage id="Ankebehandling.Merknad.AvsluttBehandling" />} />
          </Column>
        )}
      </Row>
    </FadingPanel>
  </form>
);

AnkeMerknader.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

const ankeMerknaderFormName = 'ankeMerknaderForm';

type FormValues = {
  erMerknaderMottatt: string;
  merknadKommentar: string;
  avsluttBehandling: string;
  trygderettVurdering: Kodeverk;
  trygderettOmgjoerArsak: Kodeverk;
  trygderettVurderingOmgjoer: Kodeverk;
}

const transformValues = (values: FormValues, aksjonspunktCode: string) => ({
  erMerknaderMottatt: values.erMerknaderMottatt,
  merknadKommentar: values.merknadKommentar,
  avsluttBehandling: values.avsluttBehandling,
  trygderettVurdering: values.trygderettVurdering,
  trygderettOmgjoerArsak: values.trygderettOmgjoerArsak,
  trygderettVurderingOmgjoer: values.trygderettVurderingOmgjoer,
  kode: aksjonspunktCode,
});

interface PureOwnProps {
  ankeVurderingResultat: AnkeVurdering['ankeVurderingResultat'];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  behandlingId: number;
  behandlingVersjon: number;
}

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat) => ({
  merknadKommentar: resultat ? resultat.merknadKommentar : null,
  erMerknaderMottatt: resultat ? resultat.erMerknaderMottatt : null,
  trygderettVurdering: resultat ? resultat.trygderettVurdering : null,
  trygderettOmgjoerArsak: resultat ? resultat.trygderettOmgjoerArsak : null,
  trygderettVurderingOmgjoer: resultat ? resultat.trygderettVurderingOmgjoer : null,
  avsluttBehandling: false,
}));

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER)]));

const mapStateToProps = (state, ownProps: PureOwnProps) => ({
  aksjonspunktCode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
  valgtTrygderettVurdering: behandlingFormValueSelector(ankeMerknaderFormName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'trygderettVurdering'),
});

const BehandleMerknaderForm = connect(mapStateToProps)(behandlingForm({
  form: ankeMerknaderFormName,
})(injectIntl(AnkeMerknader)));

export default BehandleMerknaderForm;
