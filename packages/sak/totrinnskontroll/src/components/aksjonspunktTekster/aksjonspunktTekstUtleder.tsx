import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { dateFormat } from '@navikt/ft-utils';

import {
  AksjonspunktKode,
  BehandlingResultatType,
  BehandlingStatusEnum,
  isFaktaUttakAksjonspunkt,
  isUttakAksjonspunkt,
} from '@navikt/fp-kodeverk';
import type {
  Behandlingsresultat,
  foreldrepenger_behandlingslager_behandling_BehandlingStatus,
  KodeverkMedNavn,
  tjenester_behandling_dto_behandling_BehandlingsresultatDto,
  TotrinnskontrollAksjonspunkt,
} from '@navikt/fp-types';

import {
  totrinnskontrollaksjonspunktTextCodes,
  totrinnsTilbakekrevingkontrollaksjonspunktTextCodes,
} from '../../totrinnskontrollaksjonspunktTextCodes';
import { OpptjeningTotrinnText } from './OpptjeningTotrinnText';

const buildVarigEndringBeregningText = (
  beregningDto?: TotrinnskontrollAksjonspunkt['beregningDto'],
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage> =>
  beregningDto?.fastsattVarigEndringNaering ? (
    <FormattedMessage id="ToTrinnsForm.Beregning.VarigEndring" />
  ) : (
    <FormattedMessage id="ToTrinnsForm.Beregning.IkkeVarigEndring" />
  );

const buildUttakText = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] =>
  aksjonspunkt.uttakPerioder
    ? aksjonspunkt.uttakPerioder.map(
        (uttakperiode): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage> => {
          const fom = dateFormat(uttakperiode.fom);
          const tom = dateFormat(uttakperiode.tom);
          let id;

          if (uttakperiode.erSlettet) {
            id = 'ToTrinnsForm.AvklarUttak.PeriodeSlettet';
          } else if (uttakperiode.erLagtTil) {
            id = 'ToTrinnsForm.AvklarUttak.PeriodeLagtTil';
          } else if (
            uttakperiode.erEndret &&
            (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.FASTSETT_UTTAKPERIODER ||
              aksjonspunkt.aksjonspunktKode === AksjonspunktKode.TILKNYTTET_STORTINGET)
          ) {
            id = 'ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret';
          } else if (
            uttakperiode.erEndret &&
            aksjonspunkt.aksjonspunktKode === AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
          ) {
            id = 'ToTrinnsForm.OverstyrUttak.PeriodeEndret';
          } else if (uttakperiode.erEndret && aksjonspunkt.aksjonspunktKode === AksjonspunktKode.OVERSTYR_FAKTA_UTTAK) {
            id = 'ToTrinnsForm.OverstyrUttak.PeriodeEndret';
          } else if (uttakperiode.erEndret) {
            id = 'ToTrinnsForm.AvklarUttak.PeriodeEndret';
          } else {
            id = 'ToTrinnsForm.AvklarUttak.PeriodeAvklart';
          }

          return <FormattedMessage key={id} id={id} values={{ a: fom, b: tom }} />;
        },
      )
    : [];

const buildOpptjeningText = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] =>
  aksjonspunkt.opptjeningAktiviteter
    ? aksjonspunkt.opptjeningAktiviteter.map(aktivitet => (
        <OpptjeningTotrinnText key={aktivitet.aktivitetType} aktivitet={aktivitet} />
      ))
    : [];

const getTextFromAksjonspunktkode = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const aksjonspunktTextId = totrinnskontrollaksjonspunktTextCodes[aksjonspunkt.aksjonspunktKode];
  return aksjonspunktTextId ? [<FormattedMessage key={aksjonspunktTextId} id={aksjonspunktTextId} />] : [];
};

const getTextFromTilbakekrevingAksjonspunktkode = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const aksjonspunktTextId = totrinnsTilbakekrevingkontrollaksjonspunktTextCodes[aksjonspunkt.aksjonspunktKode];
  return aksjonspunktTextId ? [<FormattedMessage key={aksjonspunktTextId} id={aksjonspunktTextId} />] : [];
};

const getTextForForeldreansvarsvilkåretAndreLedd = (
  isForeldrepenger: boolean,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const aksjonspunktTextId = isForeldrepenger
    ? 'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddFP'
    : 'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddES';
  return [<FormattedMessage key={aksjonspunktTextId} id={aksjonspunktTextId} />];
};

