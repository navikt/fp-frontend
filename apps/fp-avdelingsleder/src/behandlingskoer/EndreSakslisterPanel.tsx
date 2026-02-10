import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowDownIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { useMutation, useQuery } from '@tanstack/react-query';

import type { SaksbehandlerProfil } from '@navikt/fp-los-felles';

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

  const { mutate: lagNySakslisteOgHentAvdelingensSakslisterPåNytt } = useMutation({
    mutationFn: () => opprettNySaksliste(valgtAvdelingEnhet),
    onSuccess: data => {
      setValgtSakslisteId(Number.parseInt(data.sakslisteId, 10));
      void refetchSakslister();
    },
  });

  const valgtSaksliste = sakslister.find(s => s.sakslisteId === valgtSakslisteId);

  return (
    <GjeldendeSakslisterTabell
      sakslister={sakslister}
      setValgtSakslisteId={setValgtSakslisteId}
      valgtSakslisteId={valgtSakslisteId}
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
        {valgtSakslisteId && valgtSaksliste && (
          <React.Fragment key={valgtSaksliste.sakslisteId}>
            <UtvalgskriterierForSakslisteForm valgtSaksliste={valgtSaksliste} valgtAvdelingEnhet={valgtAvdelingEnhet} />
            <HStack gap="space-16" justify="center" align="center">
              <ArrowDownIcon
                className={styles['arrow']}
                title={intl.formatMessage({ id: 'EndreSakslisterPanel.KnyttetMotSaksbehandlere' })}
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
