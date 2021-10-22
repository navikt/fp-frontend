import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { Form } from '@fpsak-frontend/form-hooks';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import {
  Aksjonspunkt, FamilieHendelseSamling, FamilieHendelse, Kodeverk, Soknad,
} from '@fpsak-frontend/types';
import {
  BekreftTerminbekreftelseAp, SjekkManglendeFodselAp, VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TermindatoFaktaForm, { termindatoFaktaFormName } from './TermindatoFaktaForm';
import SjekkFodselDokForm, { sjekkFodselDokForm } from './SjekkFodselDokForm';
import SykdomPanel, { sykdomPanelName } from './SykdomPanel';

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

const EMPTY_ARRAY = [];

const nullSafe = (value: FamilieHendelse): FamilieHendelse => value || {} as FamilieHendelse;

const formNames = [sykdomPanelName, termindatoFaktaFormName, sjekkFodselDokForm];

type AksjonspunktData = Array<BekreftTerminbekreftelseAp | VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp | SjekkManglendeFodselAp>;

interface OwnProps {
  familiehendelse: FamilieHendelseSamling;
  aksjonspunkter: Aksjonspunkt[];
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
  submitCallback: (data: AksjonspunktData) => Promise<void>;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingType: Kodeverk;
  formData?: any,
  setFormData: (data: any) => void,
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
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  familiehendelse,
  alleMerknaderFraBeslutter,
  behandlingType,
}) => {
  const avklartBarn = nullSafe(familiehendelse.register).avklartBarn || EMPTY_ARRAY;
  const termindato = nullSafe(familiehendelse.gjeldende).termindato;
  const vedtaksDatoSomSvangerskapsuke = nullSafe(familiehendelse.gjeldende).vedtaksDatoSomSvangerskapsuke;

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(verge, aksjonspunkter),
    shouldUnregister: true,
  });

  //submittedAksjonspunkter?: Record<string, BekreftTerminbekreftelseAp | VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp | SjekkManglendeFodselAp>;

 /* getSubmitFunction(dispatch: Dispatch) {
    return (e) => {
      this.submittedAksjonspunkter = {};
      formNames.forEach((formName) => dispatch(reduxSubmit(formName)));
      e.preventDefault();
    };
  }

  submitHandler(data: BekreftTerminbekreftelseAp | VurderingAvVilkarForMorsSyksomVedFodselForForeldrepengerAp | SjekkManglendeFodselAp) {
    this.submittedAksjonspunkter = {
      ...this.submittedAksjonspunkter,
      [data.kode]: data,
    };
    const { aksjonspunkter, submitCallback } = this.props;

    return aksjonspunkter.every((ap) => this.submittedAksjonspunkter[ap.definisjon.kode])
      ? submitCallback(Object.values(this.submittedAksjonspunkter))
      : undefined;
  }*/

  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>{getHelpTexts(aksjonspunkter)}</AksjonspunktHelpTextTemp>
      <Form formMethods={formMethods} onSubmit={this.getSubmitFunction(dispatch)} setDataOnUnmount={setFormData}>
        {hasAksjonspunkt(VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT, aksjonspunkter) && (
          <SykdomPanel
            readOnly={readOnly}
            aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon.kode === VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT)}
            submitHandler={this.submitHandler}
            morForSykVedFodsel={familiehendelse.gjeldende.morForSykVedFodsel}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
        )}
        {hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter) && (
          <TermindatoFaktaForm
            aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon.kode === TERMINBEKREFTELSE)}
            readOnly={readOnly}
            submittable={submittable}
            submitHandler={this.submitHandler}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            soknad={soknad}
            gjeldendeFamiliehendelse={familiehendelse.gjeldende}
          />
        )}
        {hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkter) && (
          <SjekkFodselDokForm
            behandlingType={behandlingType}
            aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon.kode === SJEKK_MANGLENDE_FODSEL)}
            readOnly={readOnly}
            submittable={submittable}
            submitHandler={this.submitHandler}
            soknadOriginalBehandling={soknadOriginalBehandling}
            familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            soknad={soknad}
            avklartBarn={avklartBarn}
            gjeldendeFamiliehendelse={familiehendelse.gjeldende}
          />
        )}
        {aksjonspunkter.length !== 0 && !readOnly
          && (
            <>
              <VerticalSpacer twentyPx />
              <FaktaSubmitButton
                formNames={formNames}
                isSubmittable={submittable}
                isReadOnly={readOnly}
                hasOpenAksjonspunkter={hasOpenAksjonspunkter}
              />
            </>
          )}
        {aksjonspunkter.length === 0 && (
          <FodselSammenligningIndex
            behandlingsTypeKode={behandlingType.kode}
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
}

export default FodselInfoPanel;
