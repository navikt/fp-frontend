import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Undertekst, Normaltekst } from 'nav-frontend-typografi';

import { DatepickerField } from '@fpsak-frontend/form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import { FaktaGruppe } from '@fpsak-frontend/shared-components';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';
import { FieldEditedInfo } from '@fpsak-frontend/fakta-felles';

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
      <Row>
        <Column xs={erAksjonspunktForeldreansvar ? '4' : '8'}>
          <DatepickerField
            name="omsorgsovertakelseDato"
            label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.OmsorgsovertakelseDate' })}
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
              label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarDato' })}
              validate={[required, hasValidDate]}
              readOnly={readOnly}
            />
          </Column>
          )}
        <Column xs="4">
          <Undertekst><FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.NrOfChildren" /></Undertekst>
          <Normaltekst>{antallBarn}</Normaltekst>
        </Column>
      </Row>
    </FaktaGruppe>
  );
};

OmsorgsovertakelseFaktaPanel.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse && familiehendelse.omsorgsovertakelseDato ? familiehendelse.omsorgsovertakelseDato : soknad.omsorgsovertakelseDato,
  foreldreansvarDato: familiehendelse.foreldreansvarDato,
});

export default OmsorgsovertakelseFaktaPanel;
