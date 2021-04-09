import React, { ReactNode, FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';

import { isObject, createIntl } from '@fpsak-frontend/utils';

import AksjonspunktHelpTextHTML from './AksjonspunktHelpTextHTML';

import messages from '../i18n/nb_NO.json';
import styles from './AksjonspunktHelpTextTemp.less';

const intl = createIntl(messages);

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
              {intl.formatMessage({ id: 'HelpText.Aksjonspunkt.BehandletAksjonspunkt' })}
            </strong>
            {child}
          </Normaltekst>
        ))}
      </>
    )}
  </>
);

export default AksjonspunktHelpTextTemp;
