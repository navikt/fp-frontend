import { HStack, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import React, { FunctionComponent } from 'react';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosRestApi';
import Saksliste from '../../../typer/sakslisteAvdelingTsType';

import styles from './saksbehandlereForSakslisteForm.module.css';

interface OwnProps {
  valgtSaksliste: Saksliste;
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void;
  saksbehandlere: {
    brukerIdent: string;
    navn: string;
  }[];
}

const ValgAvSaksbehandlere: FunctionComponent<OwnProps> = ({
  valgtSaksliste,
  valgtAvdelingEnhet,
  hentAvdelingensSakslister,
  saksbehandlere,
}) => {
  const { startRequest: knyttSaksbehandlerTilSaksliste } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER,
  );

  const pos = Math.ceil(saksbehandlere.length / 2);
  const avdelingensSaksbehandlereVenstreListe = saksbehandlere.slice(0, pos);
  const avdelingensSaksbehandlereHoyreListe = saksbehandlere.slice(pos);

  return (
    <HStack>
      <VStack gap="2" className={styles.colLeft}>
        {avdelingensSaksbehandlereVenstreListe.map(s => (
          <CheckboxField
            key={s.brukerIdent}
            name={s.brukerIdent}
            label={s.navn}
            onChange={isChecked =>
              knyttSaksbehandlerTilSaksliste({
                sakslisteId: valgtSaksliste.sakslisteId,
                brukerIdent: s.brukerIdent,
                checked: isChecked,
                avdelingEnhet: valgtAvdelingEnhet,
              }).then(() => hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet }))
            }
          />
        ))}
      </VStack>
      <VStack gap="2">
        {avdelingensSaksbehandlereHoyreListe.map(s => (
          <CheckboxField
            key={s.brukerIdent}
            name={s.brukerIdent}
            label={s.navn}
            onChange={isChecked =>
              knyttSaksbehandlerTilSaksliste({
                sakslisteId: valgtSaksliste.sakslisteId,
                brukerIdent: s.brukerIdent,
                checked: isChecked,
                avdelingEnhet: valgtAvdelingEnhet,
              }).then(() => hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet }))
            }
          />
        ))}
      </VStack>
    </HStack>
  );
};

export default ValgAvSaksbehandlere;
