import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort, HStack, VStack } from '@navikt/ds-react';

import { AksjonspunktHelpTextTemp, VerticalSpacer, FaktaGruppe, EditedIcon } from '@navikt/ft-ui-komponenter';
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

const findAksjonspunktHelpTexts = (erAksjonspunktForeldreansvar: boolean): ReactElement[] =>
  erAksjonspunktForeldreansvar
    ? [<FormattedMessage key="CheckInformation" id="OmsorgOgForeldreansvarFaktaForm.CheckInformationForeldreansvar" />]
    : [
        <FormattedMessage key="CheckInformation" id="OmsorgOgForeldreansvarFaktaForm.CheckInformation" />,
        <FormattedMessage key="ChooseVilkar" id="OmsorgOgForeldreansvarFaktaForm.ChooseVilkar" />,
      ];

const getEditedStatus = (soknad: Soknad, gjeldendeFamiliehendelse: FamilieHendelse): FieldEditedInfo =>
  isFieldEdited(soknad, gjeldendeFamiliehendelse);

export type FormValues = OmsorgFormValues &
  RettighetFormValues & {
    vilkarType?: string;
  };

interface PureOwnProps {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  readOnly: boolean;
  vilkarTypes: KodeverkMedNavn[];
  hasOpenAksjonspunkter: boolean;
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
const OmsorgOgForeldreansvarFaktaForm: FunctionComponent<PureOwnProps> & StaticFunctions = ({
  readOnly,
  vilkarTypes,
  hasOpenAksjonspunkter,
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
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {findAksjonspunktHelpTexts(erAksjonspunktForeldreansvar)}
      </AksjonspunktHelpTextTemp>
      <VStack gap="2">
        <HStack gap="5">
          <div className={erAksjonspunktForeldreansvar ? styles.oneCol : styles.cols}>
            <OmsorgsovertakelseFaktaPanel
              readOnly={readOnly}
              erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
              editedStatus={editedStatus}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              soknad={soknad}
              familiehendelse={gjeldendeFamiliehendelse}
            />
          </div>
          {!erAksjonspunktForeldreansvar && (
            <div className={styles.cols}>
              <RettighetFaktaPanel alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />
            </div>
          )}
        </HStack>
        <HStack gap="5">
          <div className={styles.cols}>
            <BarnPanel soknad={soknad} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} intl={intl} />
          </div>
          <div className={styles.cols}>
            <ForeldrePanel
              personoversikt={personoversikt}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              intl={intl}
            />
          </div>
        </HStack>
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
    </>
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
