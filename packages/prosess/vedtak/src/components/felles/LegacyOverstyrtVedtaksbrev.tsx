import { FormattedMessage } from 'react-intl';

import { ArrowForwardIcon } from '@navikt/aksel-icons';
import { BodyShort, Label, Link, VStack } from '@navikt/ds-react';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import type { BehandlingFpSak } from '@navikt/fp-types';

import type { VedtakForhåndsvisData } from '../../types/VedtakForhåndsvisData';

// Dette panelet viser overstyrte vedtaksbrev for eldra avlutta saker (Før ein tok i bruk editor.js)

interface Props {
  forhåndsvisOverstyrtBrev: (data: VedtakForhåndsvisData) => void;
  behandling: BehandlingFpSak;
}

export const LegacyOverstyrtVedtaksbrev = ({ forhåndsvisOverstyrtBrev, behandling }: Props) => {
  const { overskrift, fritekstbrev } = behandling.behandlingsresultat ?? {};

  return (
    <>
      <AvsnittSkiller />
      <Link
        href="#"
        onClick={() => {
          forhåndsvisOverstyrtBrev({
            automatiskVedtaksbrev: false,
            dokumentMal: 'FRITEK',
            tittel: overskrift ?? undefined,
            fritekst: fritekstbrev ?? undefined,
          });
        }}
      >
        <FormattedMessage id="LegacyOverstyrtVedtaksbrev.ForhandsvisManueltVedtaksbrev" />
        <ArrowForwardIcon />
      </Link>
      <AvsnittSkiller />
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage id="LegacyOverstyrtVedtaksbrev.Overskrift" />
        </Label>
        <BodyShort>{overskrift}</BodyShort>
      </VStack>
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage id="LegacyOverstyrtVedtaksbrev.Innhold" />
        </Label>
        <BodyShort>{fritekstbrev}</BodyShort>
      </VStack>
    </>
  );
};
