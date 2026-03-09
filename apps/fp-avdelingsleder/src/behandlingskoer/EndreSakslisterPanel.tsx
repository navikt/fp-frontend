import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Detail, HStack, Label, Loader, VStack } from '@navikt/ds-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { SaksbehandlerDto, SakslisteDto } from '@navikt/fp-types';

import {
  LosUrl,
  oppgaverForAvdelingAntallOptions,
  opprettNySaksliste,
  sakslisterForAvdelingOptions,
  slettSaksliste,
} from '../data/fplosAvdelingslederApi';
import { GjeldendeSakslisterTabell } from './GjeldendeSakslisterTabell';
import { SletteSakslisteModal } from './SletteSakslisteModal';

interface Props {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerDto[];
}

export const EndreSakslisterPanel = ({ valgtAvdelingEnhet, avdelingensSaksbehandlere }: Props) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();
  const [valgtSakslisteForSletting, setValgtSakslisteForSletting] = useState<SakslisteDto>();

  const queryClient = useQueryClient();

  const { data: oppgaverForAvdelingAntall } = useQuery(oppgaverForAvdelingAntallOptions(valgtAvdelingEnhet));

  const { data: sakslister, refetch: refetchSakslister } = useQuery(sakslisterForAvdelingOptions(valgtAvdelingEnhet));

  const { mutate: lagNySakslisteOgHentAvdelingensSakslisterPåNytt } = useMutation({
    mutationFn: () => opprettNySaksliste(valgtAvdelingEnhet),
    onSuccess: data => {
      setValgtSakslisteId(Number.parseInt(data.sakslisteId, 10));
      void refetchSakslister();
    },
  });
  const { mutate: fjernSaksliste } = useMutation({
    mutationFn: (values: { sakslisteId: number }) => slettSaksliste(values.sakslisteId, valgtAvdelingEnhet),
    onSuccess: () => {
      setValgtSakslisteId(undefined);
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING, valgtAvdelingEnhet],
      });
    },
  });

  const fjernSakslisteOgSkjulModal = (saksliste: SakslisteDto): void => {
    setValgtSakslisteForSletting(undefined);
    fjernSaksliste({ sakslisteId: saksliste.sakslisteId });
  };

  return (
    <VStack gap="space-16">
      <HStack justify="space-between">
        <Label size="small">
          <FormattedMessage id="GjeldendeSakslisterTabell.GjeldendeLister" />
        </Label>
        <Box background="neutral-moderate" borderRadius="8" paddingBlock="space-8" paddingInline="space-16">
          <VStack align="end">
            <Detail>
              <FormattedMessage id="GjeldendeSakslisterTabell.OppgaverForAvdeling" />
            </Detail>
            {oppgaverForAvdelingAntall === undefined ? (
              <Loader size="xsmall" />
            ) : (
              <BodyShort size="large">{oppgaverForAvdelingAntall}</BodyShort>
            )}
          </VStack>
        </Box>
      </HStack>

      <GjeldendeSakslisterTabell
        valgtAvdelingEnhet={valgtAvdelingEnhet}
        valgtSakslisteId={valgtSakslisteId}
        setValgtSakslisteId={setValgtSakslisteId}
        setValgtSakslisteForSletting={setValgtSakslisteForSletting}
        sakslister={sakslister}
        avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      />

      <Button
        className="self-start"
        size="xsmall"
        variant="tertiary"
        onClick={() => lagNySakslisteOgHentAvdelingensSakslisterPåNytt()}
        icon={<PlusCircleIcon />}
        iconPosition="right"
      >
        <FormattedMessage id="GjeldendeSakslisterTabell.LeggTilListe" />
      </Button>
      {valgtSakslisteForSletting && (
        <SletteSakslisteModal
          valgtSaksliste={valgtSakslisteForSletting}
          cancel={() => setValgtSakslisteForSletting(undefined)}
          submit={fjernSakslisteOgSkjulModal}
        />
      )}
    </VStack>
  );
};
