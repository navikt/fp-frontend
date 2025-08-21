import { FormattedMessage } from 'react-intl';

import { Button, VStack } from '@navikt/ds-react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import type { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { grupperOptions, opprettGruppe } from '../data/fplosAvdelingslederApi';
import { GrupperTabell } from './GrupperTabell';

interface Props {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
}

export const GrupperPanel = ({ valgtAvdelingEnhet, avdelingensSaksbehandlere }: Props) => {
  const { data: grupper, refetch: hentGrupperPåNytt } = useQuery(grupperOptions(valgtAvdelingEnhet));

  const { mutate: lagGruppe, status } = useMutation({
    mutationFn: () => opprettGruppe(valgtAvdelingEnhet),
    onSuccess: () => {
      hentGrupperPåNytt();
    },
  });

  if (!grupper) {
    return <LoadingPanel />;
  }

  return (
    <VStack gap="space-20" align="start">
      <GrupperTabell
        valgAvdeldingEnhet={valgtAvdelingEnhet}
        grupper={grupper}
        avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      />
      <Button
        size="small"
        variant="secondary"
        loading={status === 'pending'}
        disabled={status === 'pending'}
        tabIndex={0}
        onClick={() => lagGruppe()}
      >
        <FormattedMessage id="GrupperPanel.OpprettGruppe" />
      </Button>
    </VStack>
  );
};
