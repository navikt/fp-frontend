/* eslint-disable @typescript-eslint/no-unsafe-argument -- [JOHANNES] vent på typet form */

import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Detail, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { ArrowBox, DateLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import {
  lagreSakslisteSorteringIntervall,
  lagreSakslisteSorteringTidsintervallDato,
  LosUrl,
} from '../../../data/fplosAvdelingslederApi';
import { type Periodefilter } from '../../../typer/sakslisteAvdelingTsType';
import { useDebounce } from '../useDebounce';

import styles from './sorteringVelger.module.css';

dayjs.extend(customParseFormat);

export type FormValues = {
  fra?: string;
  til?: string;
  fomDato?: string;
  tomDato?: string;
  periodefilter: Periodefilter;
};

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
  periodefilter: Periodefilter;
}

export const DatoSorteringValg = ({ valgtSakslisteId, valgtAvdelingEnhet, periodefilter }: Props) => {
  const queryClient = useQueryClient();
  const intl = useIntl();

  const { mutate: lagreSakslisteSorteringRelativPeriode } = useMutation({
    mutationFn: (valuesToStore: { fra: string | undefined; til: string | undefined; periodefilter: Periodefilter }) =>
      lagreSakslisteSorteringIntervall(
        valgtSakslisteId,
        valuesToStore.fra,
        valuesToStore.til,
        valgtAvdelingEnhet,
        valuesToStore.periodefilter,
      ),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const { mutate: lagreSorteringTidsintervallDato } = useMutation({
    mutationFn: (valuesToStore: { fomDato?: string; tomDato?: string }) =>
      lagreSakslisteSorteringTidsintervallDato(
        valgtSakslisteId,
        valgtAvdelingEnhet,
        valuesToStore.fomDato,
        valuesToStore.tomDato,
      ),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const { watch, control } = useFormContext<FormValues>();
  const fraVerdi = watch('fra');
  const tilVerdi = watch('til');
  const fomDatoVerdi = watch('fomDato');
  const tomDatoVerdi = watch('tomDato');

  const lagreFra = (nyFraVerdi: string) =>
    lagreSakslisteSorteringRelativPeriode({
      fra: nyFraVerdi,
      til: tilVerdi,
      periodefilter: periodefilter,
    });
  const lagreTil = (nyTilVerdi: string) =>
    lagreSakslisteSorteringRelativPeriode({
      fra: fraVerdi,
      til: nyTilVerdi,
      periodefilter: periodefilter,
    });

  const lagreFomDato = getLagreDatoFn(lagreSorteringTidsintervallDato, true, tomDatoVerdi);
  const lagreTomDato = getLagreDatoFn(lagreSorteringTidsintervallDato, false, fomDatoVerdi);

  const lagreFomDatoDebounce = useDebounce('fomDato', lagreFomDato);
  const lagreTomDatoDebounce = useDebounce('tomDato', lagreTomDato);

  return (
    <div className={styles['arrowBoxWidth']}>
      <ArrowBox>
        <VStack gap="space-8">
          <Detail>
            <FormattedMessage id="SorteringVelger.FiltrerPaTidsintervall" />
          </Detail>
          <RhfRadioGroup
            control={control}
            name="periodefilter"
            legend={intl.formatMessage({ id: 'SorteringVelger.FilterForPeriode' })}
            onChange={value => {
              if (value === ('FAST_PERIODE' satisfies Periodefilter)) {
                lagreSorteringTidsintervallDato({
                  fomDato: fomDatoVerdi,
                  tomDato: tomDatoVerdi,
                });
              } else {
                lagreSakslisteSorteringRelativPeriode({
                  fra: fraVerdi,
                  til: tilVerdi,
                  periodefilter: value as Periodefilter,
                });
              }
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
              <div>
                <RhfTextField
                  name="fra"
                  control={control}
                  className={styles['dato']}
                  label={intl.formatMessage({ id: 'SorteringVelger.Fom' })}
                  validate={[hasValidPosOrNegInteger]}
                  onBlur={value => lagreFra(value)}
                />
                {(fraVerdi || fraVerdi === '0') && (
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
                  name="til"
                  control={control}
                  className={styles['dato']}
                  label={intl.formatMessage({ id: 'SorteringVelger.Tom' })}
                  validate={[hasValidPosOrNegInteger]}
                  onBlur={value => lagreTil(value)}
                />
                {(tilVerdi || tilVerdi === '0') && (
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
                name="fomDato"
                control={control}
                label={intl.formatMessage({ id: 'SorteringVelger.Fom' })}
                validate={[hasValidDate]}
                onChange={lagreFomDatoDebounce}
              />
              <Detail>
                <FormattedMessage id="SorteringVelger.Bindestrek" />
              </Detail>
              <RhfDatepicker
                name="tomDato"
                control={control}
                label={intl.formatMessage({ id: 'SorteringVelger.Tom' })}
                validate={[hasValidDate]}
                onChange={lagreTomDatoDebounce}
              />
            </HStack>
          )}
        </VStack>
      </ArrowBox>
    </div>
  );
};

const finnDato = (antallDager: string) => dayjs().add(Number(antallDager), 'd').format();

const finnDatoMåned = (antallMåneder: string, erStartenAvMåned: boolean) => {
  const baseDato = erStartenAvMåned ? dayjs().startOf('month') : dayjs().endOf('month');
  return baseDato.add(Number(antallMåneder), 'month').format();
};

const getLagreDatoFn =
  (
    lagreSorteringTidsintervallDato: (valuesToStore: { fomDato?: string; tomDato?: string }) => void,
    erFomDato: boolean,
    annenDato?: string,
  ) =>
  (inputdato: string) => {
    let dato;
    if (inputdato) {
      dato = dayjs(inputdato);
    }
    if (!dato || dato.isValid()) {
      const d = dato ? dato.format(ISO_DATE_FORMAT) : dato;

      const params = erFomDato
        ? {
            fomDato: d,
            tomDato: annenDato,
          }
        : {
            fomDato: annenDato,
            tomDato: d,
          };

      return lagreSorteringTidsintervallDato(params);
    }
    return undefined;
  };
