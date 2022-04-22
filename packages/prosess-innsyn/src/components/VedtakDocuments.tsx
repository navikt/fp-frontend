import React, { FunctionComponent, useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Column, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';

import { DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { InnsynVedtaksdokument, KodeverkMedNavn } from '@fpsak-frontend/types';
import { hentVedtakDokumentLenke } from '@fpsak-frontend/konstanter';

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
        <FormattedMessage id="DocumentListInnsyn.Vedtaksdokumentasjon" values={{ numberOfDocuments: vedtaksdokumenter.length }} />
        <i className={classNames('nav-frontend-chevron chevronboks ', showDocuments ? 'chevron--ned' : 'chevron--opp')} />
      </Lenke>
      {showDocuments && (
        <>
          <VerticalSpacer fourPx />
          {vedtaksdokumenter.map((document) => (
            <Row key={document.behandlingUuid}>
              <Column xs="2">
                <DateLabel dateString={document.opprettetDato} />
              </Column>
              <Column xs="10">
                <Lenke href={hentVedtakDokumentLenke(document.behandlingUuid)} target="_blank">
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
