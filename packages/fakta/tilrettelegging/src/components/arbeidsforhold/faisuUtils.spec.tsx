import type { FieldArrayWithId } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import type { Arbeidsforhold } from '@navikt/fp-types';
import { getIntlMock } from '@navikt/fp-utils-test';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { getFAISUProps } from './faisuUtils';

import messages from '../../../i18n/nb_NO.json';

const intl = getIntlMock(messages);

type Felt = FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>;

const lagTilrettelegging = (overrides: Partial<Tilrettelegging> = {}): Felt => ({
  id: 'id',
  arbeidsgiverReferanse: '999999999',
  kanTilrettelegges: true,
  skalBrukes: true,
  tilretteleggingBehovFom: '2020-10-01',
  tilretteleggingDatoer: [],
  avklarteOppholdPerioder: [],
  velferdspermisjoner: [],
  skalVurdereSplittAvArbeidsforholdet: false,
  arbeidsforholdetErSplittet: false,
  ...overrides,
});

const lagAoiArbeidsforhold = (internArbeidsforholdId: string): Arbeidsforhold => ({
  arbeidsgiverIdent: '999999999',
  fom: '2020-01-01',
  tom: '2020-12-31',
  internArbeidsforholdId,
  stillingsprosent: 100,
  permisjoner: [],
});

const klikkActionKnapp = (props: ReturnType<typeof getFAISUProps>) => {
  const { unmount } = render(<RawIntlProvider value={intl}>{props?.action}</RawIntlProvider>);
  fireEvent.click(screen.getByRole('button'));
  unmount();
};

describe('faisuUtils', () => {
  it('skal returnere undefined når arbeidsforholdet verken skal vurderes splittet eller er splittet', () => {
    const props = getFAISUProps(lagTilrettelegging(), [], [], vi.fn(), {});

    expect(props).toBeUndefined();
  });

  it('skal vise splitt-knapp og «flere arbeidsforhold»-tag når arbeidsforholdet skal vurderes splittet', () => {
    const arbeidsforhold = lagTilrettelegging({ skalVurdereSplittAvArbeidsforholdet: true });
    const replace = vi.fn();
    const aoi = [lagAoiArbeidsforhold('a'), lagAoiArbeidsforhold('b')];

    const props = getFAISUProps(arbeidsforhold, [arbeidsforhold], aoi, replace, {});

    render(
      <RawIntlProvider value={intl}>
        {props?.tag}
        {props?.action}
      </RawIntlProvider>,
    );

    expect(screen.getByText('Flere arbeidsforhold')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Splitt til 2 arbeidsforhold' }));
    expect(replace).toHaveBeenCalledTimes(1);
    expect(replace.mock.calls[0]![0]).toHaveLength(2);
  });

  it('skal vise fjern-splitt-knapp og splitt-tag når flere tilrettelegginger er splittet hos samme arbeidsgiver', () => {
    const splittet1 = lagTilrettelegging({ arbeidsforholdetErSplittet: true });
    const splittet2 = lagTilrettelegging({ arbeidsforholdetErSplittet: true });
    const replace = vi.fn();

    const props = getFAISUProps(splittet1, [splittet1, splittet2], [lagAoiArbeidsforhold('a')], replace, {});

    render(
      <RawIntlProvider value={intl}>
        {props?.tag}
        {props?.action}
      </RawIntlProvider>,
    );

    expect(screen.getByText('Splitt')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Fjern splitt av tilrettelegging for 2 arbeidsforhold' }));
    expect(replace).toHaveBeenCalledTimes(1);
    expect(replace.mock.calls[0]![0]).toHaveLength(1);
  });

  it('skal ende opp med opprinnelige felter etter splitt og påfølgende reversering', () => {
    const aoi = [lagAoiArbeidsforhold('a'), lagAoiArbeidsforhold('b')];
    const original: Tilrettelegging = {
      arbeidsgiverReferanse: '999999999',
      internArbeidsforholdReferanse: undefined,
      eksternArbeidsforholdReferanse: undefined,
      kanTilrettelegges: false,
      skalBrukes: true,
      uttakArbeidType: 'ORDINÆRT_ARBEID',
      skalVurdereSplittAvArbeidsforholdet: true,
      arbeidsforholdetErSplittet: false,
      tilretteleggingBehovFom: '2020-10-01',
      velferdspermisjoner: [],
      avklarteOppholdPerioder: [],
      tilretteleggingDatoer: [],
      stillingsprosentStartTilrettelegging: 200,
    };
    const originalFelt: Felt = { ...original, id: 'original' };

    const replaceSplitt = vi.fn();
    klikkActionKnapp(getFAISUProps(originalFelt, [originalFelt], aoi, replaceSplitt, {}));

    const splittedeFelter: Felt[] = (replaceSplitt.mock.calls[0]![0] as Tilrettelegging[]).map((felt, index) => ({
      ...felt,
      id: `splitt-${index}`,
    }));
    expect(splittedeFelter).toHaveLength(2);
    expect(splittedeFelter.every(felt => felt.arbeidsforholdetErSplittet)).toBe(true);

    const replaceRevert = vi.fn();
    klikkActionKnapp(getFAISUProps(splittedeFelter[0]!, splittedeFelter, aoi, replaceRevert, {}));

    expect(replaceRevert.mock.calls[0]![0]).toStrictEqual([original]);
  });
});
