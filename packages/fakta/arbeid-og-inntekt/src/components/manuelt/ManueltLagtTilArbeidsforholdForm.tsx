import { useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { TrashFillIcon } from '@navikt/aksel-icons';
import { Button, Heading, HStack, Spacer, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  hasValidDate,
  hasValidInteger,
  hasValidText,
  maxLength,
  maxValue,
  minLength,
  minValue,
  required,
} from '@navikt/ft-form-validators';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type { ManueltArbeidsforhold } from '@navikt/fp-types';

import { useSetDirtyForm } from '../../DirtyFormProvider';
import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';

export const MANUELT_ORG_NR = '342352362';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

type FormValues = {
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
  begrunnelse?: string;
};

interface Props {
  behandlingUuid: string;
  behandlingVersjon: number;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  radData?: ArbeidsforholdOgInntektRadData;
  lukkArbeidsforholdRad: () => void;
  erOverstyrt: boolean;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
  erNyttArbeidsforhold?: boolean;
}

export const ManueltLagtTilArbeidsforholdForm = ({
  behandlingUuid,
  behandlingVersjon,
  isReadOnly,
  registrerArbeidsforhold,
  radData,
  lukkArbeidsforholdRad,
  erOverstyrt,
  oppdaterTabell,
  erNyttArbeidsforhold = false,
}: Props) => {
  const intl = useIntl();
  const [visSletteDialog, setVisSletteDialog] = useState(false);

  const defaultValues = {
    fom: radData?.avklaring?.fom,
    tom: radData?.avklaring?.tom,
    stillingsprosent: radData?.avklaring?.stillingsprosent,
    begrunnelse: radData?.avklaring?.begrunnelse,
    arbeidsgiverNavn: radData?.avklaring?.arbeidsgiverNavn,
  };

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useSetDirtyForm(formMethods.formState.isDirty);

  const lukkRadOgResetForm = () => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  };

  const lagreArbeidsforhold = (formValues: FormValues) => {
    const params: ManueltArbeidsforhold = lagManueltArbeidsforhold(
      ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
      behandlingUuid,
      behandlingVersjon,
      formValues,
    );

    return registrerArbeidsforhold(params).then(() => {
      oppdaterTabell(getOppdaterTabell(formValues));

      formMethods.reset(formValues);
      if (erNyttArbeidsforhold) {
        lukkArbeidsforholdRad();
      }
    });
  };

  const slettArbeidsforhold = () => {
    const formValues = formMethods.getValues();
    const params = lagManueltArbeidsforhold(
      ArbeidsforholdKomplettVurderingType.FJERN_FRA_BEHANDLINGEN,
      behandlingUuid,
      behandlingVersjon,
      formValues,
    );

    void registrerArbeidsforhold(params).then(
      getOppdaterTabellOgLukkRad(oppdaterTabell, lukkArbeidsforholdRad, erNyttArbeidsforhold),
    );
  };

  return (
    <VStack gap="space-16">
      {!radData && (
        <Heading size="small" level="3">
          <FormattedMessage id="LeggTilArbeidsforholdForm.LeggTilArbeidsforhold" />
        </Heading>
      )}
      <RhfForm formMethods={formMethods} onSubmit={lagreArbeidsforhold}>
        <VStack gap="space-24">
          <HStack gap="space-16">
            {erOverstyrt && (
              <>
                <RhfTextField
                  name="arbeidsgiverNavn"
                  control={formMethods.control}
                  label={<FormattedMessage id="LeggTilArbeidsforholdForm.Arbeidsgiver" />}
                  validate={[required]}
                  readOnly={isReadOnly || !erOverstyrt}
                />
                <RhfDatepicker
                  name="fom"
                  control={formMethods.control}
                  label={<FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeFra" />}
                  validate={[required, hasValidDate]}
                  isReadOnly={isReadOnly || !erOverstyrt}
                />
                <RhfDatepicker
                  name="tom"
                  control={formMethods.control}
                  label={<FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeTil" />}
                  validate={[hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                  isReadOnly={isReadOnly || !erOverstyrt}
                />
              </>
            )}
            <RhfTextField
              name="stillingsprosent"
              control={formMethods.control}
              label={<FormattedMessage id="LeggTilArbeidsforholdForm.Stillingsprosent" />}
              parse={value => {
                const parsedValue = Number.parseInt(value.toString(), 10);
                return Number.isNaN(parsedValue) ? value : parsedValue;
              }}
              validate={[required, hasValidInteger, minValue1, maxValue100]}
              readOnly={isReadOnly || !erOverstyrt}
              maxLength={3}
            />
          </HStack>
          <RhfTextarea
            name="begrunnelse"
            control={formMethods.control}
            label={<FormattedMessage id="LeggTilArbeidsforholdForm.Begrunn" />}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly || !erOverstyrt}
          />
          {erOverstyrt && (
            <HStack gap="space-16">
              <Button
                size="small"
                variant="secondary"
                loading={formMethods.formState.isSubmitting}
                disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              >
                <FormattedMessage id="LeggTilArbeidsforholdForm.Lagre" />
              </Button>
              <Button
                size="small"
                variant="tertiary"
                loading={false}
                disabled={formMethods.formState.isSubmitting}
                onClick={lukkRadOgResetForm}
                type="button"
              >
                <FormattedMessage id="LeggTilArbeidsforholdForm.Avbryt" />
              </Button>
              {radData && (
                <>
                  <Spacer />
                  <Button
                    size="small"
                    variant="tertiary"
                    loading={false}
                    disabled={formMethods.formState.isSubmitting}
                    onClick={() => setVisSletteDialog(true)}
                    type="button"
                    icon={<TrashFillIcon aria-hidden />}
                  >
                    <FormattedMessage id="LeggTilArbeidsforholdForm.Slett" />
                  </Button>
                </>
              )}
            </HStack>
          )}
        </VStack>
      </RhfForm>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'NyttArbeidsforholdForm.VilDuSlette' })}
          submit={slettArbeidsforhold}
          cancel={() => setVisSletteDialog(false)}
          showModal
        />
      )}
    </VStack>
  );
};

