import React, { FunctionComponent, ReactNode } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Normaltekst } from 'nav-frontend-typografi';

import { Image } from '@fpsak-frontend/shared-components';
import checkImg from '@fpsak-frontend/assets/images/check.svg'; //
import avslattImg from '@fpsak-frontend/assets/images/avslaatt.svg';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { Kodeverk, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt } from '@fpsak-frontend/types';

import getAksjonspunktText from './ApprovalTextUtils';
import TotrinnContext from '../TotrinnContextTsType';

import styles from './ToTrinnsFormReadOnly.less';

/*
  * ToTrinnsFormReadOnly
  *
  * Presentasjonskomponent. Shows the approved and not approved issues from the manager
  *
  * Eksempel:
  * ```html
  * <ToTrinnsForm data={listOfApprovals}/>
  * ```
  */

/* eslint-disable react/no-array-index-key */
const godkjendAksjonspunkt = (aksjonspunkt: TotrinnskontrollAksjonspunkt) => {
  const { vurderPaNyttArsaker } = aksjonspunkt;
  return (
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
            {vurderPaNyttArsaker.map((item, index: number) => (
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
  );
};
/* eslint-enable react/no-array-index-key */

const renderAksjonspunkt = (aksjonspunkt: TotrinnskontrollAksjonspunkt, aksjonspunktTexts: string[]) => (
  <div key={aksjonspunkt.aksjonspunktKode} className={styles.approvalItemContainer}>
    <span>{aksjonspunkt.navn}</span>
    {aksjonspunktTexts.map((formattedMessage: ReactNode, index: number) => (
      <div key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(index))} className={styles.aksjonspunktTextContainer}>
        <Normaltekst key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(index))}>
          {formattedMessage}
        </Normaltekst>
      </div>
    ))}
    <div>
      {godkjendAksjonspunkt(aksjonspunkt)}
      <pre className={styles.approvalItem}>
        {decodeHtmlEntity(aksjonspunkt.besluttersBegrunnelse)}
      </pre>
    </div>
  </div>
);

interface OwnProps {
  approvalList: TotrinnContext[];
  isForeldrepengerFagsak: boolean;
  klagebehandlingVurdering: TotrinnsKlageVurdering,
  behandlingStatus: Kodeverk,
  arbeidsforholdHandlingTyper: Kodeverk[],
  erTilbakekreving: boolean,
}

const ToTrinnsFormReadOnly: FunctionComponent<OwnProps> = ({
  approvalList,
  isForeldrepengerFagsak,
  klagebehandlingVurdering,
  behandlingStatus,
  arbeidsforholdHandlingTyper,
  erTilbakekreving,
}) => {
  if (!approvalList || approvalList.length === 0) {
    return null;
  }

  return (
    <div>
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
                const aksjonspunktText = getAksjonspunktText(isForeldrepengerFagsak, klagebehandlingVurdering, behandlingStatus,
                  arbeidsforholdHandlingTyper, erTilbakekreving, aksjonspunkt);
                return renderAksjonspunkt(aksjonspunkt, aksjonspunktText);
              })}
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
};

export default injectIntl(ToTrinnsFormReadOnly);
