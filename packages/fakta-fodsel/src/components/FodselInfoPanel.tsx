import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FodselSammenligningIndex } from '@navikt/fp-prosess-fakta-fodsel-sammenligning';
import { Aksjonspunkt, AvklartBarn, FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';
import { BekreftTerminbekreftelseAp, SjekkManglendeFodselAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

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

interface Props {
  familiehendelse: FamilieHendelseSamling;
  submittable: boolean;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

/**
 * FodselInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Fødselsvilkåret.
 */
export const FodselInfoPanel = ({
  submittable,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  familiehendelse,
}: Props) => {
  const {
    submitCallback,
    behandling,
    aksjonspunkterForPanel,
    harÅpneAksjonspunkter,
    alleMerknaderFraBeslutter,
    isReadOnly,
  } = usePanelDataContext<AksjonspunktData>();

  const avklartBarn = familiehendelse?.register?.avklartBarn || EMPTY_ARRAY;
  const termindato = familiehendelse?.gjeldende?.termindato;
  const vedtaksDatoSomSvangerskapsuke = familiehendelse?.gjeldende?.vedtaksDatoSomSvangerskapsuke;

  const terminbekreftelseAp = aksjonspunkterForPanel.find(ap => ap.definisjon === TERMINBEKREFTELSE);
  const manglendeFødselAp = aksjonspunkterForPanel.find(ap => ap.definisjon === SJEKK_MANGLENDE_FODSEL);

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(soknad, familiehendelse, terminbekreftelseAp, manglendeFødselAp),
  });

  return (
    <>
      {harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>{getHelpTexts(aksjonspunkterForPanel)}</AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={values =>
          submitCallback(transformValues(values, avklartBarn, terminbekreftelseAp, manglendeFødselAp))
        }
        setDataOnUnmount={setFormData}
      >
        {hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkterForPanel) && (
          <TermindatoFaktaForm
            readOnly={isReadOnly}
            submittable={submittable}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            soknad={soknad}
            gjeldendeFamiliehendelse={familiehendelse.gjeldende}
          />
        )}
        {hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkterForPanel) && (
          <SjekkFodselDokForm
            behandlingType={behandling.type}
            readOnly={isReadOnly}
            submittable={submittable}
            soknadOriginalBehandling={soknadOriginalBehandling}
            familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            soknad={soknad}
            avklartBarn={avklartBarn}
            familiehendelse={familiehendelse}
          />
        )}
        {aksjonspunkterForPanel.length !== 0 && !isReadOnly && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </>
        )}
        {aksjonspunkterForPanel.length === 0 && (
          <FodselSammenligningIndex
            behandlingsTypeKode={behandling.type}
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
