import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { HistorikkinnslagEndretFelt } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import historikkEndretFeltType from '../../kodeverk/historikkEndretFeltType';
import HistorikkMal from '../HistorikkMalTsType';
import Skjermlenke from './felles/Skjermlenke';

const lagBegrunnelseKomponent = (
  felt: HistorikkinnslagEndretFelt,
  index: number,
  endredeFelter: HistorikkinnslagEndretFelt[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  begrunnelse?: string,
  sarligGrunnerBegrunnelse?: string,
  begrunnelseFritekst?: string,
) => {
  const { endretFeltNavn, fraVerdi, tilVerdi } = felt;

  const visProsentverdi = historikkEndretFeltType.ANDEL_TILBAKEKREVES === endretFeltNavn;
  const visBegrunnelse = historikkEndretFeltType.ER_VILKARENE_TILBAKEKREVING_OPPFYLT === endretFeltNavn;
  const formatertFraVerdi = visProsentverdi && fraVerdi ? `${fraVerdi}%` : fraVerdi;
  const formatertTilVerdi = visProsentverdi && tilVerdi ? `${tilVerdi}%` : tilVerdi;
  const visAktsomhetBegrunnelse = begrunnelseFritekst && index === endredeFelter.length - 1;
  const visSarligGrunnerBegrunnelse = sarligGrunnerBegrunnelse && index === endredeFelter.length - 1;

  return (
    <React.Fragment key={endretFeltNavn}>
      {visBegrunnelse && begrunnelse}
      {visBegrunnelse && <VerticalSpacer eightPx />}
      {visAktsomhetBegrunnelse && decodeHtmlEntity(begrunnelseFritekst)}
      {visAktsomhetBegrunnelse && <VerticalSpacer eightPx />}
      <BodyShort size="small">
        <FormattedMessage
          id={
            felt.fraVerdi
              ? 'Historikk.Template.Tilbakekreving.ChangedFromTo'
              : 'Historikk.Template.Tilbakekreving.FieldSetTo'
          }
          values={{
            navn: getKodeverknavn(endretFeltNavn, KodeverkType.HISTORIKK_ENDRET_FELT_TYPE),
            fraVerdi: formatertFraVerdi,
            tilVerdi: formatertTilVerdi,
            b: (chunks: any) => <b>{chunks}</b>,
          }}
        />
      </BodyShort>
      <VerticalSpacer eightPx />
      {visSarligGrunnerBegrunnelse && sarligGrunnerBegrunnelse}
      {visSarligGrunnerBegrunnelse && <VerticalSpacer eightPx />}
    </React.Fragment>
  );
};

const HistorikkMalTypeTilbakekreving: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}) => {
  const { historikkinnslagDeler } = historikkinnslag;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  if (historikkinnslagDeler.length === 0) {
    return null;
  }
  return (
    <>
      <Skjermlenke
        skjermlenke={historikkinnslagDeler[0].skjermlenke}
        behandlingLocation={behandlingLocation}
        getKodeverknavn={getKodeverknavn}
        scrollUpOnClick
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
      {historikkinnslagDeler.map(historikkinnslagDel => {
        const { opplysninger, endredeFelter, begrunnelseFritekst } = historikkinnslagDel;
        const periodeFom = opplysninger.find(
          o => o.opplysningType === historikkOpplysningTypeCodes.PERIODE_FOM.kode,
        )?.tilVerdi;
        const periodeTom = opplysninger.find(
          o => o.opplysningType === historikkOpplysningTypeCodes.PERIODE_TOM.kode,
        )?.tilVerdi;
        const begrunnelse = decodeHtmlEntity(
          opplysninger.find(
            o => o.opplysningType === historikkOpplysningTypeCodes.TILBAKEKREVING_OPPFYLT_BEGRUNNELSE.kode,
          )?.tilVerdi,
        );
        const sarligGrunnerBegrunnelseFelt = opplysninger.find(
          o => o.opplysningType === historikkOpplysningTypeCodes.SÆRLIG_GRUNNER_BEGRUNNELSE.kode,
        );
        const sarligGrunnerBegrunnelse =
          sarligGrunnerBegrunnelseFelt !== undefined
            ? decodeHtmlEntity(sarligGrunnerBegrunnelseFelt.tilVerdi)
            : undefined;

        return (
          <div key={`${periodeFom}-${periodeTom}`}>
            <BodyShort size="small">
              <FormattedMessage
                id="Historikk.Template.Tilbakekreving.VurderingAvPerioden"
                values={{
                  periodeFom: periodeFom || '',
                  periodeTom: periodeTom || '',
                  b: bTag,
                }}
              />
            </BodyShort>
            <VerticalSpacer eightPx />
            {endredeFelter &&
              endredeFelter.map((felt, index) => {
                const { endretFeltNavn, tilVerdi } = felt;

                const visBelopTilbakekreves = historikkEndretFeltType.BELOEP_TILBAKEKREVES === endretFeltNavn;
                const visProsentverdi = historikkEndretFeltType.ANDEL_TILBAKEKREVES === endretFeltNavn;
                const visIleggRenter = historikkEndretFeltType.ILEGG_RENTER === endretFeltNavn;
                if ((visBelopTilbakekreves || visProsentverdi || visIleggRenter) && !tilVerdi) {
                  return null;
                }

                return lagBegrunnelseKomponent(
                  felt,
                  index,
                  endredeFelter,
                  getKodeverknavn,
                  begrunnelse,
                  sarligGrunnerBegrunnelse,
                  begrunnelseFritekst,
                );
              })}
            <BodyShort size="small">{!endredeFelter && begrunnelseFritekst && begrunnelseFritekst}</BodyShort>
            <VerticalSpacer eightPx />
          </div>
        );
      })}
    </>
  );
};

export default HistorikkMalTypeTilbakekreving;
