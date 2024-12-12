import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowDownIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { useMutation } from '@tanstack/react-query';

import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import {
  getOppgaverForAvdelingAntall,
  getSakslisterForAvdeling,
  opprettNySaksliste,
} from '../data/fplosAvdelingslederApi';
import { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
import { GjeldendeSakslisterTabell } from './GjeldendeSakslisterTabell';
import { SaksbehandlereForSakslisteForm } from './saksbehandlerForm/SaksbehandlereForSakslisteForm';
import { UtvalgskriterierForSakslisteForm } from './sakslisteForm/UtvalgskriterierForSakslisteForm';

import styles from './endreSakslisterPanel.module.css';

const EMPTY_ARRAY: SakslisteAvdeling[] = [];

interface Props {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
}

export const EndreSakslisterPanel = ({ valgtAvdelingEnhet, avdelingensSaksbehandlere }: Props) => {
  const intl = useIntl();
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();

  const { mutate: hentOppgaverForAvdelingAntall, data: oppgaverForAvdelingAntall } = useMutation({
    mutationFn: () => getOppgaverForAvdelingAntall(valgtAvdelingEnhet),
  });

  const { mutate: hentAvdelingensSakslister, data: sakslister = EMPTY_ARRAY } = useMutation({
    mutationFn: () => getSakslisterForAvdeling(valgtAvdelingEnhet),
  });

  useEffect(() => {
    hentOppgaverForAvdelingAntall();
    hentAvdelingensSakslister();
  }, [valgtAvdelingEnhet]);

  const { mutate: lagNySakslisteOgHentAvdelingensSakslisterPåNytt, data: nySakslisteObject } = useMutation({
    mutationFn: async () => {
      const nySaksliste = await opprettNySaksliste(valgtAvdelingEnhet);
      setValgtSakslisteId(undefined);
      hentAvdelingensSakslister();
      return nySaksliste;
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
      hentAvdelingensSakslister={hentAvdelingensSakslister}
      content={
        <div
          style={{
            marginBottom: '20px',
            marginLeft: '-55px',
            marginRight: '-55px',
          }}
        >
          {valgtSakId && valgtSaksliste && (
            <React.Fragment key={valgtSaksliste.sakslisteId}>
              <UtvalgskriterierForSakslisteForm
                valgtSaksliste={valgtSaksliste}
                valgtAvdelingEnhet={valgtAvdelingEnhet}
                hentAvdelingensSakslister={hentAvdelingensSakslister}
                hentOppgaverForAvdelingAntall={hentOppgaverForAvdelingAntall}
              />
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
                hentAvdelingensSakslister={hentAvdelingensSakslister}
              />
            </React.Fragment>
          )}
        </div>
      }
    />
  );
};
