import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Heading } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { FamilieHendelse, Soknad } from '@navikt/fp-types';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import styles from './fodselSammenligningOtherPanel.less';

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const getTermindatoEllerFodselsdato = (
  isTermin: boolean,
  originalSoknad?: Soknad,
  orginalFamiliehendelse?: FamilieHendelse,
): string => {
  if (!originalSoknad && !orginalFamiliehendelse) {
    return '';
  }

  const famHendelse = orginalFamiliehendelse || { termindato: undefined, avklartBarn: [] };

  if (isTermin) {
    return formatDate(famHendelse.termindato ? famHendelse.termindato : originalSoknad.termindato);
  }

  return formatDate(famHendelse.avklartBarn?.length > 0
    ? famHendelse.avklartBarn[0].fodselsdato : Object.values(originalSoknad.fodselsdatoer)[0]);
};

const getAntallBarn = (
  isTermin: boolean,
  originalSoknad?: Soknad,
  orginalFamiliehendelse?: FamilieHendelse,
): number => {
  if (!originalSoknad && !orginalFamiliehendelse) {
    return 0;
  }
  const famHendelse = orginalFamiliehendelse || { termindato: undefined, antallBarnTermin: undefined, avklartBarn: [] };

  if (isTermin) {
    return famHendelse.termindato ? famHendelse.antallBarnTermin : originalSoknad.antallBarn;
  }
  return famHendelse.avklartBarn?.length > 0 ? famHendelse.avklartBarn.length : originalSoknad.antallBarn;
};

interface OwnProps {
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  vedtaksDatoSomSvangerskapsuke?: number;
}

/**
 * FodselSammenligningRevurderingPanel
 *
 * Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.
 */
const FodselSammenligningRevurderingPanel: FunctionComponent<OwnProps> = ({
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
      <Heading size="small"><FormattedMessage id="FodselsammenligningPanel.Ytelsesvedtak" /></Heading>
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          {shouldShowVedtaksdatoAsSvangerskapsuke && (
            <FlexColumn className={styles.colMargin}>
              <Label size="small"><FormattedMessage id="FodselsammenligningPanel.FodtISvangerskapsuke" /></Label>
              <BodyShort size="small">{vedtaksDatoSomSvangerskapsuke}</BodyShort>
            </FlexColumn>
          )}
          <FlexColumn className={styles.colMargin}>
            <Label size="small"><FormattedMessage id={terminOrFodselLabel} /></Label>
            <BodyShort size="small">{terminOrFodselDate}</BodyShort>
          </FlexColumn>
          <FlexColumn>
            <Label size="small"><FormattedMessage id="FodselsammenligningPanel.AntallBarn" /></Label>
            <BodyShort size="small">{antallBarn}</BodyShort>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </>
  );
};

export default FodselSammenligningRevurderingPanel;
