import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  hasValidDate,
  hasValidPosOrNegInteger,
  maxValue,
  minValue,
} from '@navikt/ft-form-validators';
import { ArrowBox, DateLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import type { Periodefilter } from '@navikt/fp-types';

import type { FormValues } from '../UtvalgskriterierForSakslisteForm';

import styles from './sorteringVelger.module.css';

dayjs.extend(customParseFormat);

export const DatoSorteringValg = () => {
  const { setValue, watch, control } = useFormContext<FormValues>();
  const periodefilter = watch('sortering.periodefilter');
  const fraVerdi = watch('sortering.fra');
  const tilVerdi = watch('sortering.til');

  return (
    <ArrowBox marginTop={4}>
      <VStack gap="space-8">
        <Detail>
          <FormattedMessage id="SorteringVelger.FiltrerPaTidsintervall" />
        </Detail>
        <RhfRadioGroup
          control={control}
          name="sortering.periodefilter"
          legend={<FormattedMessage id="SorteringVelger.FilterForPeriode" />}
          onChange={() => {
            setValue('sortering.fra', null, { shouldValidate: true });
            setValue('sortering.til', null, { shouldValidate: true });
            setValue('sortering.fomDato', null, { shouldValidate: true });
            setValue('sortering.tomDato', null, { shouldValidate: true });
          }}
        >
          <Radio value={'FAST_PERIODE' satisfies Periodefilter}>
            <FormattedMessage id="SorteringVelger.FastPeriode" />
          </Radio>
          <Radio value={'RELATIV_PERIODE_DAGER' satisfies Periodefilter}>
            <FormattedMessage id="SorteringVelger.RelativPeriodeDag" />
          </Radio>
          <Radio value={'RELATIV_PERIODE_MÅNEDER' satisfies Periodefilter}>
            <FormattedMessage id="SorteringVelger.RelativPeriodeMåned" />
          </Radio>
        </RhfRadioGroup>
        {periodefilter !== 'FAST_PERIODE' && (
          <HStack gap="space-16">
            <HStack gap="space-4">
              <div>
                <RhfTextField
                  name="sortering.fra"
                  control={control}
                  htmlSize={5}
                  align="right"
                  label={<FormattedMessage id="SorteringVelger.Fom" />}
                  validate={[hasValidPosOrNegInteger, minValue(-500), maxValue(1100)]}
                />
                {fraVerdi && (
                  <Detail>
                    {periodefilter === 'RELATIV_PERIODE_DAGER' ? (
                      <DateLabel dateString={finnDato(fraVerdi)} />
                    ) : (
                      <DateLabel dateString={finnDatoMåned(fraVerdi, true)} />
                    )}
                  </Detail>
                )}
              </div>
              <Detail className={styles['dager']}>
                {periodefilter === 'RELATIV_PERIODE_DAGER' ? (
                  <FormattedMessage id="SorteringVelger.DagerFrem" />
                ) : (
                  <FormattedMessage id="SorteringVelger.MånederFrem" />
                )}
              </Detail>
            </HStack>
            <HStack gap="space-4">
              <div>
                <RhfTextField
                  name="sortering.til"
                  control={control}
                  htmlSize={5}
                  align="right"
                  label={<FormattedMessage id="SorteringVelger.Tom" />}
                  validate={[
                    hasValidPosOrNegInteger,
                    validerTilLikEllerStørreEnnFra(fraVerdi),
                    minValue(-500),
                    maxValue(1100),
                  ]}
                />
                {tilVerdi && (
                  <Detail>
                    {periodefilter === 'RELATIV_PERIODE_DAGER' ? (
                      <DateLabel dateString={finnDato(tilVerdi)} />
                    ) : (
                      <DateLabel dateString={finnDatoMåned(tilVerdi, false)} />
                    )}
                  </Detail>
                )}
              </div>
              <Detail className={styles['dager']}>
                {periodefilter === 'RELATIV_PERIODE_DAGER' ? (
                  <FormattedMessage id="SorteringVelger.DagerFrem" />
                ) : (
                  <FormattedMessage id="SorteringVelger.MånederFrem" />
                )}
              </Detail>
            </HStack>
          </HStack>
        )}
        {periodefilter === 'FAST_PERIODE' && (
          <HStack gap="space-16">
            <RhfDatepicker
              name="sortering.fomDato"
              control={control}
              label={<FormattedMessage id="SorteringVelger.Fom" />}
              validate={[hasValidDate]}
            />
            <RhfDatepicker
              name="sortering.tomDato"
              control={control}
              label={<FormattedMessage id="SorteringVelger.Tom" />}
              validate={[hasValidDate, validerTomDatoLikEllerEtterFomDato(watch('sortering.fomDato'))]}
            />
          </HStack>
        )}
      </VStack>
    </ArrowBox>
  );
};

const finnDato = (antallDager: number) => dayjs().add(antallDager, 'd').format();

const finnDatoMåned = (antallMåneder: number, erStartenAvMåned: boolean) => {
  const baseDato = erStartenAvMåned ? dayjs().startOf('month') : dayjs().endOf('month');
  return baseDato.add(antallMåneder, 'month').format();
};

const validerTomDatoLikEllerEtterFomDato = (fomDato: string | null) => (tomDato: string) => {
  return fomDato && tomDato ? dateAfterOrEqual(fomDato)(tomDato) : null;
};

export const validerTilLikEllerStørreEnnFra = (fra: number | null) => (til: number | string) => {
  if (!fra || !til || Number.isNaN(til)) {
    return null;
  }
  return minValue(fra)(til);
};
