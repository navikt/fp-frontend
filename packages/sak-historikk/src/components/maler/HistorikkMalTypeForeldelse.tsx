import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/fp-kodeverk';

import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import HistorikkMal from '../HistorikkMalTsType';
import Skjermlenke from './felles/Skjermlenke';

const HistorikkMalTypeForeldelse = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
}: HistorikkMal) => {
  const { historikkinnslagDeler } = historikkinnslag;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

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
      {historikkinnslagDeler.map(historikkinnslagDel => {
        const { begrunnelseFritekst, opplysninger, endredeFelter } = historikkinnslagDel;
        const periodeFom = opplysninger.find(
          o => o.opplysningType === historikkOpplysningTypeCodes.PERIODE_FOM.kode,
        )?.tilVerdi;
        const periodeTom = opplysninger.find(
          o => o.opplysningType === historikkOpplysningTypeCodes.PERIODE_TOM.kode,
        )?.tilVerdi;

        return (
          <div key={`${periodeFom}-${periodeTom}`}>
            <BodyShort size="small">
              <FormattedMessage
                id="Historikk.Template.Foreldelse.VurderingAvPerioden"
                values={{
                  periodeFom: periodeFom || '',
                  periodeTom: periodeTom || '',
                  b: bTag,
                }}
              />
            </BodyShort>
            {endredeFelter &&
              endredeFelter.map(felt => {
                const { endretFeltNavn, fraVerdi, tilVerdi } = felt;

                return (
                  <React.Fragment key={endretFeltNavn}>
                    <BodyShort size="small">
                      <FormattedMessage
                        id={
                          felt.fraVerdi
                            ? 'Historikk.Template.Tilbakekreving.ChangedFromTo'
                            : 'Historikk.Template.Tilbakekreving.FieldSetTo'
                        }
                        values={{
                          navn: getKodeverknavn(endretFeltNavn, KodeverkType.HISTORIKK_ENDRET_FELT_TYPE),
                          fraVerdi,
                          tilVerdi,
                          b: bTag,
                        }}
                      />
                    </BodyShort>
                    <VerticalSpacer eightPx />
                  </React.Fragment>
                );
              })}
            <VerticalSpacer eightPx />
            {begrunnelseFritekst && <BodyShort size="small">{decodeHtmlEntity(begrunnelseFritekst)}</BodyShort>}
            <VerticalSpacer eightPx />
          </div>
        );
      })}
    </div>
  );
};

HistorikkMalTypeForeldelse.displayName = 'HistorikkMalTypeForeldelse';

export default HistorikkMalTypeForeldelse;
