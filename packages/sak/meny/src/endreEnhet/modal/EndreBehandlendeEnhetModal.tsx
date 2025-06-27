import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal, VStack } from '@navikt/ds-react';
import { Form, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';

import styles from './endreBehandlendeEnhetModal.module.css';

const maxLength400 = maxLength(400);

export type FormValues = {
  nyEnhet: string;
  begrunnelse: string;
};

interface Props {
  lukkModal: () => void;
  behandlendeEnheter: {
    enhetId: string;
    enhetNavn: string;
  }[];
  gjeldendeBehandlendeEnhetId: string;
  gjeldendeBehandlendeEnhetNavn: string;
  handleSubmit: (formValues: FormValues) => void;
}

/**
 * EndreBehandlendeEnhetModal
 *
 * Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
 * Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.
 */
export const EndreBehandlendeEnhetModal = ({
  handleSubmit,
  lukkModal,
  behandlendeEnheter,
  gjeldendeBehandlendeEnhetId,
  gjeldendeBehandlendeEnhetNavn,
}: Props) => {
  const options = behandlendeEnheter.map((enhet, index) => (
    <option key={enhet.enhetId} value={`${index}`}>
      {`${enhet.enhetId} ${enhet.enhetNavn}`}
    </option>
  ));

  const selectOptions = [
    <option key={gjeldendeBehandlendeEnhetId} disabled>
      {`${gjeldendeBehandlendeEnhetId} ${gjeldendeBehandlendeEnhetNavn}`}
    </option>,
  ].concat(options);

  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const nyEnhet = formMethods.watch('nyEnhet');
  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <Form formMethods={formMethods} onSubmit={handleSubmit}>
      <Modal
        className={styles.modal}
        open
        aria-label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.ModalDescription' })}
        onClose={lukkModal}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="EndreBehandlendeEnhetModal.EndreEnhet" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="4">
            <RhfSelect
              name="nyEnhet"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.NyEnhetField' })}
              validate={[required]}
              selectValues={selectOptions}
              className={styles.selectWidth}
            />
            <RhfTextarea
              name="begrunnelse"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.BegrunnelseField' })}
              validate={[required, maxLength400, hasValidText]}
              maxLength={400}
            />
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary" className={styles.button} disabled={!(nyEnhet && begrunnelse)}>
            {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Ok' })}
          </Button>
          <Button size="small" variant="secondary" onClick={lukkModal} type="button">
            {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Avbryt' })}
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
