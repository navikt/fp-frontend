import React, { Component, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  arrayPush as dispatchArrayPush, arraySplice as dispatchArraySplice, Field, FieldArrayFieldsProps, FieldArrayMetaProps, FormAction, formValueSelector,
} from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { NavFieldGroup } from '@fpsak-frontend/form';
import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import removeIcon from '@fpsak-frontend/assets/images/remove.svg';
import { AlleKodeverk } from '@fpsak-frontend/types';

import RegistrerVirksomhetModalForm from './RegistrerVirksomhetModalForm';
import { FormValues as VirksomhetIdFormValues } from './VirksomhetIdentifikasjonPanel';

import styles from './registrerVirksomhetPanel.less';

interface VirksomhetProps {
  showRegistrerVirksomhetModal: (index: number) => void;
  index: number;
  input: {
    value?: string;
  };
}

const renderVirksomhetsnavn: FunctionComponent<VirksomhetProps> = ({
  showRegistrerVirksomhetModal,
  index,
  ...fieldProps
}) => (
  <>
    {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
    }
    <a
      onClick={() => showRegistrerVirksomhetModal(index)}
      onKeyDown={() => showRegistrerVirksomhetModal(index)}
      className={styles.customLink}
      role="link"
      tabIndex={0}
    >
      <Normaltekst>
        {` ${fieldProps.input.value} `}
      </Normaltekst>
    </a>
  </>
);

interface PureOwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  namePrefix: string;
  form: string;
  name?: string;
  readOnly?: boolean;
  alleKodeverk: AlleKodeverk;
}

type Virksomhet = VirksomhetIdFormValues & {
  familieEllerVennerTilknyttetNaringen?: boolean;
  harRegnskapsforer?: boolean;
  stillingsprosent?: number;
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndringGjeldendeFom?: string;
}

interface MappedOwnProps {
  virksomheter?: Virksomhet[];
}

interface DispatchProps {
  dispatchArrayPush: (form: string, field: string, value: any) => FormAction;
  dispatchArraySplice: (form: string, field: string, index: number, removeNum: number, value: any) => FormAction;
}

interface OwnState {
  editVirksomhet?: Virksomhet;
  editIndex?: number;
}

/**
 * RegistrererVirksomhetPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og søker har arbeidet i egen virksomhet.
 * Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.
 */
export class RegistrerVirksomhetPanel extends Component<PureOwnProps & MappedOwnProps & DispatchProps, OwnState> {
  static defaultProps = {
    readOnly: false,
    name: 'virksomheter',
    virksomheter: [],
  };

  constructor(props: PureOwnProps & MappedOwnProps & DispatchProps) {
    super(props);
    this.showRegistrerVirksomhetModal = this.showRegistrerVirksomhetModal.bind(this);
    this.hideRegistrerVirksomhetModal = this.hideRegistrerVirksomhetModal.bind(this);
    this.addVirksomhet = this.addVirksomhet.bind(this);
    this.removeVirksomhet = this.removeVirksomhet.bind(this);

    this.state = {
      editVirksomhet: undefined,
      editIndex: -1,
    };
  }

  showRegistrerVirksomhetModal(index?: number): void {
    if (index !== null && index !== undefined && index > -1) {
      const { virksomheter } = this.props;
      this.setState({
        editVirksomhet: virksomheter ? virksomheter[index] : undefined,
        editIndex: index,
      });
    } else {
      this.setState({
        editVirksomhet: {},
        editIndex: index,
      });
    }
  }

  hideRegistrerVirksomhetModal(): void {
    this.setState({
      editVirksomhet: undefined,
      editIndex: -1,
    });
  }

