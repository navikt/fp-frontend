import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Spacer, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { filtrerVelferdspermisjoner } from '../arbeidsforholdUtils';
import type { FAISUProps } from './faisuUtils';
import { finnProsentSvangerskapspenger } from './tilretteleggingOgOpphold/tilrettelegging/TilretteleggingForm';
import { TilretteleggingOgOppholdPerioderPanel } from './tilretteleggingOgOpphold/TilretteleggingOgOppholdPerioderPanel';
import { finnTidligsteTilretteleggingsdato, validerTidligereEnn } from './tilretteleggingsdatoer';
import { VelferdspermisjonTabell } from './velferdspermisjon/VelferdspermisjonTabell';

interface Props {
  tilrettelegging: Tilrettelegging;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  visInfoAlert: boolean;
  stillingsprosentArbeidsforhold: number;
  faisu: FAISUProps | undefined;
}

export const ArbeidsforholdPanel = ({
  tilrettelegging,
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
    tilrettelegging.velferdspermisjoner,
    tilretteleggingBehovFom,
  );
  const harUavklartVelferdspermisjon = filtrerteVelferdspermisjoner.some(permisjon => permisjon.erGyldig === undefined);

  const oppdaterOverstyrtUtbetalingsgrad = (velferdspermisjonprosent: number) => {
    for (const [index, dato] of tilrettelegging.tilretteleggingDatoer.entries()) {
      const prosentSvangerskapspenger = finnProsentSvangerskapspenger(
        dato,
        stillingsprosentArbeidsforhold,
        velferdspermisjonprosent,
        false,
      );
      if (prosentSvangerskapspenger !== undefined) {
        setValue(`arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingDatoer.${index}`, {
          ...dato,
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
          tilrettelegging={tilrettelegging}
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
