import type {
  AktivitetTomDatoMappingDto,
  AndelForFaktaOmBeregningDto,
  ArbeidstakerUtenInntektsmeldingAndelDto,
  ATogFliSammeOrganisasjonDto,
  AvklarAktiviteterDto,
  BeregningAktivitetDto,
  FaktaOmBeregningAndelDto,
  FaktaOmBeregningDto,
  KortvarigeArbeidsforholdDto,
  KunYtelseDto,
  RefusjonskravSomKommerForSentDto,
  VurderBesteberegningDto,
  VurderMottarYtelseDto,
} from './apiDtoGenerert.ts';

export type FaktaOmBeregningAndel = FaktaOmBeregningAndelDto;

export type AndelForFaktaOmBeregning = AndelForFaktaOmBeregningDto;

export type RefusjonskravSomKommerForSentListe = RefusjonskravSomKommerForSentDto;

export type VurderBesteberegning = VurderBesteberegningDto;

export type BeregningAktivitet = BeregningAktivitetDto;

export type AvklarBeregningAktiviteter = AktivitetTomDatoMappingDto;

export type AvklarBeregningAktiviteterMap = AvklarAktiviteterDto;

export type KortvarigAndel = KortvarigeArbeidsforholdDto;

export type ArbeidstakerUtenIMAndel = ArbeidstakerUtenInntektsmeldingAndelDto;

export type KunYtelse = KunYtelseDto;

export type VurderMottarYtelse = VurderMottarYtelseDto;

export type ATFLSammeOrgAndel = ATogFliSammeOrganisasjonDto;

export type FaktaOmBeregning = FaktaOmBeregningDto;
