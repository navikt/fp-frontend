import { FunctionComponent, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import { Aksjonspunkt, AvklartBarn, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';
import { BekreftTerminbekreftelseAp, SjekkManglendeFodselAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

import SjekkFodselDokForm, { FormValues as SjekkFodselDokFormValues } from './SjekkFodselDokForm';
import TermindatoFaktaForm, { FormValues as TermindatoFormValues } from './TermindatoFaktaForm';

const { TERMINBEKREFTELSE, SJEKK_MANGLENDE_FODSEL } = AksjonspunktKode;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts: ReactElement[] = [];
  if (hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter)) {
    helpTexts.push(
      <FormattedMessage key="KontrollerMotTerminbekreftelsen" id="FodselInfoPanel.KontrollerMotTerminbekreftelsen" />,
    );
  }
  if (hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkter)) {
    helpTexts.push(
      <FormattedMessage
        key="KontrollerMotFodselsdokumentasjon"
        id="FodselInfoPanel.KontrollerMotFodselsdokumentasjon"
      />,
    );
  }
  return helpTexts;
};

type FormValues = TermindatoFormValues & SjekkFodselDokFormValues;

const buildInitialValues = (
  soknad: Soknad,
  familieHendelse: FamilieHendelseSamling,
  terminbekreftelseAp?: Aksjonspunkt,
  manglendeFødselAp?: Aksjonspunkt,
) => ({
  ...(terminbekreftelseAp
    ? TermindatoFaktaForm.buildInitialValues(soknad, familieHendelse.gjeldende, terminbekreftelseAp)
    : {}),
  ...(manglendeFødselAp
    ? SjekkFodselDokForm.buildInitialValues(soknad, familieHendelse.gjeldende, manglendeFødselAp)
    : {}),
});

type AksjonspunktData = Array<BekreftTerminbekreftelseAp | SjekkManglendeFodselAp>;

const transformValues = (
  values: FormValues,
  avklartBarn: AvklartBarn[],
  terminbekreftelseAp?: Aksjonspunkt,
  manglendeFødselAp?: Aksjonspunkt,
): AksjonspunktData => {
  const aksjonspunkterSomSkalBekreftes = [];
  if (terminbekreftelseAp) {
    aksjonspunkterSomSkalBekreftes.push(TermindatoFaktaForm.transformValues(values));
  }
  if (manglendeFødselAp) {
    aksjonspunkterSomSkalBekreftes.push(SjekkFodselDokForm.transformValues(values, avklartBarn));
  }
  return aksjonspunkterSomSkalBekreftes;
};

const EMPTY_ARRAY = [] as AvklartBarn[];

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
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  behandlingType: string;
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
}) => {
  const avklartBarn = familiehendelse?.register?.avklartBarn || EMPTY_ARRAY;
  const termindato = familiehendelse?.gjeldende?.termindato;
  const vedtaksDatoSomSvangerskapsuke = familiehendelse?.gjeldende?.vedtaksDatoSomSvangerskapsuke;

  const terminbekreftelseAp = aksjonspunkter.find(ap => ap.definisjon === TERMINBEKREFTELSE);
  const manglendeFødselAp = aksjonspunkter.find(ap => ap.definisjon === SJEKK_MANGLENDE_FODSEL);

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(soknad, familiehendelse, terminbekreftelseAp, manglendeFødselAp),
  });

  return (
    <>
      {hasOpenAksjonspunkter && <AksjonspunktHelpTextHTML>{getHelpTexts(aksjonspunkter)}</AksjonspunktHelpTextHTML>}
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={values =>
          submitCallback(transformValues(values, avklartBarn, terminbekreftelseAp, manglendeFødselAp))
        }
        setDataOnUnmount={setFormData}
      >
        {hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter) && (
          <TermindatoFaktaForm
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
            <FaktaSubmitButton
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
