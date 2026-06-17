import { useForm, useWatch } from 'react-hook-form';
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
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import type { Tilrettelegging, TilretteleggingFormValues } from '../types/TilretteleggingFormValues';
import { ArbeidsforholdFieldArray } from './arbeidsforhold/ArbeidsforholdFieldArray';
import { alfabetiskArbeidsforhold } from './arbeidsforholdUtils';
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
    usePanelDataContext<AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>>();
  const uttakArbeidTyper = alleKodeverk['UttakArbeidType'];

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<TilretteleggingFormValues>();

  const formMethods = useForm<TilretteleggingFormValues>({
    defaultValues:
      mellomlagretFormData ??
      buildInitialValues(svangerskapspengerTilrettelegging, aksjonspunkterForPanel, arbeidsgiverOpplysningerPerId),
  });

  const begrunnelse = useWatch({
    control: formMethods.control,
    name: 'begrunnelse',
  });

  const skalVurdereVelferdspermisjoner = harUvurderteVelferdspermisjoner(
    svangerskapspengerTilrettelegging.arbeidsforholdListe,
  );
  const harFAISU = svangerskapspengerTilrettelegging.arbeidsforholdListe.some(
    af => af.skalVurdereSplittAvArbeidsforholdet,
  );

  return (
    <RhfForm
      formMethods={formMethods}
      setDataOnUnmount={setMellomlagretFormData}
      onSubmit={values => submitCallback(transformValues(values))}
    >
      <VStack gap="space-32">
        {harÅpentAksjonspunkt && (
          <AksjonspunktHelpTextHTML>
            {skalVurdereVelferdspermisjoner ? (
              <FormattedMessage id="TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner" />
            ) : (
              <FormattedMessage id="TilretteleggingFaktaForm.Aksjonspunkt" />
            )}
            {harFAISU && <FormattedMessage id="TilretteleggingFaktaForm.AksjonpunktFAISU" />}
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
          description={
            harFAISU
              ? intl.formatMessage({ id: 'TilretteleggingFaktaForm.BegrunnelseDescription.MedSplitt' })
              : intl.formatMessage({ id: 'TilretteleggingFaktaForm.BegrunnelseDescription.UtenSplitt' })
          }
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
    arbeidsforhold: arbeidsforholdListe
      .toSorted(alfabetiskArbeidsforhold(arbeidsgiverOpplysningerPerId))
      .map(mapTilTilrettelegging),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel),
  };
};

const mapTilTilrettelegging = (
  arbeidsforhold: SvpArbeidsforholdDto,
  _: number,
  alleArbeidsforhold: SvpArbeidsforholdDto[],
): Tilrettelegging => ({
  arbeidsgiverReferanse: arbeidsforhold.arbeidsgiverReferanse,
  avklarteOppholdPerioder: arbeidsforhold.avklarteOppholdPerioder,
  eksternArbeidsforholdReferanse: arbeidsforhold.eksternArbeidsforholdReferanse,
  internArbeidsforholdReferanse: arbeidsforhold.internArbeidsforholdReferanse,
  kanTilrettelegges: arbeidsforhold.kanTilrettelegges,
  skalBrukes: arbeidsforhold.skalBrukes,
  stillingsprosentStartTilrettelegging: arbeidsforhold.stillingsprosentStartTilrettelegging,
  tilretteleggingBehovFom: arbeidsforhold.tilretteleggingBehovFom,
  tilretteleggingDatoer: arbeidsforhold.tilretteleggingDatoer,
  tilretteleggingId: arbeidsforhold.tilretteleggingId,
  uttakArbeidType: arbeidsforhold.uttakArbeidType,
  velferdspermisjoner: arbeidsforhold.velferdspermisjoner,
  skalVurdereSplittAvArbeidsforholdet: arbeidsforhold.skalVurdereSplittAvArbeidsforholdet,
  arbeidsforholdetErSplittet:
    alleArbeidsforhold.filter(af => af.arbeidsgiverReferanse === arbeidsforhold.arbeidsgiverReferanse).length > 1,
});

const transformValues = (
  values: TilretteleggingFormValues,
): AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SVP_TILRETTELEGGING> => ({
  kode: AksjonspunktKode.VURDER_SVP_TILRETTELEGGING,
  termindato: notEmpty(values.termindato),
  fødselsdato: values.fødselsdato,
  begrunnelse: values.begrunnelse,
  bekreftetSvpArbeidsforholdList: values.arbeidsforhold.map(mapTilBekreftTilrettelegging),
});

const mapTilBekreftTilrettelegging = (arbeidsforhold: Tilrettelegging): BekreftTilrettelegging => ({
  arbeidsgiverReferanse: arbeidsforhold.arbeidsgiverReferanse,
  avklarteOppholdPerioder: arbeidsforhold.avklarteOppholdPerioder,
  eksternArbeidsforholdReferanse: arbeidsforhold.eksternArbeidsforholdReferanse,
  internArbeidsforholdReferanse: arbeidsforhold.internArbeidsforholdReferanse,
  kanTilrettelegges: arbeidsforhold.kanTilrettelegges,
  skalBrukes: arbeidsforhold.skalBrukes,
  stillingsprosentStartTilrettelegging: arbeidsforhold.stillingsprosentStartTilrettelegging,
  tilretteleggingBehovFom: arbeidsforhold.tilretteleggingBehovFom,
  tilretteleggingDatoer: arbeidsforhold.tilretteleggingDatoer,
  tilretteleggingId: arbeidsforhold.tilretteleggingId,
  uttakArbeidType: arbeidsforhold.uttakArbeidType,
  velferdspermisjoner: arbeidsforhold.velferdspermisjoner,
});
