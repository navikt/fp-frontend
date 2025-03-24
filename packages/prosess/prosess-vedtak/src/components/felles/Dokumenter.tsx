import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Button, VStack } from '@navikt/ds-react';

import type { Dokument } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { DokumentVisning } from './DokumentVisning.tsx';

import styles from './dokumenter.module.css';

interface Props {
  hovedDokument?: Dokument;
  andreDokumenter: Dokument[];
}

export const Dokumenter = ({ hovedDokument, andreDokumenter }: Props) => {
  const intl = useIntl();
  const { fagsak } = usePanelDataContext();

  const skalSkjuleAndreDokumenter = andreDokumenter?.length > 0;
  const [erAndreDokumenterSkjult, setErAndreDokumenterSkjult] = useState(skalSkjuleAndreDokumenter);

  return (
    hovedDokument && (
      <VStack gap="2">
        <DokumentVisning dokument={hovedDokument} fagsak={fagsak} />
        {skalSkjuleAndreDokumenter && (
          <Button
            className={styles.button}
            variant="tertiary"
            size="xsmall"
            type="button"
            icon={erAndreDokumenterSkjult ? <ChevronDownIcon aria-hidden /> : <ChevronUpIcon aria-hidden />}
            onClick={() => setErAndreDokumenterSkjult(!erAndreDokumenterSkjult)}
          >
            {erAndreDokumenterSkjult
              ? intl.formatMessage({ id: 'Dokumenter.VisAndreDokumenter' }, { antall: andreDokumenter.length })
              : intl.formatMessage({ id: 'Dokumenter.SkjulAndreDokumenter' }, { antall: andreDokumenter.length })}
          </Button>
        )}
        {!erAndreDokumenterSkjult && (
          <VStack gap="1" className={styles.andreDokumenter}>
            {andreDokumenter?.map(dokument => (
              <DokumentVisning key={dokument.dokumentId} dokument={dokument} fagsak={fagsak} />
            ))}
          </VStack>
        )}
      </VStack>
    )
  );
};