const getFaktaOmBeregningText = (
  faktaOmBeregningTilfeller: KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[],
  beregningDto?: TotrinnskontrollAksjonspunkt['beregningDto'],
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  if (!beregningDto?.faktaOmBeregningTilfeller) {
    return [];
  }

  return beregningDto.faktaOmBeregningTilfeller.flatMap(kode => {
    const t = faktaOmBeregningTilfeller.find(tilfelle => tilfelle.kode === kode);
    return t ? [<div key={t.navn}>{t.navn}</div>] : [];
  });
};

const getTextForKlageHelper = (
  behandlingsresultat?: Behandlingsresultat,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage> => {
  let aksjonspunktTextId = '';
  switch (behandlingsresultat?.type) {
    case BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.StadfesteYtelsesVedtak';
      break;
    case BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OppheveYtelsesVedtak';
      break;
    case BehandlingResultatType.KLAGE_AVVIST:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.Avvist';
      break;
    case BehandlingResultatType.HJEMSENDE_UTEN_OPPHEVE:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.HjemsendUtenOpphev';
      break;
    case BehandlingResultatType.KLAGE_DELVIS_MEDHOLD:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.DelvisOmgjortTilGunst';
      break;
    case BehandlingResultatType.KLAGE_OMGJORT_UGUNST:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OmgjortTilUgunst';
      break;
    case BehandlingResultatType.KLAGE_MEDHOLD:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OmgjortTilGunst';
      break;
    default:
      break;
  }
  return <FormattedMessage id={aksjonspunktTextId} />;
};

const getTextForKlage = (
  behandlingStaus: foreldrepenger_behandlingslager_behandling_BehandlingStatus,
  behandlingsresultat?: Behandlingsresultat,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  if (behandlingStaus === BehandlingStatusEnum.FATTER_VEDTAK) {
    return [getTextForKlageHelper(behandlingsresultat)];
  }
  return [];
};

const buildAvklarAnnenForelderText = (): ReactElement<
  React.ComponentProps<typeof FormattedMessage>,
  typeof FormattedMessage
> => <FormattedMessage id="ToTrinnsForm.AvklarUttak.AnnenForelderHarRett" />;

const buildOverstyrtRettOgOmsorgText = (): ReactElement<
  React.ComponentProps<typeof FormattedMessage>,
  typeof FormattedMessage
> => <FormattedMessage id="ToTrinnsForm.AvklarUttak.OverstyrtRettOgOmsorg" />;

const erKlageAksjonspunkt = (aksjonspunkt: TotrinnskontrollAksjonspunkt): boolean =>
  aksjonspunkt.aksjonspunktKode === AksjonspunktKode.BEHANDLE_KLAGE_NFP ||
  aksjonspunkt.aksjonspunktKode === AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP;

export const getAksjonspunkttekst = (
  isForeldrepenger: boolean,
  behandlingStatus: foreldrepenger_behandlingslager_behandling_BehandlingStatus,
  faktaOmBeregningTilfeller: KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[],
  erTilbakekreving: boolean,
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING) {
    return buildOpptjeningText(aksjonspunkt);
  }
  if (
    aksjonspunkt.aksjonspunktKode ===
    AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
  ) {
    return [buildVarigEndringBeregningText(aksjonspunkt.beregningDto)];
  }
  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN) {
    return getFaktaOmBeregningText(faktaOmBeregningTilfeller, aksjonspunkt.beregningDto);
  }
  if (
    isUttakAksjonspunkt(aksjonspunkt.aksjonspunktKode) &&
    aksjonspunkt.uttakPerioder &&
    aksjonspunkt.uttakPerioder.length > 0
  ) {
    return buildUttakText(aksjonspunkt);
  }
  if (
    isFaktaUttakAksjonspunkt(aksjonspunkt.aksjonspunktKode) &&
    aksjonspunkt.uttakPerioder &&
    aksjonspunkt.uttakPerioder.length > 0
  ) {
    return buildUttakText(aksjonspunkt);
  }

  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT) {
    return [buildAvklarAnnenForelderText()];
  }
  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD) {
    return getTextForForeldreansvarsvilkåretAndreLedd(isForeldrepenger);
  }
  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG) {
    return [buildOverstyrtRettOgOmsorgText()];
  }
  if (erKlageAksjonspunkt(aksjonspunkt)) {
    return getTextForKlage(behandlingStatus, behandlingsresultat);
  }
  if (erTilbakekreving) {
    return getTextFromTilbakekrevingAksjonspunktkode(aksjonspunkt);
  }
  return getTextFromAksjonspunktkode(aksjonspunkt);
};
