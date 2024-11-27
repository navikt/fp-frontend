import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading,Modal } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk } from '@navikt/fp-types';

import { FormValues as IdFormValues,VirksomhetIdentifikasjonPanel } from './VirksomhetIdentifikasjonPanel';
import { FormValues as RegnskapFormValues,VirksomhetRegnskapPanel } from './VirksomhetRegnskapPanel';
import { FormValues as RelasjonFormValues,VirksomhetRelasjonPanel } from './VirksomhetRelasjonPanel';
import { FormValues as StartedEndretFormValues,VirksomhetStartetEndretPanel } from './VirksomhetStartetEndretPanel';
import { FormValues as TypeNaringFormValues,VirksomhetTypeNaringPanel } from './VirksomhetTypeNaringPanel';

import styles from './registrerVirksomhetModalForm.module.css';

export type FormValues = IdFormValues &
  RelasjonFormValues &
  RegnskapFormValues &
  StartedEndretFormValues &
  TypeNaringFormValues;

interface Props {
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
export const RegistrerVirksomhetModalForm = ({
  showModal = false,
  readOnly = false,
  closeEvent,
  onSubmit,
  alleKodeverk,
  virksomhet,
}: Props) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: virksomhet,
  });

  return (
    <Form formMethods={formMethods}>
      <Modal
        open={showModal}
        aria-label={intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetModalForm.ModalDescription' })}
        onClose={closeEvent}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Title" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VirksomhetIdentifikasjonPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
          <VirksomhetTypeNaringPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
          <VirksomhetStartetEndretPanel readOnly={readOnly} />
          <VirksomhetRegnskapPanel readOnly={readOnly} />
          <VerticalSpacer sixteenPx />
          <VirksomhetRelasjonPanel readOnly={readOnly} />
          <VerticalSpacer sixteenPx />
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            onClick={formMethods.handleSubmit(onSubmit)}
            disabled={readOnly}
            className={styles.savebutton}
            type="button"
          >
            <FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Save" />
          </Button>
          <Button
            size="small"
            variant="secondary"
            onClick={closeEvent}
            disabled={readOnly}
            className={styles.cancelbutton}
            type="button"
          >
            <FormattedMessage id="Registrering.RegistrerVirksomhetModalForm.Cancel" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
