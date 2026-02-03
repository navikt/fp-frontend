import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';

import { notEmpty } from '@navikt/fp-utils';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { KøSorteringFelt, Sortering } from '../../../typer/sakslisteAvdelingTsType';
import { BelopSorteringValg } from './BelopSorteringValg';
import { DatoSorteringValg } from './DatoSorteringValg';

export type FormValues = {
  sortering?: Sortering;
};

interface Props {
  valgteBehandlingtyper?: string[];
  muligeSorteringer: KøSorteringFelt[];
}

export const SorteringVelger = ({ valgteBehandlingtyper, muligeSorteringer }: Props) => {
  const { resetField, control, watch } = useFormContext<FormValues>();

  const sorteringKoder = useLosKodeverk('KøSortering');

  const values = watch('sortering');

  return (
    <VStack padding="space-20">
      <RhfRadioGroup
        name="sortering.sorteringType"
        control={control}
        legend={<FormattedMessage id="SorteringVelger.Sortering" />}
        onChange={() => {
          resetField('sortering.fra');
          resetField('sortering.til');
          resetField('sortering.fomDato', { defaultValue: '' });
          resetField('sortering.tomDato', { defaultValue: '' });
          resetField('sortering.periodefilter', { defaultValue: 'FAST_PERIODE' });
        }}
      >
        {muligeSorteringer
          .filter(
            koSortering =>
              koSortering.feltKategori !== 'TILBAKEKREVING' || bareTilbakekrevingValgt(valgteBehandlingtyper),
          )
          .map(koSortering => (
            <VStack key={koSortering.sorteringType} gap="space-2">
              <Radio value={koSortering.sorteringType} size="small">
                {notEmpty(sorteringKoder.find(k => k.kode === koSortering.sorteringType)?.navn, 'Mangler kodeverk')}
              </Radio>
              {values?.sorteringType === koSortering.sorteringType && (
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

const bareTilbakekrevingValgt = (valgteBehandlingtyper?: string[]) =>
  valgteBehandlingtyper &&
  valgteBehandlingtyper.some(type => type === 'BT-007' || type === 'BT-009') &&
  !valgteBehandlingtyper.some(type => type !== 'BT-007' && type !== 'BT-009');
