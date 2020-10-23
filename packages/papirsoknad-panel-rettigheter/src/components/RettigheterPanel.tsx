import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { BorderBox } from '@fpsak-frontend/shared-components';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import styles from './rettigheterPanel.less';

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
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const RettigheterPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  soknadData,
}) => (
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
