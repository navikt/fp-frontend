import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import { AksjonspunktCode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import {
  Aksjonspunkt, FamilieHendelseSamling, FamilieHendelse, Soknad,
} from '@navikt/fp-types';
import {
  BekreftTerminbekreftelseAp, SjekkManglendeFodselAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import TermindatoFaktaForm, { FormValues as TermindatoFormValues } from './TermindatoFaktaForm';
import SjekkFodselDokForm, { FormValues as SjekkFodselDokFormValues } from './SjekkFodselDokForm';

const {
  TERMINBEKREFTELSE, SJEKK_MANGLENDE_FODSEL,
} = AksjonspunktCode;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts: ReactElement[] = [];
  if (hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="KontrollerMotTerminbekreftelsen" id="FodselInfoPanel.KontrollerMotTerminbekreftelsen" />);
  }
  if (hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="KontrollerMotFodselsdokumentasjon" id="FodselInfoPanel.KontrollerMotFodselsdokumentasjon" />);
  }
  return helpTexts;
};

type FormValues = TermindatoFormValues & SjekkFodselDokFormValues;

const buildInitialValues = (
  terminbekreftelseAp: Aksjonspunkt,
  manglendeFødselAp: Aksjonspunkt,
  soknad: Soknad,
  familieHendelse: FamilieHendelseSamling,
) => ({
  ...terminbekreftelseAp ? TermindatoFaktaForm.buildInitialValues(soknad, familieHendelse.gjeldende, terminbekreftelseAp) : {},
  ...manglendeFødselAp ? SjekkFodselDokForm.buildInitialValues(soknad, familieHendelse.gjeldende, manglendeFødselAp) : {},
});

type AksjonspunktData = Array<BekreftTerminbekreftelseAp | SjekkManglendeFodselAp>;

const transformValues = (
  values: FormValues,
  terminbekreftelseAp: Aksjonspunkt,
  manglendeFødselAp: Aksjonspunkt,
  familieHendelse: FamilieHendelseSamling,
): AksjonspunktData => {
  const aksjonspunkterSomSkalBekreftes = [];
  if (terminbekreftelseAp) {
    aksjonspunkterSomSkalBekreftes.push(TermindatoFaktaForm.transformValues(values));
  }
  if (manglendeFødselAp) {
    aksjonspunkterSomSkalBekreftes.push(SjekkFodselDokForm.transformValues(values, familieHendelse.gjeldende.avklartBarn));
  }
  return aksjonspunkterSomSkalBekreftes;
};

const EMPTY_ARRAY = [];

interface OwnProps {
  familiehendelse: FamilieHendelseSamling;
  aksjonspunkter: Aksjonspunkt[];
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
  soknad: Soknad;
  submitCallback: (data: AksjonspunktData) => Promise<void>;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingType: string;
  formData?: FormValues,
  setFormData: (data: FormValues) => void,
}

/**
 * FodselInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.
 */
const FodselInfoPanel: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  soknad,
  submitCallback,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  familiehendelse,
  alleMerknaderFraBeslutter,
  behandlingType,
  formData,
  setFormData,
}) => {
  const avklartBarn = familiehendelse?.register?.avklartBarn || EMPTY_ARRAY;
  const termindato = familiehendelse?.gjeldende?.termindato;
  const vedtaksDatoSomSvangerskapsuke = familiehendelse?.gjeldende?.vedtaksDatoSomSvangerskapsuke;

  const terminbekreftelseAp = aksjonspunkter.find((ap) => ap.definisjon === TERMINBEKREFTELSE);
  const manglendeFødselAp = aksjonspunkter.find((ap) => ap.definisjon === SJEKK_MANGLENDE_FODSEL);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(terminbekreftelseAp, manglendeFødselAp, soknad, familiehendelse),
  });

  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>{getHelpTexts(aksjonspunkter)}</AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => submitCallback(transformValues(values, terminbekreftelseAp, manglendeFødselAp, familiehendelse))}
        setDataOnUnmount={setFormData}
      >
        {hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter) && (
          <TermindatoFaktaForm
            aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon === TERMINBEKREFTELSE)}
            readOnly={readOnly}
            submittable={submittable}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            soknad={soknad}
            gjeldendeFamiliehendelse={familiehendelse.gjeldende}
          />
        )}
        {hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkter) && (
          <SjekkFodselDokForm
            behandlingType={behandlingType}
            aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon === SJEKK_MANGLENDE_FODSEL)}
            readOnly={readOnly}
            submittable={submittable}
            soknadOriginalBehandling={soknadOriginalBehandling}
            familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            soknad={soknad}
            avklartBarn={avklartBarn}
            familiehendelse={familiehendelse}
          />
        )}
        {aksjonspunkter.length !== 0 && !readOnly && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaSubmitButtonNew
              isSubmittable={submittable}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </>
        )}
        {aksjonspunkter.length === 0 && (
          <FodselSammenligningIndex
            behandlingsTypeKode={behandlingType}
            avklartBarn={avklartBarn}
            termindato={termindato}
            vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
            soknad={soknad}
            soknadOriginalBehandling={soknadOriginalBehandling}
            familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
          />
        )}
      </Form>
    </>
  );
};

export default FodselInfoPanel;
