import { ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet } from '../ArbeidOgInntektFaktaIndex.stories';
import { finnInntektsmeldingerForArbeidsgiver, grupperArbeidsforholdMedInntektsmelding } from './inntektsmeldingUtils';

describe('inntektsmeldingUtils', () => {
  it('skal finne inntektsmeldinger som matcher arbeidsforhold', () => {
    const { arbeidsforhold, inntektsmeldinger } =
      ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet.args.arbeidOgInntekt;
    expect(finnInntektsmeldingerForArbeidsgiver(inntektsmeldinger, arbeidsforhold[0]!!.arbeidsgiverIdent)).toHaveLength(
      2,
    );
  });

  it('skal gruppere arbeidsforhold med matchende inntektsmelding', () => {
    const { arbeidsforhold, inntektsmeldinger } =
      ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet.args.arbeidOgInntekt;

    const gruppering = grupperArbeidsforholdMedInntektsmelding(inntektsmeldinger, arbeidsforhold);
    expect(gruppering).toHaveLength(2);
    expect(gruppering[0]!!.arbeidsforhold).toEqual(arbeidsforhold[0]!);
    expect(gruppering[0]!!.inntektsmelding).toEqual(inntektsmeldinger[0]!);
    expect(gruppering[1]!!.arbeidsforhold).toEqual(arbeidsforhold[1]!);
    expect(gruppering[1]!!.inntektsmelding).toEqual(inntektsmeldinger[1]!);
  });
});
