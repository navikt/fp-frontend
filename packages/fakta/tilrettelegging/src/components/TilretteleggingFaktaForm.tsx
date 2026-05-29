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
  ArbeidsgiverOpplysningerPerId,
  BekreftTilrettelegging,
  SvpArbeidsforholdDto,
  SvpTilrettelegging,
} from '@navikt/fp-types';
import type { BekreftSvangerskapspengerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

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
    return submitCallback(transformValues(values));
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
  (a: SvpArbeidsforholdDto, b: SvpArbeidsforholdDto) => {
    const navnA = arbeidsgiverOpplysningerPerId[a.arbeidsgiverReferanse ?? '']?.navn;
    const navnB = arbeidsgiverOpplysningerPerId[b.arbeidsgiverReferanse ?? '']?.navn;
    return navnA && navnB ? navnA.localeCompare(navnB) : 0;
  };

const transformValues = (values: TilretteleggingFormValues): BekreftSvangerskapspengerAp => ({
  kode: AksjonspunktKode.VURDER_SVP_TILRETTELEGGING,
  termindato: notEmpty(values.termindato),
  fødselsdato: values.fødselsdato,
  begrunnelse: values.begrunnelse,
  bekreftetSvpArbeidsforholdList: values.arbeidsforhold.map(mapTilBekreftTilrettelegging),
});

const mapTilBekreftTilrettelegging = (arbeidsforhold: SvpArbeidsforholdDto): BekreftTilrettelegging => ({
  arbeidsgiverReferanse: arbeidsforhold.arbeidsgiverReferanse,
  avklarteOppholdPerioder: arbeidsforhold.avklarteOppholdPerioder,
  eksternArbeidsforholdReferanse: arbeidsforhold.eksternArbeidsforholdReferanse,
  internArbeidsforholdReferanse: arbeidsforhold.internArbeidsforholdReferanse,
  kanTilrettelegges: arbeidsforhold.kanTilrettelegges,
  arbeidsforholdetErSplittet: arbeidsforhold.arbeidsforholdetErSplittet,
  skalBrukes: arbeidsforhold.skalBrukes,
  stillingsprosentStartTilrettelegging: arbeidsforhold.stillingsprosentStartTilrettelegging,
  tilretteleggingBehovFom: arbeidsforhold.tilretteleggingBehovFom,
  tilretteleggingDatoer: arbeidsforhold.tilretteleggingDatoer,
  tilretteleggingId: arbeidsforhold.tilretteleggingId,
  uttakArbeidType: arbeidsforhold.uttakArbeidType,
  velferdspermisjoner: arbeidsforhold.velferdspermisjoner,
});
