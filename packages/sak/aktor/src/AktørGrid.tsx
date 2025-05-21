import React, { type ReactElement, type ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import type { FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { VisittkortSakIndex } from '@navikt/fp-sak-visittkort';
import type { Aktor, KodeverkMedNavn } from '@navikt/fp-types';

interface Props {
  aktorInfo: Aktor;
  fagsakStatuser: KodeverkMedNavn<FagsakStatus>[];
  fagsakYtelseTyper: KodeverkMedNavn<FagsakYtelseType>[];
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

export const AktørGrid = ({ aktorInfo, fagsakStatuser, fagsakYtelseTyper, renderSomLenke }: Props) => {
  return (
    <>
      <VisittkortSakIndex bruker={aktorInfo.person} />
      <VStack gap="4" align="center" margin="5">
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
