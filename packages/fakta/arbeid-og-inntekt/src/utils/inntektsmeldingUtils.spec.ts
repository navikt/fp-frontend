import type { ArbeidOgInntektsmelding } from '@navikt/fp-types';

import { ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet } from '../ArbeidOgInntektFaktaIndex.stories';
import { byggTabellStruktur } from './arbeidOgInntektTabellUtils';
import { finnInntektsmeldingerForArbeidsgiver, grupperArbeidsforholdMedInntektsmelding } from './inntektsmeldingUtils';

describe('inntektsmeldingUtils', () => {
  it('skal finne inntektsmeldinger som matcher arbeidsforhold', () => {
    const { arbeidsforhold, inntektsmeldinger } =
      ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet.args.arbeidOgInntekt;
    expect(finnInntektsmeldingerForArbeidsgiver(inntektsmeldinger, arbeidsforhold[0]!.arbeidsgiverIdent)).toHaveLength(
      2,
    );
  });

  it('skal gruppere arbeidsforhold med matchende inntektsmelding', () => {
    const { arbeidsforhold, inntektsmeldinger } =
      ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet.args.arbeidOgInntekt;

    const gruppering = grupperArbeidsforholdMedInntektsmelding(inntektsmeldinger, arbeidsforhold);
    expect(gruppering).toHaveLength(2);
    expect(gruppering[0]!.arbeidsforhold).toEqual(arbeidsforhold[0]!);
    expect(gruppering[0]!.inntektsmelding).toEqual(inntektsmeldinger[0]!);
    expect(gruppering[1]!.arbeidsforhold).toEqual(arbeidsforhold[1]!);
    expect(gruppering[1]!.inntektsmelding).toEqual(inntektsmeldinger[1]!);
  });

  it('skal bygge tabellstruktur selv om arbeidsgiveropplysninger mangler', () => {
    const arbeidOgInntekt = {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          permisjoner: [],
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    } satisfies ArbeidOgInntektsmelding;

    const tabellStruktur = byggTabellStruktur(arbeidOgInntekt, {});

    expect(tabellStruktur).toHaveLength(1);
    expect(tabellStruktur[0]!.arbeidsgiverIdent).toBe('910909088');
    expect(tabellStruktur[0]!.arbeidsgiverNavn).toBe('910909088');
  });
});
