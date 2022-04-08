import React, { FunctionComponent, ReactNode } from 'react';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { HistorikkinnslagDel, HistorikkinnslagEndretFelt } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import historikkEndretFeltTypeCodes from '../../kodeverk/historikkEndretFeltTypeCodes';
import historikkEndretFeltTypeHeadingCodes from '../../kodeverk/historikkEndretFeltTypeHeadingCodes';
import {
  findEndretFeltNavn,
  findEndretFeltVerdi,
  findHendelseText,
  findIdForOpplysningCode,
  findIdForSoeknadsperiodeCode,
  findResultatText,
} from './felles/historikkUtils';
import HistorikkDokumentLenke from './felles/HistorikkDokumentLenke';
import BubbleText from './felles/bubbleText';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

function isGjeldendeFraUtenEndredeFelter(historikkinnslagDel: HistorikkinnslagDel): boolean {
  return (!!historikkinnslagDel.gjeldendeFra && !historikkinnslagDel.endredeFelter);
}

const lagGjeldendeFraInnslag = (historikkinnslagDel: HistorikkinnslagDel): ReactNode => {
  if (!historikkinnslagDel.gjeldendeFra) {
    return undefined;
  }
  if (historikkinnslagDel.gjeldendeFra && historikkinnslagDel.gjeldendeFra.navn) {
    return (
      <>
        <FormattedMessage
          id={historikkEndretFeltTypeCodes[historikkinnslagDel.gjeldendeFra.navn].feltId}
          values={{ value: historikkinnslagDel.gjeldendeFra.verdi, b: (chunks: any) => <b>{chunks}</b>, br: <br /> }}
        />
        {historikkinnslagDel.gjeldendeFra.fra && (
          <FormattedMessage
            id="Historikk.Template.5.VerdiGjeldendeFra"
            values={{ dato: historikkinnslagDel.gjeldendeFra.fra, b: (chunks: any) => <b>{chunks}</b> }}
          />
        )}
        {isGjeldendeFraUtenEndredeFelter(historikkinnslagDel) && (
          <FormattedMessage
            id="Historikk.Template.5.IngenEndring"
          />
        )}
      </>
    );
  }
  if (historikkinnslagDel.gjeldendeFra && !historikkinnslagDel.gjeldendeFra.navn) {
    return (
      <>
        <FormattedMessage
          id="Historikk.Template.5.GjeldendeFra"
          values={{ dato: historikkinnslagDel.gjeldendeFra.fra, b: (chunks: any) => <b>{chunks}</b> }}
        />
        {isGjeldendeFraUtenEndredeFelter(historikkinnslagDel) && (
          <FormattedMessage
            id="Historikk.Template.5.IngenEndring"
          />
        )}
      </>
    );
  }
  return undefined;
};

const lageElementInnhold = (
  historikkDel: HistorikkinnslagDel,
  intl: IntlShape,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): string[] => {
  const list = [] as string[];
  if (historikkDel.hendelse) {
    const tekst = findHendelseText(historikkDel.hendelse, getKodeverknavn);
    if (tekst) {
      list.push(tekst);
    }
  }
  if (historikkDel.resultat) {
    const tekst = findResultatText(historikkDel.resultat, intl);
    if (tekst) {
      list.push(tekst);
    }
  }
  return list;
};

