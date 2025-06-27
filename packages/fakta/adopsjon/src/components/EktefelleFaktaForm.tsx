import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { FamilieHendelse } from '@navikt/fp-types';
import type { BekreftEktefelleAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './ektefelleFaktaForm.module.css';

interface Props {
  readOnly: boolean;
  gjeldendeFamiliehendelse: FamilieHendelse;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export type FormValues = {
  ektefellesBarn?: boolean;
};

/**
 * EktefelleFaktaForm
 *
 * Setter opp aksjonspunktet for vurdering av om det er ektefelles barn som adopteres.
 */
export const EktefelleFaktaForm = ({ readOnly, gjeldendeFamiliehendelse, alleMerknaderFraBeslutter }: Props) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'EktefelleFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]}
    >
      <VStack gap="2" width="100%">
        <BodyShort size="small">
          <FormattedMessage id="EktefelleFaktaForm.EktefellesBarn" />
        </BodyShort>
        <div>
          <hr className={styles.hr} />
        </div>
        <RhfRadioGroup
          name="ektefellesBarn"
          hideLegend
          validate={[required]}
          isReadOnly={readOnly}
          isEdited={hasValue(gjeldendeFamiliehendelse.ektefellesBarn)}
          isHorizontal
          isTrueOrFalseSelection
          radios={[
            {
              label: intl.formatMessage({ id: 'EktefelleFaktaForm.ErIkkeValg' }),
              value: 'false',
            },
            {
              label: intl.formatMessage({ id: 'EktefelleFaktaForm.ErValg' }),
              value: 'true',
            },
          ]}
        />
      </VStack>
    </FaktaGruppe>
  );
};

EktefelleFaktaForm.buildInitialValues = (familiehendelse: FamilieHendelse): FormValues => ({
  ektefellesBarn:
    familiehendelse && familiehendelse.ektefellesBarn !== null ? familiehendelse.ektefellesBarn : undefined,
});

EktefelleFaktaForm.transformValues = (ektefellesBarn: boolean): BekreftEktefelleAksjonspunktAp => ({
  kode: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
  ektefellesBarn,
});
