import React, {
  FunctionComponent, useMemo, useCallback,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Element } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/fp-react-components';

import {
  required, hasValidText, maxLength, minLength,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, Form,
} from '@fpsak-frontend/form-hooks';
import {
  AoIArbeidsforhold, Inntektspost, ManglendeInntektsmeldingVurdering,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';

import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

import styles from './inntektsmeldingInnhentesForm.less';
import ArbeidsforholdInformasjonPanel from './ArbeidsforholdInformasjonPanel';
import { useSetDirtyForm } from '../DirtyFormProvider';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}

interface OwnProps {
  behandlingUuid: string;
  skjæringspunktDato: string;
  inntektsposter?: Inntektspost[];
  isReadOnly: boolean;
  arbeidsforhold: AoIArbeidsforhold;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  skalViseArbeidsforholdId: boolean;
}

const InntektsmeldingInnhentesForm: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforhold,
  isReadOnly,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
  skalViseArbeidsforholdId,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(() => ({
    saksbehandlersVurdering: arbeidsforhold.saksbehandlersVurdering,
    begrunnelse: arbeidsforhold.begrunnelse,
  }), [arbeidsforhold]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useSetDirtyForm(formMethods.formState.isDirty);

  const avbryt = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  }, [lukkArbeidsforholdRad, defaultValues]);

  const lagre = useCallback((formValues: FormValues) => {
    const params = {
      behandlingUuid,
      vurdering: formValues.saksbehandlersVurdering,
      arbeidsgiverIdent: arbeidsforhold.arbeidsgiverIdent,
      internArbeidsforholdRef: arbeidsforhold.internArbeidsforholdId,
      begrunnelse: formValues.begrunnelse,
    };
    lagreVurdering(params).then(() => {
      oppdaterTabell((oldData) => oldData.map((data) => {
        if (data.arbeidsforhold?.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
          && data.arbeidsforhold?.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId) {
          return {
            ...data,
            arbeidsforhold: {
              ...data.arbeidsforhold,
              begrunnelse: formValues.begrunnelse,
              saksbehandlersVurdering: formValues.saksbehandlersVurdering,
            },
          };
        }
        return data;
      }));
    }).finally(() => formMethods.reset(formValues));
  }, [arbeidsforhold, oppdaterTabell]);

  return (
    <>
      <ArbeidsforholdInformasjonPanel
        skjæringspunktDato={skjæringspunktDato}
        inntektsposter={inntektsposter}
        arbeidsforhold={arbeidsforhold}
        skalViseArbeidsforholdId={skalViseArbeidsforholdId}
      />
      <Form formMethods={formMethods} onSubmit={lagre}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn className={styles.radioHeader}>
              <Element><FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Hjelpetekst
              /* @ts-ignore */
                popoverProps={{ className: styles.hjelpetekst }}
              >
                <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel1" />
                <VerticalSpacer eightPx />
                <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel2" />
                <VerticalSpacer eightPx />
                <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel3" />
              </Hjelpetekst>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <RadioGroupField
          name="saksbehandlersVurdering"
          validate={[required]}
          readOnly={isReadOnly}
          direction="vertical"
        >
          <RadioOption
            value={ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}
            label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.TarKontakt' })}
          />
          <RadioOption
            value={ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING}
            label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.GåVidere' })}
          />
        </RadioGroupField>
        <VerticalSpacer sixteenPx />
        <TextAreaField
          label={<Element><FormattedMessage id="InntektsmeldingInnhentesForm.Begrunn" /></Element>}
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
        />
        <VerticalSpacer twentyPx />
        {!isReadOnly && (
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Knapp
                  mini
                  spinner={formMethods.formState.isSubmitting}
                  disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                  htmlType="submit"
                >
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Lagre" />
                </Knapp>
              </FlexColumn>
              <FlexColumn>
                <Flatknapp
                  mini
                  spinner={false}
                  disabled={formMethods.formState.isSubmitting}
                  onClick={avbryt}
                  htmlType="button"
                >
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Avbryt" />
                </Flatknapp>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        )}
        <VerticalSpacer fourtyPx />
      </Form>
    </>
  );
};

export default InntektsmeldingInnhentesForm;
