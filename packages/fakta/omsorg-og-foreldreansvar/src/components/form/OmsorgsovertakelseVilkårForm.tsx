import { useFormContext } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { Radio } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { hasValue } from '@navikt/fp-fakta-felles';
import { VilkarType } from '@navikt/fp-kodeverk';
import type { AdopsjonFamilieHendelse } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  adopsjon: AdopsjonFamilieHendelse;
}

export type OmsorgsovertakelseVilkårFormValues = {
  vilkarType?: string;
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
      {alleKodeverk['OmsorgsovertakelseVilkårType'].filter(d => !!getDescriptionText(d.kode, intl))
        .map(d => (
        <Radio size="medium" key={d.kode} value={d.kode} description={getDescriptionText(d.kode, intl)}>
          {d.navn}
        </Radio>
      ))}
    </RhfRadioGroup>
  );
};

const getDescriptionText = (vilkårType: string, intl: IntlShape) => {
  switch (vilkårType) {
    case VilkarType.OMSORGSVILKARET:
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.OmsorgTredjeLedd' });
    case VilkarType.FORELDREANSVARSVILKARET_2_LEDD:
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.ForeldreAndreLedd' });
    case VilkarType.FORELDREANSVARSVILKARET_4_LEDD:
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.ForeldreFjerdeLedd' });
    default:
      return undefined;
  }
};
