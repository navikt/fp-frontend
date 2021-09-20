import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';

import { SelectField, TextAreaField, Form } from '@fpsak-frontend/form-hooks';
import { hasValidText, maxLength, required } from '@fpsak-frontend/utils';
import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './endreBehandlendeEnhetModal.less';

const maxLength400 = maxLength(400);

export type FormValues = {
  nyEnhet: string;
  begrunnelse: string;
}

interface OwnProps {
  lukkModal: () => void;
  behandlendeEnheter: {
    enhetId: string;
    enhetNavn: string;
  }[];
  gjeldendeBehandlendeEnhetId?: string;
  gjeldendeBehandlendeEnhetNavn?: string;
  handleSubmit: (formValues: FormValues) => void;
}

/**
 * EndreBehandlendeEnhetModal
 *
 * Presentasjonskomponent. Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
 * Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.
 */
export const EndreBehandlendeEnhetModal: FunctionComponent<OwnProps> = ({
  handleSubmit,
  lukkModal,
  behandlendeEnheter,
  gjeldendeBehandlendeEnhetId,
  gjeldendeBehandlendeEnhetNavn,
}) => {
  const selectOptions = () => behandlendeEnheter
    .map((enhet, index) => (
      <option value={`${index}`} key={enhet.enhetId}>
        {`${enhet.enhetId} ${enhet.enhetNavn}`}
      </option>
    ));

  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const nyEnhet = formMethods.watch('nyEnhet');
  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <Modal
      className={styles.modal}
      isOpen
      closeButton={false}
      contentLabel={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.ModalDescription' })}
      onRequestClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
      <Form formMethods={formMethods} onSubmit={handleSubmit}>
        <Row className={styles.infotekst}>
          <Column xs="1">
            <Image className={styles.image} alt={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Endre' })} src={innvilgetImageUrl} />
            <div className={styles.divider} />
          </Column>
          <Column xs="11">
            <Normaltekst className={styles.infotekstBeskrivelse}><FormattedMessage id="EndreBehandlendeEnhetModal.EndreEnhet" /></Normaltekst>
          </Column>
        </Row>
        <Row>
          <Column xs="1" />
          <Column xs="5">
            <SelectField
              name="nyEnhet"
              label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.NyEnhetField' })}
              validate={[required]}
              placeholder={`${gjeldendeBehandlendeEnhetId} ${gjeldendeBehandlendeEnhetNavn}`}
              selectValues={selectOptions()}
              bredde="xl"
            />
          </Column>
        </Row>
        <Row>
          <Column xs="1" />
          <Column xs="8">
            <VerticalSpacer eightPx />
            <TextAreaField
              name="begrunnelse"
              label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.BegrunnelseField' })}
              validate={[required, maxLength400, hasValidText]}
              maxLength={400}
            />
          </Column>
        </Row>
        <Row>
          <Column xs="1" />
          <Column xs="8">
            <VerticalSpacer sixteenPx />
            <div className={styles.floatButtons}>
              <Hovedknapp
                mini
                className={styles.button}
                disabled={!(nyEnhet && begrunnelse)}
              >
                {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Ok' })}
              </Hovedknapp>
              <Knapp
                htmlType="button"
                mini
                onClick={lukkModal}
              >
                {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Avbryt' })}
              </Knapp>
            </div>
          </Column>
        </Row>
      </Form>
    </Modal>
  );
};

export default EndreBehandlendeEnhetModal;
