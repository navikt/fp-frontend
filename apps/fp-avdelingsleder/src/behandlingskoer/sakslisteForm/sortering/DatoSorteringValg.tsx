import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Detail, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { ArrowBox, DateLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { type Periodefilter } from '../../../typer/sakslisteAvdelingTsType';
import type { FormValues } from './SorteringVelger';

import styles from './sorteringVelger.module.css';

dayjs.extend(customParseFormat);

export const DatoSorteringValg = () => {
  const intl = useIntl();

  const { watch, control } = useFormContext<FormValues>();
  const periodefilter = watch('sortering.periodefilter');
  const fraVerdi = watch('sortering.fra');
  const tilVerdi = watch('sortering.til');

  return (
    <div className={styles['arrowBoxWidth']}>
      <ArrowBox>
        <VStack gap="space-8">
          <Detail>
            <FormattedMessage id="SorteringVelger.FiltrerPaTidsintervall" />
          </Detail>
          <RhfRadioGroup
            control={control}
            name="sortering.periodefilter"
            legend={intl.formatMessage({ id: 'SorteringVelger.FilterForPeriode' })}
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
              <div>
                <RhfTextField
                  name="sortering.fra"
                  control={control}
                  className={styles['dato']}
                  label={intl.formatMessage({ id: 'SorteringVelger.Fom' })}
                  validate={[hasValidPosOrNegInteger]}
                />
                {fraVerdi !== undefined && (
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
                  <FormattedMessage id="SorteringVelger.DagerMedBindestrek" />
                ) : (
                  <FormattedMessage id="SorteringVelger.MånedMedBindestrek" />
                )}
              </Detail>
              <div>
                <RhfTextField
                  name="sortering.til"
                  control={control}
                  className={styles['dato']}
                  label={intl.formatMessage({ id: 'SorteringVelger.Tom' })}
                  validate={[hasValidPosOrNegInteger]}
                />
                {tilVerdi !== undefined && (
                  <Detail>
                    {periodefilter === 'RELATIV_PERIODE_DAGER' ? (
                      <DateLabel dateString={finnDato(tilVerdi)} />
                    ) : (
                      <DateLabel dateString={finnDatoMåned(tilVerdi, false)} />
                    )}
                  </Detail>
                )}
              </div>
              <Detail className={styles['dagerMedBindestrek']}>
                {periodefilter === 'RELATIV_PERIODE_DAGER' ? (
                  <FormattedMessage id="SorteringVelger.Dager" />
                ) : (
                  <FormattedMessage id="SorteringVelger.Måneder" />
                )}
              </Detail>
            </HStack>
          )}
          {periodefilter === 'FAST_PERIODE' && (
            <HStack gap="space-16">
              <RhfDatepicker
                name="sortering.fomDato"
                control={control}
                label={intl.formatMessage({ id: 'SorteringVelger.Fom' })}
                validate={[hasValidDate]}
              />
              <Detail>
                <FormattedMessage id="SorteringVelger.Bindestrek" />
              </Detail>
              <RhfDatepicker
                name="sortering.tomDato"
                control={control}
                label={intl.formatMessage({ id: 'SorteringVelger.Tom' })}
                validate={[hasValidDate]}
              />
            </HStack>
          )}
        </VStack>
      </ArrowBox>
    </div>
  );
};

const finnDato = (antallDager: number) => dayjs().add(antallDager, 'd').format();

const finnDatoMåned = (antallMåneder: number, erStartenAvMåned: boolean) => {
  const baseDato = erStartenAvMåned ? dayjs().startOf('month') : dayjs().endOf('month');
  return baseDato.add(antallMåneder, 'month').format();
};
