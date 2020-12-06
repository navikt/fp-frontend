import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { FaktaOmBeregning, RefusjonskravSomKommerForSentListe } from '@fpsak-frontend/types';
import ArbeidsgiverOpplysningerPerId from '@fpsak-frontend/types/src/arbeidsgiverOpplysningerTsType';

const {
  VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT,
} = faktaOmBeregningTilfelle;

const erRefusjonskravGyldigFieldPrefix = 'erKravGyldig_';

export const lagFieldName = (arbeidsgiverId: string): string => erRefusjonskravGyldigFieldPrefix + arbeidsgiverId;

const lagVisningsNavn = (andel: RefusjonskravSomKommerForSentListe, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsgiverId];
  return arbeidsgiverOpplysninger.navn;
};

const lagRefusjonskravRadios = (senRefusjonkravListe,
  readOnly,
  isAksjonspunktClosed,
  arbeidsgiverOpplysningerPerId) => senRefusjonkravListe.map((kravPerArbeidsgiver) => {
  const agNavn = lagVisningsNavn(kravPerArbeidsgiver, arbeidsgiverOpplysningerPerId);
  return (
    <React.Fragment key={agNavn}>
      <VerticalSpacer twentyPx />
      <FormattedMessage
        id="VurderRefusjonForm.ErRefusjonskravGyldig"
        values={{
          agNavn,
        }}
      />
      <VerticalSpacer eightPx />
      <RadioGroupField
        name={lagFieldName(kravPerArbeidsgiver.arbeidsgiverId)}
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
  buildInitialValues: (tilfeller: string[], arbeidsgiverListe: RefusjonskravSomKommerForSentListe[]) => any;
}

/**
 * VurderRefusjonForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for vurdering av refusjonskrav som har kommet for sent.
 */
export const VurderRefusjonForm:FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  faktaOmBeregning,
  arbeidsgiverOpplysningerPerId,
}) => {
  const senRefusjonkravListe = faktaOmBeregning?.refusjonskravSomKommerForSentListe;
  return (lagRefusjonskravRadios(senRefusjonkravListe, readOnly, isAksjonspunktClosed, arbeidsgiverOpplysningerPerId));
};

VurderRefusjonForm.transformValues = (arbeidsgiverListe) => (values) => {
  if (arbeidsgiverListe.length === 0) {
    return {};
  }
  return {
    refusjonskravGyldighet: arbeidsgiverListe.map(({ arbeidsgiverId }) => ({
      arbeidsgiverId,
      skalUtvideGyldighet: values[lagFieldName(arbeidsgiverId)],
    })),
  };
};

VurderRefusjonForm.buildInitialValues = (tilfeller, arbeidsgiverListe) => {
  const initialValues = {};
  if (!tilfeller.includes(VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT) || arbeidsgiverListe.length === 0) {
    return initialValues;
  }
  arbeidsgiverListe.forEach(({ arbeidsgiverId, erRefusjonskravGyldig }) => {
    initialValues[lagFieldName(arbeidsgiverId)] = erRefusjonskravGyldig;
  });
  return ({
    ...initialValues,
  });
};

export default VurderRefusjonForm;
