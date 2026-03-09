import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { SakslisteDto } from '@navikt/fp-types';

import { lagreSakslisteSaksbehandler, LosUrl } from '../../data/fplosAvdelingslederApi';

export type FormValues = {
  [key: string]: boolean;
};

interface Props {
  valgtSaksliste: SakslisteDto;
  valgtAvdelingEnhet: string;
  saksbehandlere: {
    brukerIdent: string;
    navn: string;
  }[];
}

export const ValgAvSaksbehandlere = ({ valgtSaksliste, valgtAvdelingEnhet, saksbehandlere }: Props) => {
  const queryClient = useQueryClient();

  const { control } = useFormContext<FormValues>();

  const { mutate: knyttSaksbehandlerTilSaksliste } = useMutation({
    mutationFn: (values: { brukerIdent: string; checked: boolean }) =>
      lagreSakslisteSaksbehandler(valgtSaksliste.sakslisteId, values.brukerIdent, values.checked, valgtAvdelingEnhet),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  return saksbehandlere.length === 0 ? (
    <Detail>
      <FormattedMessage id="ValgAvSaksbehandlere.IngenSaksbehandlere" />
    </Detail>
  ) : (
    <ul className="columns-3xs list-none">
      {saksbehandlere.map(s => (
        <li key={s.brukerIdent}>
          <RhfCheckbox
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
        </li>
      ))}
    </ul>
  );
};
