import React from 'react';
import { useIntl } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';

import { SoknadData } from '../../felles/SoknadData';

export const rettighet = {
  ANNEN_FORELDER_DOED: 'ANNEN_FORELDER_DOED',
  OVERTA_FORELDREANSVARET_ALENE: 'OVERTA_FORELDREANSVARET_ALENE',
  MANN_ADOPTERER_ALENE: 'MANN_ADOPTERER_ALENE',
  IKKE_RELEVANT: 'IKKE_RELEVANT',
};

interface Props {
  soknadData: SoknadData;
  readOnly?: boolean;
}

/**
 * RettigheterPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const RettigheterPanel = ({ readOnly = true, soknadData }: Props) => {
  const intl = useIntl();

  const options = [
    {
      label: intl.formatMessage({ id: 'Registrering.Rettigheter.AnnenForelderDoed' }),
      value: rettighet.ANNEN_FORELDER_DOED,
    },
    {
      label: intl.formatMessage({ id: 'Registrering.Rettigheter.OvertaForeldreansvaretAlene' }),
      value: rettighet.OVERTA_FORELDREANSVARET_ALENE,
    },
    {
      label: intl.formatMessage({ id: 'Registrering.Rettigheter.MannAdoptererAlene' }),
      value: rettighet.MANN_ADOPTERER_ALENE,
    },
    {
      label: intl.formatMessage({ id: 'Registrering.Rettigheter.IkkeRelevant' }),
      value: rettighet.IKKE_RELEVANT,
    },
  ];

  const visMannAdoptererAlene =
    soknadData.getFamilieHendelseType() !== FamilieHendelseType.FODSEL &&
    soknadData.getForeldreType() === ForeldreType.FAR;
  if (!visMannAdoptererAlene) {
    options.splice(2, 1);
  }

  return (
    <BorderBox>
      <Heading size="small">{intl.formatMessage({ id: 'Registrering.Rettigheter.Title' })}</Heading>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel name="rettigheter" isReadOnly={readOnly} radios={options} />
    </BorderBox>
  );
};
