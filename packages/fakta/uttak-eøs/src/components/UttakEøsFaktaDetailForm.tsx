import { type ReactElement, useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { Button, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfNumericField, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, hasValidInteger, required } from '@navikt/ft-form-validators';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { RelasjonsRolleType, UttakPeriodeType } from '@navikt/fp-kodeverk';
import { type AnnenforelderUttakEøsPeriode, type Fagsak } from '@navikt/fp-types';
import type { BekreftUttaksperioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { finnDager, finnUker, usePanelDataContext } from '@navikt/fp-utils';

import styles from './uttakEøsFaktaDetailForm.module.css';

type FormValues = {
  fom: string;
  tom: string;
  trekkonto: AnnenforelderUttakEøsPeriode['trekkonto'];
  trekkdager: string;
  trekkuker: string;
};

interface Props {
  annenForelderUttakEøsPeriode?: AnnenforelderUttakEøsPeriode;
  oppdater: (data: AnnenforelderUttakEøsPeriode) => void;
  slettPeriode?: () => void;
  avbryt: () => void;
}

export const UttakEøsFaktaDetailForm = ({ annenForelderUttakEøsPeriode, oppdater, slettPeriode, avbryt }: Props) => {
  const intl = useIntl();

  const { isReadOnly, fagsak } = usePanelDataContext<BekreftUttaksperioderAp[]>();

  const formMethods = useForm<FormValues>({
    defaultValues: annenForelderUttakEøsPeriode
      ? {
          ...annenForelderUttakEøsPeriode,
          trekkdager: finnDager(annenForelderUttakEøsPeriode.trekkdager),
          trekkuker: finnUker(annenForelderUttakEøsPeriode.trekkdager),
        }
      : undefined,
  });

  const fom = formMethods.watch('fom');
  const tom = formMethods.watch('tom');

  const [visSletteDialog, setVisSletteDialog] = useState(false);
  const slettUttaksperiode = () => {
    setVisSletteDialog(false);
    if (slettPeriode) {
      slettPeriode();
    }
  };

  const oppdaterTrekkdagerOgTrekkuker = (fraOgTil?: string, tilOgMed?: string) => {
    if (fraOgTil && tilOgMed) {
      const dagerOgUker = calcDaysAndWeeks(fraOgTil, tilOgMed);
      formMethods.setValue('trekkuker', dagerOgUker.weeks?.toString() ?? '0');
      formMethods.setValue('trekkdager', dagerOgUker.days?.toString() ?? '0');
    }
  };

  return (
    <>
      <RhfForm formMethods={formMethods} onSubmit={values => oppdater(transformValues(values))}>
        <VStack gap="8">
          <VStack gap="4">
            <HStack gap="4" align="end">
              <RhfDatepicker
                name="fom"
                label={intl.formatMessage({ id: 'UttakEøsFaktaDetailForm.Fom' })}
                control={formMethods.control}
                validate={[required, hasValidDate]}
                isReadOnly={isReadOnly}
                onChange={value => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- [JOHANNES] bedre typede forms
                  oppdaterTrekkdagerOgTrekkuker(value, formMethods.getValues('tom'));
                }}
              />
              <RhfDatepicker
                name="tom"
                label={intl.formatMessage({ id: 'UttakEøsFaktaDetailForm.Tom' })}
                control={formMethods.control}
                validate={[required, hasValidDate, validerTomEtterFom(intl, formMethods.getValues)]}
                isReadOnly={isReadOnly}
                fromDate={dayjs(fom, ISO_DATE_FORMAT).toDate()}
                onChange={value => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- [JOHANNES] bedre typede forms
                  oppdaterTrekkdagerOgTrekkuker(formMethods.getValues('fom'), value);
                }}
              />
              {slettPeriode && !isReadOnly && (
                <Button
                  size="small"
                  variant="tertiary"
                  type="button"
                  icon={<TrashIcon />}
                  onClick={() => setVisSletteDialog(true)}
                >
                  <FormattedMessage id="UttakEøsFaktaDetailForm.Slett" />
                </Button>
              )}
            </HStack>
            {fom && tom && (
              <FormattedMessage
                id="UttakEøsFaktaDetailForm.Virkedager"
                values={{ virkedager: calcDaysAndWeeks(fom, tom).formattedString }}
              />
            )}
          </VStack>
          <RhfSelect
            name="trekkonto"
            label={intl.formatMessage({
              id: 'UttakEøsFaktaDetailForm.Stønadskonto',
            })}
            control={formMethods.control}
            className={styles['select']}
            selectValues={lagGyldigeKontotyperOption(fagsak)}
            readOnly={isReadOnly}
            validate={[required]}
          />
          <VStack align="start">
            <Label size="small">{intl.formatMessage({ id: 'UttakEøsFaktaDetailForm.TrekkUkerDager' })}</Label>
            <HStack gap="2" align="center">
              <RhfNumericField
                name="trekkuker"
                control={formMethods.control}
                className={styles['numberWidth']}
                readOnly={isReadOnly}
                validate={[required, hasValidInteger]}
              />
              <div>/</div>
              <RhfNumericField
                name="trekkdager"
                control={formMethods.control}
                className={styles['numberWidth']}
                readOnly={isReadOnly}
                validate={[required, hasValidDecimal]}
              />
            </HStack>
          </VStack>
          <HStack gap="4" className={styles['marginBtn']}>
            <Button
              size="small"
              variant="primary"
              type="submit"
              disabled={!formMethods.formState.isDirty || isReadOnly}
            >
              {slettPeriode ? (
                <FormattedMessage id="UttakEøsFaktaDetailForm.Oppdater" />
              ) : (
                <FormattedMessage id="UttakEøsFaktaDetailForm.LeggTil" />
              )}
            </Button>
            <Button size="small" variant="secondary" onClick={avbryt} type="button" disabled={isReadOnly}>
              <FormattedMessage id="UttakEøsFaktaDetailForm.Avslutt" />
            </Button>
          </HStack>
        </VStack>
      </RhfForm>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'UttakEøsFaktaDetailForm.VilDuSlette' })}
          submit={slettUttaksperiode}
          cancel={() => setVisSletteDialog(false)}
          showModal
        />
      )}
    </>
  );
};

