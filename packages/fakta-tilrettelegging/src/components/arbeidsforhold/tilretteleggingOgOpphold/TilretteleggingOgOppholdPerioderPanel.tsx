import React, { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PlusIcon } from '@navikt/aksel-icons';
import { Button, HStack, Table, VStack } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  SvpAvklartOppholdPeriode,
  SvpTilretteleggingFomKilde,
} from '@navikt/fp-types';

import { OppholdPeriodeTabellRad } from './opphold/OppholdPeriodeTabellRad';
import { TilretteleggingPeriodeTabellRad } from './tilrettelegging/TilretteleggingPeriodeTabellRad';

const finnTilrettelegging = (
  alleFomDatoerSortert: string[],
  tilretteleggingDatoer: ArbeidsforholdTilretteleggingDato[],
  index: number,
): ArbeidsforholdTilretteleggingDato | undefined => {
  const nesteFomDato = alleFomDatoerSortert[index + 1];
  if (!nesteFomDato) {
    return undefined;
  }
  const nesteTilrettelegging = tilretteleggingDatoer.find(t => t.fom === nesteFomDato);
  return nesteTilrettelegging || finnTilrettelegging(alleFomDatoerSortert, tilretteleggingDatoer, index + 1);
};

interface Props {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  stillingsprosentArbeidsforhold: number;
  termindato: string;
}

export const TilretteleggingOgOppholdPerioderPanel = ({
  arbeidsforhold,
  arbeidsforholdIndex,
  readOnly,
  stillingsprosentArbeidsforhold,
  termindato,
}: Props) => {
  const tilretteleggingStateName = `arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingDatoer`;
  const oppholdPerioderStateName = `arbeidsforhold.${arbeidsforholdIndex}.avklarteOppholdPerioder`;

  const [erLeggTilKnapperDisablet, setErLeggTilKnapperDisablet] = useState(false);

  const { append: appendTilrettelegging, remove: removeTilrettelegging } = useFieldArray({
    name: tilretteleggingStateName,
  });
  const { append: appendOpphold, remove: removeOpphold } = useFieldArray({ name: oppholdPerioderStateName });

  const { tilretteleggingDatoer, avklarteOppholdPerioder } = arbeidsforhold;

  const leggTilOpphold = () => {
    setErLeggTilKnapperDisablet(true);
    appendOpphold({
      fom: undefined,
      tom: undefined,
      oppholdÅrsak: undefined,
      oppholdKilde: 'REGISTRERT_AV_SAKSBEHANDLER',
    });
  };
  const leggTilTilrettelegging = () => {
    setErLeggTilKnapperDisablet(true);
    appendTilrettelegging({
      fom: undefined,
      type: undefined,
      kilde: SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER,
    });
  };

  const fjernTilrettelegging = (fomDato?: string) => {
    removeTilrettelegging(
      fomDato ? tilretteleggingDatoer.findIndex(t => t.fom === fomDato) : tilretteleggingDatoer.length - 1,
    );
  };
  const fjernOpphold = (opphold?: SvpAvklartOppholdPeriode) => {
    removeOpphold(
      opphold
        ? avklarteOppholdPerioder.findIndex(
            o => o.fom === opphold.fom && o.tom === opphold.tom && o.oppholdKilde === opphold.oppholdKilde,
          )
        : avklarteOppholdPerioder.length - 1,
    );
  };

  const alleRaderSortert = [...tilretteleggingDatoer, ...avklarteOppholdPerioder].sort((d1, d2) => {
    if (!d1.fom) {
      return 1;
    }
    if (!d2.fom) {
      return -1;
    }
    return dayjs(d1.fom).diff(dayjs(d2.fom));
  });

  return (
    <VStack gap="6">
      <Table size="small">
        <Table.Body>
          {alleRaderSortert.map((rad, index) => {
            if ('kilde' in rad) {
              const fomDatoer = alleRaderSortert.map(r => r.fom);
              const tilretteleggingIndex = tilretteleggingDatoer.findIndex(t => t.fom === rad.fom);
              const nesteTilrettelegging = finnTilrettelegging(fomDatoer, tilretteleggingDatoer, index);

              const tomDatoForTilrettelegging = nesteTilrettelegging?.fom
                ? dayjs(nesteTilrettelegging.fom).subtract(1, 'day').format(ISO_DATE_FORMAT)
                : dayjs(termindato).subtract(3, 'week').subtract(1, 'day').format(ISO_DATE_FORMAT);

              const navn = `${tilretteleggingStateName}.${tilretteleggingIndex}`;
              return (
                <TilretteleggingPeriodeTabellRad
                  key={navn}
                  navn={navn}
                  tilrettelegging={rad}
                  readOnly={readOnly}
                  index={arbeidsforholdIndex + tilretteleggingIndex}
                  openRad={rad.fom === undefined}
                  fjernTilrettelegging={fjernTilrettelegging}
                  setLeggTilKnapperDisablet={setErLeggTilKnapperDisablet}
                  stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
                  arbeidsforhold={arbeidsforhold}
                  tomDatoForTilrettelegging={tomDatoForTilrettelegging}
                  termindato={termindato}
                />
              );
            }

            const oppholdIndex = avklarteOppholdPerioder.findIndex(
              t => t.fom === rad.fom && t.tom === rad.tom && t.oppholdKilde === rad.oppholdKilde,
            );
            const navn = `${oppholdPerioderStateName}.${oppholdIndex}`;
            return (
              <OppholdPeriodeTabellRad
                key={navn}
                navn={navn}
                opphold={rad}
                readOnly={readOnly}
                index={arbeidsforholdIndex + oppholdIndex}
                openRad={rad.fom === undefined}
                fjernOpphold={fjernOpphold}
                setLeggTilKnapperDisablet={setErLeggTilKnapperDisablet}
                arbeidsforhold={arbeidsforhold}
                termindato={termindato}
              />
            );
          })}
        </Table.Body>
      </Table>
      {!readOnly && (
        <HStack gap="4">
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
        </HStack>
      )}
    </VStack>
  );
};
