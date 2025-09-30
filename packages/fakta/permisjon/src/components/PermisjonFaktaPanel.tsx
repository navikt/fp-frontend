import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AoIArbeidsforhold, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import type { VurderArbeidsforholdPermisjonAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

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
    arbeidsgiverOpplysningerPerId[a1.arbeidsgiverIdent]!.navn.localeCompare(
      arbeidsgiverOpplysningerPerId[a2.arbeidsgiverIdent]!.navn,
    );

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const PermisjonFaktaPanel = ({ arbeidOgInntekt, arbeidsgiverOpplysningerPerId }: Props) => {
  const { aksjonspunkterForPanel, fagsak, submitCallback, isReadOnly, alleKodeverk } =
    usePanelDataContext<VurderArbeidsforholdPermisjonAp>();

  const arbeidOgInntektMedPermisjon = {
    inntektsmeldinger: arbeidOgInntekt.inntektsmeldinger,
    arbeidsforhold: arbeidOgInntekt.arbeidsforhold.filter(a => a.permisjonOgMangel?.årsak),
    inntekter: arbeidOgInntekt.inntekter,
    skjæringstidspunkt: arbeidOgInntekt.skjæringstidspunkt,
  };

  const { arbeidsforhold } = arbeidOgInntektMedPermisjon;

  const sorterteArbeidsforhold = [...arbeidsforhold].sort(getSorterArbeidsforhold(arbeidsgiverOpplysningerPerId));

  const defaultValues = {
    arbeidsforhold: sorterteArbeidsforhold.map(a => ({
      permisjonStatus: a.permisjonOgMangel?.permisjonStatus,
    })),
    begrunnelse: aksjonspunkterForPanel[0]?.begrunnelse ?? '',
  };

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? defaultValues,
  });

  useEffect(
    () => () => {
      setMellomlagretFormData(formMethods.getValues());
    },
    [],
  );

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
        onSubmit={values =>
          submitCallback({
            kode: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON,
            arbeidsforhold: values.arbeidsforhold.map((a, index) => ({
              internArbeidsforholdId: sorterteArbeidsforhold[index]?.internArbeidsforholdId,
              arbeidsgiverIdent: sorterteArbeidsforhold[index]?.arbeidsgiverIdent ?? '',
              permisjonStatus: a.permisjonStatus,
            })),
            begrunnelse: values.begrunnelse,
          })
        }
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
          <RhfTextarea
            name="begrunnelse"
            control={formMethods.control}
            label={
              <Label size="small">
                <FormattedMessage id="PermisjonFaktaPanel.Begrunn" />
              </Label>
            }
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
      </RhfForm>
    </VStack>
  );
};
