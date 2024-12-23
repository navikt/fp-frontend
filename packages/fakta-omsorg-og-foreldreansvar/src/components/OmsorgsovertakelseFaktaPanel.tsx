import React, { FunctionComponent } from 'react';
import { FormattedMessage,useIntl } from 'react-intl';

import { BodyShort, HStack, Label } from '@navikt/ds-react';
import { Datepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FieldEditedInfo } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FamilieHendelse, Soknad } from '@navikt/fp-types';

const getAntallBarn = (soknad: Soknad, familiehendelse: FamilieHendelse): number => {
  const antallBarn = soknad.antallBarn ? soknad.antallBarn : NaN;
  return familiehendelse.antallBarnTilBeregning ? familiehendelse.antallBarnTilBeregning : antallBarn;
};

export type FormValues = {
  omsorgsovertakelseDato?: string;
  foreldreansvarDato?: string;
};

interface OwnProps {
  readOnly: boolean;
  erAksjonspunktForeldreansvar: boolean;
  editedStatus: FieldEditedInfo;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  soknad: Soknad;
  familiehendelse: FamilieHendelse;
}

interface StaticFunctions {
  buildInitialValues: (soknad: Soknad, familiehendelse: FamilieHendelse) => FormValues;
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
        id: erAksjonspunktForeldreansvar
          ? 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarInfo'
          : 'OmsorgOgForeldreansvarFaktaForm.OmsorgInfo',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
    >
      <HStack gap="10">
        <Datepicker
          name="omsorgsovertakelseDato"
          label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.OmsorgsovertakelseDate' })}
          validate={[required, hasValidDate]}
          isReadOnly={readOnly}
          isEdited={editedStatus.omsorgsovertakelseDato}
        />
        {erAksjonspunktForeldreansvar && (
          <Datepicker
            name="foreldreansvarDato"
            label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarDato' })}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
          />
        )}
        <div>
          <Label size="small">
            <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.NrOfChildren" />
          </Label>
          <BodyShort size="small">{antallBarn}</BodyShort>
        </div>
      </HStack>
    </FaktaGruppe>
  );
};

OmsorgsovertakelseFaktaPanel.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: familiehendelse?.omsorgsovertakelseDato
    ? familiehendelse.omsorgsovertakelseDato
    : soknad.omsorgsovertakelseDato,
  foreldreansvarDato: familiehendelse.foreldreansvarDato,
});

export default OmsorgsovertakelseFaktaPanel;
