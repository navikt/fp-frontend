import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { DatepickerField, InputField } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import { FaktaGruppe } from '@fpsak-frontend/shared-components';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';
import { FieldEditedInfo } from '@fpsak-frontend/fakta-felles';

export type FormValues = {
  omsorgsovertakelseDato?: string;
  foreldreansvarDato?: string;
  antallBarn?: number;
}

interface OwnProps {
  readOnly: boolean;
  erAksjonspunktForeldreansvar: boolean;
  editedStatus: FieldEditedInfo;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
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
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({
        id: erAksjonspunktForeldreansvar ? 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarInfo' : 'OmsorgOgForeldreansvarFaktaForm.OmsorgInfo',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
    >
      <Row>
        <Column xs={erAksjonspunktForeldreansvar ? '4' : '8'}>
          <DatepickerField
            name="omsorgsovertakelseDato"
            label={{ id: 'OmsorgOgForeldreansvarFaktaForm.OmsorgsovertakelseDate' }}
            validate={[required, hasValidDate]}
            readOnly={readOnly}
            isEdited={editedStatus.omsorgsovertakelseDato}
          />
        </Column>
        {erAksjonspunktForeldreansvar
          && (
          <Column xs="4">
            <DatepickerField
              name="foreldreansvarDato"
              label={{ id: 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarDato' }}
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
          </Column>
          )}
        <Column xs="4">
          <InputField
            name="antallBarn"
            label={{ id: 'OmsorgOgForeldreansvarFaktaForm.NrOfChildren' }}
            bredde="XS"
            parse={(value) => {
              const parsedValue = parseInt(value, 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
            readOnly={readOnly}
            isEdited={editedStatus.antallBarnOmsorgOgForeldreansvar}
          />
        </Column>
      </Row>
    </FaktaGruppe>
  );
};

const getAntallBarn = (soknad: Soknad, familiehendelse: FamilieHendelse): number => {
  const antallBarn = soknad.antallBarn ? soknad.antallBarn : NaN;
  return familiehendelse.antallBarnTilBeregning ? familiehendelse.antallBarnTilBeregning : antallBarn;
};

OmsorgsovertakelseFaktaPanel.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato,
  foreldreansvarDato: familiehendelse.foreldreansvarDato,
  antallBarn: getAntallBarn(soknad, familiehendelse),
});

export default OmsorgsovertakelseFaktaPanel;
