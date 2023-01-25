import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { BodyShort, Label } from '@navikt/ds-react';

import { Datepicker } from '@navikt/ft-form-hooks';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import {
  FaktaGruppe, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { FamilieHendelse, Soknad } from '@navikt/fp-types';
import { FieldEditedInfo } from '@navikt/fp-fakta-felles';

import styles from './omsorgsovertakelseFaktaPanel.less';

const getAntallBarn = (soknad: Soknad, familiehendelse: FamilieHendelse): number => {
  const antallBarn = soknad.antallBarn ? soknad.antallBarn : NaN;
  return familiehendelse.antallBarnTilBeregning ? familiehendelse.antallBarnTilBeregning : antallBarn;
};

export type FormValues = {
  omsorgsovertakelseDato?: string;
  foreldreansvarDato?: string;
}

interface OwnProps {
  readOnly: boolean;
  erAksjonspunktForeldreansvar: boolean;
  editedStatus: FieldEditedInfo;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  soknad: Soknad;
  familiehendelse: FamilieHendelse;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse) => FormValues;
}

/**
 * OmsorgsovertakelseFaktaPanel
 */
const OmsorgsovertakelseFaktaPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  erAksjonspunktForeldreansvar,
  editedStatus,
  alleMerknaderFraBeslutter,
  soknad,
  familiehendelse,
}) => {
  const intl = useIntl();
  const antallBarn = getAntallBarn(soknad, familiehendelse);

  return (
    <FaktaGruppe
      title={intl.formatMessage({
        id: erAksjonspunktForeldreansvar ? 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarInfo' : 'OmsorgOgForeldreansvarFaktaForm.OmsorgInfo',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.marginRight}>
            <Datepicker
              name="omsorgsovertakelseDato"
              label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.OmsorgsovertakelseDate' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
              isEdited={editedStatus.omsorgsovertakelseDato}
            />
          </FlexColumn>
          {erAksjonspunktForeldreansvar && (
            <FlexColumn className={styles.marginRight}>
              <Datepicker
                name="foreldreansvarDato"
                label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarDato' })}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
          )}
          <FlexColumn>
            <Label size="small"><FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.NrOfChildren" /></Label>
            <BodyShort size="small">{antallBarn}</BodyShort>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </FaktaGruppe>
  );
};

OmsorgsovertakelseFaktaPanel.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato,
  foreldreansvarDato: familiehendelse.foreldreansvarDato,
});

export default OmsorgsovertakelseFaktaPanel;
