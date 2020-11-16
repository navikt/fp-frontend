import React, { ReactNode, FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { isObject } from '@fpsak-frontend/utils';

import AksjonspunktHelpTextHTML from './AksjonspunktHelpTextHTML';

import styles from './AksjonspunktHelpTextTemp.less';

interface OwnProps {
  children: string[] | ReactNode[];
  isAksjonspunktOpen: boolean;
}

/**
 * TODO (TOR) Dette er ein midlertidig komponent som byttar mellom to komponentar. Er ikkje bestemt korleis dette faktisk skal sjå ut enno.
 */
const AksjonspunktHelpTextTemp: FunctionComponent<OwnProps> = ({
  isAksjonspunktOpen,
  children,
}) => (
  <>
    {isAksjonspunktOpen && (
      <AksjonspunktHelpTextHTML>
        {children}
      </AksjonspunktHelpTextHTML>
    )}
    {!isAksjonspunktOpen && (
      <>
        {React.Children.map(children, (child) => (
          // @ts-ignore (Dette skal fjernast)
          <Normaltekst key={isObject(child) ? child.key : child} className={styles.wordwrap}>
            <strong>
              <FormattedMessage id="HelpText.Aksjonspunkt.BehandletAksjonspunkt" />
            </strong>
            {child}
          </Normaltekst>
        ))}
      </>
    )}
  </>
);

export default AksjonspunktHelpTextTemp;
