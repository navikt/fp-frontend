import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Container, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';

import { Image, VerticalSpacer } from '@fpsak-frontend/shared-components';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import { DatepickerField, SelectField, Form } from '@fpsak-frontend/form-hooks';
import {
  ariaCheck, dateAfterOrEqualToToday, hasValidDate, required, dateBeforeToday,
} from '@fpsak-frontend/utils';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';

import styles from './settPaVentModal.less';

const initFrist = (): string => {
  const date = moment().toDate();
  date.setDate(date.getDate() + 28);
  return date.toISOString().substr(0, 10);
};

const isButtonDisabled = (showAvbryt: boolean, venteArsakHasChanged: boolean, fristHasChanged: boolean, hasManualPaVent: boolean, frist?: string): boolean => {
  const dateNotValid = (!frist || !!hasValidDate(frist)) || !!dateAfterOrEqualToToday(frist);
  const defaultOptions = (!hasManualPaVent || showAvbryt) && (!venteArsakHasChanged && !fristHasChanged);
  return defaultOptions || dateNotValid;
};

const hovedKnappenType = (venteArsakHasChanged: boolean, fristHasChanged: boolean): boolean => venteArsakHasChanged || fristHasChanged;

const getPaVentText = (hasManualPaVent: boolean, originalVentearsak?: string, frist?: string): string => {
  if (originalVentearsak) {
    return (hasManualPaVent || frist ? 'SettPaVentModal.ErSettPaVent' : 'SettPaVentModal.ErPaVentUtenFrist');
  }
  return hasManualPaVent || frist ? 'SettPaVentModal.SettesPaVent' : 'SettPaVentModal.SettesPaVentUtenFrist';
};

const buildInitialValues = (hasManualPaVent: boolean, ventearsak?: string, frist?: string): FormValues => ({
  ventearsak,
  frist: frist || hasManualPaVent === false ? frist : initFrist(),
});

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
  venteArsakType.UTVIDET_TILSVAR_FRIST,
  venteArsakType.ENDRE_TILKJENT_YTELSE,
  venteArsakType.VENT_PÅ_MULIG_MOTREGNING,
];

const automatiskeVentearsakerForTilbakekreving = [
  venteArsakType.VENT_PÅ_BRUKERTILBAKEMELDING,
  venteArsakType.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG,
];

const inkluderVentearsak = (ventearsak: KodeverkMedNavn, valgtVentearsak?: string): boolean => (automatiskeVentearsakerForTilbakekreving
  .includes(ventearsak.kode) ? ventearsak.kode === valgtVentearsak : true);

const skalViseFristenTekst = (erTilbakekreving: boolean, frist?: string, originalFrist?: string, ventearsak?: string): boolean => {
  const erFristenUtløpt = erTilbakekreving && ((frist !== undefined && dateBeforeToday(frist) === null)
    || (originalFrist !== undefined && dateBeforeToday(originalFrist) === null));
  const erVenterPaKravgrunnlag = ventearsak === venteArsakType.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;
  return erTilbakekreving && erFristenUtløpt && erVenterPaKravgrunnlag;
};

const harEndretVenteårsak = (originalVentearsak?: string, ventearsak?: string) => !(originalVentearsak === ventearsak || (!ventearsak && !originalVentearsak));
const harEndretFrist = (originalFrist?: string, frist?: string) => !(originalFrist === frist || (!frist && !originalFrist));

type FormValues = {
  frist?: string;
  ventearsak?: string;
}

interface PureOwnProps {
  submitCallback: (formData: any) => void;
  cancelEvent: () => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn[];
  erTilbakekreving: boolean;
  visBrevErBestilt?: boolean;
  hasManualPaVent: boolean;
  frist?: string;
  ventearsak?: string;
}

