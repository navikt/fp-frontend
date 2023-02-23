import React, { useCallback, FunctionComponent } from 'react';
import { Select } from '@navikt/ds-react';

import { setValueInLocalStorage } from '../data/localStorageHelper';
import Avdeling from '../typer/avdelingTsType';

import styles from './avdelingsvelger.module.css';

interface OwnProps {
  setValgtAvdelingEnhet: (avdelingEnhet: string) => void;
  valgtAvdelingEnhet?: string;
  avdelinger?: Avdeling[];
}

const Avdelingsvelger: FunctionComponent<OwnProps> = ({
  setValgtAvdelingEnhet,
  valgtAvdelingEnhet,
  avdelinger,
}) => {
  const velgAvdeling = useCallback((e: any) => {
    const index = e.target.value;
    setValueInLocalStorage('avdelingEnhet', index);
    setValgtAvdelingEnhet(index);
  }, [avdelinger]);

  if (!avdelinger) {
    return null;
  }

  return (
    <div className={styles.padding}>
      <Select size="small" hideLabel label="" onChange={velgAvdeling} value={valgtAvdelingEnhet} className={styles.padding}>
        {avdelinger.map((avdeling) => (
          <option key={avdeling.avdelingEnhet} value={avdeling.avdelingEnhet}>
            {`${avdeling.avdelingEnhet} ${avdeling.navn}`}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Avdelingsvelger;
