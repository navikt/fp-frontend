import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@navikt/ft-utils';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import {
  ArbeidsgiverOpplysningerPerId,
  FaktaOmBeregning,
  RefusjonskravSomKommerForSentListe,
} from '@fpsak-frontend/types';
import { VurderRefusjonValues } from '../../../typer/FaktaBeregningTypes';
import { createVisningsnavnFakta } from '../../ArbeidsforholdHelper';

const {
  VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT,
} = faktaOmBeregningTilfelle;

const erRefusjonskravGyldigFieldPrefix = 'erKravGyldig_';

export const lagFieldName = (arbeidsgiverId) => erRefusjonskravGyldigFieldPrefix + arbeidsgiverId;

const lagRefusjonskravRadios = (senRefusjonkravListe: RefusjonskravSomKommerForSentListe[],
  readOnly: boolean,
  isAksjonspunktClosed: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactElement[] => senRefusjonkravListe
  .map((kravPerArbeidsgiver: RefusjonskravSomKommerForSentListe) => {
    const { arbeidsgiverIdent } = kravPerArbeidsgiver;
    const opplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
    const arbeidsgiverVisningsnavn = opplysninger ? createVisningsnavnFakta(opplysninger) : arbeidsgiverIdent;
    return (
      <React.Fragment key={arbeidsgiverIdent}>
        <VerticalSpacer twentyPx />
        <FormattedMessage
          id="VurderRefusjonForm.ErRefusjonskravGyldig"
          values={{
            arbeidsgiverVisningsnavn,
          }}
        />
        <VerticalSpacer eightPx />
        <RadioGroupField
          name={`vurderRefusjonValues.${lagFieldName(arbeidsgiverIdent)}`}
          validate={[required]}
          readOnly={readOnly}
          isEdited={isAksjonspunktClosed}
        >
          <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
          <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
        </RadioGroupField>
      </React.Fragment>
    );
  });

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    faktaOmBeregning: FaktaOmBeregning;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  transformValues: (arbeidsgiverListe: RefusjonskravSomKommerForSentListe[]) => any;
  buildInitialValues: (tilfeller: string[], arbeidsgiverListe: RefusjonskravSomKommerForSentListe[]) => VurderRefusjonValues;
}

/**
 * VurderRefusjonForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for vurdering av refusjonskrav som har kommet for sent.
 */
export const VurderRefusjonForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  faktaOmBeregning,
  arbeidsgiverOpplysningerPerId,
}) => {
  const senRefusjonkravListe = faktaOmBeregning?.refusjonskravSomKommerForSentListe;
  return (
    <>
      {lagRefusjonskravRadios(senRefusjonkravListe, readOnly, isAksjonspunktClosed, arbeidsgiverOpplysningerPerId)}
    </>
  );
};

VurderRefusjonForm.transformValues = (arbeidsgiverListe) => (values) => {
  if (arbeidsgiverListe.length === 0) {
    return {};
  }
  return {
    refusjonskravGyldighet: arbeidsgiverListe.map(({ arbeidsgiverIdent }) => ({
      arbeidsgiverId: arbeidsgiverIdent,
      skalUtvideGyldighet: values.vurderRefusjonValues[lagFieldName(arbeidsgiverIdent)],
    })),
  };
};

VurderRefusjonForm.buildInitialValues = (tilfeller, arbeidsgiverListe): VurderRefusjonValues => {
  const initialValues = {};
  if (!tilfeller.includes(VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT) || arbeidsgiverListe.length === 0) {
    return initialValues;
  }
  arbeidsgiverListe.forEach(({ arbeidsgiverIdent, erRefusjonskravGyldig }) => {
    initialValues[lagFieldName(arbeidsgiverIdent)] = erRefusjonskravGyldig;
  });
  return ({
    ...initialValues,
  });
};

export default VurderRefusjonForm;
