import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Normaltekst } from 'nav-frontend-typografi';

import { Image } from '@fpsak-frontend/shared-components';
import checkImg from '@fpsak-frontend/assets/images/check.svg'; //
import avslattImg from '@fpsak-frontend/assets/images/avslaatt.svg';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { TotrinnskontrollAksjonspunkt } from '@fpsak-frontend/types';

import { getAksjonspunktTextSelector } from './ApprovalTextUtils';
import TotrinnContext from '../TotrinnContext';

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

const renderAksjonspunkt = (aksjonspunkt: TotrinnskontrollAksjonspunkt, getAksjonspunktText: any) => (
  <div key={aksjonspunkt.aksjonspunktKode} className={styles.approvalItemContainer}>
    <span>{aksjonspunkt.navn}</span>
    {getAksjonspunktText(aksjonspunkt).map((formattedMessage: any, index: any) => (
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
  getAksjonspunktText: (...args: any[]) => any;
}

export const ToTrinnsFormReadOnlyImpl: FunctionComponent<OwnProps> = ({
  approvalList,
  getAksjonspunktText,
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
              {aksjonspunkter.map((aksjonspunkt: any) => renderAksjonspunkt(aksjonspunkt, getAksjonspunktText))}
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: OwnProps) => ({
  getAksjonspunktText: getAksjonspunktTextSelector(ownProps),
});

export default connect(mapStateToProps)(injectIntl(ToTrinnsFormReadOnlyImpl));
