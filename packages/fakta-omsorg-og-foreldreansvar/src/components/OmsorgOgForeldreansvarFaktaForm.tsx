import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort, VStack, HGrid } from '@navikt/ds-react';

import { VerticalSpacer, FaktaGruppe, EditedIcon } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, VilkarType, KodeverkType } from '@navikt/fp-kodeverk';
import { SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { isFieldEdited, FieldEditedInfo } from '@navikt/fp-fakta-felles';
import {
  Aksjonspunkt,
  FamilieHendelse,
  InntektArbeidYtelse,
  KodeverkMedNavn,
  Personoversikt,
  RelatertTilgrensedYtelse,
  Soknad,
} from '@navikt/fp-types';
import {
  AvklarFaktaForForeldreansvarAksjonspunktAp,
  AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import { useFormContext } from 'react-hook-form';
import OmsorgsovertakelseFaktaPanel, { FormValues as OmsorgFormValues } from './OmsorgsovertakelseFaktaPanel';
import RettighetFaktaPanel, { FormValues as RettighetFormValues } from './RettighetFaktaPanel';
import BarnPanel from './BarnPanel';
import ForeldrePanel from './ForeldrePanel';

import styles from './omsorgOgForeldreansvarFaktaForm.module.css';

const getDescriptionText = (vilkarCode?: string): ReactElement => {
  if (vilkarCode === VilkarType.OMSORGSVILKARET) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextOmsorgTredjeLedd" />;
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_2_LEDD) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreAndreLedd" />;
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_4_LEDD) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreFjerdeLedd" />;
  }
  return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.ChooseVilkarToSeeDescription" />;
};

const getEditedStatus = (soknad: Soknad, gjeldendeFamiliehendelse: FamilieHendelse): FieldEditedInfo =>
  isFieldEdited(soknad, gjeldendeFamiliehendelse);

export type FormValues = OmsorgFormValues &
  RettighetFormValues & {
    vilkarType?: string;
  };

interface Props {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  readOnly: boolean;
  vilkarTypes: KodeverkMedNavn[];
  erAksjonspunktForeldreansvar: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  personoversikt: Personoversikt;
}

interface StaticFunctions {
  buildInitialValues: (
    soknad: Soknad,
    familiehendelse: FamilieHendelse,
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
    getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
  ) => FormValues;
  transformValues: (
    values: FormValues,
    aksjonspunkt: Aksjonspunkt,
  ) => AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp;
}

/**
 * OmsorgOgForeldreansvarFaktaForm
 *
 * Setter opp aksjonspunktet for avklaring av fakta for omsorgs og foreldreansvarsvilkåret.
 */
const OmsorgOgForeldreansvarFaktaForm: FunctionComponent<Props> & StaticFunctions = ({
  readOnly,
  vilkarTypes,
  soknad,
  erAksjonspunktForeldreansvar,
  alleMerknaderFraBeslutter,
  personoversikt,
  gjeldendeFamiliehendelse,
}) => {
  const intl = useIntl();

  const { watch } = useFormContext<FormValues>();

  const editedStatus = getEditedStatus(soknad, gjeldendeFamiliehendelse);
  const vilkarType = watch('vilkarType');

  return (
    <VStack gap="2">
      <HGrid gap="5" columns="repeat(auto-fit, minmax(16rem, 1fr))">
        <OmsorgsovertakelseFaktaPanel
          readOnly={readOnly}
          erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
          editedStatus={editedStatus}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          soknad={soknad}
          familiehendelse={gjeldendeFamiliehendelse}
        />
        {!erAksjonspunktForeldreansvar && <RettighetFaktaPanel alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />}
      </HGrid>
      <HGrid gap="5" columns="repeat(auto-fit, minmax(16rem, 1fr))">
        <BarnPanel soknad={soknad} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} intl={intl} />
        <ForeldrePanel
          personoversikt={personoversikt}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          intl={intl}
        />
      </HGrid>
      {!erAksjonspunktForeldreansvar && (
        <FaktaGruppe
          title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.VelgVilkaarSomSkalAnvendes' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.OMSORGSOVERTAKELSE]}
        >
          {!readOnly && (
            <SelectField
              name="vilkarType"
              validate={[required]}
              hideLabel
              label=""
              selectValues={vilkarTypes.map(d => (
                <option key={d.kode} value={d.kode}>
                  {d.navn}
                </option>
              ))}
              className={styles.breddeSelect}
              readOnly={readOnly}
              disabled={readOnly}
            />
          )}
          {readOnly && vilkarType && (
            <div className={styles.vilkarTypeReadOnly}>
              <Label size="small" as="span">
                {(vilkarTypes.find(d => d.kode === vilkarType) || {}).navn}
              </Label>
              {editedStatus.vilkarType && <EditedIcon />}
            </div>
          )}
          <VerticalSpacer eightPx />
          <BodyShort size="small">{getDescriptionText(vilkarType)}</BodyShort>
        </FaktaGruppe>
      )}
    </VStack>
  );
};

OmsorgOgForeldreansvarFaktaForm.buildInitialValues = (
  soknad: Soknad,
  gjeldendeFamiliehendelse: FamilieHendelse,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: InntektArbeidYtelse['innvilgetRelatertTilgrensendeYtelserForAnnenForelder'],
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
): FormValues => ({
  vilkarType: gjeldendeFamiliehendelse.vilkarType ? gjeldendeFamiliehendelse.vilkarType : '',
  ...OmsorgsovertakelseFaktaPanel.buildInitialValues(soknad, gjeldendeFamiliehendelse),
  ...RettighetFaktaPanel.buildInitialValues(
    soknad,
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
    getKodeverknavn,
  ),
});

OmsorgOgForeldreansvarFaktaForm.transformValues = (
  values: FormValues,
  aksjonspunkt: Aksjonspunkt,
): AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp =>
  aksjonspunkt.definisjon === AksjonspunktCode.AVKLAR_VILKAR_FOR_FORELDREANSVAR
    ? ({
        omsorgsovertakelseDato: values.omsorgsovertakelseDato,
        foreldreansvarDato: values.foreldreansvarDato,
        kode: AksjonspunktCode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
      } as AvklarFaktaForForeldreansvarAksjonspunktAp)
    : ({
        omsorgsovertakelseDato: values.omsorgsovertakelseDato,
        vilkarType: values.vilkarType,
        kode: AksjonspunktCode.OMSORGSOVERTAKELSE,
      } as AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp);

export default OmsorgOgForeldreansvarFaktaForm;
