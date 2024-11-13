import React, { ReactNode, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { BodyShort, HStack } from '@navikt/ds-react';
import { Location } from 'history';
import { XMarkOctagonIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { KodeverkMedNavn, BehandlingAppKontekst, TotrinnskontrollSkjermlenkeContext } from '@navikt/fp-types';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import getAksjonspunkttekst from './aksjonspunktTekster/aksjonspunktTekstUtleder';

import styles from './totrinnskontrollSaksbehandlerPanel.module.css';

const VurderPåNyttPunkter = ({
  vurderPaNyttArsaker,
  vurderArsaker,
}: {
  vurderPaNyttArsaker: string[] | undefined;
  vurderArsaker: KodeverkMedNavn[];
}) => (
  <div className={styles.approvalItem}>
    {vurderPaNyttArsaker?.map(item => (
      <HStack gap="2" key={item}>
        <XMarkOctagonIcon className={styles.xmark} />
        <div>{vurderArsaker.find(arsak => item === arsak.kode)?.navn}</div>
      </HStack>
    ))}
  </div>
);

interface Props {
  behandling: BehandlingAppKontekst;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  erForeldrepengerFagsak: boolean;
  erTilbakekreving: boolean;
  skjemalenkeTyper: KodeverkMedNavn[];
  vurderArsaker: KodeverkMedNavn[];
  faktaOmBeregningTilfeller: KodeverkMedNavn[];
  lagLenke: (skjermlenkeCode: string) => Location | undefined;
}

export const TotrinnskontrollSaksbehandlerPanel = ({
  behandling,
  totrinnskontrollSkjermlenkeContext,
  erForeldrepengerFagsak,
  erTilbakekreving,
  skjemalenkeTyper,
  vurderArsaker,
  faktaOmBeregningTilfeller,
  lagLenke,
}: Props) => {
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
                        <HStack gap="2">
                          <CheckmarkIcon
                            title={intl.formatMessage({ id: 'ToTrinnsForm.Godkjent' })}
                            className={styles.checkmarkIcon}
                          />
                          <FormattedMessage id="ToTrinnsForm.Godkjent" />
                        </HStack>
                      ) : (
                        <VurderPåNyttPunkter
                          vurderPaNyttArsaker={aksjonspunkt?.vurderPaNyttArsaker}
                          vurderArsaker={vurderArsaker}
                        />
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