  addVirksomhet(_values: any, _dispatch: Dispatch, {
    valuesForRegisteredFieldsOnly,
  }: {
    valuesForRegisteredFieldsOnly: {
      virksomhetRegistrertINorge?: boolean;
      landJobberFra: string;
      nyIArbeidslivetFom?: string;
      varigEndringGjeldendeFom: string;
      stillingsprosent?: string;
    };
  }): void {
    const { editIndex: index } = this.state;
    const {
      form, namePrefix, name, dispatchArraySplice: splice, dispatchArrayPush: push,
    } = this.props;
    const transformedValues = {
      ...valuesForRegisteredFieldsOnly,
      landJobberFra: valuesForRegisteredFieldsOnly.virksomhetRegistrertINorge ? 'NOR' : valuesForRegisteredFieldsOnly.landJobberFra,
      varigEndringGjeldendeFom: valuesForRegisteredFieldsOnly.nyIArbeidslivetFom || valuesForRegisteredFieldsOnly.varigEndringGjeldendeFom,
      stillingsprosent: valuesForRegisteredFieldsOnly.stillingsprosent ? parseFloat(valuesForRegisteredFieldsOnly.stillingsprosent) : undefined,
    };

    if (index !== null && index !== undefined && index > -1) {
      splice(form, `${namePrefix}.${name}`, index, 1, transformedValues);
    } else {
      push(form, `${namePrefix}.${name}`, transformedValues);
    }
    this.hideRegistrerVirksomhetModal();
  }

  removeVirksomhet(index: number): void {
    const {
      form, namePrefix, name, dispatchArraySplice: splice,
    } = this.props;
    splice(form, `${namePrefix}.${name}`, index, 1, undefined);
  }

  render() {
    const {
      fields,
      readOnly,
      meta,
      alleKodeverk,
    } = this.props;
    const { editVirksomhet, editIndex } = this.state;
    return (
      <div className={styles.fieldsList}>
        <NavFieldGroup
          errorMessage={meta.error && (meta.dirty || meta.submitFailed) ? meta.error : null}
        >
          {fields.length > 0
            && (
            <React.Fragment key={1}>
              <Row key="VirksomhetHeader">
                <Column xs="8">
                  <Element><FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Name" /></Element>
                </Column>
              </Row>
              <hr className={styles.divider} />
              {fields.map((virksomhet: string, index: number) => (
                <React.Fragment key={2}>
                  <Row key={`${virksomhet}.navn`}>
                    <Column xs="8">
                      <Field
                        name={`${virksomhet}.navn`}
                        component={renderVirksomhetsnavn}
                        showRegistrerVirksomhetModal={() => this.showRegistrerVirksomhetModal(index)}
                        index={index}
                      />
                    </Column>
                    <Column xs="4">
                      {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
                      }
                      <div
                        className={styles.removeButton}
                        onClick={() => this.removeVirksomhet(index)}
                        onKeyDown={() => this.removeVirksomhet(index)}
                        id="removebutton"
                        role="button"
                        tabIndex={0}
                      >
                        <Image src={removeIcon} />
                      </div>
                    </Column>
                  </Row>
                  <hr className={styles.divider} />
                  <VerticalSpacer eightPx />
                </React.Fragment>
              ))}
            </React.Fragment>
            )}
          {// eslint-disable-next-line jsx-a11y/click-events-have-key-events
            }
          <div
            id="addbutton"
            className={styles.addVirksomhet}
            onClick={() => this.showRegistrerVirksomhetModal()}
            onKeyDown={(e) => (e.nativeEvent.code === 'Space' ? this.showRegistrerVirksomhetModal() : false)}
            role="button"
            tabIndex={0}
          >
            <Image
              className={styles.addCircleIcon}
              src={addCircleIcon}
            />
            <Undertekst className={styles.imageText}><FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Add" /></Undertekst>
          </div>
        </NavFieldGroup>
        <RegistrerVirksomhetModalForm
          showModal={!!editVirksomhet}
          // @ts-ignore Fiks
          onSubmit={this.addVirksomhet}
          closeEvent={this.hideRegistrerVirksomhetModal}
          readOnly={readOnly}
          initialValues={editVirksomhet}
          index={editIndex}
          alleKodeverk={alleKodeverk}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => ({
  virksomheter: formValueSelector(initialProps.form)(state, initialProps.namePrefix)
    ? formValueSelector(initialProps.form)(state, initialProps.namePrefix).virksomheter : null,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    dispatchArrayPush,
    dispatchArraySplice,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrerVirksomhetPanel);
