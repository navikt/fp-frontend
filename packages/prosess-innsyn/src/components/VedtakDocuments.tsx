import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import classNames from 'classnames';

import { DateLabel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { InnsynVedtaksdokument, KodeverkMedNavn } from '@fpsak-frontend/types';

/* TODO Ta i bruk fpsakApi - Flytt url ut av komponent */
const DOCUMENT_SERVER_URL = '/fpsak/api/vedtak/hent-vedtaksdokument';
const getLink = (document: InnsynVedtaksdokument) => `${DOCUMENT_SERVER_URL}?behandlingId=${document.dokumentId}`;

interface OwnProps {
  behandlingTypes: KodeverkMedNavn[];
  vedtaksdokumenter: InnsynVedtaksdokument[];
}

interface OwnState {
  showDocuments: boolean;
}

/**
 * VedtakDocuments
 *
 * Presentasjonskomponent.
 */
class VedtakDocuments extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);

    this.toggleDocuments = this.toggleDocuments.bind(this);
    this.state = {
      showDocuments: false,
    };
  }

  toggleDocuments(evt: any) {
    this.setState((prevState: any) => ({
      showDocuments: !prevState.showDocuments,
    }));
    evt.preventDefault();
  }

  render() {
    const { vedtaksdokumenter, behandlingTypes } = this.props;
    const { showDocuments } = this.state;
    return (
      <>
        <a href="" onClick={this.toggleDocuments} className="lenke lenke--frittstaende">
          <Normaltekst>
            <FormattedMessage id="DocumentListInnsyn.Vedtaksdokumentasjon" values={{ numberOfDocuments: vedtaksdokumenter.length }} />
            <i className={classNames('nav-frontend-chevron chevronboks ', showDocuments ? 'chevron--ned' : 'chevron--opp')} />
          </Normaltekst>
        </a>
        {showDocuments && (
          <>
            <VerticalSpacer fourPx />
            {vedtaksdokumenter.map((document) => (
              <Row key={document.dokumentId}>
                <Column xs="2">
                  <DateLabel dateString={document.opprettetDato} />
                </Column>
                <Column xs="10">
                  <a href={getLink(document)} className="lenke lenke--frittstaende" target="_blank" rel="noopener noreferrer">
                    {behandlingTypes.find((bt) => bt.kode === document.tittel).navn}
                  </a>
                </Column>
              </Row>
            ))}
          </>
        )}
      </>
    );
  }
}

export default VedtakDocuments;
