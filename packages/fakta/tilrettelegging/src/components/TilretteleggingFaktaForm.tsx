import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  Arbeidsforhold,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsgiverOpplysningerPerId,
  SvpTilrettelegging,
} from '@navikt/fp-types';
import type { BekreftSvangerskapspengerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import type { TilretteleggingFormValues } from '../types/TilretteleggingFormValues';
import { ArbeidsforholdFieldArray } from './arbeidsforhold/ArbeidsforholdFieldArray';
import { harUvurderteVelferdspermisjoner, TilretteleggingFormFeil } from './TilretteleggingFormFeil';

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  svangerskapspengerTilrettelegging: SvpTilrettelegging;
  aoiArbeidsforhold: Arbeidsforhold[];
}

export const TilretteleggingFaktaForm = ({
  arbeidsgiverOpplysningerPerId,
  svangerskapspengerTilrettelegging,
  aoiArbeidsforhold,
}: Props) => {
  const intl = useIntl();

  const { isSubmittable, isReadOnly, aksjonspunkterForPanel, alleKodeverk, submitCallback, harÅpentAksjonspunkt } =
    usePanelDataContext<BekreftSvangerskapspengerAp>();
  const uttakArbeidTyper = alleKodeverk['UttakArbeidType'];

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<TilretteleggingFormValues>();

  const formMethods = useForm<TilretteleggingFormValues>({
    defaultValues:
      mellomlagretFormData ??
      buildInitialValues(svangerskapspengerTilrettelegging, aksjonspunkterForPanel, arbeidsgiverOpplysningerPerId),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const skalVurdereVelferdspermisjoner = harUvurderteVelferdspermisjoner(
    svangerskapspengerTilrettelegging.arbeidsforholdListe,
  );

  const onSubmit = (values: TilretteleggingFormValues) => {
    return submitCallback({
      kode: AksjonspunktKode.VURDER_SVP_TILRETTELEGGING,
      termindato: values.termindato,
      fødselsdato: values.fødselsdato,
      begrunnelse: values.begrunnelse,
      bekreftetSvpArbeidsforholdList: values.arbeidsforhold,
    });
  };

  return (
    <RhfForm formMethods={formMethods} setDataOnUnmount={setMellomlagretFormData} onSubmit={onSubmit}>
      <VStack gap="space-32">
        {harÅpentAksjonspunkt && (
          <AksjonspunktHelpTextHTML>
            {skalVurdereVelferdspermisjoner ? (
              <FormattedMessage id="TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner" />
            ) : (
              <FormattedMessage id="TilretteleggingFaktaForm.Aksjonspunkt" />
            )}
          </AksjonspunktHelpTextHTML>
        )}
        <HStack gap="space-16">
          <RhfDatepicker
            name="termindato"
            control={formMethods.control}
            label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.Termindato' })}
            validate={[required, hasValidDate]}
            readOnly={isReadOnly}
          />
          {svangerskapspengerTilrettelegging.fødselsdato && (
            <RhfDatepicker
              name="fødselsdato"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.Fodselsdato' })}
              validate={[required, hasValidDate]}
              readOnly={isReadOnly}
            />
          )}
        </HStack>
        <ArbeidsforholdFieldArray
          aoiArbeidsforhold={aoiArbeidsforhold}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          readOnly={isReadOnly}
          uttakArbeidTyper={uttakArbeidTyper}
        />
        <TilretteleggingFormFeil />
        <FaktaBegrunnelseTextField
          control={formMethods.control}
          isReadOnly={isReadOnly}
          isSubmittable={isSubmittable}
          hasBegrunnelse={!!begrunnelse}
        />
        <FaktaSubmitButton
          isSubmittable={isSubmittable}
          isReadOnly={isReadOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      </VStack>
    </RhfForm>
  );
};

const buildInitialValues = (
  { arbeidsforholdListe, termindato, fødselsdato }: SvpTilrettelegging,
  aksjonspunkterForPanel: Aksjonspunkt[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): Partial<TilretteleggingFormValues> => {
  return {
    termindato,
    fødselsdato,
    arbeidsforhold: arbeidsforholdListe.toSorted(alfabetiskArbeidsforhold(arbeidsgiverOpplysningerPerId)),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel),
  };
};

const alfabetiskArbeidsforhold =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) =>
  (a: ArbeidsforholdFodselOgTilrettelegging, b: ArbeidsforholdFodselOgTilrettelegging) => {
    const navnA = arbeidsgiverOpplysningerPerId[a.arbeidsgiverReferanse ?? '']?.navn;
    const navnB = arbeidsgiverOpplysningerPerId[b.arbeidsgiverReferanse ?? '']?.navn;
    return navnA && navnB ? navnA.localeCompare(navnB) : 0;
  };
