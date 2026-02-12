import { useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import type { KøSortering, KøSorteringFelt } from '@navikt/fp-types';

import type { FormValues, TilBeslutter } from '../UtvalgskriterierForSakslisteForm';

export function useGyldigeSorteringer(muligeSorteringer: KøSorteringFelt[]) {
  const { setValue, control } = useFormContext<FormValues>();

  const behandlingTyper = useWatch({ control, name: 'behandlingTyper' });
  const tilBeslutter = useWatch({ control, name: 'tilBeslutter' });
  const sorteringType = useWatch({ control, name: 'sortering.sorteringType' });

  const gyldigeSorteringer = useMemo(
    () => muligeSorteringer.filter(s => skalViseSortering(s, behandlingTyper, tilBeslutter)),
    [muligeSorteringer, behandlingTyper, tilBeslutter],
  );

  const synligeTyper = useMemo(() => gyldigeSorteringer.map(s => s.sorteringType), [gyldigeSorteringer]);

  useEffect(() => {
    if (!synligeTyper.includes(sorteringType)) {
      setValue('sortering.sorteringType', 'BEHFRIST', { shouldValidate: true, shouldDirty: false });
      setValue('sortering.fra', null, { shouldValidate: true, shouldDirty: false });
      setValue('sortering.til', null, { shouldValidate: true, shouldDirty: false });
      setValue('sortering.fomDato', null, { shouldValidate: true, shouldDirty: false });
      setValue('sortering.tomDato', null, { shouldValidate: true, shouldDirty: false });
      setValue('sortering.periodefilter', 'FAST_PERIODE', { shouldValidate: true, shouldDirty: false });
    }
  }, [sorteringType, synligeTyper, setValue]);

  return gyldigeSorteringer;
}

const skalViseSortering = (
  koSorteringFelt: KøSorteringFelt,
  valgteBehandlingtyper: string[],
  tilBeslutter: TilBeslutter,
) => {
  const køSortering: KøSortering = koSorteringFelt.sorteringType;
  switch (køSortering) {
    case 'OPPRBEH':
    case 'BEHFRIST':
    case 'FORSTONAD':
    case 'FORSTONAD_SYNK':
      return true;

    case 'OPPGAVE_OPPRETTET':
      return tilBeslutter === 'TA_MED';

    case 'BELOP':
    case 'FEILUTBETALINGSTART':
      return bareTilbakekrevingValgt(valgteBehandlingtyper);

    default:
      return køSortering satisfies never;
  }
};

const bareTilbakekrevingValgt = (valgteBehandlingtyper: string[]) =>
  valgteBehandlingtyper.length > 0 && valgteBehandlingtyper.every(type => ['BT-007', 'BT-009'].includes(type));
