import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import {
  AksjonspunktHelpTextTemp, EditedIcon, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { SelectField } from '@fpsak-frontend/form-hooks';
import { required } from '@fpsak-frontend/utils';
import VilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { isFieldEdited, FieldEditedInfo } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, FamilieHendelse, InntektArbeidYtelse, KodeverkMedNavn, Personoversikt, RelatertTilgrensedYtelse, Soknad,
} from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AvklarFaktaForForeldreansvarAksjonspunktAp, AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OmsorgsovertakelseFaktaPanel, { FormValues as OmsorgFormValues } from './OmsorgsovertakelseFaktaPanel';
import RettighetFaktaPanel, { FormValues as RettighetFormValues } from './RettighetFaktaPanel';
import BarnPanel from './BarnPanel';
import ForeldrePanel from './ForeldrePanel';

import styles from './omsorgOgForeldreansvarFaktaForm.less';

const getDescriptionText = (vilkarCode: string): ReactElement => {
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

const findAksjonspunktHelpTexts = (erAksjonspunktForeldreansvar: boolean): ReactElement[] => (erAksjonspunktForeldreansvar
  ? [<FormattedMessage key="CheckInformation" id="OmsorgOgForeldreansvarFaktaForm.CheckInformationForeldreansvar" />]
  : [<FormattedMessage key="CheckInformation" id="OmsorgOgForeldreansvarFaktaForm.CheckInformation" />,
    <FormattedMessage key="ChooseVilkar" id="OmsorgOgForeldreansvarFaktaForm.ChooseVilkar" />]);

const getEditedStatus = (
  soknad: Soknad,
  gjeldendeFamiliehendelse: FamilieHendelse,
): FieldEditedInfo => (
  isFieldEdited(soknad, gjeldendeFamiliehendelse)
);

export type FormValues = OmsorgFormValues & RettighetFormValues & {
  vilkarType?: string;
}

interface PureOwnProps {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  readOnly: boolean;
  vilkarTypes: KodeverkMedNavn[];
  hasOpenAksjonspunkter: boolean;
  relatertYtelseTypes: KodeverkMedNavn[];
  erAksjonspunktForeldreansvar: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  personoversikt: Personoversikt;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse,
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
    getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string) => FormValues,
  transformValues?: (
    values: FormValues,
    aksjonspunkt: Aksjonspunkt,
  ) => AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
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
  relatertYtelseTypes,
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
      <Row>
        <Column xs={erAksjonspunktForeldreansvar ? '12' : '6'}>
          <OmsorgsovertakelseFaktaPanel
            readOnly={readOnly}
            erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
            editedStatus={editedStatus}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            soknad={soknad}
            familiehendelse={gjeldendeFamiliehendelse}
          />
        </Column>
        {!erAksjonspunktForeldreansvar && (
          <Column xs="6">
            <RettighetFaktaPanel
              relatertYtelseTypes={relatertYtelseTypes}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            />
          </Column>
        )}
      </Row>
      <Row>
        <Column xs="6">
          <BarnPanel
            soknad={soknad}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            intl={intl}
          />
        </Column>
        <Column xs="6">
          <ForeldrePanel
            personoversikt={personoversikt}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            intl={intl}
          />
        </Column>
      </Row>
      {!erAksjonspunktForeldreansvar && (
        <FaktaGruppe
          title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.VelgVilkaarSomSkalAnvendes' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
        >
          {!readOnly && (
            <SelectField
              name="vilkarType"
              validate={[required]}
              label=""
              placeholder={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.SelectVIlkar' })}
              selectValues={vilkarTypes.map((d) => (<option key={d.kode} value={d.kode}>{d.navn}</option>))}
              bredde="xxl"
              readOnly={readOnly}
              disabled={readOnly}
            />
          )}
          {(readOnly && vilkarType) && (
            <div className={styles.vilkarTypeReadOnly}>
              <Element tag="span">
                {(vilkarTypes.find((d) => d.kode === vilkarType) || {}).navn}
              </Element>
              {editedStatus.vilkarType
                && <EditedIcon />}
            </div>
          )}
          <VerticalSpacer eightPx />
          <Normaltekst>
            {getDescriptionText(vilkarType)}
          </Normaltekst>
        </FaktaGruppe>
      )}
    </>
  );
};

OmsorgOgForeldreansvarFaktaForm.buildInitialValues = (soknad: Soknad, gjeldendeFamiliehendelse: FamilieHendelse,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: InntektArbeidYtelse['innvilgetRelatertTilgrensendeYtelserForAnnenForelder'],
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string): FormValues => ({
  vilkarType: gjeldendeFamiliehendelse.vilkarType ? gjeldendeFamiliehendelse.vilkarType : '',
  ...OmsorgsovertakelseFaktaPanel.buildInitialValues(soknad, gjeldendeFamiliehendelse),
  ...RettighetFaktaPanel.buildInitialValues(soknad, innvilgetRelatertTilgrensendeYtelserForAnnenForelder, getKodeverknavn),
});

OmsorgOgForeldreansvarFaktaForm.transformValues = (
  values: FormValues,
  aksjonspunkt: Aksjonspunkt,
): AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp => (
  aksjonspunkt.definisjon === aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR
    ? {
      omsorgsovertakelseDato: values.omsorgsovertakelseDato,
      foreldreansvarDato: values.foreldreansvarDato,
      kode: aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
    } as AvklarFaktaForForeldreansvarAksjonspunktAp
    : {
      omsorgsovertakelseDato: values.omsorgsovertakelseDato,
      vilkarType: values.vilkarType,
      kode: aksjonspunktCodes.OMSORGSOVERTAKELSE,
    } as AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp);

export default OmsorgOgForeldreansvarFaktaForm;
