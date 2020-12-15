import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { FaktaGruppe } from '@fpsak-frontend/shared-components';
import BostedSokerFaktaIndex from '@fpsak-frontend/fakta-bosted-soker';
import { KodeverkMedNavn, Personopplysninger } from '@fpsak-frontend/types';

import BostedBarnView from './BostedBarnView';

import styles from './bostedFaktaView.less';

interface OwnProps {
  personopplysning: Personopplysninger;
  ektefellePersonopplysning?: Personopplysninger;
  className?: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const BostedFaktaView: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  personopplysning,
  ektefellePersonopplysning,
  className,
  alleKodeverk,
  intl,
}) => (
  <div className={className}>
    <FaktaGruppe title={intl.formatMessage({ id: 'BostedFaktaView.BosattAdresser' })}>
      <Row>
        <Column xs="6">
          {personopplysning.barn.map((b, index) => (
            <BostedBarnView key={b.navn} barn={b} barnNr={index + 1} />
          ))}
        </Column>
        <Column xs="6">
          <BostedSokerFaktaIndex personopplysninger={personopplysning} alleKodeverk={alleKodeverk} />
          {ektefellePersonopplysning && (
            <BostedSokerFaktaIndex
              sokerTypeText={intl.formatMessage({ id: 'BostedFaktaView.ForelderTo' })}
              personopplysninger={ektefellePersonopplysning}
              alleKodeverk={alleKodeverk}
            />
          )}
        </Column>
      </Row>
    </FaktaGruppe>
  </div>
);

BostedFaktaView.defaultProps = {
  className: styles.defaultBostedFakta,
};

export default injectIntl(BostedFaktaView);
