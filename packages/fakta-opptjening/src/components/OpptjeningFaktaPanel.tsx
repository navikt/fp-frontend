import React, { FunctionComponent, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Label } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { addDaysToDate, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode, KodeverkType } from '@navikt/fp-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  FerdiglignetNæring,
  KodeverkMedNavn,
  Opptjening,
  OpptjeningAktivitet,
} from '@navikt/fp-types';
import { AvklarAktivitetsPerioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import ValgtAktivitetForm, { FormValues } from './aktivitet/ValgtAktivitetForm';
import OpptjeningTidslinje from './tidslinje/OpptjeningTidslinje';

import styles from './opptjeningFaktaPanel.module.css';

const getAksjonspunktHelpTexts = (opptjeningAktiviteter: OpptjeningAktivitet[]): ReactElement[] => {
  const texts = [] as ReactElement[];
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

const findSkjaringstidspunkt = (dato?: string): string => dayjs(dato).add(1, 'days').format(ISO_DATE_FORMAT);

const sorterEtterOpptjeningFom = (
  opptjeningPerioder: OpptjeningAktivitet[],
  opptjeningAktivitetTypes: KodeverkMedNavn[],
): OpptjeningAktivitet[] =>
  [...opptjeningPerioder].sort((o1, o2) => {
    const navn1 = opptjeningAktivitetTypes.find(oat => oat.kode === o1.aktivitetType)?.navn;
    const navn2 = opptjeningAktivitetTypes.find(oat => oat.kode === o2.aktivitetType)?.navn;
    return navn1 && navn2 ? navn1.localeCompare(navn2) : 0;
  });

const addDay = (dato: string): string => addDaysToDate(dato, 1);

const filtrerOpptjeningAktiviteter = (
  opptjeningAktiviteter: OpptjeningAktivitet[],
  fastsattOpptjening?: Opptjening['fastsattOpptjening'],
): OpptjeningAktivitet[] => {
  if (!fastsattOpptjening) {
    return [];
  }
  return opptjeningAktiviteter
    .filter(oa => dayjs(fastsattOpptjening.opptjeningFom).isBefore(addDay(oa.opptjeningTom)))
    .filter(oa => dayjs(oa.opptjeningFom).isBefore(addDay(fastsattOpptjening.opptjeningTom)));
};

interface OwnProps {
  hasAksjonspunkt: boolean;
  hasOpenAksjonspunkter: boolean;
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

  const [formVerdierForAlleAktiviteter, setFormVerdierForAlleAktiviteter] = useState<FormValues[]>(
    formData || formValuesAktiviteter,
  );

  const førsteAktivitetSomIkkeErGodkjent = filtrerteOgSorterteOpptjeningsaktiviteter.findIndex(
    a => a.erGodkjent === undefined,
  );
  const defaultAktivitetIndex = filtrerteOgSorterteOpptjeningsaktiviteter.length > 0 ? 0 : undefined;
  const [valgtAktivitetIndex, setValgtAktivitetIndex] = useState<number | undefined>(
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
      kode: AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING,
    }).then(() => setIsSubmitting(false));
  }, [filtrerteOgSorterteOpptjeningsaktiviteter, formVerdierForAlleAktiviteter]);

  const velgNesteAktivitet = useCallback(() => {
    if (
      valgtAktivitetIndex !== undefined &&
      valgtAktivitetIndex < filtrerteOgSorterteOpptjeningsaktiviteter.length - 1
    ) {
      setValgtAktivitetIndex(valgtAktivitetIndex + 1);
    }
  }, [valgtAktivitetIndex]);
  const velgForrigeAktivitet = useCallback(() => {
    if (valgtAktivitetIndex !== undefined && valgtAktivitetIndex > 0) {
      setValgtAktivitetIndex(valgtAktivitetIndex - 1);
    }
  }, [valgtAktivitetIndex]);

  const oppdaterAktivitet = useCallback(
    (formValues: FormValues) => {
      if (valgtAktivitetIndex !== undefined) {
        setFormVerdierForAlleAktiviteter((oldValues: FormValues[]) =>
          Object.assign([], oldValues, { [valgtAktivitetIndex]: formValues }),
        );
      }
    },
    [setFormVerdierForAlleAktiviteter, valgtAktivitetIndex],
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
          {hasOpenAksjonspunkter && (
            <AksjonspunktHelpTextHTML>
              {getAksjonspunktHelpTexts(filtrerteOgSorterteOpptjeningsaktiviteter)}
            </AksjonspunktHelpTextHTML>
          )}
          <VerticalSpacer twentyPx />
        </>
      )}
      <Label size="small">
        <FormattedMessage id="OpptjeningFaktaForm.Skjaringstidspunkt" />
      </Label>
      <BodyShort size="small">
        <DateLabel dateString={findSkjaringstidspunkt(fastsattOpptjening?.opptjeningTom)} />
      </BodyShort>
      <VerticalSpacer twentyPx />
      <OpptjeningTidslinje
        opptjeningPerioder={filtrerteOgSorterteOpptjeningsaktiviteter}
        formVerdierForAlleAktiviteter={formVerdierForAlleAktiviteter}
        opptjeningAktivitetTypes={opptjeningAktivitetTypes}
        setValgtAktivitetIndex={setValgtAktivitetIndex}
        valgtAktivitetIndex={valgtAktivitetIndex}
        fastsattOpptjening={fastsattOpptjening}
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
            fastsattOpptjening={fastsattOpptjening}
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
