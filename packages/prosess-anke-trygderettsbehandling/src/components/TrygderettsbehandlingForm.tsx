import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';

import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer, ArrowBox,
} from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption, SelectField } from '@fpsak-frontend/form';
import { required } from '@navikt/ft-utils';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  Aksjonspunkt, AnkeVurdering, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import CheckboxField from '@fpsak-frontend/form/src/CheckboxField';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeMerknaderResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FritekstAnkeMerknaderTextField from './FritekstAnkeMerknaderTextField';

import styles from './trygderettsbehandlingForm.less';

const ankeOmgjorArsakRekkefolge = [
  ankeOmgjorArsak.NYE_OPPLYSNINGER,
  ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
  ankeOmgjorArsak.ULIK_VURDERING,
  ankeOmgjorArsak.PROSESSUELL_FEIL,
];

type FormValues = {
  erMerknaderMottatt?: boolean;
  merknadKommentar?: string;
  avsluttBehandling?: boolean;
  trygderettVurdering?: string;
  trygderettOmgjoerArsak?: string;
  trygderettVurderingOmgjoer?: string;
}

interface PureOwnProps {
  ankeVurderingResultat: AnkeVurdering['ankeVurderingResultat'];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AnkeMerknaderResultatAp) => Promise<void>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: string;
  ankeOmgorArsaker: KodeverkMedNavn[];
}

interface MappedOwnProps {
  aksjonspunktCode: string;
  valgtTrygderettVurdering?: string;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

export const TrygderettsbehandlingForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  handleSubmit,
  readOnlySubmitButton,
  aksjonspunktCode,
  sprakkode,
  valgtTrygderettVurdering,
  ankeOmgorArsaker,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <Undertittel><FormattedMessage id="Ankebehandling.Merknad.Title" /></Undertittel>
    <VerticalSpacer sixteenPx />
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

    <VerticalSpacer sixteenPx />
    <FritekstAnkeMerknaderTextField
      sprakkode={sprakkode}
      readOnly={readOnly}
    />
    <VerticalSpacer sixteenPx />
    <Normaltekst><FormattedMessage id="Ankebehandling.Resultat" /></Normaltekst>
    <VerticalSpacer fourPx />
    <RadioGroupField
      name="trygderettVurdering"
      validate={[required]}
      direction="horizontal"
      readOnly={readOnly}
    >
      <RadioOption value={ankeVurderingType.ANKE_OMGJOER} label={{ id: 'Ankebehandling.Resultat.Omgjør' }} />
      <RadioOption value={ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE} label={{ id: 'Ankebehandling.Resultat.Opphev' }} />
      <RadioOption value={ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV} label={{ id: 'Ankebehandling.Resultat.Hjemsend' }} />
      <RadioOption value={ankeVurderingType.ANKE_AVVIS} label={{ id: 'Ankebehandling.Resultat.Avvis' }} />
      <RadioOption value={ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK} label={{ id: 'Ankebehandling.Resultat.Stadfest' }} />
    </RadioGroupField>
    {ankeVurderingType.ANKE_OMGJOER === valgtTrygderettVurdering && (
      <Row>
        <Column xs="7">
          <ArrowBox>
            <SelectField
              readOnly={readOnly}
              name="trygderettOmgjoerArsak"
              selectValues={ankeOmgjorArsakRekkefolge
                .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
              className={readOnly ? styles.selectReadOnly : null}
              label={<FormattedMessage id="Ankebehandling.OmgjoeringArsak" />}
              validate={[required]}
              bredde="xl"
            />
            <VerticalSpacer sixteenPx />
            <RadioGroupField
              name="trygderettVurderingOmgjoer"
              validate={[required]}
              readOnly={readOnly}
              className={readOnly ? styles.selectReadOnly : null}
              direction="horizontal"
            >
              <RadioOption value={ankeVurderingOmgjoer.ANKE_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Gunst' }} />
              <RadioOption value={ankeVurderingOmgjoer.ANKE_TIL_UGUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Ugunst' }} />
              <RadioOption value={ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST} label={{ id: 'Ankebehandling.VurderingOmgjoer.Delvis' }} />
            </RadioGroupField>
          </ArrowBox>
        </Column>
      </Row>
    )}
    {(ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === valgtTrygderettVurdering
      || ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === valgtTrygderettVurdering) && (
      <Row>
        <Column xs="7">
          <ArrowBox alignOffset={180}>
            <SelectField
              readOnly={readOnly}
              name="trygderettOmgjoerArsak"
              selectValues={ankeOmgjorArsakRekkefolge
                .map((arsak) => <option key={arsak} value={arsak}>{ankeOmgorArsaker.find((aoa) => aoa.kode === arsak)?.navn}</option>)}
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
    <Row>
      <Column xs="8">
        <ProsessStegSubmitButton
          formName={formProps.form}
          isReadOnly={readOnly}
          isSubmittable={!readOnly}
          text={intl.formatMessage({ id: 'Ankebehandling.Merknad.Merknader.LagreKommentarer' })}
        />
      </Column>
      {!readOnly && (
      <Column xs="3">
        <CheckboxField name="avsluttBehandling" label={<FormattedMessage id="Ankebehandling.Merknad.AvsluttBehandling" />} />
      </Column>
      )}
    </Row>
  </form>
);

TrygderettsbehandlingForm.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

const ankeMerknaderFormName = 'ankeMerknaderForm';

const lagreOmgjoerAarsak = (values: FormValues): string | string => (ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === values.trygderettVurdering
    || ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === values.trygderettVurdering
    || ankeVurderingType.ANKE_OMGJOER === values.trygderettVurdering ? values.trygderettOmgjoerArsak : '-');

const lagreVurderingOmgjoer = (values: FormValues): string | string => (ankeVurderingType.ANKE_OMGJOER === values.trygderettVurdering
  ? values.trygderettVurderingOmgjoer : '-');

const transformValues = (values: FormValues): AnkeMerknaderResultatAp => ({
  erMerknaderMottatt: values.erMerknaderMottatt,
  merknadKommentar: values.merknadKommentar,
  avsluttBehandling: values.avsluttBehandling,
  trygderettVurdering: values.trygderettVurdering,
  trygderettOmgjoerArsak: lagreOmgjoerAarsak(values),
  trygderettVurderingOmgjoer: lagreVurderingOmgjoer(values),
  kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
});

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat): FormValues => ({
  merknadKommentar: resultat ? resultat.merknadKommentar : null,
  erMerknaderMottatt: resultat ? resultat.erMerknaderMottatt : null,
  trygderettVurdering: resultat ? resultat.trygderettVurdering : null,
  trygderettOmgjoerArsak: resultat ? resultat.trygderettOmgjoerArsak : null,
  trygderettVurderingOmgjoer: resultat ? resultat.trygderettVurderingOmgjoer : null,
  avsluttBehandling: false,
}));

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  aksjonspunktCode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
  valgtTrygderettVurdering: formValueSelector(ankeMerknaderFormName)(state, 'trygderettVurdering'),
});

export default connect(mapStateToProps)(reduxForm({
  form: ankeMerknaderFormName,
  destroyOnUnmount: false,
})(injectIntl(TrygderettsbehandlingForm)));
