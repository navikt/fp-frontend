import React, {
  FunctionComponent, useState, useEffect, useCallback, useMemo,
} from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ISO_DATE_FORMAT, addDaysToDate } from '@fpsak-frontend/utils';
import {
  AksjonspunktHelpTextTemp, DateLabel, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { TimeLineNavigation } from '@fpsak-frontend/tidslinje';
import {
  ArbeidsgiverOpplysningerPerId, AlleKodeverk, OpptjeningAktivitet, Opptjening,
} from '@fpsak-frontend/types';
import { AvklarAktivitetsPerioderAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OpptjeningTidslinje from './tidslinje/OpptjeningTidslinje';
import ValgtAktivitetForm, { FormValues } from './aktivitet/ValgtAktivitetForm';

import styles from './opptjeningFaktaPanel.less';

const getAksjonspunktHelpTexts = (opptjeningAktiviteter: OpptjeningAktivitet[]): string[] => {
  const texts = [];
  if (opptjeningAktiviteter.some((a) => a.stillingsandel === 0)) {
    texts.push(<FormattedMessage id="OpptjeningFaktaForm.AktivitetenErTimeAvslonnet" key="AktivitetenErTimeAvslonnet" />);
  }

  const aktivitetTypes = opptjeningAktiviteter.filter((a) => (a.erGodkjent === undefined || a.erGodkjent === null || a.begrunnelse) && a.stillingsandel !== 0);
  if (aktivitetTypes.length === 1) {
    texts.push(<FormattedMessage id="OpptjeningFaktaForm.EttArbeidKanGodkjennes" key="EttArbeidKanGodkjennes" />);
  } else if (aktivitetTypes.length > 1) {
    texts.push(<FormattedMessage id="OpptjeningFaktaForm.FlereArbeidKanGodkjennes" key="FlereArbeidKanGodkjennes" />);
  }
  return texts;
};

const findSkjaringstidspunkt = (dato: string): string => moment(dato).add(1, 'days').format(ISO_DATE_FORMAT);

const sorterEtterOpptjeningFom = (opptjeningPerioder: OpptjeningAktivitet[]): OpptjeningAktivitet[] => [...opptjeningPerioder]
  .sort((o1, o2) => moment(o1.opptjeningFom).diff(moment(o2.opptjeningFom)));

const DOKUMENTASJON_VIL_BLI_INNHENTET = 'DOKUMENTASJON_VIL_BLI_INNHENTET';

const addDay = (dato: string): string => addDaysToDate(dato, 1);

const filtrerOpptjeningAktiviteter = (
  opptjeningAktiviteter: OpptjeningAktivitet[],
  fastsattOpptjening?: Opptjening['fastsattOpptjening'],
) => opptjeningAktiviteter
  .filter((oa) => moment(fastsattOpptjening.opptjeningFom).isBefore(addDay(oa.opptjeningTom)))
  .filter((oa) => moment(oa.opptjeningFom).isBefore(addDay(fastsattOpptjening.opptjeningTom)));

interface OwnProps {
  hasAksjonspunkt: boolean;
  hasOpenAksjonspunkter: boolean;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
  dokStatus?: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  opptjeningAktiviteter: OpptjeningAktivitet[];
  fastsattOpptjening?: Opptjening['fastsattOpptjening'];
  submitCallback: (data: AvklarAktivitetsPerioderAp) => Promise<void>;
  formData: any;
  setFormData: (data: any) => void;
}

/**
 * OpptjeningFaktaPanel
 *
 * Vises faktapanelet for opptjeningsvilkåret. For Foreldrepenger vises dette alltid. Finnes
 * det aksjonspunkt kan nav-ansatt endre opplysninger før en går videre i prosessen.
 */
const OpptjeningFaktaPanel: FunctionComponent<OwnProps> = ({
  hasAksjonspunkt,
  hasOpenAksjonspunkter,
  opptjeningAktiviteter,
  dokStatus,
  opptjeningFomDato,
  opptjeningTomDato,
  readOnly,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fastsattOpptjening,
  submitCallback,
  formData,
  setFormData,
}) => {
  const opptjeningAktivitetTypes = alleKodeverk[kodeverkTyper.OPPTJENING_AKTIVITET_TYPE];

  const filtrerteOgSorterteOpptjeningsaktiviteter = useMemo(() => sorterEtterOpptjeningFom(filtrerOpptjeningAktiviteter(
    opptjeningAktiviteter, fastsattOpptjening,
  )), [opptjeningAktiviteter, fastsattOpptjening]);

  const formValuesAktiviteter = filtrerteOgSorterteOpptjeningsaktiviteter.map((a) => ({
    erGodkjent: a.erGodkjent,
    begrunnelse: a.begrunnelse,
  }));

  const førsteAktivitetSomIkkeErGodkjent = filtrerteOgSorterteOpptjeningsaktiviteter.findIndex((a) => !a.erGodkjent);

  const [formVerdierForAlleAktiviteter, oppdaterFormVerdier] = useState<FormValues[]>(formData || formValuesAktiviteter);
  const [valgtAktivitetIndex, setValgtAktivitetIndex] = useState<number>(førsteAktivitetSomIkkeErGodkjent !== -1 ? førsteAktivitetSomIkkeErGodkjent : 0);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => () => {
    setFormData(formVerdierForAlleAktiviteter);
  }, [formVerdierForAlleAktiviteter]);

  const bekreft = useCallback(() => {
    setIsSubmitting(true);

    const opptjeningsaktiviteterSomSkallagres = filtrerteOgSorterteOpptjeningsaktiviteter
      .map((a, index) => ({
        arbeidsforholdRef: a.arbeidsforholdRef,
        arbeidsgiverReferanse: a.arbeidsgiverReferanse,
        opptjeningFom: a.opptjeningFom,
        opptjeningTom: a.opptjeningTom,
        aktivitetType: a.aktivitetType,
        erGodkjent: formVerdierForAlleAktiviteter[index].erGodkjent,
        begrunnelse: formVerdierForAlleAktiviteter[index].begrunnelse,
      }))
      .filter((b) => b.begrunnelse !== undefined);

    submitCallback({
      opptjeningsaktiviteter: opptjeningsaktiviteterSomSkallagres,
      kode: aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
    }).then(() => setIsSubmitting(false));
  }, [filtrerteOgSorterteOpptjeningsaktiviteter, formVerdierForAlleAktiviteter]);

  const velgNesteAktivitet = useCallback(() => {
    if (valgtAktivitetIndex < filtrerteOgSorterteOpptjeningsaktiviteter.length - 1) {
      setValgtAktivitetIndex(valgtAktivitetIndex + 1);
    }
  }, [valgtAktivitetIndex]);
  const velgForrigeAktivitet = useCallback(() => {
    if (valgtAktivitetIndex > 0) {
      setValgtAktivitetIndex(valgtAktivitetIndex - 1);
    }
  }, [valgtAktivitetIndex]);

  const oppdaterAktivitet = useCallback((formValues: FormValues) => {
    oppdaterFormVerdier((oldValues: FormValues[]) => Object.assign([], oldValues, { [valgtAktivitetIndex]: formValues }));
    setValgtAktivitetIndex(undefined);
  }, [oppdaterFormVerdier, valgtAktivitetIndex]);

  const avbrytAktivitet = useCallback(() => setValgtAktivitetIndex(undefined), []);
  const opneInfo = useCallback(() => {
    if (valgtAktivitetIndex !== undefined) {
      setValgtAktivitetIndex(undefined);
    } else {
      setValgtAktivitetIndex(førsteAktivitetSomIkkeErGodkjent !== -1 ? førsteAktivitetSomIkkeErGodkjent : 0);
    }
  }, [valgtAktivitetIndex, setValgtAktivitetIndex, førsteAktivitetSomIkkeErGodkjent]);

  const harIkkeBehandletAlle = formVerdierForAlleAktiviteter.some((a) => a.erGodkjent === null || a.erGodkjent === undefined);

  return (
    <div className={styles.container}>
      {hasAksjonspunkt && (
        <>
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
            {getAksjonspunktHelpTexts(filtrerteOgSorterteOpptjeningsaktiviteter)}
          </AksjonspunktHelpTextTemp>
          <VerticalSpacer twentyPx />
        </>
      )}
      {dokStatus && (
        <>
          <AlertStripeInfo className={styles.info}>
            <FormattedMessage
              id={dokStatus === DOKUMENTASJON_VIL_BLI_INNHENTET ? 'OpptjeningFaktaForm.DetErInnhentetDok' : 'OpptjeningFaktaForm.DetErIkkeInnhentetDok'}
              values={{
                b: (chunks: any) => <b>{chunks}</b>,
              }}
            />
          </AlertStripeInfo>
          <VerticalSpacer twentyPx />
        </>
      )}
      <Undertekst><FormattedMessage id="OpptjeningFaktaForm.Skjaringstidspunkt" /></Undertekst>
      <Normaltekst><DateLabel dateString={findSkjaringstidspunkt(opptjeningTomDato)} /></Normaltekst>
      <VerticalSpacer twentyPx />
      <OpptjeningTidslinje
        opptjeningPerioder={filtrerteOgSorterteOpptjeningsaktiviteter}
        formVerdierForAlleAktiviteter={formVerdierForAlleAktiviteter}
        opptjeningAktivitetTypes={opptjeningAktivitetTypes}
        setValgtAktivitetIndex={setValgtAktivitetIndex}
        valgtAktivitetIndex={valgtAktivitetIndex}
        opptjeningFomDato={opptjeningFomDato}
        opptjeningTomDato={opptjeningTomDato}
      />
      <TimeLineNavigation
        openPeriodInfo={opneInfo}
      />
      <VerticalSpacer eightPx />
      {valgtAktivitetIndex !== undefined && (
        <>
          <ValgtAktivitetForm
            valgtOpptjeningAktivitet={filtrerteOgSorterteOpptjeningsaktiviteter[valgtAktivitetIndex]}
            valgteFormValues={formVerdierForAlleAktiviteter[valgtAktivitetIndex]}
            readOnly={readOnly}
            opptjeningAktivitetTyper={opptjeningAktivitetTypes}
            avbrytAktivitet={avbrytAktivitet}
            oppdaterAktivitet={oppdaterAktivitet}
            opptjeningFomDato={opptjeningFomDato}
            opptjeningTomDato={opptjeningTomDato}
            velgNesteAktivitet={velgNesteAktivitet}
            velgForrigeAktivitet={velgForrigeAktivitet}
            harAksjonspunkt={hasAksjonspunkt}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          <VerticalSpacer twentyPx />
        </>
      )}
      {hasAksjonspunkt && (
        <Hovedknapp
          mini
          htmlType="button"
          onClick={bekreft}
          disabled={valgtAktivitetIndex !== undefined || isSubmitting || readOnly || harIkkeBehandletAlle}
          spinner={isSubmitting}
        >
          <FormattedMessage id="OpptjeningFaktaForm.Confirm" />
        </Hovedknapp>
      )}
    </div>
  );
};

export default OpptjeningFaktaPanel;
