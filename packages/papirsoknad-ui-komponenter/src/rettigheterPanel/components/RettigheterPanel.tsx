import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import SoknadData from '../../felles/SoknadData';

export const rettighet = {
  ANNEN_FORELDER_DOED: 'ANNEN_FORELDER_DOED',
  OVERTA_FORELDREANSVARET_ALENE: 'OVERTA_FORELDREANSVARET_ALENE',
  MANN_ADOPTERER_ALENE: 'MANN_ADOPTERER_ALENE',
  IKKE_RELEVANT: 'IKKE_RELEVANT',
};

interface OwnProps {
  soknadData: SoknadData;
  readOnly?: boolean;
}

/**
 * RettigheterPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const RettigheterPanel: FunctionComponent<OwnProps> = ({
  readOnly = true,
  soknadData,
}) => {
  const intl = useIntl();

  return (
    <BorderBox>
      <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.Rettigheter.Title' })}>
        <RadioGroupField name="rettigheter" direction="vertical" readOnly={readOnly}>
          <RadioOption
            label={intl.formatMessage({ id: 'Registrering.Rettigheter.AnnenForelderDoed' })}
            value={rettighet.ANNEN_FORELDER_DOED}
          />
          <RadioOption
            label={intl.formatMessage({ id: 'Registrering.Rettigheter.OvertaForeldreansvaretAlene' })}
            value={rettighet.OVERTA_FORELDREANSVARET_ALENE}
          />
          {soknadData.getFamilieHendelseType() !== familieHendelseType.FODSEL && soknadData.getForeldreType() === foreldreType.FAR && (
            <RadioOption
              label={intl.formatMessage({ id: 'Registrering.Rettigheter.MannAdoptererAlene' })}
              value={rettighet.MANN_ADOPTERER_ALENE}
            />
          )}
          <RadioOption
            label={intl.formatMessage({ id: 'Registrering.Rettigheter.IkkeRelevant' })}
            value={rettighet.IKKE_RELEVANT}
          />
        </RadioGroupField>
      </SkjemaGruppe>
    </BorderBox>
  );
};

export default RettigheterPanel;
