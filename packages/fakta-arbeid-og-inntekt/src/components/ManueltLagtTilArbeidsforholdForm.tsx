import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { Element, Undertittel } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import binIcon from '@fpsak-frontend/assets/images/bin.svg';
import { AoIArbeidsforhold, ManueltArbeidsforhold } from '@fpsak-frontend/types';
import {
  hasValidText, maxLength, minLength, hasValidDate, hasValidInteger, required, minValue, maxValue, dateAfterOrEqual,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, DatepickerField, InputField, Form,
} from '@fpsak-frontend/form-hooks';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image, FloatRight, OkAvbrytModal,
} from '@fpsak-frontend/shared-components';

import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

import styles from './manueltLagtTilArbeidsforholdForm.less';

export const MANUELT_ORG_NR = '342352362';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

export type FormValues = {
  arbeidsgiverNavn: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  begrunnelse: string;
}

const validerPeriodeRekkefølge = (getValues: UseFormGetValues<FormValues>) => (tom: string) => dateAfterOrEqual(getValues('fom'))(tom);

interface OwnProps {
  behandlingUuid: string;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  arbeidsforhold?: AoIArbeidsforhold;
  arbeidsgiverNavn?: string;
  lukkArbeidsforholdRad: () => void;
  erOverstyrt: boolean;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  erNyttArbeidsforhold?: boolean;
}

const ManueltLagtTilArbeidsforholdForm: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  isReadOnly,
  registrerArbeidsforhold,
  arbeidsforhold,
  arbeidsgiverNavn,
  lukkArbeidsforholdRad,
  erOverstyrt,
  oppdaterTabell,
  erNyttArbeidsforhold = false,
}) => {
  const intl = useIntl();
  const [visSletteDialog, settVisSletteDialog] = useState(false);

  const defaultValues = useMemo<FormValues>(() => (arbeidsforhold ? {
    fom: arbeidsforhold.fom,
    tom: arbeidsforhold.tom,
    stillingsprosent: arbeidsforhold.stillingsprosent,
    begrunnelse: arbeidsforhold.begrunnelse,
    arbeidsgiverNavn,
  } : undefined), [arbeidsforhold, arbeidsgiverNavn]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const lukkRadOgResetForm = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset();
  }, [lukkArbeidsforholdRad]);

  const lagreArbeidsforhold = useCallback((formValues: FormValues) => {
    const params = {
      behandlingUuid,
      arbeidsgiverIdent: MANUELT_ORG_NR,
      vurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
      ...formValues,
    };
    registrerArbeidsforhold(params).then(() => {
      oppdaterTabell((gammelData) => {
        const af = {
          arbeidsforhold: {
            arbeidsgiverIdent: MANUELT_ORG_NR,
            fom: formValues.fom,
            tom: formValues.tom,
            stillingsprosent: formValues.stillingsprosent,
            begrunnelse: formValues.begrunnelse,
            saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
          },
          arbeidsgiverNavn: formValues.arbeidsgiverNavn,
          inntektsmelding: undefined,
          inntektsposter: undefined,
        };

        const gammelIndex = gammelData.findIndex((data) => data.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);
        if (gammelIndex === -1) {
          return gammelData.concat(af);
        }
        return gammelData.map((data, i) => (i === gammelIndex ? af : data));
      });

      formMethods.reset();
      if (erNyttArbeidsforhold) {
        lukkArbeidsforholdRad();
      }
    });
  }, [behandlingUuid, oppdaterTabell]);

  const slettArbeidsforhold = useCallback(() => {
    const formValues = formMethods.getValues();
    const params = {
      behandlingUuid,
      arbeidsgiverIdent: MANUELT_ORG_NR,
      vurdering: ArbeidsforholdKomplettVurderingType.FJERN_FRA_BEHANDLINGEN,
      ...formValues,
    };
    registrerArbeidsforhold(params).then(() => {
      oppdaterTabell((oldData) => oldData.filter((data) => data.arbeidsforhold?.arbeidsgiverIdent !== MANUELT_ORG_NR));
      if (erNyttArbeidsforhold) {
        lukkArbeidsforholdRad();
      }
    });
  }, [formMethods]);

  return (
    <>
      {!arbeidsforhold && (
        <>
          <Undertittel><FormattedMessage id="LeggTilArbeidsforholdForm.LeggTilArbeidsforhold" /></Undertittel>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <Form formMethods={formMethods} onSubmit={lagreArbeidsforhold}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <InputField
                name="arbeidsgiverNavn"
                label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.Arbeidsgiver" /></Element>}
                validate={[required]}
                bredde="XXL"
                readOnly={isReadOnly || !erOverstyrt}
              />
            </FlexColumn>
            {erOverstyrt && (
              <>
                <FlexColumn>
                  <DatepickerField
                    name="fom"
                    label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeFra" /></Element>}
                    validate={[required, hasValidDate]}
                    readOnly={isReadOnly || !erOverstyrt}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    name="tom"
                    label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeTil" /></Element>}
                    validate={[required, hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                    readOnly={isReadOnly || !erOverstyrt}
                  />
                </FlexColumn>
              </>
            )}
            <FlexColumn>
              <InputField
                name="stillingsprosent"
                label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.Stillingsprosent" /></Element>}
                parse={(value: string) => {
                  const parsedValue = parseInt(value, 10);
                  return Number.isNaN(parsedValue) ? value : parsedValue;
                }}
                validate={[required, hasValidInteger, minValue1, maxValue100]}
                bredde="XS"
                readOnly={isReadOnly || !erOverstyrt}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer sixteenPx />
        <TextAreaField
          label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.Begrunn" /></Element>}
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly || !erOverstyrt}
        />
        <VerticalSpacer sixteenPx />
        {erOverstyrt && (
          <Row>
            <Column xs="8">
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <Knapp
                      mini
                      spinner={formMethods.formState.isSubmitting}
                      disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                      htmlType="submit"
                    >
                      <FormattedMessage id="LeggTilArbeidsforholdForm.Lagre" />
                    </Knapp>
                  </FlexColumn>
                  <FlexColumn>
                    <Flatknapp
                      mini
                      spinner={false}
                      disabled={formMethods.formState.isSubmitting}
                      onClick={lukkRadOgResetForm}
                      htmlType="button"
                    >
                      <FormattedMessage id="LeggTilArbeidsforholdForm.Avbryt" />
                    </Flatknapp>
                  </FlexColumn>
                </FlexRow>
              </FlexContainer>
            </Column>
            {arbeidsforhold && (
              <Column xs="4">
                <FloatRight>
                  <Flatknapp
                    mini
                    spinner={false}
                    disabled={formMethods.formState.isSubmitting}
                    onClick={() => settVisSletteDialog(true)}
                    htmlType="button"
                  >
                    <Image src={binIcon} className={styles.buttonImage} />
                    <span><FormattedMessage id="LeggTilArbeidsforholdForm.Slett" /></span>
                  </Flatknapp>
                </FloatRight>
              </Column>
            )}
          </Row>
        )}
      </Form>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'NyttArbeidsforholdForm.VilDuSlette' })}
          submit={slettArbeidsforhold}
          cancel={() => settVisSletteDialog(false)}
          showModal
        />
      )}
    </>
  );
};

export default ManueltLagtTilArbeidsforholdForm;
