import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Button, Heading } from '@navikt/ds-react';

import { RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FagsakMarkeringKode } from '@navikt/fp-kodeverk';

import styles from './endreUtlandModal.module.css';

export type FormValues = {
  saksnummer: string;
  fagsakMarkering: string;
};

interface OwnProps {
  saksnummer: string;
  fagsakMarkering?: string;
  cancelEvent: () => void;
  submitCallback: (formData: FormValues) => void;
}

/**
 * EndreUtlandModal
 *
 * Presentasjonskomponent. Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
 * Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.
 */
const EndreUtlandModal: FunctionComponent<OwnProps> = ({
  submitCallback,
  cancelEvent,
  saksnummer,
  fagsakMarkering,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      saksnummer,
      fagsakMarkering: fagsakMarkering || FagsakMarkeringKode.NASJONAL,
    },
  });

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <Modal
        className={styles.modal}
        open
        aria-label={intl.formatMessage({ id: 'MenyEndreUtlandIndex.UtlandTittel' })}
        onClose={cancelEvent}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="MenyEndreUtlandIndex.UtlandTittel" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <RadioGroupPanel
            name="fagsakMarkering"
            hideLegend
            validate={[required]}
            radios={[
              {
                label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.Nasjonal' }),
                value: FagsakMarkeringKode.NASJONAL,
              },
              {
                label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.EøsBosattNorge' }),
                value: FagsakMarkeringKode.EØS_BOSATT_NORGE,
              },
              {
                label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.BosattUtland' }),
                value: FagsakMarkeringKode.BOSATT_UTLAND,
              },
              {
                label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.SelvstendigNæring' }),
                value: FagsakMarkeringKode.SELVSTENDIG_NÆRING,
              },
              {
                label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.DødDødfødsel' }),
                value: FagsakMarkeringKode.DØD_DØDFØDSEL,
              },
              {
                label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.SammensattKontroll' }),
                value: FagsakMarkeringKode.SAMMENSATT_KONTROLL,
              },
              {
                label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.PraksisUtsettelse' }),
                value: FagsakMarkeringKode.PRAKSIS_UTSETTELSE,
              },
            ]}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="primary">
            <FormattedMessage id="MenyEndreUtlandIndex.Ok" />
          </Button>
          <Button size="small" variant="secondary" onClick={cancelEvent} type="button">
            <FormattedMessage id="MenyEndreUtlandIndex.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default EndreUtlandModal;
