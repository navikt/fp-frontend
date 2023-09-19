import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { Detail, HStack } from '@navikt/ds-react';
import { InputField } from '@navikt/ft-form-hooks';

import { useFormContext } from 'react-hook-form';
import useDebounce from '../useDebounce';

import styles from './sorteringVelger.module.css';

interface OwnProps {
  valgtSakslisteId: number;
  lagreSakslisteSorteringNumerisk: (params: {
    sakslisteId: number;
    fra: number;
    til: number;
    avdelingEnhet: string;
  }) => Promise<any>;
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void;
  hentAntallOppgaver: (sakslisteId: number, avdelingEnhet: string) => void;
}

const BelopSorteringValg: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
  lagreSakslisteSorteringNumerisk,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}) => {
  const { watch, trigger } = useFormContext();
  const fraVerdi = watch('fra');
  const tilVerdi = watch('til');

  const lagreFra = (nyFraVerdi: number) =>
    lagreSakslisteSorteringNumerisk({
      sakslisteId: valgtSakslisteId,
      fra: nyFraVerdi,
      til: tilVerdi,
      avdelingEnhet: valgtAvdelingEnhet,
    }).then(() => {
      hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
      hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
    });
  const lagreTil = (nyTilVerdi: number) =>
    lagreSakslisteSorteringNumerisk({
      sakslisteId: valgtSakslisteId,
      fra: fraVerdi,
      til: nyTilVerdi,
      avdelingEnhet: valgtAvdelingEnhet,
    }).then(() => {
      hentAntallOppgaver(valgtSakslisteId, valgtAvdelingEnhet);
      hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet });
    });

  const lagreFraDebounce = useDebounce<number>('fra', lagreFra, trigger);
  const lagreTilDebounce = useDebounce<number>('til', lagreTil, trigger);

  return (
    <ArrowBox>
      <Detail>
        <FormattedMessage id="SorteringVelger.FiltrerPaHeltall" />
      </Detail>
      <HStack gap="4">
        <InputField
          name="fra"
          className={styles.dato}
          validate={[hasValidPosOrNegInteger]}
          onChange={lagreFraDebounce}
        />
        <Detail className={styles.beløp}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
        <InputField
          name="til"
          className={styles.dato}
          validate={[hasValidPosOrNegInteger]}
          onChange={lagreTilDebounce}
        />
        <Detail className={styles.beløp}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
      </HStack>
      <VerticalSpacer eightPx />
    </ArrowBox>
  );
};
export default BelopSorteringValg;
