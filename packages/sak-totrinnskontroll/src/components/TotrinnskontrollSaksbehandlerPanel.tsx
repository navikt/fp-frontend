import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { BodyShort } from '@navikt/ds-react';
import { Location } from 'history';
import { XMarkOctagonIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { KodeverkMedNavn, BehandlingAppKontekst, TotrinnskontrollSkjermlenkeContext } from '@navikt/fp-types';

import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
  const intl = useIntl();
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
                    <VerticalSpacer eightPx />
                    <div className={styles.approvalItem}>
                      {aksjonspunkt.totrinnskontrollGodkjent ? (
                        <FlexContainer>
                          <FlexRow>
                            <FlexColumn>
                              <CheckmarkIcon
                                title={intl.formatMessage({ id: 'ToTrinnsForm.Godkjent' })}
                                className={styles.checkmarkIcon}
                              />
                            </FlexColumn>
                            <FlexColumn className={styles.textMarginCheck}>
                              <FormattedMessage id="ToTrinnsForm.Godkjent" />
                            </FlexColumn>
                          </FlexRow>
                        </FlexContainer>
                      ) : (
                        <div className={styles.approvalItem}>
                          {aksjonspunkt.vurderPaNyttArsaker &&
                            aksjonspunkt.vurderPaNyttArsaker.map(item => (
                              <FlexContainer key={`${item}${aksjonspunkt.aksjonspunktKode}`}>
                                <FlexRow>
                                  <FlexColumn>
                                    <XMarkOctagonIcon className={styles.xmark} />
                                  </FlexColumn>
                                  <FlexColumn className={styles.textMarginXmark}>
                                    {vurderArsaker.find(arsak => item === arsak.kode)?.navn}
                                  </FlexColumn>
                                </FlexRow>
                              </FlexContainer>
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
