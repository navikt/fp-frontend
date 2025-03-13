import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { HStack, Link } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { hentVedtakDokumentLenke } from '@navikt/fp-konstanter';
import type { InnsynVedtaksdokument, KodeverkMedNavn } from '@navikt/fp-types';

interface Props {
  behandlingTypes: KodeverkMedNavn[];
  vedtaksdokumenter: InnsynVedtaksdokument[];
}

export const VedtakDocuments = ({ vedtaksdokumenter, behandlingTypes }: Props) => {
  const [showDocuments, setShowDocuments] = useState(false);
  const toggleDocuments = useCallback(
    (evt: React.MouseEvent) => {
      setShowDocuments(!showDocuments);
      evt.preventDefault();
    },
    [showDocuments],
  );

  if (vedtaksdokumenter.length === 0) {
    return <FormattedMessage id="DocumentListInnsyn.Vedtaksdokumentasjon" values={{ numberOfDocuments: 0 }} />;
  }

  return (
    <>
      <Link href="#" onClick={toggleDocuments}>
        <FormattedMessage
          id="DocumentListInnsyn.Vedtaksdokumentasjon"
          values={{ numberOfDocuments: vedtaksdokumenter.length }}
        />
        {showDocuments ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </Link>
      {showDocuments &&
        vedtaksdokumenter.map(document => (
          <HStack gap="2" key={document.behandlingUuid}>
            <DateLabel dateString={document.opprettetDato} />
            <Link href={hentVedtakDokumentLenke(document.behandlingUuid)} target="_blank">
              {behandlingTypes.find(bt => bt.kode === document.tittel)?.navn || '-'}
            </Link>
          </HStack>
        ))}
    </>
  );
};
