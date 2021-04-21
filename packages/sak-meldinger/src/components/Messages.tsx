import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import classNames from 'classnames';
import { Hovedknapp } from 'nav-frontend-knapper';

import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import { KodeverkMedNavn, Kodeverk } from '@fpsak-frontend/types';
import {
  ariaCheck, getLanguageFromSprakkode, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import ugunstAarsakTyper from '@fpsak-frontend/kodeverk/src/ugunstAarsakTyper';
import { SelectField, TextAreaField } from '@fpsak-frontend/form';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import styles from './messages.less';

const maxLength4000 = maxLength(4000);
const minLength3 = minLength(3);

export type FormValues = {
  mottaker: string;
  brevmalkode: string;
  fritekst: string;
  arsakskode?: string;
}

export type Template = {
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}

const getFritekstMessage = (brevmalkode?: string): string => (brevmalkode === dokumentMalType.INNHENT_DOK || brevmalkode === dokumentMalType.INNOPP
  ? 'Messages.DocumentList' : 'Messages.Fritekst');

// TODO (TOR) Bør erstattast av ein markør fra backend
const showFritekst = (brevmalkode?: string, arsakskode?: string): boolean => (brevmalkode === dokumentMalType.INNHENT_DOK
  || brevmalkode === dokumentMalType.INNOPP
  || brevmalkode === dokumentMalType.KORRIGVARS
  || brevmalkode === dokumentMalType.FRITKS
  || brevmalkode === dokumentMalType.VARSEL_OM_TILBAKEKREVING
  || ((brevmalkode === dokumentMalType.REVURDERING_DOK || brevmalkode === dokumentMalType.VARREV) && arsakskode === ugunstAarsakTyper.ANNET));

const getfiltrerteRevurderingVarslingArsaker = (revurderingVarslingArsaker: KodeverkMedNavn[], fagsakYtelseType: Kodeverk): KodeverkMedNavn[] => {
  if (fagsakYtelseType.kode === FagsakYtelseType.ENGANGSSTONAD) {
    return revurderingVarslingArsaker.filter((arsak) => arsak.kode === ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER
      || arsak.kode === ugunstAarsakTyper.ANNET);
  }
  if (fagsakYtelseType.kode === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return revurderingVarslingArsaker.filter((arsak) => arsak.kode !== ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER
      && arsak.kode !== ugunstAarsakTyper.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT);
  }
  return revurderingVarslingArsaker;
};

interface PureOwnProps {
  submitCallback: (values: FormValues) => void;
  previewCallback: (mottaker: string, brevmalkode: string, fritekst: string, arsakskode: string) => void;
  recipients: string[];
  templates: Template[];
  sprakKode?: Kodeverk;
  revurderingVarslingArsak: KodeverkMedNavn[];
  isKontrollerRevurderingApOpen?: boolean;
  fagsakYtelseType: Kodeverk;
  kanVeilede: boolean;
}

interface MappedOwnProps {
  mottaker?: string;
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
}

/**
 * Messages
 *
 * Presentasjonskomponent. Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
 * og fritekst som skal flettes inn i brevet skrives inn i et eget felt.
 */
export const MessagesImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  recipients,
  templates,
  previewCallback,
  handleSubmit,
  sprakKode,
  mottaker,
  brevmalkode,
  fritekst,
  arsakskode,
  revurderingVarslingArsak,
  fagsakYtelseType,
  kanVeilede,
  ...formProps
}) => {
  if (!sprakKode) {
    return null;
  }

  const previewMessage = (e) => {
    if (formProps.valid || formProps.pristine) {
      previewCallback(mottaker, brevmalkode, fritekst, arsakskode);
    } else {
      // TODO Fungerar dette? Typescript seier at submit ikkje ligg i formProps
      // @ts-ignore
      formProps.submit();
    }
    e.preventDefault();
  };

  const filtrerteRevurderingVarslingArsaker = useMemo(() => getfiltrerteRevurderingVarslingArsaker(revurderingVarslingArsak, fagsakYtelseType), []);

  const language = getLanguageFromSprakkode(sprakKode);

  return (
    <form onSubmit={handleSubmit}>
      <SelectField
        name="mottaker"
        label={intl.formatMessage({ id: 'Messages.Recipient' })}
        validate={[required]}
        placeholder={intl.formatMessage({ id: 'Messages.ChooseRecipient' })}
        selectValues={recipients.map((recipient) => <option key={recipient} value={recipient}>{recipient}</option>)}
        bredde="xxl"
      />
      <VerticalSpacer eightPx />
      <SelectField
        name="brevmalkode"
        label={intl.formatMessage({ id: 'Messages.Template' })}
        validate={[required]}
        placeholder={intl.formatMessage({ id: 'Messages.ChooseTemplate' })}
        selectValues={templates.map((template) => <option key={template.kode} value={template.kode} disabled={!template.tilgjengelig}>{template.navn}</option>)}
        bredde="xxl"
      />
      {(brevmalkode === dokumentMalType.REVURDERING_DOK || brevmalkode === dokumentMalType.VARREV) && (
        <>
          <VerticalSpacer eightPx />
          <SelectField
            name="arsakskode"
            label={intl.formatMessage({ id: 'Messages.Årsak' })}
            validate={[required]}
            placeholder={intl.formatMessage({ id: 'Messages.VelgÅrsak' })}
            selectValues={filtrerteRevurderingVarslingArsaker.map((cause) => <option key={cause.kode} value={cause.kode}>{cause.navn}</option>)}
            bredde="xxl"
          />
        </>
      )}
      {showFritekst(brevmalkode, arsakskode) && (
        <>
          <VerticalSpacer eightPx />
          <div className="input--xxl">
            <TextAreaField
              name="fritekst"
              label={intl.formatMessage({ id: getFritekstMessage(brevmalkode) })}
              validate={[required, maxLength4000, minLength3, hasValidText]}
              maxLength={4000}
              badges={[{ type: 'fokus', text: language, title: 'Messages.Beskrivelse' }]}
            />
          </div>
        </>
      )}
      <div className={styles.buttonRow}>
        <Hovedknapp mini spinner={formProps.submitting} disabled={formProps.submitting || kanVeilede} onClick={ariaCheck}>
          {intl.formatMessage({ id: 'Messages.Submit' })}
        </Hovedknapp>
        <a
          href=""
          onClick={previewMessage}
          onKeyDown={(e) => (e.keyCode === 13 ? previewMessage(e) : null)}
          className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
        >
          {intl.formatMessage({ id: 'Messages.Preview' })}
        </a>
      </div>
    </form>
  );
};

