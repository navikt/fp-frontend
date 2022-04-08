import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { Form } from '@fpsak-frontend/form-hooks';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FaktaSubmitButtonNew } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import {
  Aksjonspunkt, FamilieHendelseSamling, FamilieHendelse, Soknad,
} from '@fpsak-frontend/types';
import {
  BekreftTerminbekreftelseAp, SjekkManglendeFodselAp, VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TermindatoFaktaForm, { FormValues as TermindatoFormValues } from './TermindatoFaktaForm';
import SjekkFodselDokForm, { FormValues as SjekkFodselDokFormValues } from './SjekkFodselDokForm';
import SykdomPanel, { FormValues as SykdomFormValues } from './SykdomPanel';

const {
  TERMINBEKREFTELSE, SJEKK_MANGLENDE_FODSEL, VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
} = aksjonspunktCodes;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts: ReactElement[] = [];
  if (hasAksjonspunkt(VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="VurderVilkarForSykdom" id="FodselInfoPanel.VurderVilkarForSykdom" />);
  }
  if (hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="KontrollerMotTerminbekreftelsen" id="FodselInfoPanel.KontrollerMotTerminbekreftelsen" />);
  }
  if (hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="KontrollerMotFodselsdokumentasjon" id="FodselInfoPanel.KontrollerMotFodselsdokumentasjon" />);
  }
  return helpTexts;
};

type FormValues = SykdomFormValues & TermindatoFormValues & SjekkFodselDokFormValues;

const buildInitialValues = (
  sykdomAp: Aksjonspunkt,
  terminbekreftelseAp: Aksjonspunkt,
  manglendeFødselAp: Aksjonspunkt,
  soknad: Soknad,
  familieHendelse: FamilieHendelseSamling,
) => ({
  ...sykdomAp ? SykdomPanel.buildInitialValues(sykdomAp, familieHendelse.gjeldende.morForSykVedFodsel) : {},
  ...terminbekreftelseAp ? TermindatoFaktaForm.buildInitialValues(soknad, familieHendelse.gjeldende, terminbekreftelseAp) : {},
  ...manglendeFødselAp ? SjekkFodselDokForm.buildInitialValues(soknad, familieHendelse.gjeldende, manglendeFødselAp) : {},
});

type AksjonspunktData = Array<BekreftTerminbekreftelseAp | VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp | SjekkManglendeFodselAp>;

const transformValues = (
  values: FormValues,
  sykdomAp: Aksjonspunkt,
  terminbekreftelseAp: Aksjonspunkt,
  manglendeFødselAp: Aksjonspunkt,
  familieHendelse: FamilieHendelseSamling,
): AksjonspunktData => {
  const aksjonspunkterSomSkalBekreftes = [];
  if (sykdomAp) {
    aksjonspunkterSomSkalBekreftes.push(SykdomPanel.transformValues(values));
  }
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

  const sykdomAp = aksjonspunkter.find((ap) => ap.definisjon === VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT);
  const terminbekreftelseAp = aksjonspunkter.find((ap) => ap.definisjon === TERMINBEKREFTELSE);
  const manglendeFødselAp = aksjonspunkter.find((ap) => ap.definisjon === SJEKK_MANGLENDE_FODSEL);

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(sykdomAp, terminbekreftelseAp, manglendeFødselAp, soknad, familiehendelse),
  });

  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>{getHelpTexts(aksjonspunkter)}</AksjonspunktHelpTextTemp>
      <Form
        formMethods={formMethods}
        onSubmit={(values) => submitCallback(transformValues(values, sykdomAp, terminbekreftelseAp, manglendeFødselAp, familiehendelse))}
        setDataOnUnmount={setFormData}
      >
        {sykdomAp && (
          <SykdomPanel
            readOnly={readOnly}
            aksjonspunkt={sykdomAp}
            morForSykVedFodsel={familiehendelse.gjeldende.morForSykVedFodsel}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
        )}
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
