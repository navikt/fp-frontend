import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { HistorikkInnslagOpplysning, HistorikkinnslagEndretFelt } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import historikkEndretFeltTypeCodes from '../../kodeverk/historikkEndretFeltTypeCodes';
import BubbleText from './felles/bubbleText';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

// @ts-ignore
const finnKodeverkType = (kodeverk: string): KodeverkType => KodeverkType[kodeverk];

const finnFomOpplysning = (opplysninger: HistorikkInnslagOpplysning[]): string => {
  const found = opplysninger.find(o => o.opplysningType === historikkOpplysningTypeCodes.PERIODE_FOM.kode);
  return found?.tilVerdi ? found.tilVerdi : '';
};

const finnTomOpplysning = (opplysninger: HistorikkInnslagOpplysning[]): string => {
  const found = opplysninger.find(o => o.opplysningType === historikkOpplysningTypeCodes.PERIODE_TOM.kode);
  return found?.tilVerdi ? found.tilVerdi : '';
};

const buildEndretFeltText = (
  endredeFelter: HistorikkinnslagEndretFelt[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): ReactNode => {
  const årsakFelt = endredeFelter.filter(
    felt => felt.endretFeltNavn === historikkEndretFeltTypeCodes.FAKTA_OM_FEILUTBETALING_AARSAK.kode,
  )[0];
  const underÅrsakFelt = endredeFelter.filter(
    felt => felt.endretFeltNavn === historikkEndretFeltTypeCodes.FAKTA_OM_FEILUTBETALING_UNDERAARSAK.kode,
  )[0];
  const underÅrsakFraVerdi = underÅrsakFelt?.klFraVerdi
    ? getKodeverknavn(underÅrsakFelt.fraVerdi as string, finnKodeverkType(underÅrsakFelt.klFraVerdi))
    : null;
  const underÅrsakTilVerdi = underÅrsakFelt?.klTilVerdi
    ? getKodeverknavn(underÅrsakFelt.tilVerdi as string, finnKodeverkType(underÅrsakFelt.klTilVerdi))
    : null;
  const endret = endredeFelter.filter(felt => felt.fraVerdi !== null).length > 0;

  const tilVerdiNavn = årsakFelt?.klTilVerdi
    ? getKodeverknavn(årsakFelt.tilVerdi as string, finnKodeverkType(årsakFelt.klTilVerdi))
    : '';
  if (endret) {
    const årsakVerdi = årsakFelt.fraVerdi ? (årsakFelt.fraVerdi as string) : (årsakFelt.tilVerdi as string);
    const årsakNavn = årsakFelt?.klFraVerdi ? getKodeverknavn(årsakVerdi, finnKodeverkType(årsakFelt.klFraVerdi)) : '';
    const fraVerdi = underÅrsakFraVerdi ? `${årsakNavn} (${underÅrsakFraVerdi})` : årsakNavn;
    const tilVerdi = underÅrsakTilVerdi ? `${tilVerdiNavn} (${underÅrsakTilVerdi})` : tilVerdiNavn;
    return (
      <FormattedMessage
        id="Historikk.Template.Feilutbetaling.endretFelt"
        values={{ fraVerdi, tilVerdi, b: (chunks: any) => <b>{chunks}</b> }}
      />
    );
  }
  const feltVerdi = underÅrsakTilVerdi ? `${tilVerdiNavn} (${underÅrsakTilVerdi})` : tilVerdiNavn;
  return (
    <FormattedMessage
      id="Historikk.Template.Feilutbetaling.sattFelt"
      values={{ feltVerdi, b: (chunks: any) => <b>{chunks}</b> }}
    />
  );
};

const HistorikkMalTypeFeilutbetaling: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}) => {
  const { historikkinnslagDeler } = historikkinnslag;
  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <>
      <Skjermlenke
        skjermlenke={historikkinnslagDeler[0].skjermlenke}
        behandlingLocation={behandlingLocation}
        getKodeverknavn={getKodeverknavn}
        scrollUpOnClick
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
      {historikkinnslagDeler.map((historikkinnslagDel, index) =>
        historikkinnslagDel.endredeFelter ? (
          <div key={`historikkinnslagDel${index + 1}`}>
            <FormattedMessage
              id="Historikk.Template.Feilutbetaling.FaktaFeilutbetalingPeriode"
              values={{
                periodeFom: finnFomOpplysning(historikkinnslagDel.opplysninger),
                periodeTom: finnTomOpplysning(historikkinnslagDel.opplysninger),
                b: bTag,
              }}
            />
            <BodyShort size="small">
              {buildEndretFeltText(historikkinnslagDel.endredeFelter, getKodeverknavn)}
            </BodyShort>
            <VerticalSpacer eightPx />
          </div>
        ) : null,
      )}
      {historikkinnslagDeler[0] && historikkinnslagDeler[0].begrunnelseFritekst && (
        <BubbleText bodyText={decodeHtmlEntity(historikkinnslagDeler[0].begrunnelseFritekst)} />
      )}
    </>
  );
};

export default HistorikkMalTypeFeilutbetaling;
