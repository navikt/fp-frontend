import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowDownIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { useMutation, useQuery } from '@tanstack/react-query';

import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import {
  oppgaverForAvdelingAntallOptions,
  opprettNySaksliste,
  sakslisterForAvdelingOptions,
} from '../data/fplosAvdelingslederApi';
import { GjeldendeSakslisterTabell } from './GjeldendeSakslisterTabell';
import { SaksbehandlereForSakslisteForm } from './saksbehandlerForm/SaksbehandlereForSakslisteForm';
import { UtvalgskriterierForSakslisteForm } from './sakslisteForm/UtvalgskriterierForSakslisteForm';

import styles from './endreSakslisterPanel.module.css';

interface Props {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
}

export const EndreSakslisterPanel = ({ valgtAvdelingEnhet, avdelingensSaksbehandlere }: Props) => {
  const intl = useIntl();
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();

  const { data: oppgaverForAvdelingAntall } = useQuery(oppgaverForAvdelingAntallOptions(valgtAvdelingEnhet));
  const { data: sakslister, refetch: refetchSakslister } = useQuery(sakslisterForAvdelingOptions(valgtAvdelingEnhet));

  const { mutate: lagNySakslisteOgHentAvdelingensSakslisterPåNytt, data: nySakslisteObject } = useMutation({
    mutationFn: () => opprettNySaksliste(valgtAvdelingEnhet),
    onSuccess: () => {
      setValgtSakslisteId(undefined);
      refetchSakslister();
    },
  });

  const nyId = nySakslisteObject ? parseInt(nySakslisteObject.sakslisteId, 10) : undefined;
  const valgtSakId = valgtSakslisteId !== undefined ? valgtSakslisteId : nyId;

  const valgtSaksliste = sakslister.find(s => s.sakslisteId === valgtSakId);

  return (
    <GjeldendeSakslisterTabell
      sakslister={sakslister}
      setValgtSakslisteId={setValgtSakslisteId}
      valgtSakslisteId={valgtSakId}
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      oppgaverForAvdelingAntall={oppgaverForAvdelingAntall}
      lagNySaksliste={lagNySakslisteOgHentAvdelingensSakslisterPåNytt}
      resetValgtSakslisteId={() => setValgtSakslisteId(undefined)}
    >
      <div
        style={{
          marginBottom: '20px',
          marginLeft: '-55px',
          marginRight: '-55px',
        }}
      >
        {valgtSakId && valgtSaksliste && (
          <React.Fragment key={valgtSaksliste.sakslisteId}>
            <UtvalgskriterierForSakslisteForm valgtSaksliste={valgtSaksliste} valgtAvdelingEnhet={valgtAvdelingEnhet} />
            <HStack gap="4" justify="center">
              <ArrowDownIcon
                className={styles.arrow}
                title={intl.formatMessage({ id: 'EndreSakslisterPanel.Saksbehandlere' })}
              />
              <FormattedMessage id="EndreSakslisterPanel.KnyttetMotSaksbehandlere" />
            </HStack>
            <SaksbehandlereForSakslisteForm
              valgtSaksliste={valgtSaksliste}
              valgtAvdelingEnhet={valgtAvdelingEnhet}
              avdelingensSaksbehandlere={avdelingensSaksbehandlere}
            />
          </React.Fragment>
        )}
      </div>
    </GjeldendeSakslisterTabell>
  );
};
