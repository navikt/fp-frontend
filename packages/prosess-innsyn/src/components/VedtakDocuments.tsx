import React, { FunctionComponent, useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import { DateLabel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { InnsynVedtaksdokument, KodeverkMedNavn } from '@fpsak-frontend/types';

/* TODO Ta i bruk fpsakApi - Flytt url ut av komponent */
const DOCUMENT_SERVER_URL = '/fpsak/api/vedtak/hent-vedtaksdokument';
const getLink = (document: InnsynVedtaksdokument): string => `${DOCUMENT_SERVER_URL}?behandlingId=${document.dokumentId}`;

interface OwnProps {
  behandlingTypes: KodeverkMedNavn[];
  vedtaksdokumenter: InnsynVedtaksdokument[];
}

/**
 * VedtakDocuments
 *
 * Presentasjonskomponent.
 */
const VedtakDocuments: FunctionComponent<OwnProps> = ({
  vedtaksdokumenter,
  behandlingTypes,
}) => {
  const [showDocuments, setShowDocuments] = useState(false);
  const toggleDocuments = useCallback((evt) => {
    setShowDocuments(!showDocuments);
    evt.preventDefault();
  }, [showDocuments]);

  if (vedtaksdokumenter.length === 0) {
    return <FormattedMessage id="DocumentListInnsyn.Vedtaksdokumentasjon" values={{ numberOfDocuments: 0 }} />;
  }

  return (
    <>
      <Lenke href="#" onClick={toggleDocuments}>
        <Normaltekst>
          <FormattedMessage id="DocumentListInnsyn.Vedtaksdokumentasjon" values={{ numberOfDocuments: vedtaksdokumenter.length }} />
          <i className={classNames('nav-frontend-chevron chevronboks ', showDocuments ? 'chevron--ned' : 'chevron--opp')} />
        </Normaltekst>
      </Lenke>
      {showDocuments && (
        <>
          <VerticalSpacer fourPx />
          {vedtaksdokumenter.map((document) => (
            <Row key={document.dokumentId}>
              <Column xs="2">
                <DateLabel dateString={document.opprettetDato} />
              </Column>
              <Column xs="10">
                <Lenke href={getLink(document)} target="_blank">
                  {behandlingTypes.find((bt) => bt.kode === document.tittel).navn}
                </Lenke>
              </Column>
            </Row>
          ))}
        </>
      )}
    </>
  );
};

export default VedtakDocuments;
