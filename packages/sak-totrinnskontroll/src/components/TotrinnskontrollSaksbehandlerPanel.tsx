import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { BodyShort } from '@navikt/ds-react';
import { Location } from 'history';
import { Image } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { KodeverkMedNavn, BehandlingAppKontekst, TotrinnskontrollSkjermlenkeContext } from '@navikt/fp-types';

import checkImg from '../images/check.svg';
import avslattImg from '../images/avslaatt.svg';
import getAksjonspunkttekst from './aksjonspunktTekster/aksjonspunktTekstUtleder';

import styles from './totrinnskontrollSaksbehandlerPanel.module.css';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  erForeldrepengerFagsak: boolean;
  erTilbakekreving: boolean;
  arbeidsforholdHandlingTyper: KodeverkMedNavn[];
  skjemalenkeTyper: KodeverkMedNavn[];
  vurderArsaker: KodeverkMedNavn[];
  faktaOmBeregningTilfeller: KodeverkMedNavn[];
  lagLenke: (skjermlenkeCode: string) => Location | undefined;
}

const TotrinnskontrollSaksbehandlerPanel: FunctionComponent<OwnProps> = ({
  behandling,
  totrinnskontrollSkjermlenkeContext,
  erForeldrepengerFagsak,
  arbeidsforholdHandlingTyper,
  erTilbakekreving,
  skjemalenkeTyper,
  vurderArsaker,
  faktaOmBeregningTilfeller,
  lagLenke,
}) => {
  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <>
      <div className={styles.resultatFraGodkjenningTextContainer}>
        <FormattedMessage
          id="ToTrinnsForm.LøstAksjonspunkt"
          values={{
            b: bTag,
          }}
        />
      </div>
      {totrinnskontrollSkjermlenkeContext.map(context => {
        const aksjonspunkter = context.totrinnskontrollAksjonspunkter;
        const skjermlenkeTypeKodeverk = skjemalenkeTyper.find(
          skjemalenkeType => skjemalenkeType.kode === context.skjermlenkeType,
        );

        if (aksjonspunkter.length > 0) {
          const lenke = lagLenke(context.skjermlenkeType);
          return (
            <React.Fragment key={context.skjermlenkeType}>
              {lenke && skjermlenkeTypeKodeverk && (
                <NavLink to={lenke} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
                  {skjermlenkeTypeKodeverk.navn}
                </NavLink>
              )}
              {aksjonspunkter.map(aksjonspunkt => {
                const aksjonspunktTexts = getAksjonspunkttekst(
                  erForeldrepengerFagsak,
                  behandling.status,
                  arbeidsforholdHandlingTyper,
                  faktaOmBeregningTilfeller,
                  erTilbakekreving,
                  aksjonspunkt,
                  behandling.behandlingsresultat,
                );

                return (
                  <div key={aksjonspunkt.aksjonspunktKode} className={styles.approvalItemContainer}>
                    {aksjonspunktTexts.map((formattedMessage: ReactNode, index: number) => (
                      <div
                        key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(index.toString()))}
                        className={styles.aksjonspunktTextContainer}
                      >
                        <BodyShort size="small">{formattedMessage}</BodyShort>
                      </div>
                    ))}
                    <div className={styles.approvalItem}>
                      {aksjonspunkt.totrinnskontrollGodkjent ? (
                        <div>
                          <span>
                            <Image src={checkImg} className={styles.image} />
                          </span>
                          <span>
                            <FormattedMessage id="ToTrinnsForm.Godkjent" />
                          </span>
                        </div>
                      ) : (
                        <div className={styles.approvalItem}>
                          {aksjonspunkt.vurderPaNyttArsaker &&
                            aksjonspunkt.vurderPaNyttArsaker.map(item => (
                              <div key={`${item}${aksjonspunkt.aksjonspunktKode}`}>
                                <span>
                                  <Image src={avslattImg} className={styles.image} />
                                </span>
                                <span>{vurderArsaker.find(arsak => item === arsak.kode)?.navn}</span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                    <pre className={styles.approvalItem}>{decodeHtmlEntity(aksjonspunkt.besluttersBegrunnelse)}</pre>
                  </div>
                );
              })}
            </React.Fragment>
          );
        }
        return null;
      })}
    </>
  );
};

export default TotrinnskontrollSaksbehandlerPanel;
