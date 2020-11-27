import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import moment from 'moment';
import { InjectedFormProps } from 'redux-form';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';

import { TextAreaField, behandlingForm } from '@fpsak-frontend/form';
import {
  DDMMYYYY_DATE_FORMAT, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './uttakSlettPeriodeModal.less';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

interface PureOwnProps {
  showModal?: boolean;
  closeEvent: (...args: any[]) => any;
  cancelEvent: (...args: any[]) => any;
  periode: CustomUttakKontrollerFaktaPerioder;
  getKodeverknavn: (kodeverk: Kodeverk) => string;
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
  const uttakPeriodeType = periode.uttakPeriodeType !== undefined ? getKodeverknavn(periode.uttakPeriodeType) : null;
  return (
    <Modal
      className={styles.modal}
      isOpen={showModal}
      contentLabel="Perioden slettes"
      onRequestClose={closeEvent}
      closeButton={false}
      shouldCloseOnOverlayClick={false}
    >
      <FlexContainer wrap>
        <FlexRow>
          <FlexColumn className={styles.iconContainer}>
            <Image className={styles.icon} src={innvilgetImageUrl} alt={intl.formatMessage({ id: 'UttakInfoPanel.Ok' })} />
          </FlexColumn>
          <FlexColumn className={styles.fullWidth}>
            <Normaltekst className={styles.modalLabel}>
              <FormattedMessage
                id="UttakInfoPanel.PeriodenSlettes"
                values={{ fom, tom, uttakPeriodeType }}
              />
            </Normaltekst>
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
            <Hovedknapp
              mini
              className={styles.button}
              onClick={formProps.handleSubmit}
              disabled={formProps.pristine}
            >
              {intl.formatMessage({ id: 'UttakInfoPanel.Ok' })}
            </Hovedknapp>
            <Knapp
              mini
              onClick={() => {
                cancelEvent();
                formProps.destroy();
              }}
            >
              {intl.formatMessage({ id: 'UttakInfoPanel.Avbryt' })}
            </Knapp>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
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
const UttakSlettPeriodeModal = connect(mapStateToPropsFactory)(behandlingForm({
  enableReinitialize: true,
})(injectIntl(UttakSlettPeriodeModalImpl)));

export default UttakSlettPeriodeModal;
