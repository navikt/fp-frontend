import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type {
  ArbeidOgInntektsmelding,
  Arbeidsforhold,
  ArbeidsgiverOpplysningerPerId,
  BekreftetPermisjonStatus,
} from '@navikt/fp-types';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { ArbeidsforholdFieldArray } from './ArbeidsforholdFieldArray';

type FormValues = {
  arbeidsforhold: {
    permisjonStatus: BekreftetPermisjonStatus|undefined;
    arbeidsgiverIdent: string;
    internArbeidsforholdId: string | undefined;
  }[];
} & FaktaBegrunnelseFormValues;

const getSorterArbeidsforhold =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) =>
  (a1: Arbeidsforhold, a2: Arbeidsforhold): number =>
    arbeidsgiverOpplysningerPerId[a1.arbeidsgiverIdent]!.navn.localeCompare(
      arbeidsgiverOpplysningerPerId[a2.arbeidsgiverIdent]!.navn,
    );

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const PermisjonFaktaPanel = ({ arbeidOgInntekt, arbeidsgiverOpplysningerPerId }: Props) => {
  const { aksjonspunkterForPanel, fagsak, submitCallback, isReadOnly, alleKodeverk, isSubmittable } =
    usePanelDataContext<AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO>>();

  const arbeidOgInntektMedPermisjon = {
    inntektsmeldinger: arbeidOgInntekt.inntektsmeldinger,
    arbeidsforhold: arbeidOgInntekt.arbeidsforhold.filter(a => a.permisjonOgMangel?.årsak),
    inntekter: arbeidOgInntekt.inntekter,
    skjæringstidspunkt: arbeidOgInntekt.skjæringstidspunkt,
  };

  const sorterteArbeidsforhold = arbeidOgInntektMedPermisjon.arbeidsforhold.toSorted(
    getSorterArbeidsforhold(arbeidsgiverOpplysningerPerId),
  );
  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkterForPanel, sorterteArbeidsforhold),
  });

  const begrunnelse = useWatch({ control: formMethods.control, name: 'begrunnelse' });
  const harÅpentAksjonspunkt = aksjonspunkterForPanel.some(a => a.status === 'OPPR');

  return (
    <VStack gap="space-32">
      <HStack justify="space-between">
        <Heading size="small" level="2">
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
      <RhfForm
        formMethods={formMethods}
        setDataOnUnmount={setMellomlagretFormData}
        onSubmit={values => submitCallback(transformValues(values))}
      >
        <VStack gap="space-24">
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
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
            hasVurderingText
          />

          {!isReadOnly && (
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          )}
        </VStack>
      </RhfForm>
    </VStack>
  );
};

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[], sorterteArbeidsforhold: Arbeidsforhold[]): FormValues => ({
  arbeidsforhold: sorterteArbeidsforhold.map(a => ({
    arbeidsgiverIdent: a.arbeidsgiverIdent,
    internArbeidsforholdId: a.internArbeidsforholdId,
    permisjonStatus: a.permisjonOgMangel?.permisjonStatus,
  })),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO> => ({
  kode: AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO,
  arbeidsforhold: values.arbeidsforhold.map(a => ({
    arbeidsgiverIdent: a.arbeidsgiverIdent,
    internArbeidsforholdId: a.internArbeidsforholdId,
    permisjonStatus: notEmpty(a.permisjonStatus),
  })),
  ...FaktaBegrunnelseTextField.transformValues(values),
});
