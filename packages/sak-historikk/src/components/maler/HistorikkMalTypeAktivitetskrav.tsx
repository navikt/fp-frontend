import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { AvsnittSkiller, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { HistorikkinnslagDel, Kodeverk } from '@fpsak-frontend/types';

import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import BubbleText from './felles/bubbleText';
import HistorikkMal from '../HistorikkMalTsType';

const scrollUp = () => {
  window.scroll(0, 0);
};

const finnFomOpplysning = (opplysninger: HistorikkinnslagDel['opplysninger']): string => {
  const found = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.UTTAK_PERIODE_FOM.kode);
  return found.tilVerdi;
};

const finnTomOpplysning = (opplysninger: HistorikkinnslagDel['opplysninger']): string => {
  const found = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.UTTAK_PERIODE_TOM.kode);
  return found.tilVerdi;
};

const buildEndretFeltText = (historikkinnslagDel: HistorikkinnslagDel, getKodeverknavn: (kodeverk: Kodeverk) => string): ReactNode => {
  const { opplysninger, endredeFelter } = historikkinnslagDel;
  const felt = endredeFelter[0];
  const erEndret = felt.fraVerdi !== null;

  const tilVerdiNavn = getKodeverknavn({ kode: felt.tilVerdi as string, kodeverk: felt.klTilVerdi });
  if (erEndret) {
    const årsakVerdi = felt.fraVerdi ? felt.fraVerdi as string : felt.tilVerdi as string;
    const fraVerdi = `${getKodeverknavn({ kode: årsakVerdi, kodeverk: felt.klFraVerdi })}`;
    return (
      <FormattedMessage
        id="Historikk.Template.Aktivitetskrav.endretFelt"
        values={{
          periodeFom: finnFomOpplysning(opplysninger),
          periodeTom: finnTomOpplysning(opplysninger),
          fraVerdi,
          tilVerdi: tilVerdiNavn,
          b: (chunks) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage
      id="Historikk.Template.Aktivitetskrav.sattFelt"
      values={{
        periodeFom: finnFomOpplysning(opplysninger),
        periodeTom: finnTomOpplysning(opplysninger),
        feltVerdi: tilVerdiNavn,
        b: (chunks) => <b>{chunks}</b>,
      }}
    />
  );
};

const HistorikkMalTypeAktivitetskrav: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}) => {
  const { historikkinnslagDeler } = historikkinnslag;
  return (
    <>
      <Element>
        <NavLink
          to={createLocationForSkjermlenke(behandlingLocation, historikkinnslagDeler[0].skjermlenke.kode)}
          onClick={scrollUp}
        >
          {getKodeverknavn(historikkinnslagDeler[0].skjermlenke)}
        </NavLink>
      </Element>
      {historikkinnslagDeler.map((historikkinnslagDel, index) => (historikkinnslagDel.endredeFelter ? (
        <div key={`historikkinnslagDel${index + 1}`}>
          <VerticalSpacer fourPx />
          <Normaltekst>
            { buildEndretFeltText(historikkinnslagDel, getKodeverknavn) }
          </Normaltekst>
          <VerticalSpacer fourPx />
          <BubbleText
            bodyText={decodeHtmlEntity(historikkinnslagDel.begrunnelseFritekst)}
          />
          {index < historikkinnslagDeler.length - 1 && (
            <>
              <VerticalSpacer fourPx />
              <AvsnittSkiller />
            </>
          )}
        </div>
      ) : null))}
    </>
  );
};

export default HistorikkMalTypeAktivitetskrav;
