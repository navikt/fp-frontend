import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { Button } from '@navikt/ds-react';

import { dokumentMalType, ugunstAarsakTyper, fagsakYtelseType as FagsakYtelseType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';
import { ariaCheck, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { getLanguageFromSprakkode } from '@navikt/ft-utils';
import { SelectField, TextAreaField, Form } from '@navikt/ft-form-hooks';
import { FlexContainer, FlexRow, FlexColumn, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { UkjentAdresseMeldingIndex } from '@navikt/fp-sak-ukjent-adresse';

import styles from './messages.module.css';

const maxLength4000 = maxLength(4000);
const maxLength6000 = maxLength(6000);
const minLength3 = minLength(3);

export type FormValues = {
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
};

export type Template = {
  kode: string;
  navn: string;
  tilgjengelig: boolean;
};

const getFritekstMessage = (brevmalkode?: string): string =>
  brevmalkode === dokumentMalType.INNHENTE_OPPLYSNINGER || brevmalkode === dokumentMalType.TBK_INNHENTE_OPPLYSNINGER
    ? 'Messages.DocumentList'
    : 'Messages.Fritekst';

// TODO (TOR) Bør erstattast av ein markør fra backend
const showFritekst = (brevmalkode?: string, arsakskode?: string): boolean =>
  brevmalkode === dokumentMalType.INNHENTE_OPPLYSNINGER ||
  brevmalkode === dokumentMalType.FRITEKST ||
  brevmalkode === dokumentMalType.KORRIGERT_VARSEL_OM_TILBAKEKREVING ||
  brevmalkode === dokumentMalType.VARSEL_OM_TILBAKEKREVING ||
  brevmalkode === dokumentMalType.TBK_INNHENTE_OPPLYSNINGER ||
  (brevmalkode === dokumentMalType.VARSEL_OM_REVURDERING && arsakskode === ugunstAarsakTyper.ANNET);

const getfiltrerteRevurderingVarslingArsaker = (
  revurderingVarslingArsaker: KodeverkMedNavn[],
  fagsakYtelseType: string,
): KodeverkMedNavn[] => {
  if (fagsakYtelseType === FagsakYtelseType.ENGANGSSTONAD) {
    return revurderingVarslingArsaker.filter(
      arsak =>
        arsak.kode === ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER || arsak.kode === ugunstAarsakTyper.ANNET,
    );
  }
  if (fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return revurderingVarslingArsaker.filter(
      arsak =>
        arsak.kode !== ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER &&
        arsak.kode !== ugunstAarsakTyper.MORS_AKTIVITETSKRAV_ER_IKKE_OPPFYLT,
    );
  }
  return revurderingVarslingArsaker;
};

const buildInitalValues = (templates: Template[], isKontrollerRevurderingApOpen?: boolean): FormValues => {
  const initialValues = {
    brevmalkode: templates && templates[0] ? templates[0].kode : undefined,
    fritekst: '',
  };

  if (isKontrollerRevurderingApOpen) {
    return { ...initialValues, brevmalkode: dokumentMalType.VARSEL_OM_REVURDERING };
  }
  return { ...initialValues };
};

const transformValues = (values: FormValues) => {
  const newValues = values;
  if (
    values.brevmalkode === dokumentMalType.VARSEL_OM_REVURDERING &&
    newValues.arsakskode !== ugunstAarsakTyper.ANNET
  ) {
    newValues.fritekst = ' ';
  }
  return newValues;
};

interface OwnProps {
  submitCallback: (values: FormValues) => void;
  previewCallback: (brevmalkode?: string, fritekst?: string, arsakskode?: string) => void;
  templates: Template[];
  sprakKode?: string;
  revurderingVarslingArsak: KodeverkMedNavn[];
  isKontrollerRevurderingApOpen?: boolean;
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: any;
  setMeldingFormData: (data?: any) => void;
  brukerManglerAdresse: boolean;
}

/**
 * Messages
 *
 * Presentasjonskomponent. Gir mulighet for å forhåndsvise og sende brev. Mottaker og brevtype velges fra predefinerte lister,
 * og fritekst som skal flettes inn i brevet skrives inn i et eget felt.
 */
const Messages: FunctionComponent<OwnProps> = ({
  templates,
  previewCallback,
  submitCallback,
  sprakKode,
  revurderingVarslingArsak,
  fagsakYtelseType,
  kanVeilede,
  meldingFormData,
  setMeldingFormData,
  isKontrollerRevurderingApOpen,
  brukerManglerAdresse,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: meldingFormData || buildInitalValues(templates, isKontrollerRevurderingApOpen),
  });

  const brevmalkode = formMethods.watch('brevmalkode');
  const fritekst = formMethods.watch('fritekst');
  const arsakskode = formMethods.watch('arsakskode');

  const filtrerteRevurderingVarslingArsaker = useMemo(
    () => getfiltrerteRevurderingVarslingArsaker(revurderingVarslingArsak, fagsakYtelseType),
    [],
  );

  if (!sprakKode) {
    return null;
  }

  const { formState } = formMethods;

  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (brevmalkode) {
      previewCallback(brevmalkode, fritekst, arsakskode);
    }
    e.preventDefault();
  };

  const language = getLanguageFromSprakkode(sprakKode);

  const erVarselOmRevurdering = brevmalkode === dokumentMalType.VARSEL_OM_REVURDERING;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMeldingFormData}
    >
      <SelectField
        name="brevmalkode"
        label={intl.formatMessage({ id: 'Messages.Template' })}
        validate={[required]}
        selectValues={templates.map(template => (
          <option key={template.kode} value={template.kode} disabled={!template.tilgjengelig}>
            {template.navn}
          </option>
        ))}
        className={styles.bredde}
      />
      {erVarselOmRevurdering && (
        <>
          <VerticalSpacer sixteenPx />
          <SelectField
            name="arsakskode"
            label={intl.formatMessage({ id: 'Messages.Årsak' })}
            validate={[required]}
            selectValues={filtrerteRevurderingVarslingArsaker.map(cause => (
              <option key={cause.kode} value={cause.kode}>
                {cause.navn}
              </option>
            ))}
            className={styles.bredde}
          />
        </>
      )}
      {showFritekst(brevmalkode, arsakskode) && (
        <>
          <VerticalSpacer sixteenPx />
          <TextAreaField
            name="fritekst"
            label={intl.formatMessage({ id: getFritekstMessage(brevmalkode) })}
            validate={[required, erVarselOmRevurdering ? maxLength6000 : maxLength4000, minLength3, hasValidText]}
            maxLength={erVarselOmRevurdering ? 6000 : 4000}
            badges={[{ type: 'info', titleText: language }]}
          />
        </>
      )}

      <FlexContainer>
        {brukerManglerAdresse && (
          <>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn>
                <UkjentAdresseMeldingIndex />
              </FlexColumn>
            </FlexRow>
          </>
        )}
        <VerticalSpacer sixteenPx />
        <FlexRow spaceBetween>
          <FlexColumn>
            <a
              href=""
              onClick={previewMessage}
              onKeyDown={e => (e.key === 'Enter' ? previewMessage(e) : null)}
              className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
            >
              {intl.formatMessage({ id: 'Messages.Preview' })}
            </a>
          </FlexColumn>
          <FlexColumn>
            <Button
              size="small"
              variant="primary"
              loading={formState.isSubmitting}
              disabled={formState.isSubmitting || kanVeilede}
              onClick={ariaCheck}
            >
              {intl.formatMessage({ id: 'Messages.Submit' })}
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Form>
  );
};

export default Messages;
