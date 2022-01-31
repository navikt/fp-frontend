import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { Hovedknapp } from 'nav-frontend-knapper';

import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import {
  ariaCheck, getLanguageFromSprakkode, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import ugunstAarsakTyper from '@fpsak-frontend/kodeverk/src/ugunstAarsakTyper';
import { SelectField, TextAreaField, Form } from '@fpsak-frontend/form-hooks';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import styles from './messages.less';

const maxLength4000 = maxLength(4000);
const maxLength6000 = maxLength(6000);
const minLength3 = minLength(3);

export type FormValues = {
  mottaker?: string;
  brevmalkode?: string;
  fritekst?: string;
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
  || (brevmalkode === dokumentMalType.REVURDERING_DOK && arsakskode === ugunstAarsakTyper.ANNET));

const getfiltrerteRevurderingVarslingArsaker = (revurderingVarslingArsaker: KodeverkMedNavn[], fagsakYtelseType: string): KodeverkMedNavn[] => {
  if (fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD) {
    return revurderingVarslingArsaker.filter((arsak) => arsak.kode === ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER
      || arsak.kode === ugunstAarsakTyper.ANNET);
  }
  if (fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return revurderingVarslingArsaker.filter((arsak) => arsak.kode !== ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER
      && arsak.kode !== ugunstAarsakTyper.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT);
  }
  return revurderingVarslingArsaker;
};

const buildInitalValues = (recipients: string[], templates: Template[], isKontrollerRevurderingApOpen?: boolean): FormValues => {
  const initialValues = {
    mottaker: recipients[0] ? recipients[0] : undefined,
    brevmalkode: templates && templates[0] ? templates[0].kode : undefined,
    fritekst: '',
  };

  if (isKontrollerRevurderingApOpen) {
    return { ...initialValues, brevmalkode: dokumentMalType.REVURDERING_DOK };
  }
  return { ...initialValues };
};

const transformValues = (values: FormValues) => {
  const newValues = values;
  if (values.brevmalkode === dokumentMalType.REVURDERING_DOK && newValues.arsakskode !== ugunstAarsakTyper.ANNET) {
    newValues.fritekst = ' ';
  }
  return newValues;
};

interface OwnProps {
  submitCallback: (values: FormValues) => void;
  previewCallback: (mottaker?: string, brevmalkode?: string, fritekst?: string, arsakskode?: string) => void;
  recipients: string[];
  templates: Template[];
  sprakKode?: string;
  revurderingVarslingArsak: KodeverkMedNavn[];
  isKontrollerRevurderingApOpen?: boolean;
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: any,
  setMeldingForData: (data?: any) => void,
}

/**
 * Messages
 *
 * Presentasjonskomponent. Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
 * og fritekst som skal flettes inn i brevet skrives inn i et eget felt.
 */
export const Messages: FunctionComponent<OwnProps> = ({
  recipients,
  templates,
  previewCallback,
  submitCallback,
  sprakKode,
  revurderingVarslingArsak,
  fagsakYtelseType,
  kanVeilede,
  meldingFormData,
  setMeldingForData,
  isKontrollerRevurderingApOpen,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: meldingFormData || buildInitalValues(recipients, templates, isKontrollerRevurderingApOpen),
  });

  const mottaker = formMethods.watch('mottaker');
  const brevmalkode = formMethods.watch('brevmalkode');
  const fritekst = formMethods.watch('fritekst');
  const arsakskode = formMethods.watch('arsakskode');

  const filtrerteRevurderingVarslingArsaker = useMemo(() => getfiltrerteRevurderingVarslingArsaker(revurderingVarslingArsak, fagsakYtelseType), []);

  if (!sprakKode) {
    return null;
  }

  const { formState } = formMethods;

  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (mottaker && brevmalkode) {
      previewCallback(mottaker, brevmalkode, fritekst, arsakskode);
    }
    e.preventDefault();
  };

  const language = getLanguageFromSprakkode(sprakKode);

  const erVarselOmRevurdering = brevmalkode === dokumentMalType.REVURDERING_DOK;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMeldingForData}
    >
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
      {erVarselOmRevurdering && (
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
              validate={[required, erVarselOmRevurdering ? maxLength6000 : maxLength4000, minLength3, hasValidText]}
              maxLength={erVarselOmRevurdering ? 6000 : 4000}
              badges={[{ type: 'fokus', text: language, titleText: intl.formatMessage({ id: 'Messages.Beskrivelse' }) }]}
            />
          </div>
        </>
      )}
      <div className={styles.buttonRow}>
        <Hovedknapp mini spinner={formState.isSubmitting} disabled={formState.isSubmitting || kanVeilede} onClick={ariaCheck}>
          {intl.formatMessage({ id: 'Messages.Submit' })}
        </Hovedknapp>
        <a
          href=""
          onClick={previewMessage}
          onKeyDown={(e) => (e.key === 'Enter' ? previewMessage(e) : null)}
          className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
        >
          {intl.formatMessage({ id: 'Messages.Preview' })}
        </a>
      </div>
    </Form>
  );
};

export default Messages;
