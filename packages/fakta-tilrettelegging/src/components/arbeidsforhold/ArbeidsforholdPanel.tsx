import React, { FunctionComponent, useMemo } from 'react';
import { Label } from '@navikt/ds-react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { UseFormGetValues, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

import { CheckboxField, Datepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ArbeidsforholdFodselOgTilrettelegging, Permisjon } from '@navikt/fp-types';

import TilretteleggingOgOppholdPerioderPanel from './tilretteleggingOgOpphold/TilretteleggingOgOppholdPerioderPanel';
import VelferdspermisjonPanel from './velferdspermisjon/VelferdspermisjonPanel';
import { finnProsentSvangerskapspenger } from './tilretteleggingOgOpphold/tilrettelegging/TilretteleggingForm';

dayjs.extend(minMax);

const validerTidligereEnn =
  (intl: IntlShape, getValues: UseFormGetValues<any>, tilretteleggingBehovFom: string) => (): string | null => {
    const termindato = getValues('termindato');
    const fødselsdato = getValues('fødselsdato');

    const tilretteleggingFomDato = dayjs(tilretteleggingBehovFom);
    const treUkerFørTermindato = dayjs(termindato).subtract(3, 'week').subtract(1, 'day');
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

export const filtrerVelferdspermisjoner = (
  velferdspermisjoner: Permisjon[],
  tilretteleggingBehovFom: string,
): Permisjon[] =>
  velferdspermisjoner.filter(
    permisjon =>
      !dayjs(permisjon.permisjonFom).isAfter(tilretteleggingBehovFom) &&
      (permisjon.permisjonTom == null || !dayjs(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom)),
  );

interface OwnProps {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  visInfoAlert: boolean;
  stillingsprosentArbeidsforhold: number;
}

const ArbeidsforholdPanel: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
  arbeidsforholdIndex,
  readOnly,
  visInfoAlert,
  stillingsprosentArbeidsforhold,
}) => {
  const intl = useIntl();

  const { getValues, watch, setValue } = useFormContext();

  const tilretteleggingBehovFom = watch(`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingBehovFom`);

  const filtrerteVelferdspermisjoner = useMemo(
    () => filtrerVelferdspermisjoner(arbeidsforhold.velferdspermisjoner, tilretteleggingBehovFom),
    [arbeidsforhold.velferdspermisjoner, tilretteleggingBehovFom],
  );

  const termindato = watch('termindato');

  const harUavklartVelferdspermisjon = filtrerteVelferdspermisjoner.some(
    permisjon => permisjon.erGyldig === undefined || permisjon.erGyldig === null,
  );

  const oppdaterOverstyrtUtbetalingsgrad = (velferdspermisjonprosent: number) => {
    arbeidsforhold.tilretteleggingDatoer.forEach((tilrettelegging, index) => {
      const prosentSvangerskapspenger = finnProsentSvangerskapspenger(
        tilrettelegging,
        stillingsprosentArbeidsforhold,
        velferdspermisjonprosent,
        false,
      );
      if (prosentSvangerskapspenger !== undefined) {
        setValue(`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingDatoer.${index}`, {
          ...tilrettelegging,
          overstyrtUtbetalingsgrad: prosentSvangerskapspenger,
        });
      }
    });
  };

  return (
    <>
      {visInfoAlert && (
        <>
          <VerticalSpacer eightPx />
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage id="TilretteleggingFaktaForm.UndersokNarmere" key="svangerskapspengerAp" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
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
        validate={[required, hasValidDate, validerTidligereEnn(intl, getValues, tilretteleggingBehovFom)]}
        isReadOnly={readOnly}
      />
      {filtrerteVelferdspermisjoner.length > 0 && (
        <VelferdspermisjonPanel
          velferdspermisjoner={filtrerteVelferdspermisjoner}
          arbeidsforholdIndex={arbeidsforholdIndex}
          readOnly={readOnly}
          oppdaterOverstyrtUtbetalingsgrad={oppdaterOverstyrtUtbetalingsgrad}
        />
      )}
      <VerticalSpacer fourtyPx />
      <Label size="small">
        <FormattedMessage id="TilretteleggingForArbeidsgiverPanel.Perioder" />
      </Label>
      <VerticalSpacer sixteenPx />
      <TilretteleggingOgOppholdPerioderPanel
        arbeidsforhold={arbeidsforhold}
        arbeidsforholdIndex={arbeidsforholdIndex}
        readOnly={readOnly || harUavklartVelferdspermisjon}
        stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
        termindato={termindato}
      />
    </>
  );
};

export default ArbeidsforholdPanel;
