import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Lenkepanel from 'nav-frontend-lenkepanel';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import VisittkortSakIndex from '@fpsak-frontend/sak-visittkort';
import { Fagsak, FagsakPerson, AlleKodeverk } from '@fpsak-frontend/types';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';

import styles from './aktoerGrid.less';

interface OwnProps {
  aktorInfo: {
    fagsaker: Fagsak[];
    person: FagsakPerson;
  };
  alleKodeverk: AlleKodeverk;
  finnPathToFagsak: (saksnummer: string) => string;
}

const AktoerGrid: FunctionComponent<OwnProps> = ({
  aktorInfo,
  alleKodeverk,
  finnPathToFagsak,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  const vFagsak = aktorInfo.fagsaker.length > 0 ? aktorInfo.fagsaker[0] : { relasjonsRolleType: { kode: relasjonsRolleType.MOR } };

  return (
    <>
      <VisittkortSakIndex
        fagsak={vFagsak as Fagsak}
        fagsakPersoner={{
          bruker: aktorInfo.person,
        }}
      />
      <div className={styles.list}>
        {aktorInfo.fagsaker.length ? aktorInfo.fagsaker.map((fagsak) => (
          <Lenkepanel
            linkCreator={(props) => (
              <Link to={finnPathToFagsak(fagsak.saksnummer)} className={props.className}>
                {props.children}
              </Link>
            )}
            key={fagsak.saksnummer}
            href="#"
            tittelProps="normaltekst"
          >
            {getKodeverknavn(fagsak.fagsakYtelseType)}
            {` (${fagsak.saksnummer}) `}
            {getKodeverknavn(fagsak.status)}
          </Lenkepanel>
        )) : <FormattedMessage id="AktoerGrid.IngenFagsaker" />}
      </div>
    </>
  );
};

export default AktoerGrid;
