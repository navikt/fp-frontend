import React, { useRef } from 'react';
import { FormattedMessage, RawIntlProvider, useIntl } from 'react-intl';

import { ArrowForwardIcon } from '@navikt/aksel-icons';
import { BodyLong, Button, Modal } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { Fagsak, Inntektsmelding } from '@navikt/fp-types';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);
export const LastNedPdfKnapp = ({
  inntektsmelding,
  saksnummer,
}: {
  saksnummer: string;
  inntektsmelding: Inntektsmelding;
}) => {
  return (
    <RawIntlProvider value={intl}>
      <Button
        type="button"
        onClick={() => {
          window.open(
            hentDokumentLenke(saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId),
            '_blank',
          );
        }}
        variant="secondary"
        size="small"
        icon={<ArrowForwardIcon />}
      >
        <FormattedMessage id="Inntektsmelding.LastNedPDF.trigger" />
      </Button>
    </RawIntlProvider>
  );
};
// TODO: denne skal taes i bruk når all info fra PDF er tilgjengelig i GUI.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LastNedPdfModalKnapp = ({ inntektsmelding, fagsak }: { fagsak: Fagsak; inntektsmelding: Inntektsmelding }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const intl = useIntl();

  return (
    <RawIntlProvider value={intl}>
      <Button icon={<ArrowForwardIcon />} variant="secondary" size="small" onClick={() => ref.current?.showModal()}>
        <FormattedMessage id="Inntektsmelding.LastNedPDF.trigger" />
      </Button>

      <Modal ref={ref} header={{ heading: intl.formatMessage({ id: 'Inntektsmelding.LastNedPDF.heading' }) }}>
        <Modal.Body>
          <BodyLong>
            <FormattedMessage id="Inntektsmelding.LastNedPDF.body" />
          </BodyLong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            onClick={() => {
              window.open(
                hentDokumentLenke(fagsak.saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId),
                '_blank',
              );
              ref.current?.close();
            }}
            variant="primary"
          >
            <FormattedMessage id="Inntektsmelding.LastNedPDF.button.primary" />
          </Button>
          <Button type="button" variant="secondary" onClick={() => ref.current?.close()}>
            <FormattedMessage id="Inntektsmelding.LastNedPDF.button.secondary" />
          </Button>
        </Modal.Footer>
      </Modal>
    </RawIntlProvider>
  );
};
