import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { HistorikkInnslagOpplysning, Kodeverk, HistorikkinnslagEndretFelt } from '@fpsak-frontend/types';

import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import historikkEndretFeltTypeCodes from '../../kodeverk/historikkEndretFeltTypeCodes';
import BubbleText from './felles/bubbleText';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

const finnFomOpplysning = (opplysninger: HistorikkInnslagOpplysning[]): string => {
  const found = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.PERIODE_FOM.kode);
  return found.tilVerdi;
};

const finnTomOpplysning = (opplysninger: HistorikkInnslagOpplysning[]): string => {
  const found = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.PERIODE_TOM.kode);
  return found.tilVerdi;
};

const buildEndretFeltText = (endredeFelter: HistorikkinnslagEndretFelt[], getKodeverknavn: (kodeverk: Kodeverk) => string): ReactNode => {
  const årsakFelt = endredeFelter.filter((felt) => felt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.FAKTA_OM_FEILUTBETALING_AARSAK.kode)[0];
  const underÅrsakFelt = endredeFelter.filter((felt) => felt.endretFeltNavn.kode === historikkEndretFeltTypeCodes.FAKTA_OM_FEILUTBETALING_UNDERAARSAK.kode)[0];
  const underÅrsakFraVerdi = underÅrsakFelt ? getKodeverknavn({ kode: underÅrsakFelt.fraVerdi as string, kodeverk: underÅrsakFelt.klFraVerdi }) : null;
  const underÅrsakTilVerdi = underÅrsakFelt ? getKodeverknavn({ kode: underÅrsakFelt.tilVerdi as string, kodeverk: underÅrsakFelt.klTilVerdi }) : null;
  const endret = endredeFelter.filter((felt) => felt.fraVerdi !== null).length > 0;

  const tilVerdiNavn = getKodeverknavn({ kode: årsakFelt.tilVerdi as string, kodeverk: årsakFelt.klTilVerdi });
  if (endret) {
    const årsakVerdi = årsakFelt.fraVerdi ? årsakFelt.fraVerdi as string : årsakFelt.tilVerdi as string;
    const årsakNavn = getKodeverknavn({ kode: årsakVerdi, kodeverk: årsakFelt.klFraVerdi });
    const fraVerdi = underÅrsakFraVerdi ? `${årsakNavn} (${underÅrsakFraVerdi})` : årsakNavn;
    const tilVerdi = underÅrsakTilVerdi ? `${tilVerdiNavn} (${underÅrsakTilVerdi})` : tilVerdiNavn;
    return <FormattedMessage id="Historikk.Template.Feilutbetaling.endretFelt" values={{ fraVerdi, tilVerdi, b: (chunks: any) => <b>{chunks}</b> }} />;
  }
  const feltVerdi = underÅrsakTilVerdi ? `${tilVerdiNavn} (${underÅrsakTilVerdi})` : tilVerdiNavn;
  return <FormattedMessage id="Historikk.Template.Feilutbetaling.sattFelt" values={{ feltVerdi, b: (chunks: any) => <b>{chunks}</b> }} />;
};

const HistorikkMalTypeFeilutbetaling: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}) => {
  const { historikkinnslagDeler } = historikkinnslag;
  return (
    <>
      <Skjermlenke
        skjermlenke={historikkinnslagDeler[0].skjermlenke}
        behandlingLocation={behandlingLocation}
        getKodeverknavn={getKodeverknavn}
        scrollUpOnClick
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
      {historikkinnslagDeler.map((historikkinnslagDel, index) => (historikkinnslagDel.endredeFelter ? (
        <div key={`historikkinnslagDel${index + 1}`}>
          <FormattedMessage
            id="Historikk.Template.Feilutbetaling.FaktaFeilutbetalingPeriode"
            values={{
              periodeFom: finnFomOpplysning(historikkinnslagDel.opplysninger),
              periodeTom: finnTomOpplysning(historikkinnslagDel.opplysninger),
              b: (chunks: any) => <b>{chunks}</b>,
            }}
          />
          <Normaltekst>
            { buildEndretFeltText(historikkinnslagDel.endredeFelter, getKodeverknavn) }
          </Normaltekst>
          <VerticalSpacer eightPx />
        </div>
      ) : null))}
      {historikkinnslagDeler[0] && historikkinnslagDeler[0].begrunnelseFritekst && (
        <BubbleText
          bodyText={decodeHtmlEntity(historikkinnslagDeler[0].begrunnelseFritekst)}
        />
      )}
    </>
  );
};

export default HistorikkMalTypeFeilutbetaling;
