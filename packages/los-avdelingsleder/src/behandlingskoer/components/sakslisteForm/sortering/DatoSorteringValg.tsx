import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Detail } from '@navikt/ds-react';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer, ArrowBox } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { hasValidDate, hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { InputField, CheckboxField, Datepicker } from '@navikt/ft-form-hooks';

import { useFormContext } from 'react-hook-form';
import { restApiHooks, RestApiPathsKeys } from '../../../../data/fplosRestApi';

import useDebounce from '../useDebounce';

import styles from './sorteringVelger.module.css';

dayjs.extend(customParseFormat);

const finnDato = (antallDager: number) => dayjs().add(antallDager, 'd').format();

const getLagreDatoFn =
  (
    lagreSakslisteSorteringTidsintervallDato: (params?: any, keepData?: boolean | undefined) => Promise<unknown>,
    hentAntallOppgaver: (sakslisteId: number, avdelingEnhet: string) => void,
    hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void,
    valgtSakslisteId: number,
    valgtAvdelingEnhet: string,
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
            sakslisteId: valgtSakslisteId,
            avdelingEnhet: valgtAvdelingEnhet,
            fomDato: d,
            tomDato: annenDato,
          }
        : {
            sakslisteId: valgtSakslisteId,
            avdelingEnhet: valgtAvdelingEnhet,
            fomDato: annenDato,
            tomDato: d,
          };

      return lagreSakslisteSorteringTidsintervallDato(params).then(() => {
        hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
        hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
      });
    }
    return undefined;
  };
interface OwnProps {
  valgtSakslisteId: number;
  lagreSakslisteSorteringTidsintervallDager: (params: {
    sakslisteId: number;
    fra: number;
    til: number;
    avdelingEnhet: string;
  }) => Promise<any>;
  valgtAvdelingEnhet: string;
  erDynamiskPeriode: boolean;
  hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void;
  hentAntallOppgaver: (sakslisteId: number, avdelingEnhet: string) => void;
}

const DatoSorteringValg: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
  erDynamiskPeriode,
  lagreSakslisteSorteringTidsintervallDager,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}) => {
  const intl = useIntl();

  const { startRequest: lagreSakslisteSorteringErDynamiskPeriode } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,
  );
  const { startRequest: lagreSakslisteSorteringTidsintervallDato } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,
  );

  const { watch } = useFormContext();
  const fraVerdi = watch('fra');
  const tilVerdi = watch('til');
  const fomDatoVerdi = watch('fomDato');
  const tomDatoVerdi = watch('tomDato');

  const lagreFra = (nyFraVerdi: number) =>
    lagreSakslisteSorteringTidsintervallDager({
      sakslisteId: valgtSakslisteId,
      fra: nyFraVerdi,
      til: tilVerdi,
      avdelingEnhet: valgtAvdelingEnhet,
    }).then(() => {
      hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
      hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
    });
  const lagreTil = (nyTilVerdi: number) =>
    lagreSakslisteSorteringTidsintervallDager({
      sakslisteId: valgtSakslisteId,
      fra: fraVerdi,
      til: nyTilVerdi,
      avdelingEnhet: valgtAvdelingEnhet,
    }).then(() => {
      hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
      hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
    });

  const lagreFomDato = getLagreDatoFn(
    lagreSakslisteSorteringTidsintervallDato,
    hentAntallOppgaver,
    hentAvdelingensSakslister,
    valgtSakslisteId,
    valgtAvdelingEnhet,
    true,
    tomDatoVerdi,
  );
  const lagreTomDato = getLagreDatoFn(
    lagreSakslisteSorteringTidsintervallDato,
    hentAntallOppgaver,
    hentAvdelingensSakslister,
    valgtSakslisteId,
    valgtAvdelingEnhet,
    false,
    fomDatoVerdi,
  );

  const lagreFraDebounce = useDebounce<number>('fra', lagreFra);
  const lagreTilDebounce = useDebounce<number>('til', lagreTil);
  const lagreFomDatoDebounce = useDebounce<string>('fomDato', lagreFomDato);
  const lagreTomDatoDebounce = useDebounce<string>('tomDato', lagreTomDato);

  return (
    <>
      <VerticalSpacer eightPx />
      <div className={styles.arrowBoxWidth}>
        <ArrowBox>
          <Detail size="small">
            <FormattedMessage id="SorteringVelger.FiltrerPaTidsintervall" />
          </Detail>

          {erDynamiskPeriode && (
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <InputField
                    name="fra"
                    className={styles.dato}
                    label={intl.formatMessage({ id: 'SorteringVelger.Fom' })}
                    validate={[hasValidPosOrNegInteger]}
                    onChange={lagreFraDebounce}
                  />
                  {(fraVerdi || fraVerdi === 0) && (
                    <Detail size="small">
                      <DateLabel dateString={finnDato(fraVerdi)} />
                    </Detail>
                  )}
                </FlexColumn>
                <FlexColumn>
                  <Detail size="small" className={styles.dager}>
                    <FormattedMessage id="SorteringVelger.DagerMedBindestrek" />
                  </Detail>
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="til"
                    className={styles.dato}
                    label={intl.formatMessage({ id: 'SorteringVelger.Tom' })}
                    validate={[hasValidPosOrNegInteger]}
                    onChange={lagreTilDebounce}
                  />
                  {(tilVerdi || tilVerdi === 0) && (
                    <Detail size="small">
                      <DateLabel dateString={finnDato(tilVerdi)} />
                    </Detail>
                  )}
                </FlexColumn>
                <FlexColumn>
                  <Detail size="small" className={styles.dagerMedBindestrek}>
                    <FormattedMessage id="SorteringVelger.Dager" />
                  </Detail>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          )}
          {!erDynamiskPeriode && (
            <>
              <VerticalSpacer sixteenPx />
              <Datepicker
                name="fomDato"
                label={intl.formatMessage({ id: 'SorteringVelger.Fom' })}
                validate={[hasValidDate]}
                onChange={lagreFomDatoDebounce}
              />
              <VerticalSpacer fourPx />
              <Detail size="small">
                <FormattedMessage id="SorteringVelger.Bindestrek" />
              </Detail>
              <VerticalSpacer fourPx />
              <Datepicker
                name="tomDato"
                label={intl.formatMessage({ id: 'SorteringVelger.Tom' })}
                validate={[hasValidDate]}
                onChange={lagreTomDatoDebounce}
              />
              <VerticalSpacer eightPx />
            </>
          )}
          <VerticalSpacer eightPx />
          <CheckboxField
            name="erDynamiskPeriode"
            label={intl.formatMessage({ id: 'SorteringVelger.DynamiskPeriode' })}
            onChange={() =>
              lagreSakslisteSorteringErDynamiskPeriode({
                sakslisteId: valgtSakslisteId,
                avdelingEnhet: valgtAvdelingEnhet,
              }).then(() => {
                hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
                hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
              })
            }
          />
          <VerticalSpacer eightPx />
        </ArrowBox>
      </div>
    </>
  );
};

export default DatoSorteringValg;
