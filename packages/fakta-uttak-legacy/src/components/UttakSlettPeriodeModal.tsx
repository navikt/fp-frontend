import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import moment from 'moment';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { BodyShort, Modal, Button } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import KodeverkType from '@navikt/fp-kodeverk/src/kodeverkTyper';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import innvilgetImageUrl from '@navikt/fp-assets/images/innvilget_valgt.svg';

import TextAreaField from '../form/TextAreaField';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

import styles from './uttakSlettPeriodeModal.less';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

interface PureOwnProps {
  showModal?: boolean;
  closeEvent: (...args: any[]) => any;
  cancelEvent: (...args: any[]) => any;
  periode: CustomUttakKontrollerFaktaPerioder;
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string;
}

interface MappedOwnProps {
  form: string;
  onSubmit: (...args: any[]) => any;
}

export const UttakSlettPeriodeModalImpl: FunctionComponent<PureOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  showModal,
  closeEvent,
  cancelEvent,
  intl,
  periode,
  getKodeverknavn,
  ...formProps
}) => {
  const fom = moment(periode.fom).format(DDMMYYYY_DATE_FORMAT);
  const tom = moment(periode.tom).format(DDMMYYYY_DATE_FORMAT);
  const uttakPeriodeType = periode.uttakPeriodeType !== undefined ? getKodeverknavn(periode.uttakPeriodeType, KodeverkType.UTTAK_PERIODE_TYPE) : null;
  return (
    <Modal
      className={styles.modal}
      open={showModal}
      aria-label="Perioden slettes"
      onClose={closeEvent}
      closeButton={false}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer wrap>
          <FlexRow>
            <FlexColumn className={styles.iconContainer}>
              <Image className={styles.icon} src={innvilgetImageUrl} alt={intl.formatMessage({ id: 'UttakInfoPanel.Ok' })} />
            </FlexColumn>
            <FlexColumn className={styles.fullWidth}>
              <BodyShort size="small" className={styles.modalLabel}>
                <FormattedMessage
                  id="UttakInfoPanel.PeriodenSlettes"
                  values={{ fom, tom, uttakPeriodeType }}
                />
              </BodyShort>
              <FlexRow>
                <FlexColumn className={styles.fullWidth}>
                  <VerticalSpacer sixteenPx />
                  <TextAreaField
                    name="begrunnelse"
                    textareaClass={styles.textAreaStyle}
                    label={{ id: 'UttakInfoPanel.BegrunnEndringen' }}
                    validate={[required, minLength3, maxLength2000, hasValidText]}
                    maxLength={2000}
                    autoFocus
                  />
                </FlexColumn>
              </FlexRow>
            </FlexColumn>
          </FlexRow>

          <FlexRow>
            <FlexColumn className={styles.right}>
              <VerticalSpacer eightPx />
              <Button
                size="small"
                variant="primary"
                className={styles.button}
                onClick={formProps.handleSubmit}
                disabled={formProps.pristine}
                type="button"
              >
                {intl.formatMessage({ id: 'UttakInfoPanel.Ok' })}
              </Button>
              <Button
                size="small"
                variant="secondary"
                onClick={() => {
                  cancelEvent();
                  formProps.destroy();
                }}
                type="button"
              >
                {intl.formatMessage({ id: 'UttakInfoPanel.Avbryt' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

UttakSlettPeriodeModalImpl.defaultProps = {
  showModal: false,
};

const mapStateToPropsFactory = (_initialState: any, ownProps: PureOwnProps) => {
  const onSubmit = (values: any) => ownProps.closeEvent(values);

  return (): MappedOwnProps => {
    const formName = `slettPeriodeForm-${ownProps.periode.id}`;
    return {
      form: formName,
      onSubmit,
    };
  };
};

// @ts-ignore Dynamisk navn på form
const UttakSlettPeriodeModal = connect(mapStateToPropsFactory)(reduxForm({
  enableReinitialize: true,
  destroyOnUnmount: false,
})(injectIntl(UttakSlettPeriodeModalImpl)));

export default UttakSlettPeriodeModal;
