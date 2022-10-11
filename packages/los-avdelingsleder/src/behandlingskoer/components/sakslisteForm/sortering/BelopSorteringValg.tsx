import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  FlexColumn, FlexContainer, FlexRow, ArrowBox, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { Detail } from '@navikt/ds-react';
import { InputField, formHooks } from '@navikt/ft-form-hooks';

import useDebounce from '../useDebounce';

import styles from './sorteringVelger.less';

interface OwnProps {
  valgtSakslisteId: number;
  lagreSakslisteSorteringNumerisk: (params: {sakslisteId: number, fra: number, til: number, avdelingEnhet: string}) => Promise<any>;
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: (params: {avdelingEnhet: string}) => void;
  hentAntallOppgaver: (sakslisteId: number, avdelingEnhet: string) => void;
}

const BelopSorteringValg: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
  lagreSakslisteSorteringNumerisk,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}) => {
  const { watch } = formHooks.useFormContext();
  const fraVerdi = watch('fra');
  const tilVerdi = watch('til');

  const lagreFra = (nyFraVerdi: number) => lagreSakslisteSorteringNumerisk({
    sakslisteId: valgtSakslisteId, fra: nyFraVerdi, til: tilVerdi, avdelingEnhet: valgtAvdelingEnhet,
  }).then(() => {
    hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
    hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
  });
  const lagreTil = (nyTilVerdi: number) => lagreSakslisteSorteringNumerisk({
    sakslisteId: valgtSakslisteId, fra: fraVerdi, til: nyTilVerdi, avdelingEnhet: valgtAvdelingEnhet,
  }).then(() => {
    hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
    hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
  });

  const lagreFraDebounce = useDebounce<number>('fra', lagreFra);
  const lagreTilDebounce = useDebounce<number>('til', lagreTil);

  return (
    <ArrowBox>
      <Detail size="small">
        <FormattedMessage id="SorteringVelger.FiltrerPaHeltall" />
      </Detail>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <InputField
              name="fra"
              className={styles.dato}
              validate={[hasValidPosOrNegInteger]}
              onChange={lagreFraDebounce}
            />
          </FlexColumn>
          <FlexColumn>
            <Detail size="small" className={styles.beløp}>
              <FormattedMessage id="SorteringVelger.Valuta" />
            </Detail>
          </FlexColumn>
          <FlexColumn>
            <InputField
              name="til"
              className={styles.dato}
              validate={[hasValidPosOrNegInteger]}
              onChange={lagreTilDebounce}
            />
          </FlexColumn>
          <FlexColumn>
            <Detail size="small" className={styles.beløp}>
              <FormattedMessage id="SorteringVelger.Valuta" />
            </Detail>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
    </ArrowBox>
  );
};
export default BelopSorteringValg;
