import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { HStack, Spacer, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs, { type Dayjs } from 'dayjs';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { filtrerVelferdspermisjoner } from '../arbeidsforholdUtils';
import type { FAISUProps } from './faisuUtils';
import { finnProsentSvangerskapspenger } from './tilretteleggingOgOpphold/tilrettelegging/TilretteleggingForm';
import { TilretteleggingOgOppholdPerioderPanel } from './tilretteleggingOgOpphold/TilretteleggingOgOppholdPerioderPanel';
import { finnTidligsteTilretteleggingsdato } from './tilretteleggingsdatoer';
import { VelferdspermisjonTabell } from './velferdspermisjon/VelferdspermisjonTabell';

const validerTidligereEnn =
  (intl: IntlShape, tidligsteTidspunkt: Dayjs) =>
  (tilretteleggingBehovFom: string): string | null => {
    const tilretteleggingFomDato = dayjs(tilretteleggingBehovFom);

    if (tilretteleggingFomDato.isValid() && tilretteleggingFomDato.isAfter(tidligsteTidspunkt)) {
      return intl.formatMessage(
        { id: 'ArbeidsforholdPanel.TilretteleggingTidligereEnn' },
        { dato: tidligsteTidspunkt.format(DDMMYYYY_DATE_FORMAT) },
      );
    }
    return null;
  };

interface Props {
  arbeidsforhold: Tilrettelegging;
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

  const { watch, setValue, control } = useFormContext<TilretteleggingFormValues>();

  const termindato = watch('termindato');
  const fødselsdato = watch('fødselsdato');
  const tilretteleggingBehovFom = watch(`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingBehovFom`);

  const tidligsteTilretteleggingsdato = finnTidligsteTilretteleggingsdato(termindato, fødselsdato);

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
          validate={[required, hasValidDate, validerTidligereEnn(intl, tidligsteTilretteleggingsdato)]}
          fromDate={dayjs(termindato).subtract(9, 'months').toDate()}
          toDate={tidligsteTilretteleggingsdato.toDate()}
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
