import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';

import { notEmpty } from '@navikt/fp-utils';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { KøSorteringFelt } from '../../../typer/sakslisteAvdelingTsType';
import type { FormValues } from '../UtvalgskriterierForSakslisteForm';
import { BelopSorteringValg } from './BelopSorteringValg';
import { DatoSorteringValg } from './DatoSorteringValg';

interface Props {
  muligeSorteringer: KøSorteringFelt[];
}

export const SorteringVelger = ({ muligeSorteringer }: Props) => {
  const { setValue, control, watch } = useFormContext<FormValues>();

  const sorteringKoder = useLosKodeverk('KøSortering');

  const valgtBehandlingstyper = watch('behandlingTyper');
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
        {muligeSorteringer
          .filter(
            koSortering =>
              koSortering.feltKategori !== 'TILBAKEKREVING' || bareTilbakekrevingValgt(valgtBehandlingstyper),
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

export const bareTilbakekrevingValgt = (valgteBehandlingtyper: string[]) =>
  valgteBehandlingtyper.length > 0 && valgteBehandlingtyper.every(type => ['BT-007', 'BT-009'].includes(type));
