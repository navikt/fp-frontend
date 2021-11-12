import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { HistorikkinnslagEndretFelt, Kodeverk } from '@fpsak-frontend/types';

import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import historikkEndretFeltType from '../../kodeverk/historikkEndretFeltType';
import HistorikkMal from '../HistorikkMalTsType';
import Skjermlenke from './felles/Skjermlenke';

const lagBegrunnelseKomponent = (
  felt: HistorikkinnslagEndretFelt,
  index: number,
  endredeFelter: HistorikkinnslagEndretFelt[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  begrunnelse?: string,
  sarligGrunnerBegrunnelse?: string,
  begrunnelseFritekst?: string,
) => {
  const { endretFeltNavn, fraVerdi, tilVerdi } = felt;

  const visProsentverdi = historikkEndretFeltType.ANDEL_TILBAKEKREVES === endretFeltNavn.kode;
  const visBegrunnelse = historikkEndretFeltType.ER_VILKARENE_TILBAKEKREVING_OPPFYLT === endretFeltNavn.kode;
  const formatertFraVerdi = visProsentverdi && fraVerdi ? `${fraVerdi}%` : fraVerdi;
  const formatertTilVerdi = visProsentverdi && tilVerdi ? `${tilVerdi}%` : tilVerdi;
  const visAktsomhetBegrunnelse = begrunnelseFritekst && index === endredeFelter.length - 1;
  const visSarligGrunnerBegrunnelse = sarligGrunnerBegrunnelse && index === endredeFelter.length - 1;

  return (
    <React.Fragment key={endretFeltNavn.kode}>
      {visBegrunnelse && begrunnelse}
      {visBegrunnelse && <VerticalSpacer eightPx />}
      {visAktsomhetBegrunnelse && decodeHtmlEntity(begrunnelseFritekst)}
      {visAktsomhetBegrunnelse && <VerticalSpacer eightPx />}
      <Normaltekst>
        <FormattedMessage
          id={felt.fraVerdi ? 'Historikk.Template.Tilbakekreving.ChangedFromTo' : 'Historikk.Template.Tilbakekreving.FieldSetTo'}
          values={{
            navn: getKodeverknavn(endretFeltNavn), fraVerdi: formatertFraVerdi, tilVerdi: formatertTilVerdi, b: (chunks: any) => <b>{chunks}</b>,
          }}
        />
      </Normaltekst>
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
      {historikkinnslagDeler.map((historikkinnslagDel) => {
        const { opplysninger, endredeFelter, begrunnelseFritekst } = historikkinnslagDel;
        const periodeFom = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.PERIODE_FOM.kode)?.tilVerdi;
        const periodeTom = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.PERIODE_TOM.kode)?.tilVerdi;
        const begrunnelse = decodeHtmlEntity(opplysninger
          .find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.TILBAKEKREVING_OPPFYLT_BEGRUNNELSE.kode)?.tilVerdi);
        const sarligGrunnerBegrunnelseFelt = opplysninger
          .find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.SÆRLIG_GRUNNER_BEGRUNNELSE.kode);
        const sarligGrunnerBegrunnelse = sarligGrunnerBegrunnelseFelt !== undefined
          ? decodeHtmlEntity(sarligGrunnerBegrunnelseFelt.tilVerdi) : undefined;

        return (
          <div key={periodeFom + periodeTom}>
            <Normaltekst>
              <FormattedMessage
                id="Historikk.Template.Tilbakekreving.VurderingAvPerioden"
                values={{
                  periodeFom: periodeFom || '',
                  periodeTom: periodeTom || '',
                  b: (chunks: any) => <b>{chunks}</b>,
                }}
              />
            </Normaltekst>
            <VerticalSpacer eightPx />
            {endredeFelter && endredeFelter.map((felt, index) => {
              const { endretFeltNavn, tilVerdi } = felt;

              const visBelopTilbakekreves = historikkEndretFeltType.BELOEP_TILBAKEKREVES === endretFeltNavn.kode;
              const visProsentverdi = historikkEndretFeltType.ANDEL_TILBAKEKREVES === endretFeltNavn.kode;
              const visIleggRenter = historikkEndretFeltType.ILEGG_RENTER === endretFeltNavn.kode;
              if ((visBelopTilbakekreves || visProsentverdi || visIleggRenter) && !tilVerdi) {
                return null;
              }

              return lagBegrunnelseKomponent(felt, index, endredeFelter, getKodeverknavn, begrunnelse, sarligGrunnerBegrunnelse, begrunnelseFritekst);
            })}
            <Normaltekst>
              {(!endredeFelter && begrunnelseFritekst) && begrunnelseFritekst}
            </Normaltekst>
            <VerticalSpacer eightPx />
          </div>
        );
      })}
    </>
  );
};

export default HistorikkMalTypeTilbakekreving;
