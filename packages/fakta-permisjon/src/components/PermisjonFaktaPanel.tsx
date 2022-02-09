import React, {
  FunctionComponent, useEffect, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';

import {
  hasValidText, maxLength, minLength, required, dateFormat,
} from '@fpsak-frontend/utils';
import { Form, TextAreaField } from '@fpsak-frontend/form-hooks';
import {
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, AoIArbeidsforhold,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, AksjonspunktHelpTextHTML, FloatRight,
} from '@fpsak-frontend/shared-components';
import { VurderArbeidsforholdPermisjonAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import ArbeidsforholdFieldArray from './ArbeidsforholdFieldArray';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  arbeidsforhold: {
    permisjonStatus: string;
  }[],
  begrunnelse: string;
}

const getSorterArbeidsforhold = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => (
  a1: AoIArbeidsforhold,
  a2: AoIArbeidsforhold,
): number => arbeidsgiverOpplysningerPerId[a1.arbeidsgiverIdent].navn.localeCompare(arbeidsgiverOpplysningerPerId[a2.arbeidsgiverIdent].navn);

interface OwnProps {
  saksnummer: string;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  formData?: FormValues,
  setFormData: (data: FormValues) => void,
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lagreCallback: (aksjonspunktData: VurderArbeidsforholdPermisjonAp) => Promise<void>;
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
}) => {
  const { arbeidsforhold } = arbeidOgInntekt;

  const sorterteArbeidsforhold = useMemo(() => [...arbeidsforhold].sort(getSorterArbeidsforhold(arbeidsgiverOpplysningerPerId)),
    [arbeidsforhold, arbeidsgiverOpplysningerPerId]);

  const defaultValues = useMemo(() => ({
    arbeidsforhold: sorterteArbeidsforhold.map((a) => ({
      permisjonStatus: a.permisjonUtenSluttdatoDto.permisjonStatus,
    })),
    begrunnelse: aksjonspunkter[0].begrunnelse,
  }), [sorterteArbeidsforhold]);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || defaultValues,
  });

  useEffect(() => () => {
    setFormData(undefined);
  }, []);

  const harÅpentAksjonspunkt = aksjonspunkter.some((a) => a.status === aksjonspunktStatus.OPPRETTET);

  return (
    <>
      <Row>
        <Column xs="6">
          <Undertittel><FormattedMessage id="PermisjonFaktaPanel.Overskrift" /></Undertittel>
        </Column>
        <Column xs="6">
          <FloatRight>
            <Normaltekst>
              <FormattedMessage
                id="PermisjonFaktaPanel.Skjaringstidspunkt"
                values={{ skjæringspunktDato: dateFormat(arbeidOgInntekt.skjæringstidspunkt) }}
              />
            </Normaltekst>
          </FloatRight>
        </Column>
      </Row>
      <VerticalSpacer thirtyTwoPx />
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="PermisjonFaktaPanel.PermisjonUtenSluttdato" />
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer thirtyTwoPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => lagreCallback({
          kode: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_PERMISJON,
          arbeidsforhold: values.arbeidsforhold.map((a, index) => ({
            internArbeidsforholdId: sorterteArbeidsforhold[index].internArbeidsforholdId,
            permisjonStatus: a.permisjonStatus,
          })),
          begrunnelse: values.begrunnelse,
        })}
      >
        <ArbeidsforholdFieldArray
          saksnummer={saksnummer}
          sorterteArbeidsforhold={sorterteArbeidsforhold}
          arbeidOgInntekt={arbeidOgInntekt}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          isReadOnly={readOnly}
          harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        />
        <VerticalSpacer sixteenPx />
        <TextAreaField
          label={<Element><FormattedMessage id="PermisjonFaktaPanel.Begrunn" /></Element>}
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
        <VerticalSpacer thirtyTwoPx />
        {!readOnly && (
          <Hovedknapp
            mini
            disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
            spinner={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="PermisjonFaktaPanel.Bekreft" />
          </Hovedknapp>
        )}
      </Form>
    </>
  );
};

export default PermisjonFaktaPanel;
