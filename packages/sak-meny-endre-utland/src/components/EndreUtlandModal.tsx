import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Button, Heading } from '@navikt/ds-react';

import {
  VerticalSpacer, FlexContainer, FlexColumn, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FagsakMarkeringKode } from '@navikt/fp-kodeverk';

import styles from './endreUtlandModal.module.css';

export type FormValues = {
  saksnummer: string;
  fagsakMarkering: string;
}

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
    <Modal
      className={styles.modal}
      open
      closeButton
      aria-label={intl.formatMessage({ id: 'MenyEndreUtlandIndex.UtlandTittel' })}
      onClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Form formMethods={formMethods} onSubmit={submitCallback}>
          <Heading size="small">
            <FormattedMessage id="MenyEndreUtlandIndex.UtlandTittel" />
          </Heading>
          <VerticalSpacer sixteenPx />
          <RadioGroupPanel
            name="fagsakMarkering"
            hideLegend
            validate={[required]}
            radios={[{
              label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.Nasjonal' }),
              value: FagsakMarkeringKode.NASJONAL,
            }, {
              label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.EøsBosattNorge' }),
              value: FagsakMarkeringKode.EØS_BOSATT_NORGE,
            }, {
              label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.BosattUtland' }),
              value: FagsakMarkeringKode.BOSATT_UTLAND,
            }, {
              label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.SammensattKontroll' }),
              value: FagsakMarkeringKode.SAMMENSATT_KONTROLL,
            }]}
          />
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                >
                  <FormattedMessage id="MenyEndreUtlandIndex.Ok" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button
                  size="small"
                  variant="secondary"
                  onClick={cancelEvent}
                  type="button"
                >
                  <FormattedMessage id="MenyEndreUtlandIndex.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EndreUtlandModal;
