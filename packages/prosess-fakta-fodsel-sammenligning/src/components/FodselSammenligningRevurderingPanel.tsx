import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

export const getTermindatoEllerFodselsdato = (isTermin: boolean, originalSoknad?: Soknad, orginalFamiliehendelse?: FamilieHendelse): string => {
  if (!originalSoknad && !orginalFamiliehendelse) {
    return '';
  }

  const famHendelse = orginalFamiliehendelse || { termindato: undefined, avklartBarn: [] };

  if (isTermin) {
    return formatDate(famHendelse.termindato ? famHendelse.termindato : originalSoknad.termindato);
  }

  return formatDate(famHendelse.avklartBarn !== null && famHendelse.avklartBarn.length > 0
    ? famHendelse.avklartBarn[0].fodselsdato : Object.values(originalSoknad.fodselsdatoer)[0]);
};

export const getAntallBarn = (isTermin: boolean, originalSoknad?: Soknad, orginalFamiliehendelse?: FamilieHendelse): number => {
  if (!originalSoknad && !orginalFamiliehendelse) {
    return 0;
  }
  const famHendelse = orginalFamiliehendelse || { termindato: undefined, antallBarnTermin: undefined, avklartBarn: [] };

  if (isTermin) {
    return famHendelse.termindato ? famHendelse.antallBarnTermin : originalSoknad.antallBarn;
  }
  return famHendelse.avklartBarn.length > 0 ? famHendelse.avklartBarn.length : originalSoknad.antallBarn;
};

interface OwnProps {
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  vedtaksDatoSomSvangerskapsuke?: string;
}

/**
 * FodselSammenligningRevurderingPanel
 *
 * Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.
 */
export const FodselSammenligningRevurderingPanel: FunctionComponent<OwnProps> = ({
  vedtaksDatoSomSvangerskapsuke,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
}) => {
  const erTermin = (familiehendelseOriginalBehandling && !!familiehendelseOriginalBehandling.termindato)
  || (!soknadOriginalBehandling || !soknadOriginalBehandling.fodselsdatoer || Object.keys(soknadOriginalBehandling.fodselsdatoer).length === 0);

  const terminOrFodselLabel = erTermin ? 'FodselsammenligningPanel.Termindato' : 'FodselsammenligningPanel.Fodselsdato';
  const terminOrFodselDate = getTermindatoEllerFodselsdato(erTermin, soknadOriginalBehandling, familiehendelseOriginalBehandling);
  const antallBarn = getAntallBarn(erTermin, soknadOriginalBehandling, familiehendelseOriginalBehandling);
  const shouldShowVedtaksdatoAsSvangerskapsuke = !familiehendelseOriginalBehandling
    ? false
    : (!familiehendelseOriginalBehandling.avklartBarn || familiehendelseOriginalBehandling.avklartBarn.length === 0) && !!vedtaksDatoSomSvangerskapsuke;

  return (
    <>
      <Element><FormattedMessage id="FodselsammenligningPanel.Ytelsesvedtak" /></Element>
      <Row>
        {shouldShowVedtaksdatoAsSvangerskapsuke && (
          <Column xs="4">
            <Normaltekst><FormattedMessage id="FodselsammenligningPanel.Vedtaksdato" /></Normaltekst>
          </Column>
        )}
        <Column xs="4"><Normaltekst><FormattedMessage id={terminOrFodselLabel} /></Normaltekst></Column>
        <Column xs="4"><Normaltekst><FormattedMessage id="FodselsammenligningPanel.AntallBarn" /></Normaltekst></Column>
      </Row>
      <Row>
        {shouldShowVedtaksdatoAsSvangerskapsuke && (
          <Column xs="4"><Normaltekst>{vedtaksDatoSomSvangerskapsuke}</Normaltekst></Column>
        )}
        <Column xs="4"><Normaltekst>{terminOrFodselDate}</Normaltekst></Column>
        <Column xs="4"><Normaltekst>{antallBarn}</Normaltekst></Column>
      </Row>
    </>
  );
};

export default FodselSammenligningRevurderingPanel;
