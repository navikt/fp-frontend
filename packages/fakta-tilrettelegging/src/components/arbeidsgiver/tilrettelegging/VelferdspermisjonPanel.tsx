import React, { useState, FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Button, Table, Tag } from '@navikt/ds-react';

import { Permisjon } from '@navikt/fp-types';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import styles from './velferdspermisjonPanel.module.css';

const utledStyleForRad = (open: boolean, erIkkeValgt: boolean) => {
  if (erIkkeValgt) {
    return styles.apRow;
  }
  return open ? styles.openRow : styles.row;
};

type FormValues = Record<number, Permisjon>;

interface OwnProps {
  velferdspermisjon: Permisjon;
  arbeidsforholdIndex: number;
  permisjonIndex: number;
  readOnly: boolean;
}

const VelferdspermisjonPanel: FunctionComponent<OwnProps> = ({
  velferdspermisjon,
  permisjonIndex,
  arbeidsforholdIndex,
  readOnly,
}) => {
  const intl = useIntl();

  const { setValue } = useFormContext();

  const erIkkeValgt = velferdspermisjon.erGyldig === undefined;

  const [open, setOpen] = useState(erIkkeValgt);

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [permisjonIndex]: {
        ...velferdspermisjon,
      },
    },
  });

  const lagreIForm = (values: FormValues) => {
    const formValues = values[permisjonIndex];
    setValue(`arbeidsforhold.${arbeidsforholdIndex}.velferdspermisjoner.${permisjonIndex}`, formValues);
    setOpen(false);
    formMethods.reset(values);
    return Promise.resolve();
  };

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      content={
        <FormProvider {...formMethods}>
          <div
            style={{
              backgroundColor: 'white',
              marginLeft: '-48px',
              marginTop: '-8px',
              marginBottom: '-8px',
              marginRight: '-48px',
              padding: '30px',
            }}
          >
            <RadioGroupPanel
              name={`${permisjonIndex}.erGyldig`}
              label={intl.formatMessage({ id: 'VelferdspermisjonPanel.PermisjonGyldig' })}
              description={intl.formatMessage({ id: 'VelferdspermisjonPanel.PermisjonGyldigDetaljer' })}
              validate={[required]}
              isReadOnly={readOnly}
              isTrueOrFalseSelection
              radios={[
                {
                  label: intl.formatMessage({ id: 'VelferdspermisjonPanel.Ja' }),
                  value: 'true',
                },
                {
                  label: intl.formatMessage({ id: 'VelferdspermisjonPanel.Nei' }),
                  value: 'false',
                },
              ]}
            />
            <VerticalSpacer sixteenPx />
            <Button
              size="small"
              variant="primary"
              type="button"
              disabled={!formMethods.formState.isDirty || false}
              loading={false}
              onClick={formMethods.handleSubmit((values: FormValues) => lagreIForm(values))}
            >
              <FormattedMessage id="VelferdspermisjonPanel.Oppdater" />
            </Button>
          </div>
        </FormProvider>
      }
      togglePlacement="right"
      className={utledStyleForRad(open, erIkkeValgt)}
    >
      <Table.DataCell>
        <PeriodLabel dateStringFom={velferdspermisjon.permisjonFom} dateStringTom={velferdspermisjon.permisjonTom} />
      </Table.DataCell>
      <Table.DataCell>
        <FormattedMessage
          id="VelferdspermisjonPanel.Permisjon"
          values={{
            type: velferdspermisjon.type.toLowerCase(),
            permisjon: velferdspermisjon.permisjonsprosent,
          }}
        />
      </Table.DataCell>
      <Table.DataCell>
        <Tag variant="neutral-moderate" size="small">
          <FormattedMessage id="VelferdspermisjonPanel.AAregisteret" />
        </Tag>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};
export default VelferdspermisjonPanel;
