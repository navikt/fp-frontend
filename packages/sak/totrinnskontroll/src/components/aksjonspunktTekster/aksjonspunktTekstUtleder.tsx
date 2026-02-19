import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { dateFormat } from '@navikt/ft-utils';

import { AksjonspunktKode, isFaktaUttakAksjonspunkt, isUttakAksjonspunkt } from '@navikt/fp-kodeverk';
import type {
  Behandlingsresultat,
  BehandlingsresultatDtoFpTilbake,
  BehandlingStatus,
  KodeverkMedNavn,
  TotrinnskontrollAksjonspunkt,
  TotrinnskontrollAksjonspunkterDtoFpTilbake,
} from '@navikt/fp-types';

import {
  totrinnskontrollaksjonspunktTextCodes,
  totrinnsTilbakekrevingkontrollaksjonspunktTextCodes,
} from '../../totrinnskontrollaksjonspunktTextCodes';
import { OpptjeningTotrinnText } from './OpptjeningTotrinnText';

const buildVarigEndringBeregningText = (
  beregningDto?: TotrinnskontrollAksjonspunkt['beregningDto'],
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage> =>
  beregningDto?.fastsattVarigEndringNæring ? (
    <FormattedMessage id="ToTrinnsForm.Beregning.VarigEndring" />
  ) : (
    <FormattedMessage id="ToTrinnsForm.Beregning.IkkeVarigEndring" />
  );

const buildUttakText = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] =>
  aksjonspunkt.uttakPerioder.map(
    (uttakperiode): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage> => {
      const fom = dateFormat(uttakperiode.fom);
      const tom = dateFormat(uttakperiode.tom);
      let id;

      if (uttakperiode.typeEndring === 'SLETTET') {
        id = 'ToTrinnsForm.AvklarUttak.PeriodeSlettet';
      } else if (uttakperiode.typeEndring === 'LAGT_TIL') {
        id = 'ToTrinnsForm.AvklarUttak.PeriodeLagtTil';
      } else if (
        aksjonspunkt.aksjonspunktKode === AksjonspunktKode.FASTSETT_UTTAKPERIODER ||
        aksjonspunkt.aksjonspunktKode === AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT
      ) {
        id = 'ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret';
      } else if (
        aksjonspunkt.aksjonspunktKode === AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER
      ) {
        id = 'ToTrinnsForm.OverstyrUttak.PeriodeEndret';
      } else if (
        aksjonspunkt.aksjonspunktKode === AksjonspunktKode.OVERSTYRING_FAKTA_UTTAK
      ) {
        id = 'ToTrinnsForm.OverstyrUttak.PeriodeEndret';
      } else {
        id = 'ToTrinnsForm.AvklarUttak.PeriodeEndret';
      }

      return <FormattedMessage key={id} id={id} values={{ a: fom, b: tom }} />;
    },
  );

const buildOpptjeningText = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] =>
  aksjonspunkt.opptjeningAktiviteter.map(aktivitet => (
    <OpptjeningTotrinnText key={aktivitet.aktivitetType} aktivitet={aktivitet} />
  ));

const getTextFromAksjonspunktkode = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt | TotrinnskontrollAksjonspunkterDtoFpTilbake,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const aksjonspunktTextId = (totrinnskontrollaksjonspunktTextCodes as Record<string, string>)[
    aksjonspunkt.aksjonspunktKode
  ];
  return aksjonspunktTextId && typeof aksjonspunktTextId === 'string'
    ? [<FormattedMessage key={aksjonspunktTextId} id={aksjonspunktTextId} />]
    : [];
};

const getTextFromTilbakekrevingAksjonspunktkode = (
  aksjonspunkt: TotrinnskontrollAksjonspunkterDtoFpTilbake,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const aksjonspunktTextId = totrinnsTilbakekrevingkontrollaksjonspunktTextCodes[aksjonspunkt.aksjonspunktKode];
  return aksjonspunktTextId && typeof aksjonspunktTextId === 'string'
    ? [<FormattedMessage key={aksjonspunktTextId} id={aksjonspunktTextId} />]
    : [];
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
  behandlingsresultat?: Behandlingsresultat | BehandlingsresultatDtoFpTilbake,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage> => {
  let aksjonspunktTextId = '';
  switch (behandlingsresultat?.type) {
    case 'KLAGE_YTELSESVEDTAK_STADFESTET':
      aksjonspunktTextId = 'ToTrinnsForm.Klage.StadfesteYtelsesVedtak';
      break;
    case 'KLAGE_YTELSESVEDTAK_OPPHEVET':
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OppheveYtelsesVedtak';
      break;
    case 'KLAGE_AVVIST':
      aksjonspunktTextId = 'ToTrinnsForm.Klage.Avvist';
      break;
    case 'HJEMSENDE_UTEN_OPPHEVE':
      aksjonspunktTextId = 'ToTrinnsForm.Klage.HjemsendUtenOpphev';
      break;
    case 'KLAGE_DELVIS_MEDHOLD':
      aksjonspunktTextId = 'ToTrinnsForm.Klage.DelvisOmgjortTilGunst';
      break;
    case 'KLAGE_OMGJORT_UGUNST':
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OmgjortTilUgunst';
      break;
    case 'KLAGE_MEDHOLD':
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OmgjortTilGunst';
      break;
    default:
      break;
  }
  return <FormattedMessage id={aksjonspunktTextId} />;
};

const getTextForKlage = (
  behandlingStaus: BehandlingStatus,
  behandlingsresultat?: Behandlingsresultat | BehandlingsresultatDtoFpTilbake,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  if (behandlingStaus === 'FVED') {
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

const erKlageAksjonspunkt = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt | TotrinnskontrollAksjonspunkterDtoFpTilbake,
): boolean =>
  aksjonspunkt.aksjonspunktKode === AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP ||
  aksjonspunkt.aksjonspunktKode === AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP;

export const getAksjonspunkttekst = (
  behandlingStatus: BehandlingStatus,
  faktaOmBeregningTilfeller: KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[],
  erTilbakekreving: boolean,
  aksjonspunkt: TotrinnskontrollAksjonspunkt | TotrinnskontrollAksjonspunkterDtoFpTilbake,
  behandlingsresultat?: Behandlingsresultat | BehandlingsresultatDtoFpTilbake,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const erFpSakAksjonspunkt = 'beregningDto' in aksjonspunkt;

  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING && erFpSakAksjonspunkt) {
    return buildOpptjeningText(aksjonspunkt);
  }
  if (
    aksjonspunkt.aksjonspunktKode ===
      AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE &&
    erFpSakAksjonspunkt
  ) {
    return [buildVarigEndringBeregningText(aksjonspunkt.beregningDto)];
  }
  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN && erFpSakAksjonspunkt) {
    return getFaktaOmBeregningText(faktaOmBeregningTilfeller, aksjonspunkt.beregningDto);
  }
  if (
    isUttakAksjonspunkt(aksjonspunkt.aksjonspunktKode) &&
    erFpSakAksjonspunkt &&
    aksjonspunkt.uttakPerioder.length > 0
  ) {
    return buildUttakText(aksjonspunkt);
  }
  if (
    isFaktaUttakAksjonspunkt(aksjonspunkt.aksjonspunktKode) &&
    erFpSakAksjonspunkt &&
    aksjonspunkt.uttakPerioder.length > 0
  ) {
    return buildUttakText(aksjonspunkt);
  }

  if (aksjonspunkt.aksjonspunktKode === AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT) {
    return [buildAvklarAnnenForelderText()];
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
