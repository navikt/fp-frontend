import React, { ReactNode } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { HistorikkInnslagAksjonspunkt } from '@navikt/fp-types';

import { decodeHtmlEntity } from '@navikt/ft-utils';
import { findHendelseText } from './felles/historikkUtils';
import Skjermlenke from './felles/Skjermlenke';
import HistorikkMal from '../HistorikkMalTsType';

const AksjonspunktCodeToTextCode = {
  [AksjonspunktKode.TERMINBEKREFTELSE]: 'Historikk.TermindatoFaktaForm.ApplicationInformation',
  [AksjonspunktKode.ADOPSJONSDOKUMENTAJON]: 'Historikk.DokumentasjonFaktaForm.ApplicationInformation',
  [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: 'Historikk.EktefelleFaktaForm.ApplicationInformation',
  [AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]:
    'HistorikkEndretFelt.MannAdoptererAleneFaktaForm.ApplicationInformation',
  [AksjonspunktKode.SOKNADSFRISTVILKARET]:
    'HistorikkEndretFelt.ErSoknadsfristVilkaretOppfyltForm.ApplicationInformation',
  [AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER]:
    'HistorikkEndretFelt.ErSoknadsfristVilkaretOppfyltForm.ApplicationInformation',
  [AksjonspunktKode.OMSORGSOVERTAKELSE]: 'Historikk.OmsorgOgForeldreansvarInfoPanel.Omsorg',
  [AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING]: 'Historikk.Behandlingspunkt.Opptjeningsvilkaret',
  [AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET]: 'HistorikkEndretFeltVerdiType.ApplicationInformation',
  [AksjonspunktKode.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD]: 'Historikk.RegistrerePapirSoknadAksPkt',
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]: 'Historikk.Foreldreansvar',
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]: 'Historikk.Foreldreansvar',
  [AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL]: 'VarselOmRevurderingInfoPanel.Etterkontroll',
  [AksjonspunktKode.VARSEL_REVURDERING_MANUELL]: 'VarselOmRevurderingInfoPanel.Manuell',
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'HistorikkAksjonpunktMapping.SokersStonadGjelderSammeBarn',
  [AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'HistorikkAksjonpunktMapping.AnnenForeldersStonadGjelderSammeBarn',
  [AksjonspunktKode.AVKLAR_VERGE]: 'Historikk.AvklarVerge',
  [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: 'Historikk.Fodsel.ApplicationInformation',
  [AksjonspunktKode.BEHANDLE_KLAGE_NFP]: 'Historikk.KlageNFP.Fastsett',
  [AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP]: 'Historikk.KlageNFP.Formkrav',
  [AksjonspunktKode.AVKLAR_ARBEIDSFORHOLD]: 'Historikk.AvklarArbeidsforhold',
  [AksjonspunktKode.AVKLAR_LOVLIG_OPPHOLD]: 'Historikk.Lovlig',
  [AksjonspunktKode.AVKLAR_OM_BRUKER_ER_BOSATT]: 'Historikk.Bosatt',
  [AksjonspunktKode.AVKLAR_OPPHOLDSRETT]: 'Historikk.Rett',
  [AksjonspunktKode.OVERSTYR_FODSELSVILKAR]: 'Historikk.fodselsvilkar',
  [AksjonspunktKode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR]: 'Historikk.fodselsvilkar',
  [AksjonspunktKode.OVERSTYR_ADOPSJONSVILKAR]: 'Historikk.adopsjonsvilkar',
  [AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]: 'Overstyr.adopsjonsvilkar',
  [AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET]: 'Historikk.opptjeningsvilkår',
  [AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR]: 'Historikk.medlemskapsvilkar',
  [AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR]: 'Historikk.soknadsfristvilkar',
  [AksjonspunktKode.OVERSTYR_BEREGNING]: 'Historikk.beregning',
  [AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER]: 'Historikk.uttak',
  [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]: 'Historikk.Aleneomsorg.ApplicationInformation',
  [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: 'Historikk.Omsorg.ApplicationInformation',
  [AksjonspunktKode.FASTSETT_UTTAKPERIODER]: 'Historikk.Fastsett.Manuelt',
  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD]: 'Historikk.OpplysningerOmDod',
  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST]: 'Historikk.OpplysningerOmSoknadsfrist',
  [AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE]: 'Historikk.OpplysningerOmKlage',
  [AksjonspunktKode.ANNENPART_EØS]: 'Historikk.AnnenpartEØS',
  [AksjonspunktKode.TETTE_SAKER]: 'Historikk.TetteStønadsperioder',
  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN]:
    'Historikk.OpplysningerOmFordelingStonadsperiode',
  [AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET]: 'Historikk.OpplysningerOmTilstotendeYtelser.Innvilget',
  [AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT]: 'Historikk.OpplysningerOmTilstotendeYtelser.Opphort',
  [AksjonspunktKode.TILKNYTTET_STORTINGET]: 'Historikk.TilknyttetStortinget',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'Historikk.BeregningsgrunnlagManueltATFL',
  [AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE]:
    'Historikk.VurderVarigEndring',
  [AksjonspunktKode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE]:
    'Historikk.BeregningsgrunnlagManueltSN',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]:
    'Historikk.BeregningsgrunnlagManueltTidsbegrenset',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]:
    'Historikk.BeregningsgrunnlagManueltSNNYIArbeidslivet',
  [AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN]: 'Historikk.VurderFaktaATFLSN',
  [AksjonspunktKode.FORESLA_VEDTAK]: 'Historikk.Vedtak.Fritekstbrev',
  [AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT]: 'Historikk.FaktaUttak.VurderAnnenForelder',
} as Record<string, string>;

const tilbakekrevingsAksjonspunktCodeToTextCode = {} as Record<string, string>;

const formaterAksjonspunkt = (
  aksjonspunkt: HistorikkInnslagAksjonspunkt,
  intl: IntlShape,
  erTilbakekreving: boolean,
): ReactNode => {
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
        {aksjonspktText &&
          `${formatMessage({ id: aksjonspktText })} ${formatMessage({ id: 'Historikk.ikkeGodkjent' })}`}
        {!aksjonspktText && formatMessage({ id: 'Historikk.ikkeGodkjentKomplett' })}
      </BodyShort>
      <BodyShort size="small">{decodeHtmlEntity(aksjonspunkt.aksjonspunktBegrunnelse)}</BodyShort>
    </span>
  );
};

const HistorikkMalType3 = ({
  historikkinnslag,
  behandlingLocation,
  getKodeverknavn,
  createLocationForSkjermlenke,
  erTilbakekreving,
}: HistorikkMal) => {
  const intl = useIntl();
  if (historikkinnslag.historikkinnslagDeler) {
    return (
      <>
        {historikkinnslag.historikkinnslagDeler.map((historikkinnslagDel, index) => (
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
            {historikkinnslagDel.aksjonspunkter &&
              historikkinnslagDel.aksjonspunkter.map(aksjonspunkt => (
                <div key={aksjonspunkt.aksjonspunktKode}>
                  {formaterAksjonspunkt(aksjonspunkt, intl, erTilbakekreving)}
                  <VerticalSpacer fourPx />
                </div>
              ))}
          </div>
        ))}
      </>
    );
  }
  return null;
};

HistorikkMalType3.displayName = 'HistorikkMalType3';

export default HistorikkMalType3;
