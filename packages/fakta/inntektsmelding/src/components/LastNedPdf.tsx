import { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowForwardIcon } from '@navikt/aksel-icons';
import { BodyLong, Button, Modal } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysninger, Fagsak, Inntektsmelding } from '@navikt/fp-types';
import { åpneDokument } from '@navikt/fp-utils';

export const LastNedPdfKnapp = ({
  inntektsmelding,
  fagsak,
  arbeidsgiverOpplysninger,
}: {
  fagsak: Fagsak;
  inntektsmelding: Inntektsmelding;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger;
}) => {
  const tittel = `IM ${arbeidsgiverOpplysninger.navn} - ${dateFormat(inntektsmelding.motattDato)}`;
  return (
    <Button
      type="button"
      onClick={() => {
        åpneDokument(fagsak.saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId, tittel);
      }}
      variant="secondary"
      size="small"
      icon={<ArrowForwardIcon />}
    >
      <FormattedMessage id="InntektsmeldingFaktaPanel.modal.trigger" />
    </Button>
  );
};
// TODO: denne skal taes i bruk når all info fra PDF er tilgjengelig i GUI.

export const LastNedPdfModalKnapp = ({
  inntektsmelding,
  fagsak,
}: {
  fagsak: Fagsak;
  inntektsmelding: Inntektsmelding;
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  const intl = useIntl();

  return (
    <>
      <Button icon={<ArrowForwardIcon />} variant="secondary" size="small" onClick={() => ref.current?.showModal()}>
        <FormattedMessage id="InntektsmeldingFaktaPanel.modal.trigger" />
      </Button>

      <Modal ref={ref} header={{ heading: intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.modal.heading' }) }}>
        <Modal.Body>
          <BodyLong>
            <FormattedMessage id="InntektsmeldingFaktaPanel.modal.body" />
          </BodyLong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            onClick={() => {
              åpneDokument(fagsak.saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId);
              ref.current?.close();
            }}
            variant="primary"
          >
            <FormattedMessage id="InntektsmeldingFaktaPanel.modal.button.primary" />
          </Button>
          <Button type="button" variant="secondary" onClick={() => ref.current?.close()}>
            <FormattedMessage id="InntektsmeldingFaktaPanel.modal.button.secondary" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
