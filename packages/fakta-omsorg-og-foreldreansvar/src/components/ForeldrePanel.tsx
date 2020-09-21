import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';

import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import opplysningsKilde from '@fpsak-frontend/kodeverk/src/opplysningsKilde';
import { DatepickerField } from '@fpsak-frontend/form';
import { dateBeforeOrEqualToToday, getAddresses, hasValidDate } from '@fpsak-frontend/utils';
import { DateLabel, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import { FieldArrayFieldsProps } from 'redux-form';
import { Personopplysninger } from '@fpsak-frontend/types';

const getParentHeader = (erMor: boolean) => (erMor ? 'ForeldrePanel.MotherDeathDate' : 'ForeldrePanel.FatherDeathDate');

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (sokerPersonopplysninger: Personopplysninger) => {
    foreldre: Personopplysninger[],
  },
}

/**
 * ForeldrePanel
 *
 * Presentasjonskomponent. Brukes i tilknytning til faktapanel for omsorg.
 */
export const ForeldrePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  fields,
  alleMerknaderFraBeslutter,
}) => (
  <FaktaGruppe
    titleCode="ForeldrePanel.Foreldre"
    merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
  >
    {fields.map((foreldre: any, index: any, field: any) => {
      const f = field.get(index);
      const shouldShowAdress = f.adresse && !f.erDod;

      const parentHeader = getParentHeader(f.erMor);
      if (f.opplysningsKilde === opplysningsKilde.TPS && f.originalDodsdato) {
        return (
          <div key={`${f.aktorId}`}>
            <Undertittel>{f.navn}</Undertittel>
            {shouldShowAdress
              && <Element>{f.adresse}</Element>}
            <VerticalSpacer eightPx />
            <Normaltekst><FormattedMessage id={parentHeader} /></Normaltekst>
            {f.dodsdato
              && <Element><DateLabel dateString={f.dodsdato} /></Element>}
            {!f.dodsdato
              && <Normaltekst> - </Normaltekst>}
            <VerticalSpacer sixteenPx />
          </div>
        );
      }
      return (
        <div key={`${f.aktorId}`}>
          <DatepickerField
            name={`${foreldre}.dodsdato`}
            label={f.navn ? { id: 'ForeldrePanel.DeathDate', args: { name: f.navn } } : { id: parentHeader }}
            validate={[hasValidDate, dateBeforeOrEqualToToday]}
            readOnly
          />
          <VerticalSpacer eightPx />
          <Normaltekst><FormattedMessage id="ForeldrePanel.Address" /></Normaltekst>
          {shouldShowAdress
            && <Normaltekst>{f.adresse}</Normaltekst>}
          {!shouldShowAdress
            && <Normaltekst> - </Normaltekst>}
          <VerticalSpacer sixteenPx />
        </div>
      );
    })}
  </FaktaGruppe>
);

const buildSokerPersonopplysning = (sokerPersonopplysninger: any) => {
  const addresses = getAddresses(sokerPersonopplysninger.adresser);
  const { avklartPersonstatus } = sokerPersonopplysninger;
  const isAvklartPersonstatusDod = avklartPersonstatus
      && avklartPersonstatus.overstyrtPersonstatus && avklartPersonstatus.overstyrtPersonstatus.kode === personstatusType.DOD;

  return {
    aktorId: sokerPersonopplysninger.aktoerId,
    navn: sokerPersonopplysninger.navn,
    dodsdato: sokerPersonopplysninger.dodsdato,
    originalDodsdato: sokerPersonopplysninger.dodsdato,
    adresse: addresses[opplysningAdresseType.POSTADRESSE] || addresses[opplysningAdresseType.BOSTEDSADRESSE],
    opplysningsKilde: undefined,
    erMor: sokerPersonopplysninger.navBrukerKjonn.kode === navBrukerKjonn.KVINNE,
    erDod: sokerPersonopplysninger.personstatus.kode === personstatusType.DOD || isAvklartPersonstatusDod,
  };
};

const buildAnnenPartPersonopplysning = (annenPartPersonopplysninger: any) => {
  const secondaryParentAddresses = getAddresses(annenPartPersonopplysninger.adresser);
  const { avklartPersonstatus } = annenPartPersonopplysninger;
  const isAvklartPersonstatusDod = avklartPersonstatus
    && avklartPersonstatus.overstyrtPersonstatus && avklartPersonstatus.overstyrtPersonstatus.kode === personstatusType.DOD;

  return {
    aktorId: annenPartPersonopplysninger.aktoerId,
    navn: annenPartPersonopplysninger.navn,
    dodsdato: annenPartPersonopplysninger.dodsdato,
    originalDodsdato: annenPartPersonopplysninger.dodsdato,
    adresse: secondaryParentAddresses[opplysningAdresseType.POSTADRESSE] || secondaryParentAddresses[opplysningAdresseType.BOSTEDSADRESSE],
    opplysningsKilde: undefined,
    erMor: annenPartPersonopplysninger.navBrukerKjonn.kode === navBrukerKjonn.KVINNE,
    erDod: annenPartPersonopplysninger.personstatus.kode === personstatusType.DOD || isAvklartPersonstatusDod,
  };
};

ForeldrePanel.buildInitialValues = (sokerPersonopplysninger: Personopplysninger) => {
  const parents = [];

  const sokerOppl = buildSokerPersonopplysning(sokerPersonopplysninger);
  parents.push(sokerOppl);

  const annenPartPersonopplysninger = sokerPersonopplysninger.annenPart;

  if (annenPartPersonopplysninger) {
    const annenPartOppl = buildAnnenPartPersonopplysning(annenPartPersonopplysninger);
    parents.push(annenPartOppl);
  }
  return { foreldre: parents };
};

export default ForeldrePanel;
