import { type ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, VStack } from '@navikt/ds-react';
import { Datepicker, Form, TextAreaField } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping, hasValidDate, hasValidText, maxLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, KodeverkType } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  AoIArbeidsforhold,
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsgiverOpplysningerPerId,
  FodselOgTilrettelegging,
} from '@navikt/fp-types';
import type { BekreftSvangerskapspengerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import type { TilretteleggingFormValues } from '../types/TilretteleggingFormValues';
import { ArbeidsforholdFieldArray } from './arbeidsforhold/ArbeidsforholdFieldArray';
import { filtrerVelferdspermisjoner } from './arbeidsforhold/ArbeidsforholdPanel';

const maxLength1500 = maxLength(1500);

const sorterArbeidsforhold = (
  alleArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdFodselOgTilrettelegging[] =>
  [...(alleArbeidsforhold || [])].sort((a, b) => {
    const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a.arbeidsgiverReferanse];
    const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[b.arbeidsgiverReferanse];
    return arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2
      ? arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn)
      : 0;
  });

const getAksjonspunktBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): string | undefined => {
  const aksjonpunkt = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktKode.FODSELTILRETTELEGGING);
  return aksjonpunkt ? aksjonpunkt.begrunnelse : undefined;
};

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) => value !== undefined || isDirty;

const utledOmEnSkalVurdereVelferdspermisjoner = (alleArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[]) =>
  alleArbeidsforhold.some(arbeidsforhold =>
    filtrerVelferdspermisjoner(arbeidsforhold.velferdspermisjoner, arbeidsforhold.tilretteleggingBehovFom).some(
      p => p.erGyldig === undefined || p.erGyldig === null,
    ),
  );

const FeilmeldingAlert = ({ children }: { children: ReactNode }) => <Alert variant="error">{children}</Alert>;

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  aoiArbeidsforhold: AoIArbeidsforhold[];
  submittable: boolean;
  readonly: boolean;
}

/**
 * TilretteleggingFaktaForm
 *
 * Viser tillrettlegging før svangerskapspenger
 */
