import { useFormContext } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { Radio } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { hasValue } from '@navikt/fp-fakta-felles';
import type { AdopsjonFamilieHendelse, VilkårType } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  adopsjon: AdopsjonFamilieHendelse;
}

export type OmsorgsovertakelseVilkårFormValues = {
  vilkarType?: VilkårType;
};

export const OmsorgsovertakelseVilkårForm = ({ adopsjon }: Props) => {
  const intl = useIntl();
  const { control } = useFormContext<OmsorgsovertakelseVilkårFormValues>();
  const { isReadOnly, alleKodeverk } = usePanelDataContext();

  return (
    <RhfRadioGroup
      name="vilkarType"
      control={control}
      validate={[required]}
      label={intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.VelgVilkaarSomSkalAnvendes' })}
      isReadOnly={isReadOnly}
      size="medium"
      isEdited={hasValue(adopsjon.omsorgsovertakelseVilkårType)}
    >
      {alleKodeverk['OmsorgsovertakelseVilkårType']
        .filter(d => !!getDescriptionText(d.kode, intl))
        .map(d => (
          <Radio size="medium" key={d.kode} value={d.kode} description={getDescriptionText(d.kode, intl)}>
            {d.navn}
          </Radio>
        ))}
    </RhfRadioGroup>
  );
};

const getDescriptionText = (vilkårType: VilkårType, intl: IntlShape) => {
  switch (vilkårType) {
    case 'FP_VK_5':
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.OmsorgTredjeLedd' });
    case 'FP_VK_8':
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.ForeldreAndreLedd' });
    case 'FP_VK_33':
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.ForeldreFjerdeLedd' });
    default:
      return undefined;
  }
};
