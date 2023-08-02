import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { UseFormGetValues, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import { CheckboxField, Datepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Label } from '@navikt/ds-react';
import { ArbeidsforholdFodselOgTilrettelegging, Permisjon } from '@navikt/fp-types';
import TilretteleggingPerioderPanel from './TilretteleggingPerioderPanel';
import VelferdspermisjonPanel from './VelferdspermisjonPanel';

dayjs.extend(minMax);

const validerTidligereEnn =
  (intl: IntlShape, getValues: UseFormGetValues<any>, stateName: string) => (): string | null => {
    const tilretteleggingBehovFom = getValues(`${stateName}.tilretteleggingBehovFom`);
    const termindato = getValues('termindato');
    const fødselsdato = getValues('fødselsdato');

    const tilretteleggingFomDato = dayjs(tilretteleggingBehovFom);
    const treUkerFørTermindato = dayjs(termindato).subtract(3, 'week');
    const tidligsteTidspunkt = fødselsdato ? dayjs.min(treUkerFørTermindato, dayjs(fødselsdato)) : treUkerFørTermindato;

    if (
      tidligsteTidspunkt &&
      tilretteleggingFomDato.isValid() &&
      !tilretteleggingFomDato.isBefore(tidligsteTidspunkt)
    ) {
      return intl.formatMessage(
        {
          id: 'TilretteleggingForArbeidsgiverPanel.TilretteleggingTidligereEnn',
        },
        {
          dato: tidligsteTidspunkt.format(DDMMYYYY_DATE_FORMAT),
        },
      );
    }
    return null;
  };

const filtrerVelferdspermisjoner = (velferdspermisjoner: Permisjon[], tilretteleggingBehovFom: string): Permisjon[] =>
  velferdspermisjoner.filter(
    permisjon =>
      !dayjs(permisjon.permisjonFom).isAfter(tilretteleggingBehovFom) &&
      (permisjon.permisjonTom == null || !dayjs(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom)),
  );

interface OwnProps {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  arbeidsforholdIndex: number;
  readOnly: boolean;
}

const ArbeidsforholdPanel: FunctionComponent<OwnProps> = ({ arbeidsforhold, arbeidsforholdIndex, readOnly }) => {
  const intl = useIntl();

  const { getValues, watch } = useFormContext();

  const tilretteleggingBehovFom = watch(`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingBehovFom`);

  const filtrerteVelferdspermisjoner = filtrerVelferdspermisjoner(
    arbeidsforhold.velferdspermisjoner,
    tilretteleggingBehovFom,
  );

  return (
    <>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        readOnly={readOnly}
        name={`arbeidsforhold.${arbeidsforholdIndex}.skalBrukes`}
        label={<FormattedMessage id="TilretteleggingForArbeidsgiverPanel.SkalHaSvpForArbeidsforhold" />}
      />
      <VerticalSpacer sixteenPx />
      <Datepicker
        name={`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingBehovFom`}
        label={intl.formatMessage({
          id: 'TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging',
        })}
        validate={[required, hasValidDate, validerTidligereEnn(intl, getValues, `arbeidsgiver.${arbeidsforholdIndex}`)]}
        isReadOnly={readOnly}
      />
      {filtrerteVelferdspermisjoner.length > 0 && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <Label size="small">
            <FormattedMessage id="TilretteleggingForArbeidsgiverPanel.Velferdspermisjon" />
          </Label>
          <VerticalSpacer sixteenPx />
          <VelferdspermisjonPanel readOnly={readOnly} />
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      <Label size="small">
        <FormattedMessage id="TilretteleggingForArbeidsgiverPanel.Perioder" />
      </Label>
      <VerticalSpacer sixteenPx />
      <TilretteleggingPerioderPanel
        arbeidsforhold={arbeidsforhold}
        arbeidsforholdIndex={arbeidsforholdIndex}
        readOnly={readOnly}
      />
    </>
  );
};

export default ArbeidsforholdPanel;
