import React, { FunctionComponent } from 'react';
import {
  FormSection, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';
import { Undertittel } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { getRegisteredFields } from '@fpsak-frontend/papirsoknad-felles';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import VirksomhetIdentifikasjonPanel from './VirksomhetIdentifikasjonPanel';
import VirksomhetRegnskapPanel from './VirksomhetRegnskapPanel';
import VirksomhetStartetEndretPanel from './VirksomhetStartetEndretPanel';
import VirksomhetRelasjonPanel from './VirksomhetRelasjonPanel';
import VirksomhetTypeNaringPanel from './VirksomhetTypeNaringPanel';

import styles from './registrerVirksomhetModalForm.less';

const REGISTRER_VIRKSOMHET_FORM_NAME = 'VirksomhetForm';
const TYPE_VIRKSOMHET_PREFIX = 'typeVirksomhet';

interface OwnProps {
  showModal?: boolean;
  closeEvent: () => void;
  readOnly?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/**
 * RegistrerVirksomhetModalForm
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const RegistrerVirksomhetModalForm: FunctionComponent<OwnProps & WrappedComponentProps & InjectedFormProps> = ({
  showModal,
  closeEvent,
  handleSubmit,
  readOnly,
  intl,
  alleKodeverk,
}) => (
  <Modal
    className={styles.modal}
    isOpen={showModal}
    contentLabel={intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.ModalDescription' })}
    onRequestClose={closeEvent}
    closeButton={false}
    shouldCloseOnOverlayClick={false}
  >
    <form className={styles.form}>
      <Undertittel><FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Title" /></Undertittel>
      <VerticalSpacer twentyPx />
      <VirksomhetIdentifikasjonPanel
        intl={intl}
        readOnly={readOnly}
        form={REGISTRER_VIRKSOMHET_FORM_NAME}
        alleKodeverk={alleKodeverk}
      />
      <FormSection name={TYPE_VIRKSOMHET_PREFIX}>
        <VirksomhetTypeNaringPanel
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      </FormSection>
      <VirksomhetStartetEndretPanel readOnly={readOnly} form={REGISTRER_VIRKSOMHET_FORM_NAME} />
      <VirksomhetRegnskapPanel readOnly={readOnly} form={REGISTRER_VIRKSOMHET_FORM_NAME} />
      <VirksomhetRelasjonPanel readOnly={readOnly} />
      <VerticalSpacer sixteenPx />
      <Hovedknapp
        htmlType="button"
        onClick={handleSubmit}
        disabled={readOnly}
        className={styles.savebutton}
        mini
      >
        {intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.Save' })}
      </Hovedknapp>
      <Knapp
        htmlType="button"
        onClick={closeEvent}
        disabled={readOnly}
        className={styles.cancelbutton}
        mini
      >
        {intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.Cancel' })}
      </Knapp>
    </form>
  </Modal>
);

RegistrerVirksomhetModalForm.defaultProps = {
  showModal: false,
  readOnly: false,
};

const mapStateToProps = (state: any) => {
  const registeredFields = getRegisteredFields(REGISTRER_VIRKSOMHET_FORM_NAME)(state);
  // @ts-ignore Fiks
  const registeredFieldNames = registeredFields ? Object.values(registeredFields).map((rf) => rf.name) : [];
  const valuesForRegisteredFieldsOnly = registeredFieldNames.length
    ? formValueSelector(REGISTRER_VIRKSOMHET_FORM_NAME)(state, ...registeredFieldNames)
    : {};
  return {
    valuesForRegisteredFieldsOnly,
  };
};

export default connect(mapStateToProps)(reduxForm({
  enableReinitialize: true,
  validate: VirksomhetIdentifikasjonPanel.validate,
  form: REGISTRER_VIRKSOMHET_FORM_NAME,
})(injectIntl(RegistrerVirksomhetModalForm)));
