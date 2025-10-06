import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { dateFormat } from '@navikt/ft-utils';

import type {
  AksjonspunktKode,
  Behandlingsresultat,
  BehandlingStatus,
  KodeverkMedNavn,
  TotrinnskontrollAksjonspunkt,
} from '@navikt/fp-types';
import { aksjonspunktIsOfType } from '@navikt/fp-utils';

import {
  totrinnskontrollaksjonspunktTextCodes,
  totrinnsTilbakekrevingkontrollaksjonspunktTextCodes,
} from '../../totrinnskontrollaksjonspunktTextCodes';
import { OpptjeningTotrinnText } from './OpptjeningTotrinnText';

const faktaUttakAksjonspunkter: AksjonspunktKode[] = ['6065', '5063', '5064', '5065', '5066'];

const uttakAksjonspunkter: AksjonspunktKode[] = [
  '6008',
  '5071',
  '5072',
  '5067',
  '5069',
  '5073',
  '5075',
  '5076',
  '5077',
  '5078',
  '5079',
];

const isUttakAksjonspunkt = aksjonspunktIsOfType(uttakAksjonspunkter);

const isFaktaUttakAksjonspunkt = aksjonspunktIsOfType(faktaUttakAksjonspunkter);

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
  aksjonspunkt.uttakPerioder.map(
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
        (aksjonspunkt.aksjonspunktKode === '5071' || aksjonspunkt.aksjonspunktKode === '5072')
      ) {
        id = 'ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret';
      } else if (uttakperiode.erEndret && aksjonspunkt.aksjonspunktKode === '6008') {
        id = 'ToTrinnsForm.OverstyrUttak.PeriodeEndret';
      } else if (uttakperiode.erEndret && aksjonspunkt.aksjonspunktKode === '6065') {
        id = 'ToTrinnsForm.OverstyrUttak.PeriodeEndret';
      } else if (uttakperiode.erEndret) {
        id = 'ToTrinnsForm.AvklarUttak.PeriodeEndret';
      } else {
        id = 'ToTrinnsForm.AvklarUttak.PeriodeAvklart';
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
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const aksjonspunktTextId = (totrinnskontrollaksjonspunktTextCodes as Record<string, string>)[
    aksjonspunkt.aksjonspunktKode
  ];
  return aksjonspunktTextId && typeof aksjonspunktTextId === 'string'
    ? [<FormattedMessage key={aksjonspunktTextId} id={aksjonspunktTextId} />]
    : [];
};

const getTextFromTilbakekrevingAksjonspunktkode = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  const aksjonspunktTextId = totrinnsTilbakekrevingkontrollaksjonspunktTextCodes[aksjonspunkt.aksjonspunktKode];
  return aksjonspunktTextId && typeof aksjonspunktTextId === 'string'
    ? [<FormattedMessage key={aksjonspunktTextId} id={aksjonspunktTextId} />]
    : [];
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
  behandlingsresultat?: Behandlingsresultat,
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

const erKlageAksjonspunkt = (aksjonspunkt: TotrinnskontrollAksjonspunkt): boolean =>
  aksjonspunkt.aksjonspunktKode === '5035' || aksjonspunkt.aksjonspunktKode === '5082';

export const getAksjonspunkttekst = (
  isForeldrepenger: boolean,
  behandlingStatus: BehandlingStatus,
  faktaOmBeregningTilfeller: KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[],
  erTilbakekreving: boolean,
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
  behandlingsresultat?: Behandlingsresultat,
): ReactElement<React.ComponentProps<typeof FormattedMessage>, typeof FormattedMessage>[] => {
  if (aksjonspunkt.aksjonspunktKode === ('5051' satisfies AksjonspunktKode)) {
    return buildOpptjeningText(aksjonspunkt);
  }
  if (aksjonspunkt.aksjonspunktKode === ('5039' satisfies AksjonspunktKode)) {
    return [buildVarigEndringBeregningText(aksjonspunkt.beregningDto)];
  }
  if (aksjonspunkt.aksjonspunktKode === ('5058' satisfies AksjonspunktKode)) {
    return getFaktaOmBeregningText(faktaOmBeregningTilfeller, aksjonspunkt.beregningDto);
  }
  if (isUttakAksjonspunkt(aksjonspunkt.aksjonspunktKode) && aksjonspunkt.uttakPerioder.length > 0) {
    return buildUttakText(aksjonspunkt);
  }
  if (isFaktaUttakAksjonspunkt(aksjonspunkt.aksjonspunktKode) && aksjonspunkt.uttakPerioder.length > 0) {
    return buildUttakText(aksjonspunkt);
  }

  if (aksjonspunkt.aksjonspunktKode === '5086') {
    return [buildAvklarAnnenForelderText()];
  }
  if (aksjonspunkt.aksjonspunktKode === ('5013' satisfies AksjonspunktKode)) {
    return getTextForForeldreansvarsvilkåretAndreLedd(isForeldrepenger);
  }
  if (aksjonspunkt.aksjonspunktKode === '6018') {
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
