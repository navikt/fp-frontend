import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { Element, Undertittel } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';
import {
  Image, FlexColumn, FlexContainer, FlexRow, VerticalSpacer, FloatRight, OkAvbrytModal,
} from '@navikt/ft-ui-komponenter';

import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import binIcon from '@fpsak-frontend/assets/images/bin.svg';
import { AoIArbeidsforhold, ManueltArbeidsforhold } from '@fpsak-frontend/types';
import {
  hasValidText, maxLength, minLength, hasValidDate, hasValidInteger, required, minValue, maxValue, dateAfterOrEqual,
} from '@navikt/ft-utils';
import {
  TextAreaField, Datepicker, InputField, Form,
} from '@fpsak-frontend/form-hooks';

import ArbeidsforholdOgInntekt from '../../types/arbeidsforholdOgInntekt';

import styles from './manueltLagtTilArbeidsforholdForm.less';
import { useSetDirtyForm } from '../../DirtyFormProvider';

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

const validerPeriodeRekkefølge = (
  getValues: UseFormGetValues<FormValues>,
) => (tom?: string) => (tom ? dateAfterOrEqual(getValues('fom'))(tom) : null);

interface OwnProps {
  behandlingUuid: string;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  radData?: ArbeidsforholdOgInntekt;
  arbeidsforhold?: AoIArbeidsforhold;
  lukkArbeidsforholdRad: () => void;
  erOverstyrt: boolean;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  erNyttArbeidsforhold?: boolean;
}

const ManueltLagtTilArbeidsforholdForm: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  isReadOnly,
  registrerArbeidsforhold,
  radData,
  lukkArbeidsforholdRad,
  erOverstyrt,
  oppdaterTabell,
  erNyttArbeidsforhold = false,
}) => {
  const intl = useIntl();
  const [visSletteDialog, settVisSletteDialog] = useState(false);

  const defaultValues = useMemo<FormValues>(() => ({
    fom: radData?.avklaring?.fom,
    tom: radData?.avklaring?.tom,
    stillingsprosent: radData?.avklaring?.stillingsprosent,
    begrunnelse: radData?.avklaring?.begrunnelse,
    arbeidsgiverNavn: radData?.avklaring?.arbeidsgiverNavn,
  }), [radData]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useSetDirtyForm(formMethods.formState.isDirty);

  const lukkRadOgResetForm = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
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
        };

        const gammelIndex = gammelData.findIndex((data) => data.arbeidsgiverIdent === MANUELT_ORG_NR);
        if (gammelIndex === -1) {
          return gammelData.concat(rad);
        }
        return gammelData.map((data, i) => (i === gammelIndex ? rad : data));
      });

      formMethods.reset(formValues);
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
      oppdaterTabell((oldData) => oldData.filter((data) => data.arbeidsgiverIdent !== MANUELT_ORG_NR));
      if (erNyttArbeidsforhold) {
        lukkArbeidsforholdRad();
      }
    });
  }, [formMethods]);

  return (
    <>
      {!radData && (
        <>
          <Undertittel><FormattedMessage id="LeggTilArbeidsforholdForm.LeggTilArbeidsforhold" /></Undertittel>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <VerticalSpacer eightPx />
      <Form formMethods={formMethods} onSubmit={lagreArbeidsforhold}>
        <FlexContainer>
          <FlexRow>
            {erOverstyrt && (
              <>
                <FlexColumn>
                  <InputField
                    name="arbeidsgiverNavn"
                    label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.Arbeidsgiver" /></Element>}
                    validate={[required]}
                    bredde="XXL"
                    readOnly={isReadOnly || !erOverstyrt}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name="fom"
                    label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeFra" /></Element>}
                    validate={[required, hasValidDate]}
                    isReadOnly={isReadOnly || !erOverstyrt}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name="tom"
                    label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeTil" /></Element>}
                    validate={[hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                    isReadOnly={isReadOnly || !erOverstyrt}
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
                maxLength={3}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer twentyPx />
        <TextAreaField
          label={<Element><FormattedMessage id="LeggTilArbeidsforholdForm.Begrunn" /></Element>}
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly || !erOverstyrt}
        />
        <VerticalSpacer twentyPx />
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
            {radData && (
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
        <VerticalSpacer fourtyPx />
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
