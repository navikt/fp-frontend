import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Modal, BodyShort, Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { Datepicker, SelectField, Form } from '@navikt/ft-form-hooks';
import {
  ariaCheck,
  dateAfterOrEqualToToday,
  hasValidDate,
  required,
  dateBeforeToday,
} from '@navikt/ft-form-validators';
import { KodeverkMedNavn } from '@navikt/fp-types';
import { venteArsakType } from '@navikt/fp-kodeverk';

import styles from './settPaVentModal.module.css';

const initFrist = (): string => {
  const date = dayjs().toDate();
  date.setDate(date.getDate() + 28);
  return dayjs(date).format(ISO_DATE_FORMAT);
};

const buildInitialValues = (hasManualPaVent: boolean, ventearsak?: string, frist?: string): FormValues => ({
  ventearsak,
  frist: frist || hasManualPaVent === false ? frist : initFrist(),
});

const manuelleVenteArsaker = [
  venteArsakType.AVV_DOK,
  venteArsakType.AVV_FODSEL,
  venteArsakType.VENT_PÅ_BRUKERTILBAKEMELDING,
  venteArsakType.UTV_FRIST,
  venteArsakType.FOR_TIDLIG_SOKNAD,
  venteArsakType.VENT_OPDT_INNTEKTSMELDING,
  venteArsakType.VENT_UTLAND_TRYGD,
  venteArsakType.UTVIDET_TILSVAR_FRIST,
  venteArsakType.ENDRE_TILKJENT_YTELSE,
  venteArsakType.VENT_PÅ_MULIG_MOTREGNING,
];

const automatiskeVentearsakerForTilbakekreving = [
  venteArsakType.VENT_PÅ_BRUKERTILBAKEMELDING,
  venteArsakType.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG,
];

const inkluderVentearsak = (ventearsak: KodeverkMedNavn, valgtVentearsak?: string): boolean =>
  automatiskeVentearsakerForTilbakekreving.includes(ventearsak.kode) ? ventearsak.kode === valgtVentearsak : true;

const skalViseFristenTekst = (
  erTilbakekreving: boolean,
  frist?: string,
  originalFrist?: string,
  ventearsak?: string,
): boolean => {
  const erFristenUtløpt =
    erTilbakekreving &&
    ((frist !== undefined && dateBeforeToday(frist) === null) ||
      (originalFrist !== undefined && dateBeforeToday(originalFrist) === null));
  const erVenterPaKravgrunnlag = ventearsak === venteArsakType.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;
  return erTilbakekreving && erFristenUtløpt && erVenterPaKravgrunnlag;
};

const harEndretVenteårsak = (originalVentearsak?: string, ventearsak?: string) =>
  !(originalVentearsak === ventearsak || (!ventearsak && !originalVentearsak));
const harEndretFrist = (originalFrist?: string, frist?: string) =>
  !(originalFrist === frist || (!frist && !originalFrist));

export type FormValues = {
  frist?: string;
  ventearsak?: string;
};

interface PureOwnProps {
  submitCallback: (formData: FormValues) => void;
  cancelEvent: () => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn[];
  erTilbakekreving: boolean;
  visBrevErBestilt?: boolean;
  hasManualPaVent: boolean;
  frist?: string;
  ventearsak?: string;
  defaultVenteårsak?: string;
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
  defaultVenteårsak,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(hasManualPaVent, ventearsak || defaultVenteårsak, frist),
  });

  const fristFraFelt = formMethods.watch('frist');
  const ventearsakFraFelt = formMethods.watch('ventearsak');

  const venteArsakHasChanged = harEndretVenteårsak(ventearsak, ventearsakFraFelt);
  const fristHasChanged = harEndretFrist(frist, fristFraFelt);

  const showAvbryt = !(frist === fristFraFelt && !venteArsakHasChanged);
  const showFristenTekst = skalViseFristenTekst(erTilbakekreving, fristFraFelt, frist, ventearsakFraFelt);

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <Modal
        open={showModal}
        aria-label={intl.formatMessage({
          id: ventearsak ? 'SettPaVentModal.ModalDescriptionErPaVent' : 'SettPaVentModal.ModalDescription',
        })}
        onClose={cancelEvent}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id={ventearsak ? 'SettPaVentModal.ErSettPaVent' : 'SettPaVentModal.SettesPaVent'} />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          {(hasManualPaVent || fristFraFelt) && (
            <>
              <Datepicker
                label={<FormattedMessage id="SettPaVentModal.Frist" />}
                name="frist"
                validate={[required, hasValidDate, dateAfterOrEqualToToday]}
              />
              <VerticalSpacer sixteenPx />
            </>
          )}
          <SelectField
            name="ventearsak"
            className={styles.select}
            label={<FormattedMessage id="SettPaVentModal.Arsak" />}
            validate={[required]}
            selectValues={ventearsaker
              .filter(
                va =>
                  !hasManualPaVent ||
                  (erTilbakekreving
                    ? inkluderVentearsak(va, ventearsakFraFelt)
                    : manuelleVenteArsaker.includes(va.kode)),
              )
              .sort((v1, v2) => v1.navn.localeCompare(v2.navn))
              .map(va => (
                <option key={va.kode} value={va.kode}>
                  {va.navn}
                </option>
              ))}
            readOnly={!hasManualPaVent}
          />
          <VerticalSpacer sixteenPx />
          {visBrevErBestilt && (
            <BodyShort size="small">
              <FormattedMessage id="SettPaVentModal.BrevBlirBestilt" />
            </BodyShort>
          )}
          {hasManualPaVent && (
            <BodyShort size="small">{intl.formatMessage({ id: 'SettPaVentModal.EndreFrist' })}</BodyShort>
          )}
          {!hasManualPaVent && showFristenTekst && (
            <>
              <BodyShort size="small">
                <FormattedMessage id="SettPaVentModal.UtløptFrist" />
              </BodyShort>
              <VerticalSpacer eightPx />
              <BodyShort size="small">
                <FormattedMessage id="SettPaVentModal.HenleggeSaken" />
              </BodyShort>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            className={styles.button}
            onClick={showAvbryt ? ariaCheck : cancelEvent}
            disabled={!venteArsakHasChanged && !fristHasChanged}
          >
            <FormattedMessage id="SettPaVentModal.Ok" />
          </Button>
          {(!hasManualPaVent || showAvbryt || !visBrevErBestilt) && (
            <Button
              size="small"
              variant="secondary"
              onClick={cancelEvent}
              className={styles.cancelButton}
              type="button"
            >
              <FormattedMessage
                id={venteArsakHasChanged || fristHasChanged ? 'SettPaVentModal.Avbryt' : 'SettPaVentModal.Lukk'}
              />
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default SettPaVentModal;
