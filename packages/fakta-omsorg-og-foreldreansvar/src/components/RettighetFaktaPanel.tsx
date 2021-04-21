import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Normaltekst } from 'nav-frontend-typografi';

import relatertYtelseTilstand from '@fpsak-frontend/kodeverk/src/relatertYtelseTilstand';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { DateLabel, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import {
  Kodeverk, KodeverkMedNavn, RelatertTilgrensedYtelse, Soknad,
} from '@fpsak-frontend/types';

import styles from './rettighetFaktaPanel.less';

const getLopendeOrAvsluttetYtelser = (ytelse: RelatertTilgrensedYtelse): RelatertTilgrensedYtelse['tilgrensendeYtelserListe'] => ytelse.tilgrensendeYtelserListe
  .filter((y) => y.status !== relatertYtelseTilstand.APEN);

export type FormValues = {
  ytelser?: RelatertTilgrensedYtelse[];
  farSokerType?: string;
}

interface PureOwnProps {
  relatertYtelseTypes: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  farSokerType: string;
  ytelser: RelatertTilgrensedYtelse[];
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
    getKodeverknavn: (kodeverk: Kodeverk) => string) => FormValues;
}

/**
 * RettighetFaktaPanel
 */
const RettighetFaktaPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  farSokerType,
  ytelser,
  relatertYtelseTypes,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.Rettighet' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
    >
      <Normaltekst>{farSokerType || '-'}</Normaltekst>
      <VerticalSpacer sixteenPx />
      <FaktaGruppe withoutBorder title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.AndreYtelseTilMor' })}>
        {ytelser.map((ytelse) => getLopendeOrAvsluttetYtelser(ytelse).map((y) => (
          <div className={styles.wrapper} key={`${relatertYtelseTypes[ytelse.relatertYtelseType]}-${y.periodeFraDato}`}>
            <Normaltekst className={styles.iverksatt}>
              <FormattedMessage
                id="OmsorgOgForeldreansvarFaktaForm.YtelseIverksatt"
                values={{ ytelseType: relatertYtelseTypes.find((r) => r.kode === ytelse.relatertYtelseType).navn }}
              />
              <DateLabel dateString={y.periodeFraDato} />
            </Normaltekst>
          </div>
        )))}
        {!ytelser.some((y) => getLopendeOrAvsluttetYtelser(y).length > 0) && '-'}
      </FaktaGruppe>
    </FaktaGruppe>
  );
};

const FORM_NAME = 'OmsorgOgForeldreansvarInfoPanel';

const mapStateToProps = (state: any): MappedOwnProps => ({
  ...formValueSelector(FORM_NAME)(state, 'farSokerType', 'ytelser'),
});

const RettighetFaktaPanel = connect(mapStateToProps)(RettighetFaktaPanelImpl);

RettighetFaktaPanel.buildInitialValues = (soknad: Soknad,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
  getKodeverknavn: (kodeverk: Kodeverk) => string): FormValues => ({
  ytelser: innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
  farSokerType: getKodeverknavn(soknad.farSokerType),
});

export default RettighetFaktaPanel;
