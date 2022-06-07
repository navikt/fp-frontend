import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';
import { Undertittel } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk } from '@navikt/ft-types';
import { Form } from '@navikt/ft-form-hooks';

import VirksomhetIdentifikasjonPanel, { FormValues as IdFormValues } from './VirksomhetIdentifikasjonPanel';
import VirksomhetRegnskapPanel, { FormValues as RegnskapFormValues } from './VirksomhetRegnskapPanel';
import VirksomhetStartetEndretPanel, { FormValues as StartedEndretFormValues } from './VirksomhetStartetEndretPanel';
import VirksomhetRelasjonPanel, { FormValues as RelasjonFormValues } from './VirksomhetRelasjonPanel';
import VirksomhetTypeNaringPanel, { FormValues as TypeNaringFormValues } from './VirksomhetTypeNaringPanel';

import styles from './registrerVirksomhetModalForm.less';

export type FormValues = IdFormValues
  & RelasjonFormValues
  & RegnskapFormValues
  & StartedEndretFormValues
  & TypeNaringFormValues;

interface OwnProps {
  showModal?: boolean;
  onSubmit: (value: FormValues) => void;
  closeEvent: () => void;
  readOnly?: boolean;
  alleKodeverk: AlleKodeverk;
  virksomhet?: FormValues;
}

/**
 * RegistrerVirksomhetModalForm
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
 * foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.
 */
const RegistrerVirksomhetModalForm: FunctionComponent<OwnProps> = ({
  showModal = false,
  readOnly = false,
  closeEvent,
  onSubmit,
  alleKodeverk,
  virksomhet,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: virksomhet,
  });

  return (
    <Modal
      className={styles.modal}
      isOpen={showModal}
      contentLabel={intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.ModalDescription' })}
      onRequestClose={closeEvent}
      closeButton={false}
      shouldCloseOnOverlayClick={false}
    >
      <div className={styles.form}>
        <Form
          formMethods={formMethods}
        >
          <Undertittel><FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Title" /></Undertittel>
          <VerticalSpacer twentyPx />
          <VirksomhetIdentifikasjonPanel
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
          <VirksomhetTypeNaringPanel
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
          <VirksomhetStartetEndretPanel readOnly={readOnly} />
          <VirksomhetRegnskapPanel readOnly={readOnly} />
          <VirksomhetRelasjonPanel readOnly={readOnly} />
          <VerticalSpacer sixteenPx />
          <Hovedknapp
            htmlType="button"
            onClick={async () => {
              const isValid = await formMethods.trigger();
              if (isValid) {
                onSubmit(formMethods.getValues());
              }
              return Promise.resolve();
            }}
            disabled={readOnly}
            className={styles.savebutton}
            mini
          >
            <FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Save" />
          </Hovedknapp>
          <Knapp
            htmlType="button"
            onClick={closeEvent}
            disabled={readOnly}
            className={styles.cancelbutton}
            mini
          >
            <FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Cancel" />
          </Knapp>
        </Form>
      </div>
    </Modal>
  );
};

export default RegistrerVirksomhetModalForm;
