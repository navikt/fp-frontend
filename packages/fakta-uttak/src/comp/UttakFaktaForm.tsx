import React, {
  useCallback, FunctionComponent, useRef, useState, useEffect, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Form } from '@navikt/ft-form-hooks';
import dayjs from 'dayjs';
import { Heading } from '@navikt/ds-react';
import {
  Table, AksjonspunktHelpTextHTML, VerticalSpacer, ExpandableTableRow, TableColumn,
} from '@navikt/ft-ui-komponenter';
import { FaktaSubmitButtonNew, FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { calcDaysAndWeeks, dateFormat, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { AksjonspunktStatus, isAksjonspunktOpen, KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';

import {
  Aksjonspunkt, UttakKontrollerFaktaPerioder, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';

import UttakFaktaDetailForm from './UttakFaktaDetailForm';

const HEADER_TEXT_CODES = [
  'UttakFaktaForm.Periode',
  'UttakFaktaForm.AntallDager',
  'UttakFaktaForm.Stonadskonto',
  'UttakFaktaForm.Kilde',
  'EMPTY',
];

const getTextId = (weeks?: number, days?: number): string => {
  let id = 'UttakFaktaForm.AntallFlereDagerOgFlereUker';
  if (weeks === undefined && days === undefined) {
    id = 'UttakFaktaForm.TidenesEnde';
  }
  if (days === 0) {
    id = weeks === 1 ? 'UttakFaktaForm.AntallNullDagerOgEnUke' : 'UttakFaktaForm.AntallNullDagerOgFlereUker';
  }
  if (weeks === 0) {
    id = days === 1 ? 'UttakFaktaForm.AntallEnDagOgNullUker' : 'UttakFaktaForm.AntallFlereDagerOgNullUker';
  }
  if (days === 1) {
    id = weeks === 1 ? 'UttakFaktaForm.AntallEnDagOgEnUke' : 'UttakFaktaForm.AntallEnDagOgFlereUker';
  }
  if (weeks === 1) {
    id = 'UttakFaktaForm.AntallFlereDagerOgEnUke';
  }
  return id;
};

const getUttakPeriode = (
  alleKodeverk: AlleKodeverk,
  uttakPeriodeType: string,
  oppholdArsak?: string,
): string => {
  if (oppholdArsak !== oppholdArsakType.UDEFINERT) {
    return alleKodeverk[KodeverkType.OPPHOLD_ARSAK].find((k) => k.kode === KodeverkType.MORS_AKTIVITET)?.navn;
  }

  return alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE].find((k) => k.kode === uttakPeriodeType)?.navn;
};

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  formData: { uttakPerioder: UttakKontrollerFaktaPerioder[], begrunnelse: string },
  setFormData: (data: { uttakPerioder: UttakKontrollerFaktaPerioder[], begrunnelse: string }) => void,
  submitCallback: (aksjonspunkter: {}) => Promise<void>;
  submittable: boolean;
  kanOverstyre: boolean;
}

const UttakFaktaForm: FunctionComponent<OwnProps> = ({
  uttakKontrollerFaktaPerioder,
  ytelsefordeling,
  alleKodeverk,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  submitCallback,
  submittable,
  kanOverstyre,
}) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [isDirty, setDirty] = useState<boolean>(false);

  const harApneAksjonspunkter = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));

  const sortertePerioder = useMemo(() => [...uttakKontrollerFaktaPerioder.perioder]
    .sort((krav1, krav2) => dayjs(krav1.fom).diff(dayjs(krav2.fom))), [uttakKontrollerFaktaPerioder]);

  const [uttakPerioder, updateUttakPerioder] = useState<UttakKontrollerFaktaPerioder[]>(formData?.uttakPerioder || sortertePerioder);

  const aksjonspunktTekster = aksjonspunkter
    .filter((ap) => ap.status === AksjonspunktStatus.OPPRETTET)
    .map((ap) => {
      const førsteUttaksdato = ytelsefordeling && ytelsefordeling.førsteUttaksdato ? ytelsefordeling.førsteUttaksdato : undefined;
      const førsteUttak = {
        value: dayjs(førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT),
      };

      return (
        <FormattedMessage
          key={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
          id={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
          values={førsteUttak}
        />
      );
    });

  const [valgteFoms, setValgteFoms] = useState<string[]>([]);
  const velgPeriodeFom = useCallback((fom?: string, lukkAlleAndre = false) => {
    if (valgteFoms.includes(fom)) {
      setValgteFoms((foms) => foms.filter((f) => f !== fom));
    } else {
      const nye = fom ? [fom] : [];
      setValgteFoms((foms) => (lukkAlleAndre ? nye : foms.concat(fom)));
    }
    tableRef?.current?.scrollIntoView();
  }, [valgteFoms, setValgteFoms]);

  useEffect(() => velgPeriodeFom(uttakPerioder?.find((oa) => !oa.bekreftet)?.fom), []);

  const oppdaterPerioder = useCallback((uPerioder: { perioder: UttakKontrollerFaktaPerioder[] }) => {
    const { perioder } = uPerioder;
    const oppdatertePerioder = uttakPerioder
      .filter((p) => p.fom !== perioder[0].fom)
      .concat(perioder)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    updateUttakPerioder(oppdatertePerioder);
    velgPeriodeFom(oppdatertePerioder.find((oa) => !oa.bekreftet)?.fom, true);
    setDirty(true);
  }, [uttakPerioder]);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse,
    },
  });

  useEffect(() => () => {
    setFormData({ uttakPerioder, begrunnelse: formMethods.getValues('begrunnelse') });
  }, []);

  const bekreft = useCallback((begrunnelse: string) => {
    submitCallback({
      kode: '',
      avklartePerioder: uttakPerioder,
      begrunnelse,
    });
  }, [uttakPerioder]);

  const begrunnelse = formMethods.watch('begrunnelse');

  const isSubmittable = useMemo(() => submittable
    && valgteFoms.length === 0 && uttakPerioder?.every((a) => a.bekreftet) && !!begrunnelse,
  [uttakPerioder, valgteFoms, begrunnelse]);

  const notExpandable = aksjonspunkter.length === 0 && !kanOverstyre;

  return (
    <>
      <Heading size="small"><FormattedMessage id="UttakFaktaForm.FaktaUttak" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {aksjonspunktTekster}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <Table ref={tableRef} headerTextCodes={HEADER_TEXT_CODES} noHover hasGrayHeader>
        {uttakPerioder.map((periode) => {
          const numberOfDaysAndWeeks = calcDaysAndWeeks(periode.fom, periode.tom);
          return (
            <ExpandableTableRow
              key={periode.fom + periode.tom}
              isApLeftBorder={periode.bekreftet === false}
              showContent={valgteFoms.includes(periode.fom)}
              toggleContent={() => velgPeriodeFom(periode.fom)}
              content={valgteFoms.includes(periode.fom) && (
                <UttakFaktaDetailForm
                  valgtPeriode={periode}
                  readOnly={readOnly}
                  oppdaterPerioder={oppdaterPerioder}
                  avbrytEditering={() => velgPeriodeFom(periode.fom)}
                />
              )}
            >
              <TableColumn>{`${dateFormat(periode.fom)} - ${dateFormat(periode.tom)}`}</TableColumn>
              <TableColumn>
                <FormattedMessage
                  id={getTextId(numberOfDaysAndWeeks.weeks, numberOfDaysAndWeeks.days)}
                  values={{
                    weeks: numberOfDaysAndWeeks.weeks,
                    days: numberOfDaysAndWeeks.days,
                  }}
                />
              </TableColumn>
              <TableColumn>{getUttakPeriode(alleKodeverk, periode.uttakPeriodeType, periode.oppholdÅrsak)}</TableColumn>
              <TableColumn><FormattedMessage id={periode.begrunnelse ? 'UttakFaktaForm.Redigert' : 'UttakFaktaForm.FraSøknad'} /></TableColumn>
            </ExpandableTableRow>
          );
        })}
      </Table>
      <VerticalSpacer twentyPx />
      <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <FaktaBegrunnelseTextFieldNew
          name="begrunnelse"
          isSubmittable
          isReadOnly={readOnly}
          hasBegrunnelse
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={isSubmittable}
          isReadOnly={readOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={isDirty || formMethods.formState.isDirty}
        />
      </Form>
    </>
  );
};

export default UttakFaktaForm;
