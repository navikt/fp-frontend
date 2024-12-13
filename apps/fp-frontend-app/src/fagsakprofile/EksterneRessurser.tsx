import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Box, Button, Detail, HStack } from '@navikt/ds-react';

import { AAREG_URL, AINNTEKT_URL, getGosysUrl, getModiaUrl } from '@navikt/fp-konstanter';
import { Fagsak } from '@navikt/fp-types';

export const EksterneRessurser = ({
  fagsak,
  arbeidstakerHref,
  ainntektHref,
}: {
  fagsak: Fagsak;
  ainntektHref: string | undefined;
  arbeidstakerHref: string | undefined;
}) => {
  return (
    <Box paddingInline="4" paddingBlock="2" background="bg-subtle" borderRadius="large">
      <HStack justify="space-between" align="center" wrap={false}>
        <Detail weight="semibold">
          <FormattedMessage id="EksterneRessurser.Lenke" />
        </Detail>
        <HStack gap="4">
          <a href={getModiaUrl(fagsak.bruker.fødselsnummer)} target="_blank" rel="noreferrer">
            <Button as="span" size="xsmall" variant="primary-neutral">
              <FormattedMessage id="EksterneRessurser.Modia" />
            </Button>
          </a>
          <a href={getGosysUrl(fagsak.bruker.fødselsnummer)} target="_blank" rel="noreferrer">
            <Button as="span" size="xsmall" variant="primary-neutral">
              <FormattedMessage id="EksterneRessurser.Gosys" />
            </Button>
          </a>
          <a
            href={ainntektHref ? `${ainntektHref}?saksnummer=${fagsak.saksnummer}` : AINNTEKT_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Button as="span" size="xsmall" variant="primary-neutral">
              <FormattedMessage id="EksterneRessurser.AInntekt" />
            </Button>
          </a>
          <a
            href={arbeidstakerHref ? `${arbeidstakerHref}?saksnummer=${fagsak.saksnummer}` : AAREG_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Button as="span" size="xsmall" variant="primary-neutral">
              <FormattedMessage id="EksterneRessurser.AAreg" />
            </Button>
          </a>
        </HStack>
      </HStack>
    </Box>
  );
};
