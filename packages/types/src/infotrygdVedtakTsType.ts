import type {
  tjenester_infotrygd_InfotrygdVedtakDto,
  tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold,
  tjenester_infotrygd_InfotrygdVedtakDto_SakDto,
  tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling,
  tjenester_infotrygd_InfotrygdVedtakDto_Vedtak,
} from './apiDtoGenerert.ts';

export type VedtakArbeidsforhold = tjenester_infotrygd_InfotrygdVedtakDto_Arbeidsforhold;

export type VedtakUtbetaling = tjenester_infotrygd_InfotrygdVedtakDto_Utbetaling;

export type Vedtak = tjenester_infotrygd_InfotrygdVedtakDto_Vedtak;

export type Sak = tjenester_infotrygd_InfotrygdVedtakDto_SakDto;

export type InfotrygdVedtak = tjenester_infotrygd_InfotrygdVedtakDto;
