import React, { useState, FunctionComponent } from 'react';
import { useFieldArray } from 'react-hook-form';
import { ArbeidsforholdFodselOgTilrettelegging } from '@navikt/fp-types';

import { Button, Table } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { PlusIcon } from '@navikt/aksel-icons';
import dayjs from 'dayjs';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import TilretteleggingPeriodeTabellRad from './tilrettelegging/TilretteleggingPeriodeTabellRad';
import OppholdPeriodeTabellRad from './opphold/OppholdPeriodeTabellRad';

interface OwnProps {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  stillingsprosentArbeidsforhold: number;
  termindato: string;
}

const TilretteleggingOgOppholdPerioderPanel: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
  arbeidsforholdIndex,
  readOnly,
  stillingsprosentArbeidsforhold,
  termindato,
}) => {
  const tilretteleggingStateName = `arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingDatoer`;
  const oppholdPerioderStateName = `arbeidsforhold.${arbeidsforholdIndex}.avklarteOppholdPerioder`;

  const [erLeggTilKnapperDisablet, setLeggTilKnapperDisablet] = useState(false);

  const { append: appendTilrettelegging, remove: removeTilrettelegging } = useFieldArray({
    name: tilretteleggingStateName,
  });
  const { append: appendOpphold, remove: removeOpphold } = useFieldArray({ name: oppholdPerioderStateName });

  const { tilretteleggingDatoer, avklarteOppholdPerioder } = arbeidsforhold;

  const leggTilOpphold = () => {
    setLeggTilKnapperDisablet(true);
    appendOpphold({
      fom: undefined,
      tom: undefined,
      oppholdÅrsak: undefined,
    });
  };
  const leggTilTilrettelegging = () => {
    setLeggTilKnapperDisablet(true);
    appendTilrettelegging({
      fom: undefined,
      type: undefined,
    });
  };

  const fjernTilrettelegging = (fomDato?: string) => {
    removeTilrettelegging(
      fomDato ? tilretteleggingDatoer.findIndex(t => t.fom === fomDato) : tilretteleggingDatoer.length - 1,
    );
  };
  const fjernOpphold = (fomDato?: string) => {
    removeOpphold(
      fomDato ? avklarteOppholdPerioder.findIndex(t => t.fom === fomDato) : avklarteOppholdPerioder.length - 1,
    );
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
            if (tilretteleggingIndex !== -1) {
              const navn = `${tilretteleggingStateName}.${tilretteleggingIndex}`;
              const nesteTilrettelegging = tilretteleggingDatoer[tilretteleggingIndex + 1];
              const tomDatoForTilrettelegging = nesteTilrettelegging
                ? dayjs(nesteTilrettelegging.fom).subtract(1, 'day').format(ISO_DATE_FORMAT)
                : dayjs(termindato).subtract(3, 'week').format(ISO_DATE_FORMAT);

              return (
                <TilretteleggingPeriodeTabellRad
                  key={navn}
                  navn={navn}
                  tilrettelegging={tilretteleggingDatoer[tilretteleggingIndex]}
                  readOnly={readOnly}
                  index={arbeidsforholdIndex + tilretteleggingIndex}
                  openRad={fomDato === undefined}
                  fjernTilrettelegging={fjernTilrettelegging}
                  setLeggTilKnapperDisablet={setLeggTilKnapperDisablet}
                  stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
                  arbeidsforhold={arbeidsforhold}
                  tomDatoForTilrettelegging={tomDatoForTilrettelegging}
                  termindato={termindato}
                />
              );
            }

            const oppholdIndex = avklarteOppholdPerioder.findIndex(t => t.fom === fomDato);
            const navn = `${oppholdPerioderStateName}.${oppholdIndex}`;

            return (
              <OppholdPeriodeTabellRad
                key={navn}
                navn={navn}
                opphold={avklarteOppholdPerioder[oppholdIndex]}
                readOnly={readOnly}
                index={arbeidsforholdIndex + oppholdIndex}
                openRad={fomDato === undefined}
                fjernOpphold={fjernOpphold}
                setLeggTilKnapperDisablet={setLeggTilKnapperDisablet}
                arbeidsforhold={arbeidsforhold}
                termindato={termindato}
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
              disabled={erLeggTilKnapperDisablet}
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
              disabled={erLeggTilKnapperDisablet}
            >
              <FormattedMessage id="TilretteleggingFieldArray.LeggTilOpphold" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </>
  );
};

export default TilretteleggingOgOppholdPerioderPanel;
