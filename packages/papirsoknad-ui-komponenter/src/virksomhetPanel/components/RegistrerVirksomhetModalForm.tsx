import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Button, Modal, Heading } from '@navikt/ds-react';
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
    defaultValues: virksomhet,
  });

  return (
    <Modal
      className={styles.modal}
      open={showModal}
      aria-label={intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.ModalDescription' })}
      onClose={closeEvent}
      closeButton={false}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <div className={styles.form}>
          <Form
            formMethods={formMethods}
          >
            <Heading size="small"><FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Title" /></Heading>
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
            <VerticalSpacer sixteenPx />
            <VirksomhetRelasjonPanel readOnly={readOnly} />
            <VerticalSpacer sixteenPx />
            <Button
              size="small"
              variant="primary"
              onClick={formMethods.handleSubmit(onSubmit)}
              disabled={readOnly}
              className={styles.savebutton}
            >
              <FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Save" />
            </Button>
            <Button
              size="small"
              variant="secondary"
              onClick={closeEvent}
              disabled={readOnly}
              className={styles.cancelbutton}
            >
              <FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Cancel" />
            </Button>
          </Form>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default RegistrerVirksomhetModalForm;
