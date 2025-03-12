import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type { AoIArbeidsforhold, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import type { VurderArbeidsforholdPermisjonAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import { ArbeidsforholdFieldArray } from './ArbeidsforholdFieldArray';

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

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const PermisjonFaktaPanel = ({ arbeidOgInntekt, arbeidsgiverOpplysningerPerId }: Props) => {
  const { aksjonspunkterForPanel, fagsak, submitCallback, isReadOnly, alleKodeverk } =
    usePanelDataContext<VurderArbeidsforholdPermisjonAp>();

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
      begrunnelse: aksjonspunkterForPanel[0].begrunnelse ?? '',
    }),
    [sorterteArbeidsforhold],
  );

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || defaultValues,
  });

  useEffect(
    () => () => {
      setFormData(formMethods.getValues());
    },
    [],
  );

  const harÅpentAksjonspunkt = aksjonspunkterForPanel.some(a => a.status === AksjonspunktStatus.OPPRETTET);

  return (
    <VStack gap="8">
      <HStack justify="space-between">
        <Heading size="small">
          <FormattedMessage id="PermisjonFaktaPanel.Overskrift" />
        </Heading>
        <BodyShort size="small">
          <FormattedMessage
            id="PermisjonFaktaPanel.Skjaringstidspunkt"
            values={{ skjæringspunktDato: dateFormat(arbeidOgInntektMedPermisjon.skjæringstidspunkt) }}
          />
        </BodyShort>
      </HStack>
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="PermisjonFaktaPanel.PermisjonUtenSluttdato" />
        </AksjonspunktHelpTextHTML>
      )}
      <Form
        formMethods={formMethods}
        onSubmit={values =>
          submitCallback({
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
        <VStack gap="6">
          <ArbeidsforholdFieldArray
            saksnummer={fagsak.saksnummer}
            sorterteArbeidsforhold={sorterteArbeidsforhold}
            arbeidOgInntekt={arbeidOgInntektMedPermisjon}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            isReadOnly={isReadOnly}
            harÅpentAksjonspunkt={harÅpentAksjonspunkt}
            skjæringstidspunkt={arbeidOgInntektMedPermisjon.skjæringstidspunkt}
            alleKodeverk={alleKodeverk}
          />
          <TextAreaField
            label={
              <Label size="small">
                <FormattedMessage id="PermisjonFaktaPanel.Begrunn" />
              </Label>
            }
            name="begrunnelse"
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
          />
          {!isReadOnly && (
            <div>
              <Button
                size="small"
                variant="primary"
                disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                loading={formMethods.formState.isSubmitting}
              >
                <FormattedMessage id="PermisjonFaktaPanel.Bekreft" />
              </Button>
            </div>
          )}
        </VStack>
      </Form>
    </VStack>
  );
};
