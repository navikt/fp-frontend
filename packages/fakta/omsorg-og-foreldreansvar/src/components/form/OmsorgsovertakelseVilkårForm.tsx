import { useFormContext } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { Radio } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { hasValue } from '@navikt/fp-fakta-felles';
import type { AdopsjonFamilieHendelse, OmsorgsovertakelseVilkårType } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  adopsjon: AdopsjonFamilieHendelse;
}

const VILKÅR_TYPER = ['FP_VK_5', 'FP_VK_8', 'FP_VK_33'] as const;
type OmsorgsovertakelseVilkårTypeSubset = (typeof VILKÅR_TYPER)[number];

export type OmsorgsovertakelseVilkårFormValues = {
  vilkarType?: OmsorgsovertakelseVilkårTypeSubset;
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
      {VILKÅR_TYPER.map(kode => (
        <Radio size="medium" key={kode} value={kode} description={getDescriptionText(kode, intl)}>
          {alleKodeverk['OmsorgsovertakelseVilkårType'].find(kodeverk => kodeverk.kode == kode)?.navn}
        </Radio>
      ))}
    </RhfRadioGroup>
  );
};

OmsorgsovertakelseVilkårForm.initialValues = (vilkarType: OmsorgsovertakelseVilkårType) => ({
  vilkarType: isOmsorgsovertakelseVilkår(vilkarType) ? vilkarType : undefined,
});

const isOmsorgsovertakelseVilkår = (
  vilkarType: OmsorgsovertakelseVilkårType,
): vilkarType is OmsorgsovertakelseVilkårTypeSubset =>
  VILKÅR_TYPER.includes(vilkarType as OmsorgsovertakelseVilkårTypeSubset);

const getDescriptionText = (vilkårType: OmsorgsovertakelseVilkårTypeSubset, intl: IntlShape) => {
  switch (vilkårType) {
    case 'FP_VK_5':
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.OmsorgTredjeLedd' });
    case 'FP_VK_8':
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.ForeldreAndreLedd' });
    case 'FP_VK_33':
      return intl.formatMessage({ id: 'OmsorgsovertakelseVilkårForm.Description.ForeldreFjerdeLedd' });
  }
};
