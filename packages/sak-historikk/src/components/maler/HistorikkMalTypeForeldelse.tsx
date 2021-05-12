import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';

import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import HistorikkMal from '../HistorikkMalTsType';
import Skjermlenke from './felles/Skjermlenke';

const HistorikkMalTypeForeldelse: FunctionComponent<HistorikkMal> = ({
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
    <div>
      <Skjermlenke
        skjermlenke={historikkinnslagDeler[0].skjermlenke}
        behandlingLocation={behandlingLocation}
        getKodeverknavn={getKodeverknavn}
        scrollUpOnClick
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
      {historikkinnslagDeler.map((historikkinnslagDel) => {
        const { begrunnelseFritekst, opplysninger, endredeFelter } = historikkinnslagDel;
        const periodeFom = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.PERIODE_FOM.kode)?.tilVerdi;
        const periodeTom = opplysninger.find((o) => o.opplysningType.kode === historikkOpplysningTypeCodes.PERIODE_TOM.kode)?.tilVerdi;

        if (!periodeFom || !periodeTom) {
          return null;
        }

        return (
          <div key={periodeFom + periodeTom}>
            <Normaltekst>
              <FormattedMessage
                id="Historikk.Template.Foreldelse.VurderingAvPerioden"
                values={{ periodeFom, periodeTom, b: (chunks: any) => <b>{chunks}</b> }}
              />
            </Normaltekst>
            {endredeFelter && endredeFelter.map((felt) => {
              const { endretFeltNavn, fraVerdi, tilVerdi } = felt;

              return (
                <React.Fragment key={endretFeltNavn.kode}>
                  <Normaltekst>
                    <FormattedMessage
                      id={felt.fraVerdi ? 'Historikk.Template.Tilbakekreving.ChangedFromTo' : 'Historikk.Template.Tilbakekreving.FieldSetTo'}
                      values={{
                        navn: getKodeverknavn(endretFeltNavn),
                        fraVerdi,
                        tilVerdi,
                        b: (chunks: any) => <b>{chunks}</b>,
                      }}
                    />
                  </Normaltekst>
                  <VerticalSpacer eightPx />
                </React.Fragment>
              );
            })}
            <VerticalSpacer eightPx />
            <Normaltekst>
              {begrunnelseFritekst && decodeHtmlEntity(begrunnelseFritekst)}
            </Normaltekst>
            <VerticalSpacer eightPx />
          </div>
        );
      })}
    </div>
  );
};

export default HistorikkMalTypeForeldelse;
