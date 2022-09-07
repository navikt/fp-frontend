import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import { Undertittel } from 'nav-frontend-typografi';
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

  const options = [{
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.AnnenForelderDoed' }),
    value: rettighet.ANNEN_FORELDER_DOED,
  }, {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.OvertaForeldreansvaretAlene' }),
    value: rettighet.OVERTA_FORELDREANSVARET_ALENE,
  }, {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.MannAdoptererAlene' }),
    value: rettighet.MANN_ADOPTERER_ALENE,
  }, {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.IkkeRelevant' }),
    value: rettighet.IKKE_RELEVANT,
  }];

  const visMannAdoptererAlene = soknadData.getFamilieHendelseType() !== familieHendelseType.FODSEL && soknadData.getForeldreType() === foreldreType.FAR;
  if (!visMannAdoptererAlene) {
    options.splice(2, 1);
  }

  return (
    <BorderBox>
      <Undertittel>{intl.formatMessage({ id: 'Registrering.Rettigheter.Title' })}</Undertittel>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="rettigheter"
        isReadOnly={readOnly}
        radios={options}
      />
    </BorderBox>
  );
};

export default RettigheterPanel;
