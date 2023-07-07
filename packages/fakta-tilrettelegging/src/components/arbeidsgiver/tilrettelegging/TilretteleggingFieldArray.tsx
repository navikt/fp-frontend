import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  ArbeidsgiverOpplysningerPerId,
  SvpAvklartOppholdPeriode,
} from '@navikt/fp-types';

import { Button, Table } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { PlusIcon } from '@navikt/aksel-icons';
import dayjs from 'dayjs';
import ExpandableRowWrapper, { TilretteleggingEllerOpphold } from './ExpandableRowWrapper';

const lagRader = (
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[],
  oppholdsperioder: SvpAvklartOppholdPeriode[],
): TilretteleggingEllerOpphold[] => {
  const rader = [] as TilretteleggingEllerOpphold[];
  return rader
    .concat(tilretteleggingDatoer)
    .concat(oppholdsperioder)
    .sort((r1, r2) => dayjs(r1.fom).diff(dayjs(r2.fom)));
};

interface OwnProps {
  readOnly: boolean;
  sorterteArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  stateIndex: number;
}

const TilretteleggingFieldArray: FunctionComponent<OwnProps> = ({ stateIndex, readOnly }) => {
  const tilretteleggingStateName = `arbeidsforhold.${stateIndex}.tilretteleggingDatoer`;
  const oppholdPerioderStateName = `arbeidsforhold.${stateIndex}.avklarteOppholdPerioder`;

  const { watch } = useFormContext();

  const tilretteleggingDatoer = watch(tilretteleggingStateName);
  const oppholdsperioder = watch(oppholdPerioderStateName);
  const rader = useMemo(
    () => lagRader(tilretteleggingDatoer, oppholdsperioder),
    [tilretteleggingDatoer, oppholdsperioder],
  );

  const [alleRader, setRader] = useState(rader);

  useEffect(() => {
    setRader(rader);
  }, [rader]);

  const leggTilOpphold = () => {
    setRader(old =>
      old.concat({
        fom: undefined,
        tom: undefined,
        oppholdÅrsak: undefined,
      }),
    );
  };
  const leggTilTilrettelegging = () => {
    setRader(old =>
      old.concat({
        fom: undefined,
        type: undefined,
      }),
    );
  };

  return (
    <>
      <Table size="small">
        <Table.Body>
          {alleRader.map((radInfo, index: number) => (
            // @ts-ignore fixme
            <ExpandableRowWrapper
              key={radInfo.fom}
              arrayName={`${tilretteleggingStateName}.${index}`}
              radInfo={radInfo}
              readOnly={readOnly}
              index={index}
              openRad={radInfo.fom === undefined}
            />
          ))}
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