const lagGyldigeKontotyperOption = (fagsak: Fagsak): ReactElement[] => {
  if (fagsak.relasjonsRolleType === RelasjonsRolleType.MOR) {
    return [
      <option key={0} value={UttakPeriodeType.FELLESPERIODE}>
        {toTitleCapitalization(UttakPeriodeType.FELLESPERIODE)}
      </option>,
      <option key={1} value={UttakPeriodeType.FEDREKVOTE}>
        {toTitleCapitalization(UttakPeriodeType.FEDREKVOTE)}
      </option>,
    ];
  } else {
    return [
      <option key={0} value={UttakPeriodeType.FELLESPERIODE}>
        {toTitleCapitalization(UttakPeriodeType.FELLESPERIODE)}
      </option>,
      <option key={1} value={UttakPeriodeType.MODREKVOTE}>
        {toTitleCapitalization(UttakPeriodeType.MODREKVOTE)}
      </option>,
    ];
  }
};

const validerTomEtterFom = (intl: IntlShape, getValues: UseFormGetValues<FormValues>) => (tom?: string) =>
  dayjs(tom).isBefore(getValues('fom')) ? intl.formatMessage({ id: 'UttakEøsFaktaDetailForm.TomForFom' }) : null;

const transformValues = ({ trekkdager, trekkuker, ...rest }: FormValues): AnnenforelderUttakEøsPeriode => {
  return {
    ...rest,
    trekkdager: Number((Number.parseFloat(trekkuker) * 5 + Number.parseFloat(trekkdager)).toFixed(1)),
  };
};

export const toTitleCapitalization = (sentence: string): string => {
  return sentence
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' ');
};
