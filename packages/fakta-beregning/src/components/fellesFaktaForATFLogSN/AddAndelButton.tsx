import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { Image } from '@fpsak-frontend/shared-components';
import { FieldArrayFieldsProps } from 'redux-form';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import styles from './addAndelButton.less';

const defaultAndel = (aktivitetStatuser, erKunYtelse) => ({
  andel: erKunYtelse ? aktivitetStatuser.filter(({ kode }) => kode === aktivitetStatus.BRUKERS_ANDEL)[0].navn : undefined,
  fastsattBelop: '',
  inntektskategori: '',
  nyAndel: true,
  skalKunneEndreAktivitet: true,
  lagtTilAvSaksbehandler: true,
});

const onKeyDown = (fields, aktivitetStatuser, erKunYtelse) => ({ keyCode }) => {
  if (keyCode === 13) {
    fields.push(defaultAndel(aktivitetStatuser, erKunYtelse));
  }
};

type OwnProps = {
    fields: FieldArrayFieldsProps<any>;
    aktivitetStatuser: Kodeverk[];
    erKunYtelse: boolean;
};

export const AddAndelButtonImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  erKunYtelse, intl, fields, aktivitetStatuser,
}) => (
  <Row className={styles.buttonRow}>
    <Column xs="3">
      {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
        }
      <div
        id="leggTilAndelDiv"
        onClick={() => {
          fields.push(defaultAndel(aktivitetStatuser, erKunYtelse));
        }}
        onKeyDown={onKeyDown(fields, aktivitetStatuser, erKunYtelse)}
        className={styles.addPeriode}
        role="button"
        tabIndex={0}
      >
        <Image
          className={styles.addCircleIcon}
          src={addCircleIcon}
          tooltip={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.LeggTilAndel' })}
        />
        <Undertekst className={styles.imageText}>
          <FormattedMessage
            id="BeregningInfoPanel.FordelingBG.LeggTilAndel"
          />
        </Undertekst>
      </div>
    </Column>
  </Row>
);

const AddAndelButton = injectIntl(AddAndelButtonImpl);

export const mapStateToProps = (state, ownProps) => {
  const aktivitetStatuser = ownProps.alleKodeverk[kodeverkTyper.AKTIVITET_STATUS];
  return {
    aktivitetStatuser,
  };
};

export default connect(mapStateToProps)(AddAndelButton);
