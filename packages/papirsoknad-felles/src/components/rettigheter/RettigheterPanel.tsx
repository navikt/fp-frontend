import React from 'react';
import { injectIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { BorderBox } from '@fpsak-frontend/shared-components';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import SoknadData from '../../SoknadData';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './rettigheterPanel.less' or it... Remove this comment to see the full error message
import styles from './rettigheterPanel.less';

export const rettighet = {
  ANNEN_FORELDER_DOED: 'ANNEN_FORELDER_DOED',
  OVERTA_FORELDREANSVARET_ALENE: 'OVERTA_FORELDREANSVARET_ALENE',
  MANN_ADOPTERER_ALENE: 'MANN_ADOPTERER_ALENE',
  IKKE_RELEVANT: 'IKKE_RELEVANT',
};

type OwnProps = {
    intl: {};
    soknadData: any; // TODO: PropTypes.instanceOf(SoknadData)
    readOnly?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof RettigheterPanel.defaultProps;

/**
 * RettigheterPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'RettigheterPanel' implicitly has type 'any' becau... Remove this comment to see the full error message
export const RettigheterPanel = ({ readOnly, intl, soknadData }: Props) => (
  <BorderBox>
    <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.Rettigheter.Title' })}>
      <RadioGroupField name="rettigheter" direction="vertical" readOnly={readOnly}>
        <RadioOption
          className={styles.breakLabelText}
          label={{ id: 'Registrering.Rettigheter.AnnenForelderDoed' }}
          value={rettighet.ANNEN_FORELDER_DOED}
        />
        <RadioOption
          className={styles.breakLabelText}
          label={{ id: 'Registrering.Rettigheter.OvertaForeldreansvaretAlene' }}
          value={rettighet.OVERTA_FORELDREANSVARET_ALENE}
        />
        {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'ReactEle... Remove this comment to see the full error message */}
        {soknadData.getFamilieHendelseType() !== familieHendelseType.FODSEL && soknadData.getForeldreType() === foreldreType.FAR
        && (
        <RadioOption
          className={styles.breakLabelText}
          label={{ id: 'Registrering.Rettigheter.MannAdoptererAlene' }}
          value={rettighet.MANN_ADOPTERER_ALENE}
        />
        )}
        <RadioOption
          className={styles.breakLabelText}
          label={{ id: 'Registrering.Rettigheter.IkkeRelevant' }}
          value={rettighet.IKKE_RELEVANT}
        />
      </RadioGroupField>
    </SkjemaGruppe>
  </BorderBox>
);

RettigheterPanel.defaultProps = {
  readOnly: true,
};

export default injectIntl(RettigheterPanel);
