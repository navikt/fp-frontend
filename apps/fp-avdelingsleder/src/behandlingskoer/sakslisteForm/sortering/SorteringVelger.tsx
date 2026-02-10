import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';

import type { KøSortering } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { KøSorteringFelt, Periodefilter } from '../../../typer/sakslisteAvdelingTsType';
import { BelopSorteringValg } from './BelopSorteringValg';
import { DatoSorteringValg } from './DatoSorteringValg';

export type FormValues = {
  sortering: {
    sorteringType: KøSortering;
    periodefilter: Periodefilter;
    fra: number | null;
    til: number | null;
    fomDato: string | null;
    tomDato: string | null;
  };
};

interface Props {
  valgteBehandlingtyper?: string[];
  muligeSorteringer: KøSorteringFelt[];
}

export const SorteringVelger = ({ valgteBehandlingtyper, muligeSorteringer }: Props) => {
  const { setValue, control, watch } = useFormContext<FormValues>();

  const sorteringKoder = useLosKodeverk('KøSortering');

  const sorteringstype = watch('sortering.sorteringType');
  return (
    <VStack padding="space-20">
      <RhfRadioGroup
        name="sortering.sorteringType"
        control={control}
        legend={<FormattedMessage id="SorteringVelger.Sortering" />}
        onChange={() => {
          setValue('sortering.fra', null);
          setValue('sortering.til', null);
          setValue('sortering.fomDato', null);
          setValue('sortering.tomDato', null);
          setValue('sortering.periodefilter', 'FAST_PERIODE');
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

const bareTilbakekrevingValgt = (valgteBehandlingtyper?: string[]) =>
  valgteBehandlingtyper &&
  valgteBehandlingtyper.length > 0 &&
  valgteBehandlingtyper.every(type => ['BT-007', 'BT-009'].includes(type));
