import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Normaltekst } from 'nav-frontend-typografi';
import { Location } from 'history';

import { Image } from '@fpsak-frontend/shared-components';
import checkImg from '@fpsak-frontend/assets/images/check.svg';
import avslattImg from '@fpsak-frontend/assets/images/avslaatt.svg';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import {
  Kodeverk, KodeverkMedNavn, KlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import getAksjonspunkttekst from './aksjonspunktTekster/aksjonspunktTekstUtleder';

import styles from './totrinnskontrollSaksbehandlerPanel.less';

interface OwnProps {
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  erForeldrepengerFagsak: boolean;
  behandlingKlageVurdering?: KlageVurdering,
  behandlingStatus: Kodeverk,
  erTilbakekreving: boolean,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  skjemalenkeTyper: KodeverkMedNavn[];
  vurderArsaker: KodeverkMedNavn[];
  faktaOmBeregningTilfeller: KodeverkMedNavn[];
  lagLenke: (skjermlenkeCode: string) => Location | undefined;
}

const TotrinnskontrollSaksbehandlerPanel: FunctionComponent<OwnProps> = ({
  totrinnskontrollSkjermlenkeContext,
  erForeldrepengerFagsak,
  behandlingKlageVurdering,
  behandlingStatus,
  arbeidsforholdHandlingTyper,
  erTilbakekreving,
  skjemalenkeTyper,
  vurderArsaker,
  faktaOmBeregningTilfeller,
  lagLenke,
}) => (
  <>
    <div className={styles.resultatFraGodkjenningTextContainer}>
      <FormattedMessage
        id="ToTrinnsForm.LøstAksjonspunkt"
        values={{
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    </div>
    {totrinnskontrollSkjermlenkeContext.map((context) => {
      const aksjonspunkter = context.totrinnskontrollAksjonspunkter;
      const skjermlenkeTypeKodeverk = skjemalenkeTyper.find((skjemalenkeType) => skjemalenkeType.kode === context.skjermlenkeType);

      if (aksjonspunkter.length > 0) {
        const lenke = lagLenke(context.skjermlenkeType);
        return (
          <React.Fragment key={context.skjermlenkeType}>
            {lenke && skjermlenkeTypeKodeverk && (
              <NavLink to={lenke} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
                {skjermlenkeTypeKodeverk.navn}
              </NavLink>
            )}
            {aksjonspunkter.map((aksjonspunkt) => {
              const aksjonspunktTexts = getAksjonspunkttekst(erForeldrepengerFagsak, behandlingStatus,
                arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt, behandlingKlageVurdering);

              return (
                <div key={aksjonspunkt.aksjonspunktKode} className={styles.approvalItemContainer}>
                  {aksjonspunktTexts.map((formattedMessage: ReactNode, index: number) => (
                    <div key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(index.toString()))} className={styles.aksjonspunktTextContainer}>
                      <Normaltekst>
                        {formattedMessage}
                      </Normaltekst>
                    </div>
                  ))}
                  <div className={styles.approvalItem}>
                    {aksjonspunkt.totrinnskontrollGodkjent ? (
                      <div>
                        <span>
                          <Image
                            src={checkImg}
                            className={styles.image}
                          />
                        </span>
                        <span>
                          <FormattedMessage id="ToTrinnsForm.Godkjent" />
                        </span>
                      </div>
                    ) : (
                      <div className={styles.approvalItem}>
                        {aksjonspunkt.vurderPaNyttArsaker && aksjonspunkt.vurderPaNyttArsaker.map((item) => (
                          <div key={`${item.kode}${aksjonspunkt.aksjonspunktKode}`}>
                            <span>
                              <Image
                                src={avslattImg}
                                className={styles.image}
                              />
                            </span>
                            <span>{vurderArsaker.find((arsak) => item.kode === arsak.kode)?.navn}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <pre className={styles.approvalItem}>
                    {decodeHtmlEntity(aksjonspunkt.besluttersBegrunnelse)}
                  </pre>
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

export default TotrinnskontrollSaksbehandlerPanel;
