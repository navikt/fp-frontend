import React, { useCallback, FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Select } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

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
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Heading size="small"><FormattedMessage id="Avdelingsvelger.Avdeling" /></Heading>
        </FlexColumn>
        <FlexColumn>
          <Select size="small" hideLabel label="" onChange={velgAvdeling} value={valgtAvdelingEnhet}>
            {avdelinger.map((avdeling) => (
              <option key={avdeling.avdelingEnhet} value={avdeling.avdelingEnhet}>
                {`${avdeling.avdelingEnhet} ${avdeling.navn}`}
              </option>
            ))}
          </Select>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );
};

export default Avdelingsvelger;
