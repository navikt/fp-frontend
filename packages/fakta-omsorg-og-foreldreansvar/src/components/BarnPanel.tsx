import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldArrayFieldsProps } from 'redux-form';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';
import moment from 'moment';

import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import opplysningsKilde from '@fpsak-frontend/kodeverk/src/opplysningsKilde';
import { DatepickerField } from '@fpsak-frontend/form';
import { hasValidDate, required } from '@fpsak-frontend/utils';
import { DateLabel, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { MerkePanel } from '@fpsak-frontend/fakta-felles';
import { Personopplysninger, Soknad } from '@fpsak-frontend/types';

import styles from './barnPanel.less';

const calculateAgeFromDate = (fodselsdato: any) => moment().startOf('day').diff(moment(fodselsdato).startOf('day'), 'years');

const adjustNumberOfFields = (fields: FieldArrayFieldsProps<any>, originalFields: FieldArrayFieldsProps<any>, antallBarn: number) => {
  if (fields.length < antallBarn) {
    const diff = antallBarn - fields.length;
    for (let i = fields.length; i <= diff || i < originalFields.length; i += 1) {
      if (originalFields.getAll()[i]) {
        fields.push(originalFields.getAll()[i]);
      }
    }
  } else if (fields.length > antallBarn) {
    const diff = fields.length - antallBarn;
    for (let i = 0; i < diff; i += 1) {
      fields.pop();
    }
  }
};

interface OwnProps {
  readOnly: boolean;
  antallBarn: number;
  fields: FieldArrayFieldsProps<any>;
  isFodselsdatoerEdited?: { [key: number]: boolean};
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

/**
 * BarnPanel
 *
 * Presentasjonskomponent. Brukes i tilknytning til faktapanel for omsorg.
 * Viser barn som er bekreftet av TPS som readonly, mens en kan endre fødselsdato for de som ikke er det
 */
export class BarnPanel extends Component<OwnProps> {
  static defaultProps = {
    isFodselsdatoerEdited: {},
  };

  static buildInitialValues: any

  originalFields: any

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { fields, antallBarn } = this.props;
    this.originalFields = fields;
    adjustNumberOfFields(fields, fields, antallBarn);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: any) {
    adjustNumberOfFields(nextProps.fields, this.originalFields, nextProps.antallBarn);
  }

  shouldComponentUpdate(nextProps: OwnProps) {
    if (Number.isNaN(nextProps.antallBarn)) {
      return true;
    }
    return nextProps.fields.length === nextProps.antallBarn;
  }

  render() {
    const {
      fields, isFodselsdatoerEdited, readOnly, alleMerknaderFraBeslutter,
    } = this.props;

    return (
      <FaktaGruppe
        titleCode="BarnPanel.BarnDetSøkesOm"
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
      >
        {fields.map((barn: any, index: any, field: any) => {
          const b = field.get(index);
          if (b.opplysningsKilde === opplysningsKilde.TPS) {
            return (
              <div key={`${b.nummer ? b.nummer : b.aktorId}`}>
                <Undertittel>
                  {`${b.navn} `}
                  {b.dodsdato && (
                    <div className={styles.inline}><MerkePanel erDod /></div>
                  )}
                </Undertittel>
                <Element className={styles.antallaar}>
                  <DateLabel dateString={b.fodselsdato} />
                  <FormattedMessage id="BarnPanel.Age" values={{ age: calculateAgeFromDate(new Date(b.fodselsdato)).toString() }} />
                </Element>
                <VerticalSpacer eightPx />
                {b.dodsdato && (
                <Normaltekst>
                  <FormattedMessage id="BarnPanel.DodsDato" />
                  <Element><DateLabel dateString={b.dodsdato} /></Element>
                  <VerticalSpacer eightPx />
                </Normaltekst>
                )}

                <Normaltekst><FormattedMessage id="BarnPanel.Address" /></Normaltekst>
                <Element>
                  {`${b.adresse} `}
                </Element>
                <VerticalSpacer sixteenPx />
              </div>
            );
          }

          return (
            <div key={`${b.nummer}`}>
              <DatepickerField
                name={`${barn}.fodselsdato`}
                label={{ id: 'BarnPanel.ChildNumberBornData', args: { childNumber: index + 1 } }}
                validate={[required, hasValidDate]}
                readOnly={readOnly}
                isEdited={isFodselsdatoerEdited[b.nummer]}
              />
              <VerticalSpacer eightPx />
              <Normaltekst><FormattedMessage id="BarnPanel.Address" /></Normaltekst>
              <Normaltekst> - </Normaltekst>
              <VerticalSpacer sixteenPx />
            </div>
          );
        })}
      </FaktaGruppe>
    );
  }
}

const prepChildObj = (child: any) => ({
  isTps: child.opplysningsKilde && child.opplysningsKilde === opplysningsKilde.TPS,
  navn: child.navn,
  fdato: new Date(child.fodselsdato),
});

const sortChildren = (children: any) => children.sort((child1: any, child2: any) => {
  const a = prepChildObj(child1);
  const b = prepChildObj(child2);
  if (a.isTps && !b.isTps) { return -1; }
  if (!a.isTps && b.isTps) { return 1; }
  if (a.navn > b.navn) { return -1; }
  if (a.navn < b.navn) { return 1; }
  if (a.fdato > b.fdato) { return -1; }
  if (a.fdato < b.fdato) { return 1; }
  return 0;
});

BarnPanel.buildInitialValues = (personopplysning: Personopplysninger, soknad: Soknad) => {
  const confirmedChildren = personopplysning.barnSoktFor
    ? personopplysning.barnSoktFor.map((b) => ({
      aktorId: b.aktoerId,
      nummer: b.nummer,
      navn: b.navn,
      fodselsdato: b.fodselsdato,
      dodsdato: b.dodsdato,
      opplysningsKilde: undefined,
    }))
    : [];

  const applicationChildren = soknad.soknadType.kode === soknadType.FODSEL
    ? Object.keys(soknad.fodselsdatoer)
      .map((key) => ({
        nummer: parseInt(key, 10),
        fodselsdato: soknad.fodselsdatoer[key],
        opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
      }))
    : Object.keys(soknad.adopsjonFodelsedatoer)
      .map((key) => ({
        nummer: parseInt(key, 10),
        fodselsdato: soknad.adopsjonFodelsedatoer[key],
        opplysningsKilde: opplysningsKilde.SAKSBEHANDLER,
      }));

  const children = [...confirmedChildren];
  children.forEach((cc, indexCc) => {
    const index = applicationChildren.findIndex((ac) => (cc.nummer ? ac.nummer === cc.nummer : ac.fodselsdato === cc.fodselsdato));
    if (index !== -1) {
    // Om barnet fra søknad finnes i TPS eller allerede er lagret av NAV-ansatt => fjern barnet i søknad.
      applicationChildren.splice(index, 1);
    } else {
    // Om barnet i TPS ikke finnes i søknad, fjern dette.
      confirmedChildren.splice(indexCc, 1);
    }
  });

  return {
    barn: sortChildren([...confirmedChildren, ...applicationChildren]),
  };
};

export default BarnPanel;
