import React from 'react';

import { HStack, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteSaksbehandler, LosUrl } from '../../data/fplosAvdelingslederApi';
import { SakslisteAvdeling } from '../../typer/sakslisteAvdelingTsType';

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
    <HStack>
      <VStack gap="2" width="50%">
        {avdelingensSaksbehandlereVenstreListe.map(s => (
          <CheckboxField
            key={s.brukerIdent}
            name={s.brukerIdent}
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
          <CheckboxField
            key={s.brukerIdent}
            name={s.brukerIdent}
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
