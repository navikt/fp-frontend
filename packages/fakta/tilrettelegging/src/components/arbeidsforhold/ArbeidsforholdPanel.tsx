import { useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { HStack, Spacer, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

import type { SvpArbeidsforholdDto } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { filtrerVelferdspermisjoner } from '../arbeidsforholdUtils';
import type { FAISUProps } from './faisuUtils';
import { finnProsentSvangerskapspenger } from './tilretteleggingOgOpphold/tilrettelegging/TilretteleggingForm';
import { TilretteleggingOgOppholdPerioderPanel } from './tilretteleggingOgOpphold/TilretteleggingOgOppholdPerioderPanel';
import { VelferdspermisjonTabell } from './velferdspermisjon/VelferdspermisjonTabell';

dayjs.extend(minMax);

const validerTidligereEnn =
  (intl: IntlShape, getValues: UseFormGetValues<TilretteleggingFormValues>) =>
  (tilretteleggingBehovFom: string): string | null => {
    const termindato = getValues('termindato');
    const fødselsdato = getValues('fødselsdato');

    const tilretteleggingFomDato = dayjs(tilretteleggingBehovFom);
    const treUkerFørTermindato = dayjs(termindato).subtract(3, 'week').subtract(1, 'day');
    const tidligsteTidspunkt = fødselsdato ? dayjs.min(treUkerFørTermindato, dayjs(fødselsdato)) : treUkerFørTermindato;

    if (tilretteleggingFomDato.isValid() && !tilretteleggingFomDato.isBefore(tidligsteTidspunkt)) {
      return intl.formatMessage(
        { id: 'ArbeidsforholdPanel.TilretteleggingTidligereEnn' },
        { dato: tidligsteTidspunkt.format(DDMMYYYY_DATE_FORMAT) },
      );
    }
    return null;
  };

interface Props {
  arbeidsforhold: SvpArbeidsforholdDto;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  visInfoAlert: boolean;
  stillingsprosentArbeidsforhold: number;
  faisu: FAISUProps | undefined;
}

export const ArbeidsforholdPanel = ({
  arbeidsforhold,
  arbeidsforholdIndex,
  readOnly,
  visInfoAlert,
  stillingsprosentArbeidsforhold,
  faisu,
}: Props) => {
  const intl = useIntl();

  const { getValues, watch, setValue, control } = useFormContext<TilretteleggingFormValues>();

  const termindato = watch('termindato');
  const tilretteleggingBehovFom = watch(`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingBehovFom`);

  const filtrerteVelferdspermisjoner = filtrerVelferdspermisjoner(
    arbeidsforhold.velferdspermisjoner,
    tilretteleggingBehovFom,
  );
  const harUavklartVelferdspermisjon = filtrerteVelferdspermisjoner.some(permisjon => permisjon.erGyldig === undefined);

  const oppdaterOverstyrtUtbetalingsgrad = (velferdspermisjonprosent: number) => {
    for (const [index, tilrettelegging] of arbeidsforhold.tilretteleggingDatoer.entries()) {
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
    }
  };

  return (
    <VStack gap="space-16">
      {visInfoAlert && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="TilretteleggingFaktaForm.UndersokNarmere" />
        </AksjonspunktHelpTextHTML>
      )}
      <HStack gap="space-16">
        <RhfCheckbox
          name={`arbeidsforhold.${arbeidsforholdIndex}.skalBrukes`}
          control={control}
          readOnly={readOnly}
          label={<FormattedMessage id="ArbeidsforholdPanel.SkalHaSvpForArbeidsforhold" />}
        />
        <Spacer />
        {faisu?.action}
      </HStack>
      <VStack gap="space-32">
        <RhfDatepicker
          name={`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingBehovFom`}
          control={control}
          label={<FormattedMessage id="ArbeidsforholdPanel.DatoForTilrettelegging" />}
          validate={[required, hasValidDate, validerTidligereEnn(intl, getValues)]}
          readOnly={readOnly}
        />

        {filtrerteVelferdspermisjoner.length > 0 && (
          <VelferdspermisjonTabell
            filtrerteVelferdspermisjoner={filtrerteVelferdspermisjoner}
            arbeidsforholdIndex={arbeidsforholdIndex}
            readOnly={readOnly}
            oppdaterOverstyrtUtbetalingsgrad={oppdaterOverstyrtUtbetalingsgrad}
          />
        )}

        <TilretteleggingOgOppholdPerioderPanel
          arbeidsforhold={arbeidsforhold}
          arbeidsforholdIndex={arbeidsforholdIndex}
          readOnly={readOnly}
          disabled={harUavklartVelferdspermisjon}
          stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
          termindato={termindato}
        />
      </VStack>
    </VStack>
  );
};