const formatChangedField = (endretFelt: HistorikkinnslagEndretFelt, intl: IntlShape): ReactNode => {
  const fieldName = findEndretFeltNavn(endretFelt, intl);
  const fromValue = findEndretFeltVerdi(endretFelt, endretFelt.fraVerdi, intl);
  const toValue = findEndretFeltVerdi(endretFelt, endretFelt.tilVerdi, intl);

  if (endretFelt.fraVerdi !== null && endretFelt.endretFeltNavn !== historikkEndretFeltTypeCodes.FORDELING_FOR_NY_ANDEL.kode) {
    return (
      <FormattedMessage
        id="Historikk.Template.5.ChangedFromTo"
        values={{
          fieldName,
          fromValue,
          toValue,
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage
      id="Historikk.Template.5.FieldSetTo"
      values={{
        fieldName,
        value: toValue,
        b: (chunks: any) => <b>{chunks}</b>,
      }}
    />
  );
};

const lagTemaHeadingId = (historikkinnslagDel: HistorikkinnslagDel): ReactNode => {
  const { tema } = historikkinnslagDel;
  if (tema) {
    const heading = historikkEndretFeltTypeHeadingCodes[tema.endretFeltNavn];
    if (heading && tema.navnVerdi) {
      return <FormattedMessage id={heading.feltId} values={{ value: tema.navnVerdi, b: (chunks: any) => <b>{chunks}</b>, br: <br /> }} />;
    }
  }
  return undefined;
};

const lagSoeknadsperiode = (soeknadsperiode?: HistorikkinnslagDel['soeknadsperiode']): ReactNode => (soeknadsperiode?.navnVerdi
  ? (
    <FormattedMessage
      id={findIdForSoeknadsperiodeCode(soeknadsperiode)}
      values={{
        navnVerdi: soeknadsperiode.navnVerdi,
        value: soeknadsperiode.tilVerdi,
        b: (chunks: any) => <b>{chunks}</b>,
        br: <br />,
      }}
    />
  )
  : (
    <FormattedMessage
      id={findIdForSoeknadsperiodeCode(soeknadsperiode)}
      values={{ value: soeknadsperiode ? soeknadsperiode.tilVerdi : '', b: (chunks: any) => <b>{chunks}</b>, br: <br /> }}
    />
  ));

const HistorikkMalType5: FunctionComponent<HistorikkMal & WrappedComponentProps> = ({
  intl,
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  saksnummer,
}) => (
  <>
    {historikkinnslag.historikkinnslagDeler.map((historikkinnslagDel, historikkinnslagDelIndex) => (
      <div key={
        `historikkinnslagDel${historikkinnslagDelIndex}` // eslint-disable-line react/no-array-index-key
      }
      >
        <Skjermlenke
          skjermlenke={historikkinnslagDel.skjermlenke}
          behandlingLocation={behandlingLocation}
          getKodeverknavn={getKodeverknavn}
          scrollUpOnClick
          createLocationForSkjermlenke={createLocationForSkjermlenke}
        />

        {lageElementInnhold(historikkinnslagDel, intl, getKodeverknavn).map((tekst) => (
          <div key={tekst}><Element>{tekst}</Element></div>
        ))}

        {lagGjeldendeFraInnslag(historikkinnslagDel)}

        {historikkinnslagDel.soeknadsperiode && lagSoeknadsperiode(historikkinnslagDel.soeknadsperiode)}

        {lagTemaHeadingId(historikkinnslagDel)}

        {historikkinnslagDel.endredeFelter && historikkinnslagDel.endredeFelter.map((endretFelt, i) => (
          <div key={`endredeFelter${i + 1}`}>
            {formatChangedField(endretFelt, intl)}
          </div>
        ))}

        {historikkinnslagDel.opplysninger && historikkinnslagDel.opplysninger.map((opplysning) => (
          <FormattedMessage
            id={findIdForOpplysningCode(opplysning)}
            values={{ antallBarn: opplysning.tilVerdi, b: (chunks: any) => <b>{chunks}</b>, br: <br /> }}
            key={`${getKodeverknavn(opplysning.opplysningType, KodeverkType.HISTORIKK_OPPLYSNING_TYPE)}@${opplysning.tilVerdi}`}
          />
        ))}

        {historikkinnslagDel.årsaktekst && <Normaltekst>{historikkinnslagDel.årsaktekst}</Normaltekst>}
        {historikkinnslagDel.begrunnelsetekst && <BubbleText bodyText={historikkinnslagDel.begrunnelsetekst} />}
        {historikkinnslagDel.begrunnelseFritekst && <BubbleText bodyText={historikkinnslagDel.begrunnelseFritekst} />}
        {historikkinnslag.dokumentLinks && historikkinnslag.dokumentLinks.map((dokumentLenke) => (
          <HistorikkDokumentLenke
            key={`${dokumentLenke.tag}@${dokumentLenke.url}`}
            dokumentLenke={dokumentLenke}
            saksnummer={saksnummer}
          />
        ))}

        {historikkinnslagDelIndex < historikkinnslag.historikkinnslagDeler.length - 1 && <VerticalSpacer sixteenPx />}
      </div>
    ))}
  </>
);

export default injectIntl(HistorikkMalType5);
