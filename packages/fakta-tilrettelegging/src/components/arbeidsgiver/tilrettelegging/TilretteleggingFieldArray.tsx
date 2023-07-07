import React, { FunctionComponent, useState } from 'react';
import { FieldValues, UseFieldArrayUpdate, useFieldArray, useFormContext } from 'react-hook-form';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import { Button, Table } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { PlusIcon } from '@navikt/aksel-icons';
import styles from './tilretteleggingFieldArray.module.css';
import TilretteleggingsbehovForm from './TilretteleggingsbehovForm';

interface WrapperProps {
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  tilrettelegingInfo: ArbeidsforholdTilretteleggingDato;
  index: number;
  update: UseFieldArrayUpdate<FieldValues, string>;
  readOnly: boolean;
}

const ExpandableRowWrapper: FunctionComponent<WrapperProps> = ({ tilrettelegingInfo, index, update, readOnly }) => {
  const [open, setOpen] = useState(false);

  const oppdaterTilrettelegging = (values: ArbeidsforholdTilretteleggingDato) => update(index, values);
  const avbrytEditering = () => {
    setOpen(false);
  };

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      key={tilrettelegingInfo.fom}
      content={
        <TilretteleggingsbehovForm
          tilrettelegging={tilrettelegingInfo}
          index={index}
          oppdaterTilrettelegging={oppdaterTilrettelegging}
          avbrytEditering={avbrytEditering}
          readOnly={readOnly}
        />
      }
      togglePlacement="right"
      className={open ? styles.openRow : styles.row}
    >
      <Table.DataCell>{tilrettelegingInfo.fom}</Table.DataCell>
      <Table.DataCell>{tilrettelegingInfo.type}</Table.DataCell>
    </Table.ExpandableRow>
  );
};

interface OwnProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  stateIndex: number;
}

const TilretteleggingFieldArray: FunctionComponent<OwnProps> = ({ stateIndex, readOnly }) => {
  const arrayName = `arbeidsforhold.${stateIndex}.tilretteleggingDatoer`;

  const { control, watch } = useFormContext();
  const { fields, update } = useFieldArray({
    control,
    name: arrayName,
  });

  const tilretteleggingDatoer = watch(arrayName);

  const leggTilOpphold = () => undefined;
  const leggTilTilrettelegging = () => undefined;

  // const { tilretteleggingDatoer } = sorterteArbeidsforhold[stateIndex];

  return (
    <>
      <Table size="small">
        <Table.Body>
          {fields.map((field, index: number) => {
            const t = tilretteleggingDatoer[index];
            return (
              // @ts-ignore fixme
              <ExpandableRowWrapper
                key={field.id}
                index={index}
                tilrettelegingInfo={t}
                update={update}
                readOnly={readOnly}
              />
            );
          })}
        </Table.Body>
      </Table>
      <VerticalSpacer thirtyTwoPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Button
              size="small"
              variant="secondary"
              type="button"
              icon={<PlusIcon aria-hidden />}
              onClick={leggTilTilrettelegging}
            >
              <FormattedMessage id="TilretteleggingFieldArray.LeggTilTilrettelegging" />
            </Button>
          </FlexColumn>
          <FlexColumn>
            <Button
              size="small"
              variant="secondary"
              onClick={leggTilOpphold}
              icon={<PlusIcon aria-hidden />}
              type="button"
            >
              <FormattedMessage id="TilretteleggingFieldArray.LeggTilOpphold" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </>
  );
};

export default TilretteleggingFieldArray;
