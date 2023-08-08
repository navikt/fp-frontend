import React, { FunctionComponent } from 'react';
import { useFieldArray } from 'react-hook-form';
import { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

import { Button, Table } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { PlusIcon } from '@navikt/aksel-icons';
import dayjs from 'dayjs';
import TilretteleggingPerioderTabellRad from './TilretteleggingPerioderTabellRad';

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

  const { tilretteleggingDatoer, avklarteOppholdPerioder } = arbeidsforhold;

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
      removeTilrettelegging(tilretteleggingDatoer.length - 1);
    } else {
      removeOpphold(avklarteOppholdPerioder.length - 1);
    }
  };

  const antallRader = tilretteleggingDatoer.length + avklarteOppholdPerioder.length;
  const alleFomDatoerSortert = tilretteleggingDatoer
    .map(t => t.fom)
    .concat(avklarteOppholdPerioder.map(t => t.fom))
    .sort((fom1, fom2) => {
      if (!fom1) {
        return 1;
      }
      if (!fom2) {
        return -1;
      }
      return dayjs(fom1).diff(dayjs(fom2));
    });

  return (
    <>
      <Table size="small">
        <Table.Body>
          {[...Array(antallRader)].map((_d, index) => {
            const fomDato = alleFomDatoerSortert[index];
            const tilretteleggingIndex = tilretteleggingDatoer.findIndex(t => t.fom === fomDato);
            const oppholdIndex = avklarteOppholdPerioder.findIndex(t => t.fom === fomDato);
            return (
              <TilretteleggingPerioderTabellRad
                key={fomDato}
                navn={
                  tilretteleggingIndex !== -1
                    ? `${tilretteleggingStateName}.${tilretteleggingIndex}`
                    : `${oppholdPerioderStateName}.${oppholdIndex}`
                }
                tilrettelegging={tilretteleggingDatoer[tilretteleggingIndex]}
                opphold={avklarteOppholdPerioder[oppholdIndex]}
                readOnly={readOnly}
                index={arbeidsforholdIndex + index}
                openRad={fomDato === undefined}
                fjernTilretteleggingEllerOpphold={fjernTilretteleggingEllerOpphold}
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

export default TilretteleggingPerioderPanel;
