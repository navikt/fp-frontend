import React, { FunctionComponent, ReactNode } from 'react';
import { injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { HistorikkInnslagAksjonspunkt } from '@fpsak-frontend/types';

import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import { findHendelseText } from './felles/historikkUtils';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

const aksjonspunktCodesToTextCode = {
  [aksjonspunktCodes.TERMINBEKREFTELSE]: 'Historikk.TermindatoFaktaForm.ApplicationInformation',
  [aksjonspunktCodes.ADOPSJONSDOKUMENTAJON]: 'Historikk.DokumentasjonFaktaForm.ApplicationInformation',
  [aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: 'Historikk.EktefelleFaktaForm.ApplicationInformation',
  [aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: 'HistorikkEndretFelt.MannAdoptererAleneFaktaForm.ApplicationInformation',
  [aksjonspunktCodes.SOKNADSFRISTVILKARET]: 'HistorikkEndretFelt.ErSoknadsfristVilkaretOppfyltForm.ApplicationInformation',
  [aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER]: 'HistorikkEndretFelt.ErSoknadsfristVilkaretOppfyltForm.ApplicationInformation',
  [aksjonspunktCodes.OMSORGSOVERTAKELSE]: 'Historikk.OmsorgOgForeldreansvarInfoPanel.Omsorg',
  [aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING]: 'Historikk.Behandlingspunkt.Opptjeningsvilkaret',
  [aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET]: 'HistorikkEndretFeltVerdiType.ApplicationInformation',
  [aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD]: 'Historikk.RegistrerePapirSoknadAksPkt',
  [aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]:
    'Historikk.Foreldreansvar',
  [aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:
    'Historikk.Foreldreansvar',
  [aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL]: 'VarselOmRevurderingInfoPanel.Etterkontroll',
  [aksjonspunktCodes.VARSEL_REVURDERING_MANUELL]: 'VarselOmRevurderingInfoPanel.Manuell',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'HistorikkAksjonpunktMapping.SokersStonadGjelderSammeBarn',
  [aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'HistorikkAksjonpunktMapping.AnnenForeldersStonadGjelderSammeBarn',
  [aksjonspunktCodes.AVKLAR_VERGE]: 'Historikk.AvklarVerge',
  [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]: 'Historikk.Fodsel.ApplicationInformation',
  [aksjonspunktCodes.BEHANDLE_KLAGE_NFP]: 'Historikk.KlageNFP.Fastsett',
  [aksjonspunktCodes.BEHANDLE_KLAGE_NK]: 'Historikk.KlageKA.Fastsett',
  [aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP]: 'Historikk.KlageNFP.Formkrav',
  [aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA]: 'Historikk.KlageKA.Formkrav',
  [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: 'Historikk.AvklarArbeidsforhold',
  [aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD]: 'Historikk.Lovlig',
  [aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT]: 'Historikk.Bosatt',
  [aksjonspunktCodes.AVKLAR_OPPHOLDSRETT]: 'Historikk.Rett',
  [aksjonspunktCodes.OVERSTYR_FODSELSVILKAR]: 'Historikk.fodselsvilkar',
  [aksjonspunktCodes.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR]: 'Historikk.fodselsvilkar',
  [aksjonspunktCodes.OVERSTYR_ADOPSJONSVILKAR]: 'Historikk.adopsjonsvilkar',
  [aksjonspunktCodes.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]: 'Overstyr.adopsjonsvilkar',
  [aksjonspunktCodes.OVERSTYRING_AV_OPPTJENINGSVILKARET]: 'Historikk.opptjeningsvilkår',
  [aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR]: 'Historikk.medlemskapsvilkar',
  [aksjonspunktCodes.OVERSTYR_SOKNADSFRISTVILKAR]: 'Historikk.soknadsfristvilkar',
  [aksjonspunktCodes.OVERSTYR_BEREGNING]: 'Historikk.beregning',
  [aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER]: 'Historikk.uttak',
  [aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK]: 'Historikk.FaktaUttak',
  [aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK]: 'Historikk.FaktaUttak',
  [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]:
    'Historikk.Aleneomsorg.ApplicationInformation',
  [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: 'Historikk.Omsorg.ApplicationInformation',
  [aksjonspunktCodes.AVKLAR_UTTAK]: 'Historikk.FaktaUttak',
  [aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK]: 'Historikk.FaktaUttak',
  [aksjonspunktCodes.FASTSETT_UTTAKPERIODER]: 'Historikk.Fastsett.Manuelt',
  [aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_DØD]: 'Historikk.OpplysningerOmDod',
  [aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST]: 'Historikk.OpplysningerOmSoknadsfrist',
  [aksjonspunktCodes.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE]: 'Historikk.OpplysningerOmKlage',
  [aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN]:
    'Historikk.OpplysningerOmFordelingStonadsperiode',
  [aksjonspunktCodes.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET]: 'Historikk.OpplysningerOmTilstotendeYtelser.Innvilget',
  [aksjonspunktCodes.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT]: 'Historikk.OpplysningerOmTilstotendeYtelser.Opphort',
  [aksjonspunktCodes.TILKNYTTET_STORTINGET]: 'Historikk.TilknyttetStortinget',
  [aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'Historikk.BeregningsgrunnlagManueltATFL',
  [aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE]:
    'Historikk.VurderVarigEndring',
  [aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE]:
    'Historikk.BeregningsgrunnlagManueltSN',
  [aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]:
    'Historikk.BeregningsgrunnlagManueltTidsbegrenset',
  [aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]:
    'Historikk.BeregningsgrunnlagManueltSNNYIArbeidslivet',
  [aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN]: 'Historikk.VurderFaktaATFLSN',
  [aksjonspunktCodes.FORESLA_VEDTAK]: 'Historikk.Vedtak.Fritekstbrev',
  [aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO]: 'Historikk.FaktaUttak.ForsteUttakDato',
  [aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT]: 'Historikk.FaktaUttak.VurderAnnenForelder',
} as Record<string, string>;

const tilbakekrevingsAksjonspunktCodesToTextCode = {} as Record<string, string>;

const formaterAksjonspunkt = (aksjonspunkt: HistorikkInnslagAksjonspunkt, intl: IntlShape, erTilbakekreving: boolean): ReactNode => {
  const aksjonspktText = erTilbakekreving
    ? tilbakekrevingsAksjonspunktCodesToTextCode[aksjonspunkt.aksjonspunktKode]
    : aksjonspunktCodesToTextCode[aksjonspunkt.aksjonspunktKode];
  const { formatMessage } = intl;

  if (aksjonspunkt.godkjent) {
    return (
      <Normaltekst>
        {aksjonspktText && `${formatMessage({ id: aksjonspktText })} ${formatMessage({ id: 'Historikk.godkjent' })}`}
        {!aksjonspktText && formatMessage({ id: 'Historikk.godkjentKomplett' })}
      </Normaltekst>
    );
  }
  return (
    <span>
      <Element>
        {aksjonspktText && `${formatMessage({ id: aksjonspktText })} ${formatMessage({ id: 'Historikk.ikkeGodkjent' })}`}
        {!aksjonspktText && formatMessage({ id: 'Historikk.ikkeGodkjentKomplett' })}
      </Element>
      <Normaltekst>{decodeHtmlEntity(aksjonspunkt.aksjonspunktBegrunnelse)}</Normaltekst>
    </span>
  );
};

// @ts-ignore Fiks
const HistorikkMalType3: FunctionComponent<HistorikkMal & WrappedComponentProps> = ({
  intl,
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  erTilbakekreving,
}) => {
  if (historikkinnslag.historikkinnslagDeler) {
    return historikkinnslag.historikkinnslagDeler.map((historikkinnslagDel, index) => (
      <div key={`totrinnsvurdering${index + 1}`}>
        {historikkinnslagDel.hendelse && (
          <>
            <Element>{findHendelseText(historikkinnslagDel.hendelse, getKodeverknavn)}</Element>
            <VerticalSpacer fourPx />
          </>
        )}
        <Skjermlenke
          skjermlenke={historikkinnslagDel.skjermlenke}
          behandlingLocation={behandlingLocation}
          getKodeverknavn={getKodeverknavn}
          scrollUpOnClick
          createLocationForSkjermlenke={createLocationForSkjermlenke}
        />
        {historikkinnslagDel.aksjonspunkter && historikkinnslagDel.aksjonspunkter.map((aksjonspunkt) => (
          <div key={aksjonspunkt.aksjonspunktKode}>
            {formaterAksjonspunkt(aksjonspunkt, intl, erTilbakekreving)}
            <VerticalSpacer fourPx />
          </div>
        ))}
      </div>
    ));
  }
  return null;
};

export default injectIntl(HistorikkMalType3);