const SettPaVentModal: FunctionComponent<PureOwnProps> = ({
  submitCallback,
  cancelEvent,
  showModal,
  ventearsaker,
  erTilbakekreving,
  frist,
  ventearsak,
  visBrevErBestilt = false,
  hasManualPaVent,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(hasManualPaVent, ventearsak, frist),
  });

  const fristFraFelt = formMethods.watch('frist');
  const ventearsakFraFelt = formMethods.watch('ventearsak');

  const venteArsakHasChanged = harEndretVenteårsak(ventearsak, ventearsakFraFelt);
  const fristHasChanged = harEndretFrist(frist, fristFraFelt);

  const showAvbryt = !(frist === fristFraFelt && !venteArsakHasChanged);
  const showFristenTekst = skalViseFristenTekst(erTilbakekreving, fristFraFelt, frist, ventearsakFraFelt);

  return (
    <Modal
      className={styles.modal}
      isOpen={showModal}
      closeButton={false}
      contentLabel={intl.formatMessage({ id: ventearsak ? 'SettPaVentModal.ModalDescriptionErPaVent' : 'SettPaVentModal.ModalDescription' })}
      onRequestClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Container fluid>
        <Form formMethods={formMethods} onSubmit={submitCallback}>
          <Row>
            <Column xs="1">
              <Image className={styles.image} alt={intl.formatMessage({ id: 'SettPaVentModal.PaVent' })} src={innvilgetImageUrl} />
              <div className={styles.divider} />
            </Column>
            <Column xs="7">
              <div className={styles.label}>
                <Normaltekst className={styles.label}>
                  <FormattedMessage id={getPaVentText(hasManualPaVent, ventearsak, fristFraFelt)} />
                </Normaltekst>
              </div>
            </Column>
            {(hasManualPaVent || fristFraFelt) && (
              <Column xs="2">
                <div className={styles.datePicker}>
                  <DatepickerField
                    name="frist"
                    validate={[required, hasValidDate, dateAfterOrEqualToToday]}
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
                label={intl.formatMessage({ id: 'SettPaVentModal.Arsak' })}
                placeholder={intl.formatMessage({ id: 'SettPaVentModal.SelectPlaceholder' })}
                validate={[required]}
                selectValues={ventearsaker.filter((va) => (erTilbakekreving
                  ? inkluderVentearsak(va, ventearsakFraFelt) : manuelleVenteArsaker.includes(va.kode)))
                  .sort((v1, v2) => v1.navn.localeCompare(v2.navn))
                  .map((va) => <option key={va.kode} value={va.kode}>{va.navn}</option>)}
                bredde="xxl"
                readOnly={!hasManualPaVent}
              />
            </Column>
          </Row>
          {visBrevErBestilt && (
            <Row>
              <Column xs="1" />
              <Column xs="11">
                <Normaltekst>
                  <FormattedMessage id="SettPaVentModal.BrevBlirBestilt" />
                </Normaltekst>
              </Column>
            </Row>
          )}
          <Row>
            <Column xs="1" />
            <Column xs="11">
              {hasManualPaVent && (
                <Normaltekst>{intl.formatMessage({ id: 'SettPaVentModal.EndreFrist' })}</Normaltekst>
              )}
              {!hasManualPaVent && showFristenTekst && (
                <>
                  <Normaltekst>
                    <FormattedMessage id="SettPaVentModal.UtløptFrist" />
                  </Normaltekst>
                  <VerticalSpacer eightPx />
                  <Normaltekst>
                    <FormattedMessage id="SettPaVentModal.HenleggeSaken" />
                  </Normaltekst>
                </>
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
                disabled={isButtonDisabled(showAvbryt, venteArsakHasChanged, fristHasChanged, hasManualPaVent, fristFraFelt)}
              >
                <FormattedMessage id="SettPaVentModal.Ok" />
              </Hovedknapp>
              {(!hasManualPaVent || showAvbryt || !visBrevErBestilt) && (
                <Knapp
                  htmlType="button"
                  mini
                  onClick={cancelEvent}
                  className={styles.cancelButton}
                >
                  <FormattedMessage id={hasManualPaVent ? 'SettPaVentModal.Avbryt' : 'SettPaVentModal.Lukk'} />
                </Knapp>
              )}
            </Column>
          </Row>
        </Form>
      </Container>
    </Modal>
  );
};

export default SettPaVentModal;
