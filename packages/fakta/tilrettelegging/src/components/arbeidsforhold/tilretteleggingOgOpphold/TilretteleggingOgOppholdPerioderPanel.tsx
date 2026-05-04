import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PlusIcon } from '@navikt/aksel-icons';
import { Button, HStack, Table } from '@navikt/ds-react';
import { ISO_DATE_FORMAT, sortPeriodsByFom } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type {
  SvpArbeidsforholdDto,
  SvpAvklartOppholdPeriode,
  SvpOppholdÅrsak,
  SvpTilretteleggingDatoDto,
  TilretteleggingType,
} from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../../types/TilretteleggingFormValues';
import { OppholdPeriodeTabellRad } from './opphold/OppholdPeriodeTabellRad';
import { TilretteleggingPeriodeTabellRad } from './tilrettelegging/TilretteleggingPeriodeTabellRad';

const finnNesteTilretteleggingFom = (
  tilretteleggingDatoer: SvpTilretteleggingDatoDto[],
  gjeldendeFom: string,
): string | undefined =>
  tilretteleggingDatoer
    .map(t => t.fom)
    .filter(fom => !!fom && dayjs(fom).isAfter(gjeldendeFom))
    .sort((a, b) => dayjs(a).diff(dayjs(b)))[0];

interface Props {
  arbeidsforhold: SvpArbeidsforholdDto;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  disabled: boolean;
  stillingsprosentArbeidsforhold: number;
  termindato: string;
}

export const TilretteleggingOgOppholdPerioderPanel = ({
  arbeidsforhold,
  arbeidsforholdIndex,
  readOnly,
  disabled,
  stillingsprosentArbeidsforhold,
  termindato,
}: Props) => {
  const tilretteleggingStateName = `arbeidsforhold.${arbeidsforholdIndex}.tilretteleggingDatoer` as const;
  const oppholdPerioderStateName = `arbeidsforhold.${arbeidsforholdIndex}.avklarteOppholdPerioder` as const;

  const [erLeggTilKnapperDisablet, setErLeggTilKnapperDisablet] = useState(false);

  const { control } = useFormContext<TilretteleggingFormValues>();

  const { append: appendTilrettelegging, remove: removeTilrettelegging } = useFieldArray({
    name: tilretteleggingStateName,
    control,
  });
  const { append: appendOpphold, remove: removeOpphold } = useFieldArray({ name: oppholdPerioderStateName, control });

  const { tilretteleggingDatoer, avklarteOppholdPerioder } = arbeidsforhold;

  const leggTilOpphold = () => {
    setErLeggTilKnapperDisablet(true);
    appendOpphold({
      fom: '',
      tom: '',
      oppholdÅrsak: undefined as unknown as SvpOppholdÅrsak,
      oppholdKilde: 'REGISTRERT_AV_SAKSBEHANDLER',
    });
  };
  const leggTilTilrettelegging = () => {
    setErLeggTilKnapperDisablet(true);
    appendTilrettelegging({
      fom: '',
      type: undefined as unknown as TilretteleggingType,
      kilde: 'REGISTRERT_AV_SAKSBEHANDLER',
      stillingsprosent: undefined,
      overstyrtUtbetalingsgrad: undefined,
      mottattDato: undefined,
    });
  };

  const slettTilrettelegging = (fomDato?: string) => {
    removeTilrettelegging(
      fomDato ? tilretteleggingDatoer.findIndex(t => t.fom === fomDato) : tilretteleggingDatoer.length - 1,
    );
  };
  const slettOpphold = (opphold?: SvpAvklartOppholdPeriode) => {
    removeOpphold(
      opphold
        ? avklarteOppholdPerioder.findIndex(
            o => o.fom === opphold.fom && o.tom === opphold.tom && o.oppholdKilde === opphold.oppholdKilde,
          )
        : avklarteOppholdPerioder.length - 1,
    );
  };

  const alleRaderSortert = [...tilretteleggingDatoer, ...avklarteOppholdPerioder].sort(sortPeriodsByFom);

  return (
    <>
      <Table size="small" width="fit-content">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={3} textSize="small">
              <FormattedMessage id="TilretteleggingOgOppholdPerioderPanel.Perioder" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="TilretteleggingOgOppholdPerioderPanel.Kilde" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {alleRaderSortert.map(rad => {
            if ('kilde' in rad) {
              const tilretteleggingIndex = tilretteleggingDatoer.findIndex(t => t.fom === rad.fom);
              const nesteTilretteleggingFom = finnNesteTilretteleggingFom(tilretteleggingDatoer, rad.fom);

              const tomDatoForTilrettelegging = nesteTilretteleggingFom
                ? dayjs(nesteTilretteleggingFom).subtract(1, 'day').format(ISO_DATE_FORMAT)
                : dayjs(termindato).subtract(3, 'week').subtract(1, 'day').format(ISO_DATE_FORMAT);

              return (
                <TilretteleggingPeriodeTabellRad
                  key={`${tilretteleggingStateName}.${tilretteleggingIndex}`}
                  navn={`${tilretteleggingStateName}.${tilretteleggingIndex}`}
                  index={arbeidsforholdIndex + tilretteleggingIndex}
                  tilrettelegging={rad}
                  readOnly={readOnly}
                  disabled={disabled}
                  openRad={rad.fom === ''}
                  fjernTilrettelegging={slettTilrettelegging}
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
            return (
              <OppholdPeriodeTabellRad
                key={`${oppholdPerioderStateName}.${oppholdIndex}`}
                navn={`${oppholdPerioderStateName}.${oppholdIndex}`}
                opphold={rad}
                readOnly={readOnly}
                disabled={disabled}
                index={arbeidsforholdIndex + oppholdIndex}
                openRad={rad.fom === ''}
                fjernOpphold={slettOpphold}
                setLeggTilKnapperDisablet={setErLeggTilKnapperDisablet}
                arbeidsforhold={arbeidsforhold}
                termindato={termindato}
              />
            );
          })}
        </Table.Body>
      </Table>
      {!(readOnly || disabled) && !arbeidsforhold.arbeidsforholdetErSplittet && (
        <HStack gap="space-16">
          <Button
            size="small"
            variant="secondary"
            data-color="accent"
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
            data-color="accent"
            onClick={leggTilOpphold}
            icon={<PlusIcon aria-hidden />}
            type="button"
            disabled={erLeggTilKnapperDisablet}
          >
            <FormattedMessage id="TilretteleggingFieldArray.LeggTilOpphold" />
          </Button>
        </HStack>
      )}
    </>
  );
};
