import React, { FunctionComponent, useCallback,useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Link } from '@navikt/ds-react';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { hentVedtakDokumentLenke } from '@navikt/fp-konstanter';
import { InnsynVedtaksdokument, KodeverkMedNavn } from '@navikt/fp-types';

interface OwnProps {
  behandlingTypes: KodeverkMedNavn[];
  vedtaksdokumenter: InnsynVedtaksdokument[];
}

const VedtakDocuments: FunctionComponent<OwnProps> = ({ vedtaksdokumenter, behandlingTypes }) => {
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
      {showDocuments && (
        <>
          <VerticalSpacer fourPx />
          <FlexContainer>
            {vedtaksdokumenter.map(document => (
              <FlexRow key={document.behandlingUuid}>
                <FlexColumn>
                  <DateLabel dateString={document.opprettetDato} />
                </FlexColumn>
                <FlexColumn>
                  <Link href={hentVedtakDokumentLenke(document.behandlingUuid)} target="_blank">
                    {behandlingTypes.find(bt => bt.kode === document.tittel)?.navn || '-'}
                  </Link>
                </FlexColumn>
              </FlexRow>
            ))}
          </FlexContainer>
        </>
      )}
    </>
  );
};

export default VedtakDocuments;
