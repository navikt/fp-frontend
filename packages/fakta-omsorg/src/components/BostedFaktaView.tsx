import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { FaktaGruppe } from '@fpsak-frontend/shared-components';
import { AlleKodeverk, Personoversikt } from '@fpsak-frontend/types';

import BostedBarnView from './BostedBarnView';
import BostedSokerView from './BostedSokerView';

import styles from './bostedFaktaView.less';

interface OwnProps {
  personoversikt: Personoversikt;
  className?: string;
  alleKodeverk: AlleKodeverk;
}

const BostedFaktaView: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  personoversikt,
  className,
  alleKodeverk,
  intl,
}) => (
  <div className={className}>
    <FaktaGruppe title={intl.formatMessage({ id: 'BostedFaktaView.BosattAdresser' })}>
      <Row>
        <Column xs="6">
          {personoversikt.barn.map((b, index) => (
            <BostedBarnView key={b.navn} barn={b} barnNr={index + 1} />
          ))}
        </Column>
        <Column xs="6">
          <BostedSokerView
            sokerTypeText={intl.formatMessage({ id: 'BostedSokerFaktaIndex.Soker' })}
            personopplysninger={personoversikt.bruker}
            sivilstandTypes={alleKodeverk[kodeverkTyper.SIVILSTAND_TYPE]}
          />
          {personoversikt.annenPart && (
            <BostedSokerView
              sokerTypeText={intl.formatMessage({ id: 'BostedFaktaView.ForelderTo' })}
              personopplysninger={personoversikt.annenPart}
              sivilstandTypes={alleKodeverk[kodeverkTyper.SIVILSTAND_TYPE]}
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
