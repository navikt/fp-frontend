import React from 'react';
import { FormSection, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';
import { Undertittel } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import getRegisteredFields from '../../papirsoknadUtils';
import VirksomhetIdentifikasjonPanel from './VirksomhetIdentifikasjonPanel';
import VirksomhetRegnskapPanel from './VirksomhetRegnskapPanel';
import VirksomhetStartetEndretPanel from './VirksomhetStartetEndretPanel';
import VirksomhetRelasjonPanel from './VirksomhetRelasjonPanel';
import VirksomhetTypeNaringPanel from './VirksomhetTypeNaringPanel';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './registrerVirksomhetModalForm... Remove this comment to see the full error message
import styles from './registrerVirksomhetModalForm.less';

const REGISTRER_VIRKSOMHET_FORM_NAME = 'VirksomhetForm';
const TYPE_VIRKSOMHET_PREFIX = 'typeVirksomhet';

type OwnRegistrerVirksomhetModalFormProps = {
    showModal?: boolean;
    closeEvent: (...args: any[]) => any;
    handleSubmit: (...args: any[]) => any;
    readOnly?: boolean;
    intl: {};
    alleKodeverk: {};
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'RegistrerVirksomhetModalFormProps' cir... Remove this comment to see the full error message
type RegistrerVirksomhetModalFormProps = OwnRegistrerVirksomhetModalFormProps & typeof RegistrerVirksomhetModalForm.defaultProps;

/**
 * RegistrerVirksomhetModalForm
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'RegistrerVirksomhetModalForm' implicitly has type... Remove this comment to see the full error message
export const RegistrerVirksomhetModalForm = ({
  showModal, closeEvent, handleSubmit, readOnly, intl, alleKodeverk,
}: RegistrerVirksomhetModalFormProps) => (
  <Modal
    className={styles.modal}
    isOpen={showModal}
    contentLabel={intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.ModalDescription' })}
    onRequestClose={closeEvent}
    closeButton={false}
    shouldCloseOnOverlayClick={false}
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'ariaHideApp' does not exist on type 'Int... Remove this comment to see the full error message
    ariaHideApp={false}
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
          form={REGISTRER_VIRKSOMHET_FORM_NAME}
          namePrefix={TYPE_VIRKSOMHET_PREFIX}
          alleKodeverk={alleKodeverk}
        />
      </FormSection>
      <VirksomhetStartetEndretPanel readOnly={readOnly} form={REGISTRER_VIRKSOMHET_FORM_NAME} />
      <VirksomhetRegnskapPanel readOnly={readOnly} form={REGISTRER_VIRKSOMHET_FORM_NAME} />
      <VirksomhetRelasjonPanel readOnly={readOnly} form={REGISTRER_VIRKSOMHET_FORM_NAME} />
      <VerticalSpacer sixteenPx />
      <Hovedknapp
        htmlType="button"
        onClick={handleSubmit}
        // @ts-expect-error ts-migrate(2769) FIXME: Property 'readOnly' does not exist on type 'Intrin... Remove this comment to see the full error message
        readOnly={readOnly}
        className={styles.savebutton}
        mini
      >
        {intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.Save' })}
      </Hovedknapp>
      <Knapp
        htmlType="button"
        onClick={closeEvent}
        // @ts-expect-error ts-migrate(2769) FIXME: Property 'readOnly' does not exist on type 'Intrin... Remove this comment to see the full error message
        readOnly={readOnly}
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
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
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
// @ts-expect-error ts-migrate(2345) FIXME: Type 'WeakValidationMap<WithIntlProps<WrappedCompo... Remove this comment to see the full error message
})(injectIntl(RegistrerVirksomhetModalForm)));
