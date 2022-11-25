import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import {
  Button, BodyShort, Modal, Heading, Label,
} from '@navikt/ds-react';
import { Datepicker, Form } from '@navikt/ft-form-hooks';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  FlexColumn, FlexContainer, FlexRow, Image, PeriodLabel, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import { DokumentasjonVurderingBehov } from '@fpsak-frontend/types';
import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';

import styles from './delOppPeriodeModal.less';

interface OwnProps {
  valgtDokBehov: DokumentasjonVurderingBehov;
  cancel: () => void;
  submit: (dato: string) => void;
  visSlettEtterfølgendePerioder: boolean;
}

const DelOppPeriodeModal: FunctionComponent<OwnProps> = ({
  valgtDokBehov,
  visSlettEtterfølgendePerioder,
  cancel,
  submit,
}) => {
  const intl = useIntl();

  const formMethods = useForm<{ dato: string }>();

  return (
    <Modal
      closeButton={false}
      open
      aria-label={intl.formatMessage({ id: 'DelOppPeriodeModal.Periode' })}
      onClose={cancel}
      className={styles.modal}
    >
      <Modal.Content>
        {visSlettEtterfølgendePerioder && (
          <>
            <Heading size="small">
              <FormattedMessage id="DelOppPeriodeModal.RedigerPeriode" />
            </Heading>
            <VerticalSpacer sixteenPx />
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Image
                    alt={intl.formatMessage({ id: 'DelOppPeriodeModal.Nullstilles' })}
                    src={advarselImageUrl}
                    className={styles.image}
                  />
                </FlexColumn>
                <FlexColumn className={styles.text}>
                  <BodyShort size="small">
                    <FormattedMessage id="DelOppPeriodeModal.Nullstilles" />
                  </BodyShort>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
          </>
        )}
        <Label size="small">
          <FormattedMessage id="DelOppPeriodeModal.Periode" />
        </Label>
        <VerticalSpacer fourPx />
        <BodyShort size="small">
          <PeriodLabel dateStringFom={valgtDokBehov.fom} dateStringTom={valgtDokBehov.tom} />
        </BodyShort>
        <VerticalSpacer twentyPx />
        <BodyShort size="small">
          <FormattedMessage id="DelOppPeriodeModal.Splitt" />
        </BodyShort>
        <VerticalSpacer sixteenPx />
        <Form formMethods={formMethods} onSubmit={(values) => submit(values.dato)}>
          <Datepicker
            name="dato"
            label={<FormattedMessage id="DelOppPeriodeModal.Dato" />}
            validate={[required, hasValidDate]}
            disabledDays={{
              fromDate: dayjs(valgtDokBehov.fom, ISO_DATE_FORMAT).toDate(),
              toDate: dayjs(valgtDokBehov.tom, ISO_DATE_FORMAT).subtract(1, 'day').toDate(),
            }}
          />
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                >
                  <FormattedMessage id="DelOppPeriodeModal.Oppdater" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button
                  size="small"
                  variant="secondary"
                  onClick={cancel}
                  type="button"
                >
                  <FormattedMessage id="DelOppPeriodeModal.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default DelOppPeriodeModal;
