import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Normaltekst } from 'nav-frontend-typografi';

import { Image } from '@fpsak-frontend/shared-components';
import checkImg from '@fpsak-frontend/assets/images/check.svg';
import avslattImg from '@fpsak-frontend/assets/images/avslaatt.svg';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering } from '@fpsak-frontend/types';

import getAksjonspunktText from './ApprovalTextUtils';
import TotrinnContext from '../TotrinnContextTsType';

import styles from './ToTrinnsFormReadOnly.less';

interface OwnProps {
  approvalList: TotrinnContext[];
  isForeldrepengerFagsak: boolean;
  klagebehandlingVurdering: TotrinnsKlageVurdering,
  behandlingStatus: Kodeverk,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  erTilbakekreving: boolean,
}

const ToTrinnsFormReadOnly: FunctionComponent<OwnProps> = ({
  approvalList,
  isForeldrepengerFagsak,
  klagebehandlingVurdering,
  behandlingStatus,
  arbeidsforholdHandlingTyper,
  erTilbakekreving,
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
    {approvalList.map(({
      contextCode, skjermlenke, skjermlenkeNavn, aksjonspunkter,
    }) => {
      if (aksjonspunkter.length > 0) {
        return (
          <React.Fragment key={contextCode}>
            <NavLink to={skjermlenke} onClick={() => window.scroll(0, 0)}>
              {skjermlenkeNavn}
            </NavLink>
            {aksjonspunkter.map((aksjonspunkt) => {
              const aksjonspunktTexts = getAksjonspunktText(isForeldrepengerFagsak, klagebehandlingVurdering, behandlingStatus,
                arbeidsforholdHandlingTyper, erTilbakekreving, aksjonspunkt);
              return (
                <div key={aksjonspunkt.aksjonspunktKode} className={styles.approvalItemContainer}>
                  {aksjonspunktTexts.map((formattedMessage: ReactNode, index: number) => (
                    <div key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(index.toString()))} className={styles.aksjonspunktTextContainer}>
                      <Normaltekst key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(index.toString()))}>
                        {formattedMessage}
                      </Normaltekst>
                    </div>
                  ))}
                  <div className={styles.approvalItem}>
                    {aksjonspunkt.totrinnskontrollGodkjent
                      ? (
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
                      )
                      : (
                        <div className={styles.approvalItem}>
                          {aksjonspunkt.vurderPaNyttArsaker.map((item, index: number) => (
                            <div key={`${item.kode}${index}`}>
                              <span>
                                <Image
                                  src={avslattImg}
                                  className={styles.image}
                                />
                              </span>
                              <span>{item.navn}</span>
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

export default ToTrinnsFormReadOnly;
