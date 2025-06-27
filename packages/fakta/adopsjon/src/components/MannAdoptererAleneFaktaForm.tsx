import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Detail, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, FarSøkerType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, FamilieHendelse } from '@navikt/fp-types';
import type { BekreftMannAdoptererAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './mannAdoptererAleneFaktaForm.module.css';

interface Props {
  readOnly: boolean;
  farSokerType: FarSøkerType | undefined;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  gjeldendeFamiliehendelse: FamilieHendelse;
}

export type FormValues = {
  mannAdoptererAlene?: boolean;
};

/**
 * MannAdoptererAleneFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av om mann adopterer alene.
 */
export const MannAdoptererAleneFaktaForm = ({
  farSokerType,
  readOnly,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  gjeldendeFamiliehendelse,
}: Props) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]}
    >
      <VStack gap="2" width="100%">
        <Detail>
          <FormattedMessage id="MannAdoptererAleneFaktaForm.Opplysninger" />
        </Detail>
        {farSokerType && (
          <BodyShort size="small">
            {alleKodeverk['FarSøkerType'].find(type => type.kode === farSokerType)?.navn}
          </BodyShort>
        )}
        <div>
          <hr className={styles.hr} />
        </div>
        <RhfRadioGroup
          name="mannAdoptererAlene"
          hideLegend
          isEdited={hasValue(gjeldendeFamiliehendelse.mannAdoptererAlene)}
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
      </VStack>
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
