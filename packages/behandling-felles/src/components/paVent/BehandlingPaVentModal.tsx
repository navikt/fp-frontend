import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm, InjectedFormProps } from 'redux-form';
import moment from 'moment';
import Modal from 'nav-frontend-modal';
import { Normaltekst } from 'nav-frontend-typografi';
import { Column, Container, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import {
  ariaCheck, dateAfterOrEqualToToday, dateBeforeToday, hasValidDate, required,
} from '@fpsak-frontend/utils';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';

import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import styles from './behandlingPaVentModal.less';

const initFrist = () => {
  const date = moment().toDate();
  date.setDate(date.getDate() + 28);
  return date.toISOString().substr(0, 10);
};

const isButtonDisabled = (frist, showAvbryt, venteArsakHasChanged, fristHasChanged, hasManualPaVent) => {
  const dateNotValid = hasValidDate(frist) !== null || dateAfterOrEqualToToday(frist) !== null;
  const defaultOptions = (!hasManualPaVent || showAvbryt) && (!venteArsakHasChanged && !fristHasChanged);
  return defaultOptions || dateNotValid;
};

const hovedKnappenType = (venteArsakHasChanged, fristHasChanged) => venteArsakHasChanged || fristHasChanged;

const getPaVentText = (hasManualPaVent, frist) => (hasManualPaVent || frist
  ? 'SettBehandlingPaVentModal.ErPaVent' : 'SettBehandlingPaVentModal.ErPaVentUtenFrist');

const manuelleVenteArsaker = [
  venteArsakType.AVV_DOK,
  venteArsakType.AVV_FODSEL,
  venteArsakType.UTV_FRIST,
  venteArsakType.AVV_RESPONS_REVURDERING,
  venteArsakType.FOR_TIDLIG_SOKNAD,
  venteArsakType.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT,
  venteArsakType.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER,
  venteArsakType.ANKE_OVERSENDT_TIL_TRYGDERETTEN,
  venteArsakType.VENT_OPDT_INNTEKTSMELDING,
  venteArsakType.VENT_OPPTJENING_OPPLYSNINGER,
];

interface OwnProps {
  cancelEvent: () => undefined;
  frist?: string;
  originalFrist?: string;
  ventearsak?: string;
  originalVentearsak?: string;
  hasManualPaVent: boolean;
  ventearsaker: KodeverkMedNavn[];
  erTilbakekreving: boolean;
}

/**
 * BehandlingPaVentModal
 *
 * Presentasjonskomponent. Denne formen gjenbruker settBehandlingPaVentModal. Bruk denne komponenten som en wrapper for
 * settBehandlingPaVentModal hvis du ikke har noen ytre form.
 */
export const BehandlingPaVentModal: FunctionComponent<OwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  handleSubmit,
  cancelEvent,
  frist,
  originalFrist,
  ventearsak,
  originalVentearsak,
  hasManualPaVent,
  ventearsaker,
  erTilbakekreving,
}) => {
  const venteArsakHasChanged = !(originalVentearsak === ventearsak || (!ventearsak && !originalVentearsak));
  const fristHasChanged = !(originalFrist === frist || (!frist && !originalFrist));
  const showAvbryt = !(originalFrist === frist && !venteArsakHasChanged);
  const erFristenUtløpt = erTilbakekreving && ((frist !== undefined && dateBeforeToday(frist) === null)
    || (originalFrist !== undefined && dateBeforeToday(originalFrist) === null));
  const erVenterPaKravgrunnlag = ventearsak === venteArsakType.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;
  const showFristenTekst = erTilbakekreving && erFristenUtløpt && erVenterPaKravgrunnlag;

  return (
    <Modal
      className={styles.modal}
      isOpen
      closeButton={false}
      contentLabel={intl.formatMessage({ id: 'SettBehandlingPaVentModal.ModalDescription' })}
      onRequestClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Container fluid>
        <form onSubmit={handleSubmit} name="ventModalForm">
          <Row>
            <Column xs="1">
              <Image className={styles.image} alt={intl.formatMessage({ id: 'SettBehandlingPaVentModal.PaVent' })} src={innvilgetImageUrl} />
              <div className={styles.divider} />
            </Column>
            <Column xs="7">
              <div className={styles.label}>
                <Normaltekst className={styles.label}>
                  <FormattedMessage id={getPaVentText(hasManualPaVent, frist)} />
                </Normaltekst>
              </div>
            </Column>
            {(hasManualPaVent || frist) && (
              <Column xs="2">
                <div className={styles.datePicker}>
                  <DatepickerField
                    name="frist"
                    validate={[required, hasValidDate]}
                  />
                </div>
              </Column>
            )}
          </Row>
          <Row className={styles.marginTop}>
            <Column xs="1" />
            <Column xs="11">
              <SelectField
                name="ventearsak"
                label={intl.formatMessage({ id: 'SettBehandlingPaVentModal.Arsak' })}
                placeholder={intl.formatMessage({ id: 'SettBehandlingPaVentModal.SelectPlaceholder' })}
                validate={[required]}
                selectValues={ventearsaker.filter((va) => manuelleVenteArsaker.indexOf(va.kode) > -1)
                  .sort((v1, v2) => v1.navn.localeCompare(v2.navn))
                  .map((va) => <option key={va.kode} value={va.kode}>{va.navn}</option>)}
                bredde="xxl"
                readOnly={!hasManualPaVent}
              />
            </Column>
          </Row>
          <Row>
            <Column xs="1" />
            <Column xs="11">
              {hasManualPaVent && (
                <Normaltekst>{intl.formatMessage({ id: 'BehandlingErPaVentModal.EndreFrist' })}</Normaltekst>
              )}
              {!hasManualPaVent && showFristenTekst && (
                <Normaltekst>
                  <FormattedMessage id="BehandlingErPaVentModal.UtløptFrist" />
                  <VerticalSpacer eightPx />
                  <FormattedMessage id="BehandlingErPaVentModal.HenleggeSaken" />
                </Normaltekst>
              )}
            </Column>
          </Row>
          <VerticalSpacer eightPx />
          <Row>
            <Column xs="6" />
            <Column>
              <Hovedknapp
                mini
                htmlType={hovedKnappenType(venteArsakHasChanged, fristHasChanged) ? 'submit' : 'button'}
                className={styles.button}
                onClick={showAvbryt ? ariaCheck : cancelEvent}
                disabled={isButtonDisabled(frist, showAvbryt, venteArsakHasChanged, fristHasChanged, hasManualPaVent)}
              >
                {intl.formatMessage({ id: 'SettBehandlingPaVentModal.Ok' })}
              </Hovedknapp>
              {(!hasManualPaVent || showAvbryt) && (
                <Knapp
                  htmlType="button"
                  mini
                  onClick={cancelEvent}
                  className={styles.cancelButton}
                >
                  {intl.formatMessage({ id: hasManualPaVent ? 'SettBehandlingPaVentModal.Avbryt' : 'SettBehandlingPaVentModal.Lukk' })}
                </Knapp>
              )}
            </Column>
          </Row>
        </form>
      </Container>
    </Modal>
  );
};

const buildInitialValues = (initialProps) => ({
  ventearsak: initialProps.ventearsak,
  frist: initialProps.frist || !initialProps.hasManualPaVent ? initialProps.frist : initFrist(),
});

const mapStateToProps = (state, initialProps) => ({
  frist: formValueSelector('settBehandlingModalForm')(state, 'frist'),
  originalFrist: initialProps.frist,
  originalVentearsak: initialProps.ventearsak,
  ventearsak: formValueSelector('settBehandlingModalForm')(state, 'ventearsak'),
  initialValues: buildInitialValues(initialProps),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'settBehandlingModalForm',
  enableReinitialize: true,
})(injectIntl(BehandlingPaVentModal)));
