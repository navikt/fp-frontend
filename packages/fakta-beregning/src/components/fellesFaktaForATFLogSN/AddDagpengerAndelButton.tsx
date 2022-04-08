import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Image } from '@navikt/ft-ui-komponenter';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import { FieldArrayFieldsProps } from 'redux-form';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import styles from './addAndelButton.less';

const dagpenger = (aktivitetStatuser: KodeverkMedNavn[]) => ({
  andel: aktivitetStatuser.filter(({ kode }) => kode === aktivitetStatus.DAGPENGER)[0].navn,
  aktivitetStatus: aktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: inntektskategorier.DAGPENGER,
  nyAndel: true,
  skalKunneEndreAktivitet: true,
  lagtTilAvSaksbehandler: true,
});

const onKeyDown = (fields, aktivitetStatuser) => ({ key }) => {
  if (key === 'Enter') {
    fields.push(dagpenger(aktivitetStatuser));
  }
};

type OwnProps = {
    fields: FieldArrayFieldsProps<any>;
    aktivitetStatuser: KodeverkMedNavn[];
    erKunYtelse: boolean;
};

export const AddDagpengerAndelButtonImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl, fields, aktivitetStatuser,
}) => (
  <Row className={styles.buttonRow}>
    <Column xs="3">
      {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
        }
      <div
        id="leggTilAndelDiv"
        onClick={() => {
          fields.push(dagpenger(aktivitetStatuser));
        }}
        onKeyDown={onKeyDown(fields, aktivitetStatuser)}
        className={styles.addPeriode}
        role="button"
        tabIndex={0}
      >
        <Image
          className={styles.addCircleIcon}
          src={addCircleIcon}
          tooltip={intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel' })}
        />
        <Undertekst className={styles.imageText}>
          <FormattedMessage
            id="BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel"
          />
        </Undertekst>
      </div>
    </Column>
  </Row>
);

const AddDagpengerAndelButton = injectIntl(AddDagpengerAndelButtonImpl);

export const mapStateToProps = (state, ownProps) => {
  const aktivitetStatuser = ownProps.alleKodeverk[kodeverkTyper.AKTIVITET_STATUS];
  return {
    aktivitetStatuser,
  };
};

export default connect(mapStateToProps)(AddDagpengerAndelButton);
