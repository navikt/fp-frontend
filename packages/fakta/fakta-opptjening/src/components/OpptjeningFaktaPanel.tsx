import { type ReactElement, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Label, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, DateLabel } from '@navikt/ft-ui-komponenter';
import { addDaysToDate, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode, KodeverkType } from '@navikt/fp-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  FerdiglignetNæring,
  KodeverkMedNavn,
  Opptjening,
  OpptjeningAktivitet,
} from '@navikt/fp-types';
import type { AvklarAktivitetsPerioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { type FormValues, ValgtAktivitetForm } from './aktivitet/ValgtAktivitetForm';
import { OpptjeningTidslinje } from './tidslinje/OpptjeningTidslinje';

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

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  opptjeningAktiviteter?: OpptjeningAktivitet[];
  ferdiglignetNæring: FerdiglignetNæring[];
  fastsattOpptjening?: Opptjening['fastsattOpptjening'];
}

/**
 * OpptjeningFaktaPanel
 *
 * Vises faktapanelet for opptjeningsvilkåret. For Foreldrepenger vises dette alltid. Finnes
 * det aksjonspunkt kan nav-ansatt endre opplysninger før en går videre i prosessen.
 */
export const OpptjeningFaktaPanel = ({
  opptjeningAktiviteter,
  arbeidsgiverOpplysningerPerId,
  fastsattOpptjening,
  ferdiglignetNæring,
}: Props) => {
  const {
    aksjonspunkterForPanel,
    alleMerknaderFraBeslutter,
    harÅpneAksjonspunkter,
    submitCallback,
    isReadOnly,
    alleKodeverk,
  } = usePanelDataContext<AvklarAktivitetsPerioderAp>();

  const harAksjonspunkt = aksjonspunkterForPanel.length > 0;

  const opptjeningAktivitetTypes = alleKodeverk[KodeverkType.OPPTJENING_AKTIVITET_TYPE];

  const filtrerteOgSorterteOpptjeningsaktiviteter =
    !!opptjeningAktiviteter && !!fastsattOpptjening
      ? sorterEtterOpptjeningFom(
          filtrerOpptjeningAktiviteter(opptjeningAktiviteter, fastsattOpptjening),
          opptjeningAktivitetTypes,
        )
      : [];

  const formValuesAktiviteter = filtrerteOgSorterteOpptjeningsaktiviteter.map(a => ({
    erGodkjent: a.erGodkjent,
    begrunnelse: a.begrunnelse ?? '',
  }));

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues[]>();

  const [formVerdierForAlleAktiviteter, setFormVerdierForAlleAktiviteter] = useState<FormValues[]>(
    mellomlagretFormData ?? formValuesAktiviteter,
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
      setMellomlagretFormData(formVerdierForAlleAktiviteter);
    },
    [formVerdierForAlleAktiviteter],
  );

  useEffect(() => {
    const index = formVerdierForAlleAktiviteter.findIndex(a => a.erGodkjent === undefined);
    setValgtAktivitetIndex(index !== -1 ? index : undefined);
  }, [formVerdierForAlleAktiviteter]);

  const bekreft = () => {
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
  };

  const velgNesteAktivitet = () => {
    if (
      valgtAktivitetIndex !== undefined &&
      valgtAktivitetIndex < filtrerteOgSorterteOpptjeningsaktiviteter.length - 1
    ) {
      setValgtAktivitetIndex(valgtAktivitetIndex + 1);
    }
  };
  const velgForrigeAktivitet = () => {
    if (valgtAktivitetIndex !== undefined && valgtAktivitetIndex > 0) {
      setValgtAktivitetIndex(valgtAktivitetIndex - 1);
    }
  };

  const oppdaterAktivitet = (formValues: FormValues) => {
    if (valgtAktivitetIndex !== undefined) {
      setFormVerdierForAlleAktiviteter((oldValues: FormValues[]) =>
        Object.assign([], oldValues, { [valgtAktivitetIndex]: formValues }),
      );
    }
  };

  const avbrytAktivitet = () => setValgtAktivitetIndex(undefined);
  const lukkPeriode = () => {
    setValgtAktivitetIndex(undefined);
  };

  const harIkkeBehandletAlle = formVerdierForAlleAktiviteter.some(
    a => a.erGodkjent === null || a.erGodkjent === undefined,
  );

  return (
    <VStack gap="6" className={styles.container}>
      {harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          {getAksjonspunktHelpTexts(filtrerteOgSorterteOpptjeningsaktiviteter)}
        </AksjonspunktHelpTextHTML>
      )}
      <div>
        <Label size="small">
          <FormattedMessage id="OpptjeningFaktaForm.Skjaringstidspunkt" />
        </Label>
        <BodyShort size="small">
          <DateLabel dateString={findSkjaringstidspunkt(fastsattOpptjening?.opptjeningTom)} />
        </BodyShort>
      </div>
      <OpptjeningTidslinje
        opptjeningPerioder={filtrerteOgSorterteOpptjeningsaktiviteter}
        formVerdierForAlleAktiviteter={formVerdierForAlleAktiviteter}
        opptjeningAktivitetTypes={opptjeningAktivitetTypes}
        setValgtAktivitetIndex={setValgtAktivitetIndex}
        valgtAktivitetIndex={valgtAktivitetIndex}
        fastsattOpptjening={fastsattOpptjening}
      />
      {valgtAktivitetIndex !== undefined && (
        <ValgtAktivitetForm
          key={valgtAktivitetIndex}
          valgtOpptjeningAktivitet={filtrerteOgSorterteOpptjeningsaktiviteter[valgtAktivitetIndex]}
          valgteFormValues={formVerdierForAlleAktiviteter[valgtAktivitetIndex]}
          readOnly={isReadOnly}
          opptjeningAktivitetTyper={opptjeningAktivitetTypes}
          avbrytAktivitet={avbrytAktivitet}
          oppdaterAktivitet={oppdaterAktivitet}
          fastsattOpptjening={fastsattOpptjening}
          velgNesteAktivitet={velgNesteAktivitet}
          velgForrigeAktivitet={velgForrigeAktivitet}
          harAksjonspunkt={harAksjonspunkt}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          ferdiglignetNæring={ferdiglignetNæring}
          lukkPeriode={lukkPeriode}
        />
      )}
      {harAksjonspunkt && filtrerteOgSorterteOpptjeningsaktiviteter.length > 0 && (
        <div>
          <Button
            size="small"
            variant="primary"
            onClick={bekreft}
            disabled={valgtAktivitetIndex !== undefined || isSubmitting || isReadOnly || harIkkeBehandletAlle}
            loading={isSubmitting}
            type="button"
          >
            <FormattedMessage id="OpptjeningFaktaForm.Confirm" />
          </Button>
        </div>
      )}
    </VStack>
  );
};
