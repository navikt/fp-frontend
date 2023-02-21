import React, { FunctionComponent, ReactNode } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { HistorikkInnslagAksjonspunkt } from '@navikt/fp-types';

import { decodeHtmlEntity } from '@navikt/ft-utils';
import { findHendelseText } from './felles/historikkUtils';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

const AksjonspunktCodeToTextCode = {
  [AksjonspunktCode.TERMINBEKREFTELSE]: 'Historikk.TermindatoFaktaForm.ApplicationInformation',
  [AksjonspunktCode.ADOPSJONSDOKUMENTAJON]: 'Historikk.DokumentasjonFaktaForm.ApplicationInformation',
  [AksjonspunktCode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: 'Historikk.EktefelleFaktaForm.ApplicationInformation',
  [AksjonspunktCode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: 'HistorikkEndretFelt.MannAdoptererAleneFaktaForm.ApplicationInformation',
  [AksjonspunktCode.SOKNADSFRISTVILKARET]: 'HistorikkEndretFelt.ErSoknadsfristVilkaretOppfyltForm.ApplicationInformation',
  [AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER]: 'HistorikkEndretFelt.ErSoknadsfristVilkaretOppfyltForm.ApplicationInformation',
  [AksjonspunktCode.OMSORGSOVERTAKELSE]: 'Historikk.OmsorgOgForeldreansvarInfoPanel.Omsorg',
  [AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING]: 'Historikk.Behandlingspunkt.Opptjeningsvilkaret',
  [AksjonspunktCode.MANUELL_VURDERING_AV_OMSORGSVILKARET]: 'HistorikkEndretFeltVerdiType.ApplicationInformation',
  [AksjonspunktCode.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD]: 'Historikk.RegistrerePapirSoknadAksPkt',
  [AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]:
    'Historikk.Foreldreansvar',
  [AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:
    'Historikk.Foreldreansvar',
  [AksjonspunktCode.VARSEL_REVURDERING_ETTERKONTROLL]: 'VarselOmRevurderingInfoPanel.Etterkontroll',
  [AksjonspunktCode.VARSEL_REVURDERING_MANUELL]: 'VarselOmRevurderingInfoPanel.Manuell',
  [AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'HistorikkAksjonpunktMapping.SokersStonadGjelderSammeBarn',
  [AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'HistorikkAksjonpunktMapping.AnnenForeldersStonadGjelderSammeBarn',
  [AksjonspunktCode.AVKLAR_VERGE]: 'Historikk.AvklarVerge',
  [AksjonspunktCode.SJEKK_MANGLENDE_FODSEL]: 'Historikk.Fodsel.ApplicationInformation',
  [AksjonspunktCode.BEHANDLE_KLAGE_NFP]: 'Historikk.KlageNFP.Fastsett',
  [AksjonspunktCode.VURDERING_AV_FORMKRAV_KLAGE_NFP]: 'Historikk.KlageNFP.Formkrav',
  [AksjonspunktCode.AVKLAR_ARBEIDSFORHOLD]: 'Historikk.AvklarArbeidsforhold',
  [AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD]: 'Historikk.Lovlig',
  [AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT]: 'Historikk.Bosatt',
  [AksjonspunktCode.AVKLAR_OPPHOLDSRETT]: 'Historikk.Rett',
  [AksjonspunktCode.OVERSTYR_FODSELSVILKAR]: 'Historikk.fodselsvilkar',
  [AksjonspunktCode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR]: 'Historikk.fodselsvilkar',
  [AksjonspunktCode.OVERSTYR_ADOPSJONSVILKAR]: 'Historikk.adopsjonsvilkar',
  [AksjonspunktCode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]: 'Overstyr.adopsjonsvilkar',
  [AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET]: 'Historikk.opptjeningsvilkår',
  [AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR]: 'Historikk.medlemskapsvilkar',
  [AksjonspunktCode.OVERSTYR_SOKNADSFRISTVILKAR]: 'Historikk.soknadsfristvilkar',
  [AksjonspunktCode.OVERSTYR_BEREGNING]: 'Historikk.beregning',
  [AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER]: 'Historikk.uttak',
  [AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]:
    'Historikk.Aleneomsorg.ApplicationInformation',
  [AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: 'Historikk.Omsorg.ApplicationInformation',
  [AksjonspunktCode.FASTSETT_UTTAKPERIODER]: 'Historikk.Fastsett.Manuelt',
  [AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_DØD]: 'Historikk.OpplysningerOmDod',
  [AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST]: 'Historikk.OpplysningerOmSoknadsfrist',
  [AksjonspunktCode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE]: 'Historikk.OpplysningerOmKlage',
  [AksjonspunktCode.ANNENPART_EØS]: 'Historikk.AnnenpartEØS',
  [AksjonspunktCode.TETTE_SAKER]: 'Historikk.TetteStønadsperioder',
  [AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN]:
    'Historikk.OpplysningerOmFordelingStonadsperiode',
  [AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET]: 'Historikk.OpplysningerOmTilstotendeYtelser.Innvilget',
  [AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT]: 'Historikk.OpplysningerOmTilstotendeYtelser.Opphort',
  [AksjonspunktCode.TILKNYTTET_STORTINGET]: 'Historikk.TilknyttetStortinget',
  [AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'Historikk.BeregningsgrunnlagManueltATFL',
  [AksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE]:
    'Historikk.VurderVarigEndring',
  [AksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE]:
    'Historikk.BeregningsgrunnlagManueltSN',
  [AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]:
    'Historikk.BeregningsgrunnlagManueltTidsbegrenset',
  [AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]:
    'Historikk.BeregningsgrunnlagManueltSNNYIArbeidslivet',
  [AksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN]: 'Historikk.VurderFaktaATFLSN',
  [AksjonspunktCode.FORESLA_VEDTAK]: 'Historikk.Vedtak.Fritekstbrev',
  [AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT]: 'Historikk.FaktaUttak.VurderAnnenForelder',
} as Record<string, string>;

const tilbakekrevingsAksjonspunktCodeToTextCode = {} as Record<string, string>;

const formaterAksjonspunkt = (aksjonspunkt: HistorikkInnslagAksjonspunkt, intl: IntlShape, erTilbakekreving: boolean): ReactNode => {
  const aksjonspktText = erTilbakekreving
    ? tilbakekrevingsAksjonspunktCodeToTextCode[aksjonspunkt.aksjonspunktKode]
    : AksjonspunktCodeToTextCode[aksjonspunkt.aksjonspunktKode];
  const { formatMessage } = intl;

  if (aksjonspunkt.godkjent) {
    return (
      <BodyShort size="small">
        {aksjonspktText && `${formatMessage({ id: aksjonspktText })} ${formatMessage({ id: 'Historikk.godkjent' })}`}
        {!aksjonspktText && formatMessage({ id: 'Historikk.godkjentKomplett' })}
      </BodyShort>
    );
  }
  return (
    <span>
      <BodyShort size="small">
        {aksjonspktText && `${formatMessage({ id: aksjonspktText })} ${formatMessage({ id: 'Historikk.ikkeGodkjent' })}`}
        {!aksjonspktText && formatMessage({ id: 'Historikk.ikkeGodkjentKomplett' })}
      </BodyShort>
      <BodyShort size="small">{decodeHtmlEntity(aksjonspunkt.aksjonspunktBegrunnelse)}</BodyShort>
    </span>
  );
};

// @ts-ignore Fiks
const HistorikkMalType3: FunctionComponent<HistorikkMal> = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  erTilbakekreving,
}) => {
  const intl = useIntl();
  if (historikkinnslag.historikkinnslagDeler) {
    return historikkinnslag.historikkinnslagDeler.map((historikkinnslagDel, index) => (
      <div key={`totrinnsvurdering${index + 1}`}>
        {historikkinnslagDel.hendelse && (
          <>
            <BodyShort size="small">{findHendelseText(historikkinnslagDel.hendelse, getKodeverknavn)}</BodyShort>
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

export default HistorikkMalType3;
