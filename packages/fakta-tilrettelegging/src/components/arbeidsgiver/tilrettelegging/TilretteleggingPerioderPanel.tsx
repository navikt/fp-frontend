import React, { FunctionComponent } from 'react';
import { useFieldArray } from 'react-hook-form';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  SvpAvklartOppholdPeriode,
} from '@navikt/fp-types';

import { Button, Table } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { PlusIcon } from '@navikt/aksel-icons';
import dayjs from 'dayjs';
import TilretteleggingPerioderTabellRad, { TilretteleggingEllerOpphold } from './TilretteleggingPerioderTabellRad';

const lagRader = (
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[],
  oppholdsperioder: SvpAvklartOppholdPeriode[],
): TilretteleggingEllerOpphold[] => {
  const rader = [] as TilretteleggingEllerOpphold[];
  return rader
    .concat(
      tilretteleggingDatoer.map(td => ({
        radType: 'tilrettelegging',
        ...td,
      })),
    )
    .concat(
      oppholdsperioder.map(td => ({
        radType: 'opphold',
        ...td,
      })),
    )
    .sort((r1, r2) => {
      if (!r1.fom) {
        return 1;
      }
      if (!r2.fom) {
        return -1;
      }
      return dayjs(r1.fom).diff(dayjs(r2.fom));
    });
};

interface OwnProps {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  arbeidsforholdIndex: number;
  readOnly: boolean;
}

const TilretteleggingPerioderPanel: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
  arbeidsforholdIndex,
  readOnly,
}) => {
  const tilretteleggingStateName = `arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingDatoer`;
  const oppholdPerioderStateName = `arbeidsforhold.${arbeidsforholdIndex}.avklarteOppholdPerioder`;

  const { append: appendTilrettelegging, remove: removeTilrettelegging } = useFieldArray({
    name: tilretteleggingStateName,
  });
  const { append: appendOpphold, remove: removeOpphold } = useFieldArray({ name: oppholdPerioderStateName });

  const rader = lagRader(arbeidsforhold.tilretteleggingDatoer, arbeidsforhold.avklarteOppholdPerioder);

  const leggTilOpphold = () => {
    appendOpphold({
      fom: undefined,
      tom: undefined,
      oppholdÅrsak: undefined,
    });
  };
  const leggTilTilrettelegging = () => {
    appendTilrettelegging({
      fom: undefined,
      type: undefined,
    });
  };

  const fjernTilretteleggingEllerOpphold = (erTilrettelegging: boolean) => {
    if (erTilrettelegging) {
      removeTilrettelegging(arbeidsforhold.tilretteleggingDatoer.length - 1);
    } else {
      removeOpphold(arbeidsforhold.avklarteOppholdPerioder.length - 1);
    }
  };

  return (
    <>
      <Table size="small">
        <Table.Body>
          {rader.map((radInfo, index: number) => (
            <TilretteleggingPerioderTabellRad
              key={radInfo.fom}
              tilretteleggingNavn={`${tilretteleggingStateName}.${index}`}
              oppholdNavn={`${oppholdPerioderStateName}.${index}`}
              radInfo={radInfo}
              readOnly={readOnly}
              index={arbeidsforholdIndex + index}
              openRad={radInfo.fom === undefined}
              fjernTilretteleggingEllerOpphold={fjernTilretteleggingEllerOpphold}
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

export default TilretteleggingPerioderPanel;
