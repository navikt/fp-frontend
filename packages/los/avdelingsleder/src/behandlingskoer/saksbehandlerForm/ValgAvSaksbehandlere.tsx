import { useFormContext } from 'react-hook-form';

import { HStack, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteSaksbehandler, LosUrl } from '../../data/fplosAvdelingslederApi';
import type { SakslisteAvdeling } from '../../typer/sakslisteAvdelingTsType';

interface Props {
  valgtSaksliste: SakslisteAvdeling;
  valgtAvdelingEnhet: string;
  saksbehandlere: {
    brukerIdent: string;
    navn: string;
  }[];
}

export const ValgAvSaksbehandlere = ({ valgtSaksliste, valgtAvdelingEnhet, saksbehandlere }: Props) => {
  const queryClient = useQueryClient();

  // TODO (TOR) Manglar type
  const { control } = useFormContext();

  const { mutate: knyttSaksbehandlerTilSaksliste } = useMutation({
    mutationFn: (values: { brukerIdent: string; checked: boolean }) =>
      lagreSakslisteSaksbehandler(valgtSaksliste.sakslisteId, values.brukerIdent, values.checked, valgtAvdelingEnhet),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const pos = Math.ceil(saksbehandlere.length / 2);
  const avdelingensSaksbehandlereVenstreListe = saksbehandlere.slice(0, pos);
  const avdelingensSaksbehandlereHoyreListe = saksbehandlere.slice(pos);

  return (
    <HStack gap="1">
      <VStack gap="2" width="50%">
        {avdelingensSaksbehandlereVenstreListe.map(s => (
          <RhfCheckbox
            key={s.brukerIdent}
            name={s.brukerIdent}
            control={control}
            label={s.navn}
            onChange={isChecked =>
              knyttSaksbehandlerTilSaksliste({
                brukerIdent: s.brukerIdent,
                checked: isChecked,
              })
            }
          />
        ))}
      </VStack>
      <VStack gap="2">
        {avdelingensSaksbehandlereHoyreListe.map(s => (
          <RhfCheckbox
            key={s.brukerIdent}
            name={s.brukerIdent}
            control={control}
            label={s.navn}
            onChange={isChecked =>
              knyttSaksbehandlerTilSaksliste({
                brukerIdent: s.brukerIdent,
                checked: isChecked,
              })
            }
          />
        ))}
      </VStack>
    </HStack>
  );
};