const buildInitalValues = (recipients: string[], templates: Template[], isKontrollerRevurderingApOpen?: boolean): FormValues => {
  const initialValues = {
    mottaker: recipients[0] ? recipients[0] : null,
    brevmalkode: templates && templates[0] ? templates[0].kode : null,
    fritekst: '',
  };

  if (isKontrollerRevurderingApOpen) {
    const defaultVerdi = templates.some((template) => template.kode === dokumentMalType.REVURDERING_DOK)
      ? dokumentMalType.REVURDERING_DOK : dokumentMalType.VARREV;
    return { ...initialValues, brevmalkode: defaultVerdi };
  }
  return { ...initialValues };
};

const transformValues = (values: FormValues) => {
  const newValues = values;
  if ((values.brevmalkode === dokumentMalType.REVURDERING_DOK || values.brevmalkode === dokumentMalType.VARREV)
      && newValues.arsakskode !== ugunstAarsakTyper.ANNET) {
    newValues.fritekst = ' ';
  }
  return newValues;
};

const formName = 'Messages';

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: FormValues) => initialOwnProps.submitCallback(transformValues(values));
  return (state, ownProps: PureOwnProps) => ({
    ...formValueSelector(formName)(state, 'mottaker', 'brevmalkode', 'fritekst', 'arsakskode'),
    initialValues: buildInitalValues(ownProps.recipients, ownProps.templates, ownProps.isKontrollerRevurderingApOpen),
    onSubmit,
  });
};

const Messages = connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(injectIntl(MessagesImpl)));

export default Messages;
