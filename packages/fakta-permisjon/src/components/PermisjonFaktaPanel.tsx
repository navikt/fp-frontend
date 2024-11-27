import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Heading,Label } from '@navikt/ds-react';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import {
  AksjonspunktHelpTextHTML,
  FlexColumn,
  FlexContainer,
  FlexRow,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktKode,AksjonspunktStatus } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  AlleKodeverk,
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';
import { VurderArbeidsforholdPermisjonAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import ArbeidsforholdFieldArray from './ArbeidsforholdFieldArray';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  arbeidsforhold: {
    permisjonStatus: string;
  }[];
  begrunnelse: string;
};

const getSorterArbeidsforhold =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) =>
  (a1: AoIArbeidsforhold, a2: AoIArbeidsforhold): number =>
    arbeidsgiverOpplysningerPerId[a1.arbeidsgiverIdent].navn.localeCompare(
      arbeidsgiverOpplysningerPerId[a2.arbeidsgiverIdent].navn,
    );

interface OwnProps {
  saksnummer: string;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lagreCallback: (aksjonspunktData: VurderArbeidsforholdPermisjonAp) => Promise<void>;
  alleKodeverk: AlleKodeverk;
}

const PermisjonFaktaPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  aksjonspunkter,
  readOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  lagreCallback,
  alleKodeverk,
}) => {
  const arbeidOgInntektMedPermisjon = useMemo(
    () => ({
      inntektsmeldinger: arbeidOgInntekt.inntektsmeldinger,
      arbeidsforhold: arbeidOgInntekt.arbeidsforhold.filter(a => a.permisjonOgMangel?.årsak),
      inntekter: arbeidOgInntekt.inntekter,
      skjæringstidspunkt: arbeidOgInntekt.skjæringstidspunkt,
    }),
    [arbeidOgInntekt],
  );

  const { arbeidsforhold } = arbeidOgInntektMedPermisjon;

  const sorterteArbeidsforhold = useMemo(
    () => [...arbeidsforhold].sort(getSorterArbeidsforhold(arbeidsgiverOpplysningerPerId)),
    [arbeidsforhold, arbeidsgiverOpplysningerPerId],
  );

  const defaultValues = useMemo(
    () => ({
      arbeidsforhold: sorterteArbeidsforhold.map(a => ({
        permisjonStatus: a.permisjonOgMangel?.permisjonStatus,
      })),
      begrunnelse: aksjonspunkter[0].begrunnelse,
    }),
    [sorterteArbeidsforhold],
  );

  const formMethods = useForm<FormValues>({
    defaultValues: formData || defaultValues,
  });

  useEffect(
    () => () => {
      setFormData(formMethods.getValues());
    },
    [formMethods.getValues()],
  );

  const harÅpentAksjonspunkt = aksjonspunkter.some(a => a.status === AksjonspunktStatus.OPPRETTET);

  return (
    <>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Heading size="small">
              <FormattedMessage id="PermisjonFaktaPanel.Overskrift" />
            </Heading>
          </FlexColumn>
          <FlexColumn>
            <BodyShort size="small">
              <FormattedMessage
                id="PermisjonFaktaPanel.Skjaringstidspunkt"
                values={{ skjæringspunktDato: dateFormat(arbeidOgInntektMedPermisjon.skjæringstidspunkt) }}
              />
            </BodyShort>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer thirtyTwoPx />
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="PermisjonFaktaPanel.PermisjonUtenSluttdato" />
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer thirtyTwoPx />
      <Form
        formMethods={formMethods}
        onSubmit={values =>
          lagreCallback({
            kode: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON,
            arbeidsforhold: values.arbeidsforhold.map((a, index) => ({
              internArbeidsforholdId: sorterteArbeidsforhold[index].internArbeidsforholdId,
              arbeidsgiverIdent: sorterteArbeidsforhold[index].arbeidsgiverIdent,
              permisjonStatus: a.permisjonStatus,
            })),
            begrunnelse: values.begrunnelse,
          })
        }
      >
        <ArbeidsforholdFieldArray
          saksnummer={saksnummer}
          sorterteArbeidsforhold={sorterteArbeidsforhold}
          arbeidOgInntekt={arbeidOgInntektMedPermisjon}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          isReadOnly={readOnly}
          harÅpentAksjonspunkt={harÅpentAksjonspunkt}
          skjæringstidspunkt={arbeidOgInntektMedPermisjon.skjæringstidspunkt}
          alleKodeverk={alleKodeverk}
        />
        <VerticalSpacer thirtyTwoPx />
        <TextAreaField
          label={
            <Label size="small">
              <FormattedMessage id="PermisjonFaktaPanel.Begrunn" />
            </Label>
          }
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
        <VerticalSpacer sixteenPx />
        {!readOnly && (
          <Button
            size="small"
            variant="primary"
            disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
            loading={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="PermisjonFaktaPanel.Bekreft" />
          </Button>
        )}
      </Form>
    </>
  );
};

export default PermisjonFaktaPanel;
