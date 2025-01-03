import React, { ReactElement, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { RelasjonsRolleType } from '@navikt/fp-kodeverk';
import { VisittkortSakIndex } from '@navikt/fp-sak-visittkort';
import { Aktor, Fagsak, KodeverkMedNavn } from '@navikt/fp-types';

interface Props {
  aktorInfo: Aktor;
  fagsakStatuser: KodeverkMedNavn[];
  fagsakYtelseTyper: KodeverkMedNavn[];
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

export const AktørGrid = ({ aktorInfo, fagsakStatuser, fagsakYtelseTyper, renderSomLenke }: Props) => {
  const vFagsak =
    aktorInfo.fagsaker.length > 0 ? aktorInfo.fagsaker[0] : { relasjonsRolleType: RelasjonsRolleType.MOR };

  return (
    <>
      <VisittkortSakIndex
        fagsak={vFagsak as Fagsak}
        fagsakPersoner={{
          bruker: aktorInfo.person,
        }}
      />
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
