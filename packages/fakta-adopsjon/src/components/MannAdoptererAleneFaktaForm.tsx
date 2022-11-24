import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Detail } from '@navikt/ds-react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFn } from '@fpsak-frontend/kodeverk/src/kodeverkUtils';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { FamilieHendelse, AlleKodeverk } from '@fpsak-frontend/types';
import { BekreftMannAdoptererAksjonspunktAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './mannAdoptererAleneFaktaForm.less';

interface OwnProps {
  readOnly: boolean;
  farSokerType?: string;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  mannAdoptererAlene: boolean;
}

export type FormValues = {
  mannAdoptererAlene?: boolean,
}

interface StaticFunctions {
  buildInitialValues: (familiehendelse: FamilieHendelse) => FormValues;
  transformValues: (mannAdoptererAlene: boolean) => BekreftMannAdoptererAksjonspunktAp;
}

/**
 * MannAdoptererAleneFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av om mann adopterer alene.
 */
const MannAdoptererAleneFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  farSokerType,
  readOnly,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  mannAdoptererAlene,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]}
    >
      <div className={styles.container}>
        <Detail size="small"><FormattedMessage id="MannAdoptererAleneFaktaForm.Opplysninger" /></Detail>
        <VerticalSpacer fourPx />
        {farSokerType
          && <BodyShort size="small">{getKodeverknavnFn(alleKodeverk)(farSokerType, KodeverkType.FAR_SOEKER_TYPE)}</BodyShort>}
        <VerticalSpacer sixteenPx />
        <hr className={styles.hr} />
        <RadioGroupPanel
          name="mannAdoptererAlene"
          hideLegend
          isEdited={mannAdoptererAlene}
          validate={[required]}
          isReadOnly={readOnly}
          isHorizontal
          isTrueOrFalseSelection
          radios={[{
            label: intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.AdoptererAlene' }),
            value: 'true',
          }, {
            label: intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.AdoptererIkkeAlene' }),
            value: 'false',
          }]}
        />
      </div>
    </FaktaGruppe>
  );
};

MannAdoptererAleneFaktaForm.buildInitialValues = (familiehendelse: FamilieHendelse): FormValues => ({
  mannAdoptererAlene: familiehendelse ? familiehendelse.mannAdoptererAlene : undefined,
});

MannAdoptererAleneFaktaForm.transformValues = (mannAdoptererAlene: boolean): BekreftMannAdoptererAksjonspunktAp => ({
  kode: aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  mannAdoptererAlene,
});

export default MannAdoptererAleneFaktaForm;
