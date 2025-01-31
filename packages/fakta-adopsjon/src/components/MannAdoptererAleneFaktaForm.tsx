import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Detail } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, getKodeverknavnFn, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, FamilieHendelse } from '@navikt/fp-types';
import { BekreftMannAdoptererAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './mannAdoptererAleneFaktaForm.module.css';

interface OwnProps {
  readOnly: boolean;
  farSokerType?: string;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  mannAdoptererAlene?: boolean;
}

export type FormValues = {
  mannAdoptererAlene?: boolean;
};

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
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]}
    >
      <div className={styles.container}>
        <Detail>
          <FormattedMessage id="MannAdoptererAleneFaktaForm.Opplysninger" />
        </Detail>
        <VerticalSpacer fourPx />
        {farSokerType && (
          <BodyShort size="small">
            {getKodeverknavnFn(alleKodeverk)(farSokerType, KodeverkType.FAR_SOEKER_TYPE)}
          </BodyShort>
        )}
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
          radios={[
            {
              label: intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.AdoptererAlene' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.AdoptererIkkeAlene' }),
              value: 'false',
            },
          ]}
        />
      </div>
    </FaktaGruppe>
  );
};

MannAdoptererAleneFaktaForm.buildInitialValues = (familiehendelse: FamilieHendelse): FormValues => ({
  mannAdoptererAlene: familiehendelse ? familiehendelse.mannAdoptererAlene : undefined,
});

MannAdoptererAleneFaktaForm.transformValues = (mannAdoptererAlene: boolean): BekreftMannAdoptererAksjonspunktAp => ({
  kode: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  mannAdoptererAlene,
});

export default MannAdoptererAleneFaktaForm;
