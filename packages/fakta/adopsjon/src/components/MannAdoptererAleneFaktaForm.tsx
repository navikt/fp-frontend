import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AdopsjonFamilieHendelse, AlleKodeverk, FarSøkerType } from '@navikt/fp-types';
import type { BekreftMannAdoptererAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  readOnly: boolean;
  farSokerType: FarSøkerType | undefined;
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
    <FaktaKort
      label={intl.formatMessage({ id: 'MannAdoptererAleneFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]}
    >
      <VStack gap="space-16">
        <ReadOnlyField
          size="small"
          label={<FormattedMessage id="MannAdoptererAleneFaktaForm.Opplysninger" />}
          value={alleKodeverk['FarSøkerType'].find(type => type.kode === farSokerType)?.navn}
        />

        <RhfRadioGroup
          name="mannAdoptererAlene"
          control={control}
          label={<FormattedMessage id="MannAdoptererAleneFaktaForm.APSpørsmål" />}
          isEdited={hasValue(adopsjon.mannAdoptererAlene)}
          validate={[required]}
          isReadOnly={readOnly}
        >
          <Radio value={true}>
            <FormattedMessage id="MannAdoptererAleneFaktaForm.Ja" />
          </Radio>
          <Radio value={false}>
            <FormattedMessage id="MannAdoptererAleneFaktaForm.Nei" />
          </Radio>
        </RhfRadioGroup>
      </VStack>
    </FaktaKort>
  );
};

MannAdoptererAleneFaktaForm.buildInitialValues = (adopsjon: AdopsjonFamilieHendelse): FormValues => ({
  mannAdoptererAlene: adopsjon.mannAdoptererAlene,
});

MannAdoptererAleneFaktaForm.transformValues = (mannAdoptererAlene: boolean): BekreftMannAdoptererAksjonspunktAp => ({
  kode: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  mannAdoptererAlene,
});