const lagManueltArbeidsforhold = (
  vurdering: ArbeidsforholdKomplettVurderingType,
  behandlingUuid: string,
  behandlingVersjon: number,
  formValues: FormValues,
): ManueltArbeidsforhold => ({
  vurdering,
  behandlingUuid,
  behandlingVersjon,
  arbeidsgiverIdent: MANUELT_ORG_NR,
  begrunnelse: formValues.begrunnelse ?? '',
  arbeidsgiverNavn: formValues.arbeidsgiverNavn ?? '',
  fom: formValues.fom ?? '',
  tom: formValues.tom,
  stillingsprosent: formValues.stillingsprosent ?? '',
});

const validerPeriodeRekkefølge = (getValues: UseFormGetValues<FormValues>) => (tom?: string) => {
  const fom = getValues('fom');
  if (tom && fom) {
    return dateAfterOrEqual(fom)(tom);
  }
  return null;
};

const getOppdaterTabell =
  (formValues: FormValues) =>
  (gammelData: ArbeidsforholdOgInntektRadData[]): ArbeidsforholdOgInntektRadData[] => {
    const rad: ArbeidsforholdOgInntektRadData = {
      erPrivatPerson: false,
      arbeidsgiverIdent: MANUELT_ORG_NR,
      arbeidsgiverNavn: formValues.arbeidsgiverNavn ?? 'Fant ikke arbeidsgiverNavn',
      avklaring: {
        fom: formValues.fom,
        tom: formValues.tom,
        stillingsprosent: formValues.stillingsprosent,
        arbeidsgiverNavn: formValues.arbeidsgiverNavn,
        begrunnelse: formValues.begrunnelse,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
      },
      inntektsmeldingerForRad: [],
      inntektsposter: [],
      arbeidsforholdForRad: [],
    };

    const gammelIndex = gammelData.findIndex(data => data.arbeidsgiverIdent === MANUELT_ORG_NR);
    if (gammelIndex === -1) {
      return gammelData.concat(rad);
    }
    return gammelData.map((data, i) => (i === gammelIndex ? rad : data));
  };

const getOppdaterTabellOgLukkRad =
  (
    oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void,
    lukkArbeidsforholdRad: () => void,
    erNyttArbeidsforhold?: boolean,
  ) =>
  () => {
    oppdaterTabell(oldData => oldData.filter(data => data.arbeidsgiverIdent !== MANUELT_ORG_NR));
    if (erNyttArbeidsforhold) {
      lukkArbeidsforholdRad();
    }
  };
