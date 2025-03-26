import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Button, VStack } from '@navikt/ds-react';

import type { OppgaveDokument } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { DokumentVisning } from './DokumentVisning.tsx';

import styles from './dokumenter.module.css';

interface Props {
  dokumenter: OppgaveDokument[];
}

export const Dokumenter = ({ dokumenter }: Props) => {
  const intl = useIntl();
  const { fagsak } = usePanelDataContext();

  const [erDokumenterSkjult, setErDokumenterSkjult] = useState(true);

  return (
    <VStack gap="2">
      <Button
        className={styles.button}
        variant="tertiary"
        size="xsmall"
        type="button"
        icon={erDokumenterSkjult ? <ChevronDownIcon aria-hidden /> : <ChevronUpIcon aria-hidden />}
        onClick={() => setErDokumenterSkjult(!erDokumenterSkjult)}
      >
        {erDokumenterSkjult
          ? intl.formatMessage({ id: 'Dokumenter.VisDokumenter' }, { antall: dokumenter.length })
          : intl.formatMessage({ id: 'Dokumenter.SkjulDokumenter' }, { antall: dokumenter.length })}
      </Button>
      {!erDokumenterSkjult && (
        <VStack gap="1" className={styles.andreDokumenter}>
          {dokumenter?.map(dokument => (
            <DokumentVisning key={dokument.dokumentId} dokument={dokument} fagsak={fagsak} />
          ))}
        </VStack>
      )}
    </VStack>
  );
};
