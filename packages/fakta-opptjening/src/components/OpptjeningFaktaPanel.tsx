import React, { FunctionComponent, useState, useEffect, useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { Button, BodyShort, Label } from '@navikt/ds-react';

import { AksjonspunktCode, KodeverkType } from '@navikt/fp-kodeverk';
import { ISO_DATE_FORMAT, addDaysToDate } from '@navikt/ft-utils';
import { AksjonspunktHelpTextTemp, DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  AlleKodeverk,
  OpptjeningAktivitet,
  Opptjening,
  KodeverkMedNavn,
  FerdiglignetNæring,
} from '@navikt/fp-types';
import { AvklarAktivitetsPerioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import OpptjeningTidslinje from './tidslinje/OpptjeningTidslinje';
import ValgtAktivitetForm, { FormValues } from './aktivitet/ValgtAktivitetForm';

import styles from './opptjeningFaktaPanel.module.css';

const getAksjonspunktHelpTexts = (opptjeningAktiviteter: OpptjeningAktivitet[]): string[] => {
  const texts = [];
  if (opptjeningAktiviteter.some(a => a.stillingsandel === 0)) {
    texts.push(
      <FormattedMessage id="OpptjeningFaktaForm.AktivitetenErTimeAvslonnet" key="AktivitetenErTimeAvslonnet" />,
    );
  }

  const aktivitetTypes = opptjeningAktiviteter.filter(
    a => (a.erGodkjent === undefined || a.erGodkjent === null || a.begrunnelse) && a.stillingsandel !== 0,
  );
  if (aktivitetTypes.length === 1) {
    texts.push(<FormattedMessage id="OpptjeningFaktaForm.EttArbeidKanGodkjennes" key="EttArbeidKanGodkjennes" />);
  } else if (aktivitetTypes.length > 1) {
    texts.push(<FormattedMessage id="OpptjeningFaktaForm.FlereArbeidKanGodkjennes" key="FlereArbeidKanGodkjennes" />);
  }
  return texts;
};

const findSkjaringstidspunkt = (dato: string): string => dayjs(dato).add(1, 'days').format(ISO_DATE_FORMAT);

const sorterEtterOpptjeningFom = (
  opptjeningPerioder: OpptjeningAktivitet[],
  opptjeningAktivitetTypes: KodeverkMedNavn[],
): OpptjeningAktivitet[] =>
  [...opptjeningPerioder].sort((o1, o2) => {
    const navn1 = opptjeningAktivitetTypes.find(oat => oat.kode === o1.aktivitetType).navn;
    const navn2 = opptjeningAktivitetTypes.find(oat => oat.kode === o2.aktivitetType).navn;
    return navn1.localeCompare(navn2);
  });

const addDay = (dato: string): string => addDaysToDate(dato, 1);

const filtrerOpptjeningAktiviteter = (
  opptjeningAktiviteter: OpptjeningAktivitet[],
  fastsattOpptjening?: Opptjening['fastsattOpptjening'],
): OpptjeningAktivitet[] =>
  opptjeningAktiviteter
    .filter(oa => dayjs(fastsattOpptjening.opptjeningFom).isBefore(addDay(oa.opptjeningTom)))
    .filter(oa => dayjs(oa.opptjeningFom).isBefore(addDay(fastsattOpptjening.opptjeningTom)));

interface OwnProps {
  hasAksjonspunkt: boolean;
  hasOpenAksjonspunkter: boolean;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  opptjeningAktiviteter?: OpptjeningAktivitet[];
  ferdiglignetNæring: FerdiglignetNæring[];
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
  opptjeningFomDato,
  opptjeningTomDato,
  readOnly,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fastsattOpptjening,
  ferdiglignetNæring,
  submitCallback,
  formData,
  setFormData,
}) => {
  const opptjeningAktivitetTypes = alleKodeverk[KodeverkType.OPPTJENING_AKTIVITET_TYPE];

  const filtrerteOgSorterteOpptjeningsaktiviteter = useMemo(() => {
    if (!!opptjeningAktiviteter && !!fastsattOpptjening) {
      return sorterEtterOpptjeningFom(
        filtrerOpptjeningAktiviteter(opptjeningAktiviteter, fastsattOpptjening),
        opptjeningAktivitetTypes,
      );
    }
    return [];
  }, [opptjeningAktiviteter, fastsattOpptjening]);

  const formValuesAktiviteter = filtrerteOgSorterteOpptjeningsaktiviteter.map(a => ({
    erGodkjent: a.erGodkjent,
    begrunnelse: a.begrunnelse,
  }));

  const [formVerdierForAlleAktiviteter, oppdaterFormVerdier] = useState<FormValues[]>(
    formData || formValuesAktiviteter,
  );

  const førsteAktivitetSomIkkeErGodkjent = filtrerteOgSorterteOpptjeningsaktiviteter.findIndex(
    a => a.erGodkjent === undefined,
  );
  const defaultAktivitetIndex = filtrerteOgSorterteOpptjeningsaktiviteter.length > 0 ? 0 : undefined;
  const [valgtAktivitetIndex, setValgtAktivitetIndex] = useState<number>(
    førsteAktivitetSomIkkeErGodkjent !== -1 ? førsteAktivitetSomIkkeErGodkjent : defaultAktivitetIndex,
  );

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(
    () => () => {
      setFormData(formVerdierForAlleAktiviteter);
    },
    [formVerdierForAlleAktiviteter],
  );

  useEffect(() => {
    const index = formVerdierForAlleAktiviteter.findIndex(a => a.erGodkjent === undefined);
    setValgtAktivitetIndex(index !== -1 ? index : undefined);
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
      .filter(b => b.begrunnelse);

    submitCallback({
      opptjeningsaktiviteter: opptjeningsaktiviteterSomSkallagres,
      kode: AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING,
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

  const oppdaterAktivitet = useCallback(
    (formValues: FormValues) => {
      oppdaterFormVerdier((oldValues: FormValues[]) =>
        Object.assign([], oldValues, { [valgtAktivitetIndex]: formValues }),
      );
    },
    [oppdaterFormVerdier, valgtAktivitetIndex],
  );

  const avbrytAktivitet = useCallback(() => setValgtAktivitetIndex(undefined), []);
  const lukkPeriode = useCallback(() => {
    setValgtAktivitetIndex(undefined);
  }, []);

  const harIkkeBehandletAlle = formVerdierForAlleAktiviteter.some(
    a => a.erGodkjent === null || a.erGodkjent === undefined,
  );

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
      <Label size="small">
        <FormattedMessage id="OpptjeningFaktaForm.Skjaringstidspunkt" />
      </Label>
      <BodyShort size="small">
        <DateLabel dateString={findSkjaringstidspunkt(opptjeningTomDato)} />
      </BodyShort>
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
      <VerticalSpacer fourtyPx />
      {valgtAktivitetIndex !== undefined && (
        <>
          <ValgtAktivitetForm
            key={valgtAktivitetIndex}
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
            ferdiglignetNæring={ferdiglignetNæring}
            lukkPeriode={lukkPeriode}
          />
          <VerticalSpacer twentyPx />
        </>
      )}
      {hasAksjonspunkt && filtrerteOgSorterteOpptjeningsaktiviteter.length > 0 && (
        <Button
          size="small"
          variant="primary"
          onClick={bekreft}
          disabled={valgtAktivitetIndex !== undefined || isSubmitting || readOnly || harIkkeBehandletAlle}
          loading={isSubmitting}
          type="button"
        >
          <FormattedMessage id="OpptjeningFaktaForm.Confirm" />
        </Button>
      )}
    </div>
  );
};

export default OpptjeningFaktaPanel;
