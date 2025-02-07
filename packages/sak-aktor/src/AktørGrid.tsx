import React, { type ReactElement, type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { VisittkortSakIndex } from '@navikt/fp-sak-visittkort';
import type { Aktor, KodeverkMedNavn } from '@navikt/fp-types';

interface Props {
  aktorInfo: Aktor;
  fagsakStatuser: KodeverkMedNavn[];
  fagsakYtelseTyper: KodeverkMedNavn[];
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

export const AktørGrid = ({ aktorInfo, fagsakStatuser, fagsakYtelseTyper, renderSomLenke }: Props) => {
  return (
    <>
      <VisittkortSakIndex bruker={aktorInfo.person} />
      <VStack gap="2" align="center" margin="5">
        {aktorInfo.fagsaker.length ? (
          aktorInfo.fagsaker.map(fagsak => {
            const fagsakYtelseNavn = fagsakYtelseTyper.find(s => s.kode === fagsak.fagsakYtelseType)?.navn;
            const fagsakStatusNavn = fagsakStatuser.find(s => s.kode === fagsak.status)?.navn;
            return (
              <React.Fragment key={fagsak.saksnummer}>
                {renderSomLenke(
                  undefined,
                  `${fagsakYtelseNavn} (${fagsak.saksnummer}) ${fagsakStatusNavn}`,
                  fagsak.saksnummer,
                )}
                <VerticalSpacer sixteenPx />
              </React.Fragment>
            );
          })
        ) : (
          <Heading size="small">
            <FormattedMessage id="AktoerGrid.IngenFagsaker" />
          </Heading>
        )}
      </VStack>
    </>
  );
};
