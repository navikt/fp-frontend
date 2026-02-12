import { useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import type { BehandlingType, KøSortering, KøSorteringFelt } from '@navikt/fp-types';

import type { FormValues, TilBeslutter } from '../UtvalgskriterierForSakslisteForm';

export function useGyldigeSorteringer(muligeSorteringer: KøSorteringFelt[]) {
  const { setValue, control } = useFormContext<FormValues>();

  const [behandlingTyper, tilBeslutter, currentSorteringType] = useWatch({
    control,
    name: ['behandlingTyper', 'tilBeslutter', 'sortering.sorteringType'],
  });

  const gyldigeSorteringer = useMemo(
    () => muligeSorteringer.filter(s => erSorteringGyldig(s, behandlingTyper, tilBeslutter)),
    [muligeSorteringer, behandlingTyper, tilBeslutter],
  );

  useEffect(() => {
    const erCurrentSorteringGyldig = gyldigeSorteringer.some(s => s.sorteringType === currentSorteringType);
    if (!erCurrentSorteringGyldig) {
      const opts = { shouldValidate: true, shouldDirty: false } as const;
      setValue('sortering.sorteringType', 'BEHFRIST', opts);
      setValue('sortering.fra', null, opts);
      setValue('sortering.til', null, opts);
      setValue('sortering.fomDato', null, opts);
      setValue('sortering.tomDato', null, opts);
      setValue('sortering.periodefilter', 'FAST_PERIODE', opts);
    }
  }, [currentSorteringType, gyldigeSorteringer, setValue]);

  return gyldigeSorteringer;
}

const erSorteringGyldig = (
  sorteringFelt: KøSorteringFelt,
  behandlingtyper: BehandlingType[],
  tilBeslutter: TilBeslutter,
) => {
  const køSortering: KøSortering = sorteringFelt.sorteringType;
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
      return kunTilbakekrevingValgt(behandlingtyper);

    default:
      return køSortering satisfies never;
  }
};

const kunTilbakekrevingValgt = (valgteBehandlingtyper: BehandlingType[]) =>
  valgteBehandlingtyper.length > 0 && valgteBehandlingtyper.every(type => ['BT-007', 'BT-009'].includes(type));
