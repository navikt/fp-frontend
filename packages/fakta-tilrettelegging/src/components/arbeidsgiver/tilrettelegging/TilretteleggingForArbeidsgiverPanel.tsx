import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import { Datepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Label } from '@navikt/ds-react';
import { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';
import TilretteleggingTabell from './TilretteleggingTabell';

dayjs.extend(minMax);

// @ts-ignore fixme
const validerTidligereEnn = (intl: IntlShape, getValues, stateName: string) => (): string | null => {
  const tilretteleggingBehovFom = getValues(`${stateName}.tilretteleggingBehovFom`);
  const termindato = getValues('termindato');
  const fødselsdato = getValues('fødselsdato');

  const tilretteleggingFomDato = dayjs(tilretteleggingBehovFom);
  const treUkerFørTermindato = dayjs(termindato).subtract(3, 'week');
  const tidligsteTidspunkt = fødselsdato ? dayjs.min(treUkerFørTermindato, dayjs(fødselsdato)) : treUkerFørTermindato;

  if (tidligsteTidspunkt && tilretteleggingFomDato.isValid() && !tilretteleggingFomDato.isBefore(tidligsteTidspunkt)) {
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

interface OwnProps {
  readOnly: boolean;
  stateIndex: number;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
}

const TilretteleggingForArbeidsgiverPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  stateIndex,
  sorterteArbeidsforhold,
}) => {
  const intl = useIntl();

  const { getValues } = useFormContext();
  return (
    <>
      <VerticalSpacer sixteenPx />
      <Datepicker
        name={`arbeidsforhold.${stateIndex}.tilretteleggingBehovFom`}
        label={intl.formatMessage({
          id: 'TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging',
        })}
        validate={[required, hasValidDate, validerTidligereEnn(intl, getValues, `arbeidsgiver.${stateIndex}`)]}
        isReadOnly={readOnly}
      />
      <VerticalSpacer thirtyTwoPx />
      <Label size="small">
        <FormattedMessage id="TilretteleggingForArbeidsgiverPanel.Perioder" />
      </Label>
      <VerticalSpacer sixteenPx />
      {/* @ts-ignore fixme */}
      <TilretteleggingTabell stateIndex={stateIndex} sorterteArbeidsforhold={sorterteArbeidsforhold} />
    </>
  );
};

export default TilretteleggingForArbeidsgiverPanel;
