import React, { FunctionComponent, useMemo } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Heading } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Soknad } from '@navikt/fp-types';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import styles from './fodselSammenligningOtherPanel.module.css';

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

interface OwnProps {
  soknad: Soknad;
  termindato: string;
}

export const getTerminEllerFodselsdato = (
  hasSoknad: boolean,
  fødselsdatoerSoknad: {[key: number]: string},
  termindatoSoknad?: string,
  termindato?: string,
): string | null => {
  if (hasSoknad && Object.keys(fødselsdatoerSoknad).length > 0) {
    return formatDate(Object.values(fødselsdatoerSoknad)[0]);
  }
  if (termindato) {
    return formatDate(termindato);
  }
  if (!hasSoknad) {
    return null;
  }
  return formatDate(termindatoSoknad);
};

/**
 * FodselSammenligningOtherPanel
 *
 * Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.
 */
const FodselSammenligningOtherPanel: FunctionComponent<OwnProps> = ({
  soknad,
  termindato,
}) => {
  const soknadFodselsdatoer = soknad.fodselsdatoer ? soknad.fodselsdatoer : {};

  const terminOrFodselLabel = Object.keys(soknadFodselsdatoer).length > 0 ? 'FodselsammenligningPanel.Fodselsdato' : 'FodselsammenligningPanel.Termindato';
  const terminFodselHeader = Object.keys(soknadFodselsdatoer).length > 0 ? 'FodselSammenligningOtherPanel.OpplysningerISoknad'
    : 'FodselSammenligningOtherPanel.TerminISoknad';

  const terminOrFodselDate = useMemo(() => getTerminEllerFodselsdato(!!soknad, soknadFodselsdatoer, soknad.termindato, termindato),
    [soknad, soknadFodselsdatoer, termindato]);

  return (
    <>
      <Heading size="small">
        <FormattedMessage id={terminFodselHeader} />
      </Heading>
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          {soknad.utstedtdato && (
            <FlexColumn className={styles.colMargin}>
              <Label size="small"><FormattedMessage id="FodselsammenligningPanel.UstedtDato" /></Label>
              <BodyShort size="small">{formatDate(soknad.utstedtdato)}</BodyShort>
            </FlexColumn>
          )}
          <FlexColumn className={styles.colMargin}>
            <Label size="small"><FormattedMessage id={terminOrFodselLabel} /></Label>
            <BodyShort size="small">{terminOrFodselDate}</BodyShort>
          </FlexColumn>
          <FlexColumn>
            <Label size="small"><FormattedMessage id="FodselsammenligningPanel.AntallBarn" /></Label>
            <BodyShort size="small">{soknad.antallBarn}</BodyShort>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </>
  );
};

export default FodselSammenligningOtherPanel;