export const TilretteleggingFaktaForm = ({
  arbeidsgiverOpplysningerPerId,
  svangerskapspengerTilrettelegging,
  aoiArbeidsforhold,
  submittable,
  readonly,
}: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, alleKodeverk, submitCallback, harÅpneAksjonspunkter } =
    usePanelDataContext<BekreftSvangerskapspengerAp>();
  const uttakArbeidTyper = alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE];

  const sorterteArbeidsforhold = sorterArbeidsforhold(
    svangerskapspengerTilrettelegging.arbeidsforholdListe,
    arbeidsgiverOpplysningerPerId,
  );

  const { formData, setFormData } = useFormData<TilretteleggingFormValues>();

  const formMethods = useForm<TilretteleggingFormValues>({
    defaultValues: formData || {
      arbeidsforhold: sorterteArbeidsforhold,
      termindato: svangerskapspengerTilrettelegging ? svangerskapspengerTilrettelegging.termindato : '',
      fødselsdato: svangerskapspengerTilrettelegging ? svangerskapspengerTilrettelegging.fødselsdato : '',
      begrunnelse: getAksjonspunktBegrunnelse(aksjonspunkterForPanel),
    },
  });

  const fødselsdato = svangerskapspengerTilrettelegging?.fødselsdato || '';

  const isRequiredFn = getIsBegrunnelseRequired(formMethods.formState.isDirty);

  const arbeidsforhold = formMethods.watch('arbeidsforhold');

  const skalVurdereVelferdspermisjoner = utledOmEnSkalVurdereVelferdspermisjoner(sorterteArbeidsforhold);
  const harIkkeVurdertAlleVelferdspermisjoner = utledOmEnSkalVurdereVelferdspermisjoner(arbeidsforhold);

  const harIkkeValgtNoenArbeidsforhold = !arbeidsforhold.some(a => a.skalBrukes);
  const harPeriodeSomIkkeErFerdig = arbeidsforhold.some(
    a => a.tilretteleggingDatoer.some(td => !td.fom) || a.avklarteOppholdPerioder.some(td => !td.fom),
  );
  const harArbeidsforholdUtenTilrettelegging = arbeidsforhold.some(
    a => a.skalBrukes && a.tilretteleggingDatoer.length === 0,
  );
  const harGyldig100PermisjonDerEnHarValgtSvp = arbeidsforhold.some(
    a => a.skalBrukes && a.velferdspermisjoner.some(vp => vp.erGyldig && vp.permisjonsprosent === 100),
  );
  const harOverlappendePerioder = arbeidsforhold.some(a =>
    a.avklarteOppholdPerioder.filter(p => p.fom && p.tom).length > 0
      ? dateRangesNotOverlapping(a.avklarteOppholdPerioder.filter(p => p.fom && p.tom).map(p => [p.fom, p.tom]))
      : false,
  );

  const [visFeil, setVisFeil] = useState(false);

  const harFeil =
    harIkkeVurdertAlleVelferdspermisjoner ||
    harIkkeValgtNoenArbeidsforhold ||
    harPeriodeSomIkkeErFerdig ||
    harArbeidsforholdUtenTilrettelegging ||
    harGyldig100PermisjonDerEnHarValgtSvp ||
    harOverlappendePerioder;

  const onSubmit = (values: TilretteleggingFormValues) => {
    if (harFeil) {
      setVisFeil(true);
      return Promise.resolve();
    }
    return submitCallback({
      kode: AksjonspunktKode.FODSELTILRETTELEGGING,
      termindato: values.termindato,
      fødselsdato: values.fødselsdato,
      begrunnelse: values.begrunnelse,
      bekreftetSvpArbeidsforholdList: values.arbeidsforhold,
    });
  };

  return (
    <Form formMethods={formMethods} setDataOnUnmount={setFormData} onSubmit={onSubmit}>
      <VStack gap="8">
        {harÅpneAksjonspunkter && (
          <AksjonspunktHelpTextHTML>
            {skalVurdereVelferdspermisjoner
              ? [
                  <FormattedMessage
                    id="TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner"
                    key="svangerskapspengerAp"
                  />,
                ]
              : [<FormattedMessage id="TilretteleggingFaktaForm.Aksjonspunkt" key="svangerskapspengerAp" />]}
          </AksjonspunktHelpTextHTML>
        )}
        <HStack gap="4" wrap>
          <Datepicker
            name="termindato"
            label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.Termindato' })}
            validate={[required, hasValidDate]}
            isReadOnly={readonly}
          />
          {fødselsdato && (
            <Datepicker
              name="fødselsdato"
              label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.Fodselsdato' })}
              validate={[required, hasValidDate]}
              isReadOnly={readonly}
            />
          )}
        </HStack>
        <ArbeidsforholdFieldArray
          sorterteArbeidsforhold={arbeidsforhold}
          aoiArbeidsforhold={aoiArbeidsforhold}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          readOnly={readonly}
          uttakArbeidTyper={uttakArbeidTyper}
        />
        {visFeil && harIkkeVurdertAlleVelferdspermisjoner && (
          <FeilmeldingAlert>
            <FormattedMessage id="TilretteleggingFaktaForm.IkkeAllePermisjonerVurdert" />
          </FeilmeldingAlert>
        )}
        {visFeil && harIkkeValgtNoenArbeidsforhold && (
          <FeilmeldingAlert>
            <FormattedMessage id="TilretteleggingFaktaForm.HarIkkeValgtArbeidsforhold" />
          </FeilmeldingAlert>
        )}
        {visFeil && harPeriodeSomIkkeErFerdig && (
          <FeilmeldingAlert>
            <FormattedMessage id="TilretteleggingFaktaForm.PeriodeIkkeLagtTil" />
          </FeilmeldingAlert>
        )}
        {visFeil && harArbeidsforholdUtenTilrettelegging && (
          <FeilmeldingAlert>
            <FormattedMessage id="TilretteleggingFaktaForm.ArbeidsforholdUtenTilrettelegging" />
          </FeilmeldingAlert>
        )}
        {visFeil && harGyldig100PermisjonDerEnHarValgtSvp && (
          <FeilmeldingAlert>
            <FormattedMessage id="TilretteleggingFaktaForm.ValgtSvpVedGyldig100Permisjon" />
          </FeilmeldingAlert>
        )}
        {visFeil && harOverlappendePerioder && (
          <FeilmeldingAlert>
            <FormattedMessage id="TilretteleggingFaktaForm.HarOverlappendePeriode" />
          </FeilmeldingAlert>
        )}
        <TextAreaField
          name="begrunnelse"
          label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.BegrunnEndringene' })}
          validate={[isRequiredFn, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readonly}
        />
        <HStack>
          <FaktaSubmitButton
            isSubmittable={submittable}
            isReadOnly={readonly}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </HStack>
      </VStack>
    </Form>
  );
};
