import React, { FunctionComponent, useMemo } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Label, BodyShort } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Soknad } from '@fpsak-frontend/types';

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
      <Label size="small">
        <FormattedMessage id={terminFodselHeader} />
      </Label>
      <Row>
        {soknad.utstedtdato
          && (
          <Column xs="4">
            <Label size="small"><FormattedMessage id="FodselsammenligningPanel.UstedtDato" /></Label>
          </Column>
          )}
        <Column xs="4"><Label size="small"><FormattedMessage id={terminOrFodselLabel} /></Label></Column>
        <Column xs="4"><Label size="small"><FormattedMessage id="FodselsammenligningPanel.AntallBarn" /></Label></Column>
      </Row>
      <Row>
        {soknad.utstedtdato
          && (
          <Column xs="4">
            <BodyShort size="small">{formatDate(soknad.utstedtdato)}</BodyShort>
          </Column>
          )}
        <Column xs="4"><BodyShort size="small">{terminOrFodselDate}</BodyShort></Column>
        <Column xs="4"><BodyShort size="small">{soknad.antallBarn}</BodyShort></Column>
      </Row>
    </>
  );
};

export default FodselSammenligningOtherPanel;
