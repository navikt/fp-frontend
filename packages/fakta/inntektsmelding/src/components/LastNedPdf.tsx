import { FormattedMessage } from 'react-intl';

import { ArrowForwardIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';
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
  const tittel = `IM ${arbeidsgiverOpplysninger.navn} - ${dateFormat(inntektsmelding.mottattDato)}`;
  const manglerTilgang = !inntektsmelding.dokumentId;

  const knapp = (
    <Button
      type="button"
      onClick={() => {
        åpneDokument(fagsak.saksnummer, inntektsmelding.journalpostId, inntektsmelding.dokumentId, tittel);
      }}
      variant="secondary"
      size="small"
      icon={<ArrowForwardIcon />}
      disabled={manglerTilgang}
    >
      <FormattedMessage id="InntektsmeldingFaktaPanel.modal.trigger" />
    </Button>
  );

  if (manglerTilgang) {
    return (
      <Tooltip content="Mangler tilgang">
        <span>{knapp}</span>
      </Tooltip>
    );
  }

  return knapp;
};
