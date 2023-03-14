import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Button, Heading } from '@navikt/ds-react';

import {
  VerticalSpacer, FlexContainer, FlexColumn, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { UtlandMarkeringKode } from '@navikt/fp-kodeverk';

import styles from './endreUtlandModal.module.css';

const getUtlandSakstype = (utlandMarkering?: string): string => {
  if (utlandMarkering === null || utlandMarkering === undefined) {
    return UtlandMarkeringKode.NASJONAL;
  }
  return utlandMarkering;
};

export type FormValues = {
  utlandSakstype: string;
}

interface OwnProps {
  saksnummer: string;
  utlandMarkering? :string;
  cancelEvent: () => void;
  submitCallback: (data: {
    saksnummer: string,
    utlandMarkering: string,
  } & FormValues) => void;
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
  utlandMarkering,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      utlandSakstype: getUtlandSakstype(utlandMarkering),
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
            name="utlandSakstype"
            hideLegend
            validate={[required]}
            radios={[{
              label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.Nasjonal' }),
              value: UtlandMarkeringKode.NASJONAL,
            }, {
              label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.EøsBosattNorge' }),
              value: UtlandMarkeringKode.EØS_BOSATT_NORGE,
            }, {
              label: intl.formatMessage({ id: 'MenyEndreUtlandIndex.BosattUtland' }),
              value: UtlandMarkeringKode.BOSATT_UTLAND,
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
