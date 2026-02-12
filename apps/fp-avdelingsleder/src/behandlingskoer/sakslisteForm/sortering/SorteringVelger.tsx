import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';

import type { KøSorteringFelt } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { FormValues } from '../UtvalgskriterierForSakslisteForm';
import { BelopSorteringValg } from './BelopSorteringValg';
import { DatoSorteringValg } from './DatoSorteringValg';
import { useGyldigeSorteringer } from './useGyldigeSorteringer.tsx';

interface Props {
  muligeSorteringer: KøSorteringFelt[];
}

export const SorteringVelger = ({ muligeSorteringer }: Props) => {
  const sorteringKoder = useLosKodeverk('KøSortering');
  const { setValue, control, watch } = useFormContext<FormValues>();

  const gyldigeSorteringer = useGyldigeSorteringer(muligeSorteringer);

  const sorteringstype = watch('sortering.sorteringType');

  return (
    <VStack padding="space-20">
      <RhfRadioGroup
        name="sortering.sorteringType"
        control={control}
        legend={<FormattedMessage id="SorteringVelger.Sortering" />}
        onChange={() => {
          setValue('sortering.fra', null, { shouldValidate: true });
          setValue('sortering.til', null, { shouldValidate: true });
          setValue('sortering.fomDato', null, { shouldValidate: true });
          setValue('sortering.tomDato', null, { shouldValidate: true });
          setValue('sortering.periodefilter', 'FAST_PERIODE');
        }}
      >
        {gyldigeSorteringer.map(koSortering => (
          <VStack key={koSortering.sorteringType} gap="space-2">
            <Radio value={koSortering.sorteringType} size="small">
              {notEmpty(sorteringKoder.find(k => k.kode === koSortering.sorteringType)?.navn, 'Mangler kodeverk')}
            </Radio>
            {sorteringstype === koSortering.sorteringType && (
              <>
                {koSortering.feltType === 'DATO' && <DatoSorteringValg />}
                {koSortering.feltType === 'HELTALL' && <BelopSorteringValg />}
              </>
            )}
          </VStack>
        ))}
      </RhfRadioGroup>
    </VStack>
  );
};
