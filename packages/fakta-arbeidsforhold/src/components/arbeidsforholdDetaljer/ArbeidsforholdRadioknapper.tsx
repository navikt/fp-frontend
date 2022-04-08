import React, { FunctionComponent } from 'react';
import moment from 'moment';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import {
  dateAfterOrEqual, hasValidDate, required, dateIsBefore,
} from '@navikt/ft-utils';
import { DatepickerField, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import AktivtArbeidsforholdHandling from '../../kodeverk/aktivtArbeidsforholdHandling';
import CustomArbeidsforhold from '../../typer/CustomArbeidsforholdTsType';
import arbeidsforholdHandling from '../../kodeverk/arbeidsforholdHandling';
import ArbeidsforholdKilder from '../../kodeverk/arbeidsforholdKilder';
import BehandlingFormFieldCleaner from '../../util/BehandlingFormFieldCleaner';

// ----------------------------------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------------------------------

// TODO (TOR) Bør heller senda med boolsk indikator fra backend enn å ha hardkoda streng her
const AA_REGISTERET = 'aa-registeret';

// ----------------------------------------------------------------------------------
// METHODS
// ----------------------------------------------------------------------------------

const getArbeidsforholdTomDatoPickerErrorMsg = (intl: IntlShape) => (dato: string): string => intl
  .formatMessage({ id: 'PersonArbeidsforholdDetailForm.DateNotAfterOrEqual' }, { dato });
const getDateMustBeBeforeSkjaeringstidspunkt = (intl: IntlShape) => (dato: string): string => intl
  .formatMessage({ id: 'PersonArbeidsforholdDetailForm.DateNotBeforeSkjaeringstidspunkt' }, { dato });

const isKildeAaRegisteret = (arbeidsforhold: CustomArbeidsforhold): boolean => arbeidsforhold.kilde
  && arbeidsforhold.kilde.navn.toLowerCase() === AA_REGISTERET;

const skalDisableOverstyrTom = (arbeidsforhold: CustomArbeidsforhold): boolean => {
  const erTomDatoLikEllerEtterSkjaeringstidspunkt = moment(arbeidsforhold.tomDato).isSameOrAfter(arbeidsforhold.skjaeringstidspunkt);
  return erTomDatoLikEllerEtterSkjaeringstidspunkt && !arbeidsforhold.brukMedJustertPeriode;
};

const kanSetteOverstyrtTom = (hasReceivedInntekstmelding: boolean, arbeidsforhold: CustomArbeidsforhold): boolean => (isKildeAaRegisteret(arbeidsforhold)
  && !hasReceivedInntekstmelding)
  || arbeidsforhold.brukMedJustertPeriode;

const skalViseInntektIkkeMedTilBeregningsgrunnlagetValgmulighet = (arbeidsforhold: CustomArbeidsforhold, hasReceivedInntektsmelding: boolean): boolean => {
  const fomDatoFoerStp = moment(arbeidsforhold.fomDato).isBefore(arbeidsforhold.skjaeringstidspunkt);
  const tomDatoIkkeSattEllerEtterStp = (arbeidsforhold.tomDato === undefined || arbeidsforhold.tomDato === null)
    || moment(arbeidsforhold.tomDato).isAfter(arbeidsforhold.skjaeringstidspunkt);
  return fomDatoFoerStp && tomDatoIkkeSattEllerEtterStp && !hasReceivedInntektsmelding;
};

const erFlerePermisjoner = (arbeidsforhold: CustomArbeidsforhold): boolean => arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 1;

const utledRadioOptionForArbeidsforholdSomIkkeErAktive = (
  intl: IntlShape,
  arbeidsforhold: CustomArbeidsforhold,
  hasReceivedInntektsmelding: boolean,
  formName: string,
  readOnly: boolean,
  arbeidsforholdHandlingVerdi?: string,
) => {
  if (arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 0) {
    return (
      <RadioOption
        label={{ id: 'PersonArbeidsforholdDetailForm.SokerErIPermisjon' }}
        value={arbeidsforholdHandling.SOKER_ER_I_PERMISJON}
        disabled={erFlerePermisjoner(arbeidsforhold)}
      />
    );
  }
  if (kanSetteOverstyrtTom(hasReceivedInntektsmelding, arbeidsforhold)) {
    return (
      <RadioOption
        label={{ id: 'PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt' }}
        value={arbeidsforholdHandling.OVERSTYR_TOM}
        disabled={skalDisableOverstyrTom(arbeidsforhold)}
        manualHideChildren
      >
        <BehandlingFormFieldCleaner formName={formName} fieldNames={['overstyrtTom']}>
          { arbeidsforholdHandlingVerdi === arbeidsforholdHandling.OVERSTYR_TOM && (
            <ArrowBox>
              <DatepickerField
                name="overstyrtTom"
                label={<FormattedMessage id="PersonArbeidsforholdDetailForm.ArbeidsforholdetAktivTomDato" />}
                validate={[
                  required,
                  hasValidDate,
                  dateAfterOrEqual(arbeidsforhold.fomDato, getArbeidsforholdTomDatoPickerErrorMsg(intl)),
                  dateIsBefore(arbeidsforhold.skjaeringstidspunkt, getDateMustBeBeforeSkjaeringstidspunkt(intl)),
                ]}
                readOnly={readOnly}
              />
            </ArrowBox>
          )}
        </BehandlingFormFieldCleaner>
      </RadioOption>
    );
  }
  return (
    <RadioOption
      label={{
        id: arbeidsforhold.kanOppretteNyttArbforFraIM
          ? 'PersonArbeidsforholdDetailForm.IMIkkeRelevant'
          : 'PersonArbeidsforholdDetailForm.FjernArbeidsforholdet',
      }}
      value={arbeidsforholdHandling.FJERN_ARBEIDSFORHOLD}
      disabled={isKildeAaRegisteret(arbeidsforhold) || arbeidsforhold.lagtTilAvSaksbehandler === true}
    />
  );
};

const utledAktivtArbeidsforholdLabel = (arbeidsforhold: CustomArbeidsforhold): string => {
  if (arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 0) {
    return 'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon';
  }
  if (arbeidsforhold.kilde.navn === ArbeidsforholdKilder.INNTEKTSMELDING) {
    return 'PersonArbeidsforholdDetailForm.OppdaterArbeidsforhold';
  }
  return 'PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivt';
};

const skalViseRadioOptionsForAktivtArbeidsforholdHandlinger = (hasReceivedInntektsmelding: boolean, arbeidsforholdHandlingVerdi?: string): boolean => {
  if (arbeidsforholdHandlingVerdi !== arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD) {
    return false;
  }
  return hasReceivedInntektsmelding === false;
};

interface OwnProps {
  readOnly: boolean;
  formName: string;
  hasReceivedInntektsmelding: boolean;
  arbeidsforhold: CustomArbeidsforhold;
  aktivtArbeidsforholdTillatUtenIM: boolean;
  arbeidsforholdHandlingVerdi?: string;
}

/**
 * Component: ArbeidsforholdRadioknapper
 * Ansvarlig for å håndtere visning av RadioKnapper for arbeidsforhold
 * som står i aksjonspunktet 5080 i fakta om arbeidsforhold.
 */
const ArbeidsforholdRadioknapper: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  readOnly,
  formName,
  hasReceivedInntektsmelding,
  arbeidsforhold,
  aktivtArbeidsforholdTillatUtenIM,
  arbeidsforholdHandlingVerdi,
  intl,
}) => (
  <RadioGroupField
    name="arbeidsforholdHandlingField"
    validate={[required]}
    direction="vertical"
    readOnly={readOnly}
  >
    <RadioOption
      label={{ id: utledAktivtArbeidsforholdLabel(arbeidsforhold) }}
      value={arbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD}
      manualHideChildren
    >
      <BehandlingFormFieldCleaner
        formName={formName}
        fieldNames={['aktivtArbeidsforholdHandlingField']}
      >
        { skalViseRadioOptionsForAktivtArbeidsforholdHandlinger(hasReceivedInntektsmelding, arbeidsforholdHandlingVerdi) && (
          <Row>
            <Column xs="1" />
            <Column xs="11">
              <RadioGroupField
                name="aktivtArbeidsforholdHandlingField"
                validate={[required]}
                direction="vertical"
                readOnly={readOnly}
              >
                <RadioOption
                  label={{ id: 'PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger' }}
                  value={AktivtArbeidsforholdHandling.AVSLA_YTELSE}
                  disabled={arbeidsforhold.lagtTilAvSaksbehandler === true}
                />
                { skalViseInntektIkkeMedTilBeregningsgrunnlagetValgmulighet(arbeidsforhold, hasReceivedInntektsmelding) && (
                  <RadioOption
                    label={{ id: 'PersonArbeidsforholdDetailForm.InntektIkkeMedIBeregningsgrunnlaget' }}
                    value={AktivtArbeidsforholdHandling.INNTEKT_IKKE_MED_I_BG}
                    disabled={arbeidsforhold.lagtTilAvSaksbehandler === true}
                  />
                )}
                <RadioOption
                  label={{ id: 'PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag' }}
                  value={AktivtArbeidsforholdHandling.BENYTT_A_INNTEKT_I_BG}
                  disabled={!aktivtArbeidsforholdTillatUtenIM}
                />
              </RadioGroupField>
            </Column>
          </Row>
        )}
      </BehandlingFormFieldCleaner>
    </RadioOption>
    { utledRadioOptionForArbeidsforholdSomIkkeErAktive(
      intl,
      arbeidsforhold,
      hasReceivedInntektsmelding,
      formName,
      readOnly,
      arbeidsforholdHandlingVerdi,
    )}
  </RadioGroupField>
);

export default injectIntl(ArbeidsforholdRadioknapper);
