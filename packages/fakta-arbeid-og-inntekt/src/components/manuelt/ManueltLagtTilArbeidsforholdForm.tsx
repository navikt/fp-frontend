import { useMemo, useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { TrashFillIcon } from '@navikt/aksel-icons';
import { Button, Heading, HStack, Spacer } from '@navikt/ds-react';
import { Datepicker, Form, InputField, TextAreaField } from '@navikt/ft-form-hooks';
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
import { OkAvbrytModal, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type { ManueltArbeidsforhold } from '@navikt/fp-types';

import { useSetDirtyForm } from '../../DirtyFormProvider';
import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';

export const MANUELT_ORG_NR = '342352362';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

export type FormValues = {
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
  begrunnelse?: string;
};

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
    const rad = {
      arbeidsgiverIdent: MANUELT_ORG_NR,
      arbeidsgiverNavn: formValues.arbeidsgiverNavn,
      avklaring: {
        fom: formValues.fom,
        tom: formValues.tom,
        stillingsprosent: formValues.stillingsprosent,
        arbeidsgiverNavn: formValues.arbeidsgiverNavn,
        begrunnelse: formValues.begrunnelse,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
      },
    } as ArbeidsforholdOgInntektRadData;

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

  const defaultValues = useMemo<FormValues>(
    () => ({
      fom: radData?.avklaring?.fom,
      tom: radData?.avklaring?.tom,
      stillingsprosent: radData?.avklaring?.stillingsprosent,
      begrunnelse: radData?.avklaring?.begrunnelse,
      arbeidsgiverNavn: radData?.avklaring?.arbeidsgiverNavn,
    }),
    [radData],
  );

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useSetDirtyForm(formMethods.formState.isDirty);

  const lukkRadOgResetForm = () => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  };

  const lagreArbeidsforhold = (formValues: FormValues) => {
    const params = {
      behandlingUuid,
      behandlingVersjon,
      arbeidsgiverIdent: MANUELT_ORG_NR,
      vurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
      ...formValues,
    };

    // @ts-expect-error Fiks
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
    const params = {
      behandlingUuid,
      behandlingVersjon,
      arbeidsgiverIdent: MANUELT_ORG_NR,
      vurdering: ArbeidsforholdKomplettVurderingType.FJERN_FRA_BEHANDLINGEN,
      ...formValues,
    };
    // @ts-expect-error Fiks
    registrerArbeidsforhold(params).then(
      getOppdaterTabellOgLukkRad(oppdaterTabell, lukkArbeidsforholdRad, erNyttArbeidsforhold),
    );
  };

  return (
    <>
      {!radData && (
        <>
          <Heading size="small">
            <FormattedMessage id="LeggTilArbeidsforholdForm.LeggTilArbeidsforhold" />
          </Heading>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <VerticalSpacer eightPx />
      <Form formMethods={formMethods} onSubmit={lagreArbeidsforhold}>
        <HStack gap="4">
          {erOverstyrt && (
            <>
              <InputField
                name="arbeidsgiverNavn"
                label={<FormattedMessage id="LeggTilArbeidsforholdForm.Arbeidsgiver" />}
                validate={[required]}
                readOnly={isReadOnly || !erOverstyrt}
              />
              <Datepicker
                name="fom"
                label={<FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeFra" />}
                validate={[required, hasValidDate]}
                isReadOnly={isReadOnly || !erOverstyrt}
              />
              <Datepicker
                name="tom"
                label={<FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeTil" />}
                validate={[hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                isReadOnly={isReadOnly || !erOverstyrt}
              />
            </>
          )}
          <InputField
            name="stillingsprosent"
            label={<FormattedMessage id="LeggTilArbeidsforholdForm.Stillingsprosent" />}
            parse={value => {
              const parsedValue = parseInt(value.toString(), 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
            validate={[required, hasValidInteger, minValue1, maxValue100]}
            readOnly={isReadOnly || !erOverstyrt}
            maxLength={3}
          />
        </HStack>
        <VerticalSpacer twentyPx />
        <TextAreaField
          label={<FormattedMessage id="LeggTilArbeidsforholdForm.Begrunn" />}
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly || !erOverstyrt}
        />
        <VerticalSpacer twentyPx />
        {erOverstyrt && (
          <HStack gap="4">
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
        <VerticalSpacer fourtyPx />
      </Form>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'NyttArbeidsforholdForm.VilDuSlette' })}
          submit={slettArbeidsforhold}
          cancel={() => setVisSletteDialog(false)}
          showModal
        />
      )}
    </>
  );
};
