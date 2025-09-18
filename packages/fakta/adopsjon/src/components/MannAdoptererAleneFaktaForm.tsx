import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Detail, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type {
  AdopsjonFamilieHendelse,
  AlleKodeverk,
  foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType,
} from '@navikt/fp-types';
import type { BekreftMannAdoptererAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './mannAdoptererAleneFaktaForm.module.css';

interface Props {
  readOnly: boolean;
  farSokerType: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType | undefined;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  adopsjon: AdopsjonFamilieHendelse;
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
  adopsjon,
}: Props) => {
  const intl = useIntl();
  const { control } = useFormContext<FormValues>();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]}
    >
      <VStack gap="space-8" width="100%">
        <Detail>
          <FormattedMessage id="MannAdoptererAleneFaktaForm.Opplysninger" />
        </Detail>
        {farSokerType && (
          <BodyShort size="small">
            {alleKodeverk['FarSøkerType'].find(type => type.kode === farSokerType)?.navn}
          </BodyShort>
        )}
        <div>
          <hr className={styles['hr']} />
        </div>
        <RhfRadioGroup
          name="mannAdoptererAlene"
          control={control}
          hideLegend
          isEdited={hasValue(adopsjon.mannAdoptererAlene)}
          validate={[required]}
          isReadOnly={readOnly}
        >
          <HStack gap="space-16">
            <Radio value={true} size="small">
              <FormattedMessage id="MannAdoptererAleneFaktaForm.AdoptererAlene" />
            </Radio>
            <Radio value={false} size="small">
              <FormattedMessage id="MannAdoptererAleneFaktaForm.AdoptererIkkeAlene" />
            </Radio>
          </HStack>
        </RhfRadioGroup>
      </VStack>
    </FaktaGruppe>
  );
};

MannAdoptererAleneFaktaForm.buildInitialValues = (adopsjon: AdopsjonFamilieHendelse): FormValues => ({
  mannAdoptererAlene: adopsjon.mannAdoptererAlene,
});

MannAdoptererAleneFaktaForm.transformValues = (mannAdoptererAlene: boolean): BekreftMannAdoptererAksjonspunktAp => ({
  kode: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  mannAdoptererAlene,
});
