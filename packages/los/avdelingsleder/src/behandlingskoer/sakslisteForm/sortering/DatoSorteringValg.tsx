import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Detail, HStack, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfDatepicker, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { ArrowBox, DateLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import {
  lagreSakslisteSorteringDynamiskPeriode,
  lagreSakslisteSorteringIntervall,
  lagreSakslisteSorteringTidsintervallDato,
  LosUrl,
} from '../../../data/fplosAvdelingslederApi';
import { useDebounce } from '../useDebounce';

import styles from './sorteringVelger.module.css';

dayjs.extend(customParseFormat);

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
  erDynamiskPeriode: boolean;
}

export const DatoSorteringValg = ({ valgtSakslisteId, valgtAvdelingEnhet, erDynamiskPeriode }: Props) => {
  const queryClient = useQueryClient();
  const intl = useIntl();

  const { mutate: lagreSakslisteSorteringTidsintervallDager } = useMutation({
    mutationFn: (valuesToStore: { fra: number; til: number }) =>
      lagreSakslisteSorteringIntervall(valgtSakslisteId, valuesToStore.fra, valuesToStore.til, valgtAvdelingEnhet),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const { mutate: lagreSakslisteSorteringErDynamiskPeriode } = useMutation({
    mutationFn: () => lagreSakslisteSorteringDynamiskPeriode(valgtSakslisteId, valgtAvdelingEnhet),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      queryClient.invalidateQueries({
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
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  // TODO (TOR) Manglar typing for useFormContext
  const { watch, control } = useFormContext();
  const fraVerdi = watch('fra');
  const tilVerdi = watch('til');
  const fomDatoVerdi = watch('fomDato');
  const tomDatoVerdi = watch('tomDato');

  const lagreFra = (nyFraVerdi: number) =>
    lagreSakslisteSorteringTidsintervallDager({
      fra: nyFraVerdi,
      til: tilVerdi,
    });
  const lagreTil = (nyTilVerdi: number) =>
    lagreSakslisteSorteringTidsintervallDager({
      fra: fraVerdi,
      til: nyTilVerdi,
    });

  const lagreFomDato = getLagreDatoFn(lagreSorteringTidsintervallDato, true, tomDatoVerdi);
  const lagreTomDato = getLagreDatoFn(lagreSorteringTidsintervallDato, false, fomDatoVerdi);

  const lagreFomDatoDebounce = useDebounce('fomDato', lagreFomDato);
  const lagreTomDatoDebounce = useDebounce('tomDato', lagreTomDato);

  return (
    <div className={styles.arrowBoxWidth}>
      <ArrowBox>
        <VStack gap="space-8">
          <Detail>
            <FormattedMessage id="SorteringVelger.FiltrerPaTidsintervall" />
          </Detail>
          {erDynamiskPeriode && (
            <HStack gap="space-16">
              <div>
                <RhfTextField
                  name="fra"
                  control={control}
                  className={styles.dato}
                  label={intl.formatMessage({ id: 'SorteringVelger.Fom' })}
                  validate={[hasValidPosOrNegInteger]}
                  onBlur={value => lagreFra(value)}
                />
                {(fraVerdi || fraVerdi === 0) && (
                  <Detail>
                    <DateLabel dateString={finnDato(fraVerdi)} />
                  </Detail>
                )}
              </div>
              <Detail className={styles.dager}>
                <FormattedMessage id="SorteringVelger.DagerMedBindestrek" />
              </Detail>
              <div>
                <RhfTextField
                  name="til"
                  control={control}
                  className={styles.dato}
                  label={intl.formatMessage({ id: 'SorteringVelger.Tom' })}
                  validate={[hasValidPosOrNegInteger]}
                  onBlur={value => lagreTil(value)}
                />
                {(tilVerdi || tilVerdi === 0) && (
                  <Detail>
                    <DateLabel dateString={finnDato(tilVerdi)} />
                  </Detail>
                )}
              </div>
              <Detail className={styles.dagerMedBindestrek}>
                <FormattedMessage id="SorteringVelger.Dager" />
              </Detail>
            </HStack>
          )}
          {!erDynamiskPeriode && (
            <VStack gap="space-16">
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
            </VStack>
          )}
          <RhfCheckbox
            name="erDynamiskPeriode"
            control={control}
            label={intl.formatMessage({ id: 'SorteringVelger.DynamiskPeriode' })}
            onChange={() => lagreSakslisteSorteringErDynamiskPeriode()}
          />
        </VStack>
      </ArrowBox>
    </div>
  );
};

const finnDato = (antallDager: number) => dayjs().add(antallDager, 'd').format();

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
