import React, { useCallback, FunctionComponent } from 'react';
import { Select } from '@navikt/ds-react';
import { FloatRight } from '@navikt/ft-ui-komponenter';

import { setValueInLocalStorage } from './data/localStorageHelper';
import Avdeling from './typer/avdelingTsType';

interface OwnProps {
  setValgtAvdelingEnhet: (avdelingEnhet: string) => void;
  valgtAvdelingEnhet?: string;
  avdelinger: Avdeling[];
}

const Avdelingsvelger: FunctionComponent<OwnProps> = ({
  setValgtAvdelingEnhet,
  valgtAvdelingEnhet,
  avdelinger,
}) => {
  const velgAvdeling = useCallback((e) => {
    const index = e.target.value;
    setValueInLocalStorage('avdelingEnhet', index);
    setValgtAvdelingEnhet(index);
  }, [avdelinger]);

  return (
    <FloatRight>
      <Select size="small" hideLabel label="" onChange={velgAvdeling} value={valgtAvdelingEnhet}>
        {avdelinger.map((avdeling) => (
          <option key={avdeling.avdelingEnhet} value={avdeling.avdelingEnhet}>
            {`${avdeling.avdelingEnhet} ${avdeling.navn}`}
          </option>
        ))}
      </Select>
    </FloatRight>
  );
};

export default Avdelingsvelger;
