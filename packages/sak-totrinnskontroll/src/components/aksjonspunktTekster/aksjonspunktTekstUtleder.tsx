import React, { ReactElement } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { ProsessBeregningsgrunnlagAksjonspunktCode } from '@navikt/ft-prosess-beregningsgrunnlag';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import behandlingStatusCode from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import aksjonspunktCodes, { isUttakAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KodeverkMedNavn, TotrinnskontrollAksjonspunkt, Behandlingsresultat } from '@fpsak-frontend/types';

import totrinnskontrollaksjonspunktTextCodes, { totrinnsTilbakekrevingkontrollaksjonspunktTextCodes } from '../../totrinnskontrollaksjonspunktTextCodes';
import OpptjeningTotrinnText from './OpptjeningTotrinnText';

const formatDate = (date?: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const buildVarigEndringBeregningText = (
  beregningDto?: TotrinnskontrollAksjonspunkt['beregningDto'],
): ReactElement => (beregningDto?.fastsattVarigEndringNaering ? (
  <FormattedMessage
    id="ToTrinnsForm.Beregning.VarigEndring"
  />
) : (
  <FormattedMessage
    id="ToTrinnsForm.Beregning.IkkeVarigEndring"
  />
));

const buildUttakText = (aksjonspunkt: TotrinnskontrollAksjonspunkt): ReactElement[] => (aksjonspunkt.uttakPerioder
  ? aksjonspunkt.uttakPerioder.map((uttakperiode): ReactElement => {
    const fom = formatDate(uttakperiode.fom);
    const tom = formatDate(uttakperiode.tom);
    let id;

    if (uttakperiode.erSlettet) {
      id = 'ToTrinnsForm.AvklarUttak.PeriodeSlettet';
    } else if (uttakperiode.erLagtTil) {
      id = 'ToTrinnsForm.AvklarUttak.PeriodeLagtTil';
    } else if (uttakperiode.erEndret && (
      aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.FASTSETT_UTTAKPERIODER
    || aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.TILKNYTTET_STORTINGET
    )
    ) {
      id = 'ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret';
    } else if (uttakperiode.erEndret && aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER) {
      id = 'ToTrinnsForm.OverstyrUttak.PeriodeEndret';
    } else if (uttakperiode.erEndret) {
      id = 'ToTrinnsForm.AvklarUttak.PeriodeEndret';
    } else {
      id = 'ToTrinnsForm.AvklarUttak.PeriodeAvklart';
    }

    return (
      <FormattedMessage
        id={id}
        values={{ a: fom, b: tom }}
      />
    );
  }) : []);

const buildOpptjeningText = (aksjonspunkt: TotrinnskontrollAksjonspunkt): ReactElement[] => (aksjonspunkt.opptjeningAktiviteter
  ? aksjonspunkt.opptjeningAktiviteter.map((aktivitet) => (
    <OpptjeningTotrinnText
      aktivitet={aktivitet}
    />
  ))
  : []);

const getTextFromAksjonspunktkode = (aksjonspunkt: TotrinnskontrollAksjonspunkt): ReactElement[] => {
  const aksjonspunktTextId = totrinnskontrollaksjonspunktTextCodes[aksjonspunkt.aksjonspunktKode];
  return aksjonspunktTextId ? (
    [<FormattedMessage
      id={aksjonspunktTextId}
    />]
  ) : [];
};

const getTextFromTilbakekrevingAksjonspunktkode = (aksjonspunkt: TotrinnskontrollAksjonspunkt): ReactElement[] => {
  const aksjonspunktTextId = totrinnsTilbakekrevingkontrollaksjonspunktTextCodes[aksjonspunkt.aksjonspunktKode];
  return aksjonspunktTextId ? (
    [<FormattedMessage
      id={aksjonspunktTextId}
    />]
  ) : [];
};

const getTextForForeldreansvarsvilkåretAndreLedd = (isForeldrepenger: boolean): ReactElement[] => {
  const aksjonspunktTextId = isForeldrepenger
    ? 'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddFP'
    : 'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddES';
  return [<FormattedMessage id={aksjonspunktTextId} />];
};

const getFaktaOmBeregningText = (
  faktaOmBeregningTilfeller: KodeverkMedNavn[],
  beregningDto?: TotrinnskontrollAksjonspunkt['beregningDto'],
): ReactElement[] => {
  if (!beregningDto || !beregningDto.faktaOmBeregningTilfeller) {
    return [];
  }

  return beregningDto.faktaOmBeregningTilfeller.flatMap((kode) => {
    const t = faktaOmBeregningTilfeller.find((tilfelle) => tilfelle.kode === kode);
    return t ? [<div>{t.navn}</div>] : [];
  });
};

const getTextForKlageHelper = (
  behandlingsresultat: Behandlingsresultat,
): ReactElement => {
  let aksjonspunktTextId = '';
  switch (behandlingsresultat?.type) {
    case behandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.StadfesteYtelsesVedtak';
      break;
    case behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OppheveYtelsesVedtak';
      break;
    case behandlingResultatType.KLAGE_AVVIST:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.Avvist';
      break;
    case behandlingResultatType.HJEMSENDE_UTEN_OPPHEVE:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.HjemsendUtenOpphev';
      break;
    case behandlingResultatType.KLAGE_DELVIS_MEDHOLD:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.DelvisOmgjortTilGunst';
      break;
    case behandlingResultatType.KLAGE_OMGJORT_UGUNST:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OmgjortTilUgunst';
      break;
    case behandlingResultatType.KLAGE_MEDHOLD:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OmgjortTilGunst';
      break;
    default:
      break;
  }
  return <FormattedMessage id={aksjonspunktTextId} />;
};

const getTextForKlage = (behandlingStaus: string, behandlingsresultat: Behandlingsresultat): ReactElement[] => {
  if (behandlingStaus === behandlingStatusCode.FATTER_VEDTAK) {
    return [getTextForKlageHelper(behandlingsresultat)];
  }
  return [];
};

const buildAvklarAnnenForelderText = (): ReactElement => <FormattedMessage id="ToTrinnsForm.AvklarUttak.AnnenForelderHarRett" />;

const erKlageAksjonspunkt = (aksjonspunkt: TotrinnskontrollAksjonspunkt): boolean => aksjonspunkt
  .aksjonspunktKode === aksjonspunktCodes.BEHANDLE_KLAGE_NFP
  || aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP;

const getAksjonspunkttekst = (
  isForeldrepenger: boolean,
  behandlingStatus: string,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  faktaOmBeregningTilfeller: KodeverkMedNavn[],
  erTilbakekreving: boolean,
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
  behandlingsresultat?: Behandlingsresultat,
): ReactElement[] => {
  if (aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING) {
    return buildOpptjeningText(aksjonspunkt);
  }
  if (aksjonspunkt.aksjonspunktKode === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE) {
    return [buildVarigEndringBeregningText(aksjonspunkt.beregningDto)];
  }
  if (aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN) {
    return getFaktaOmBeregningText(faktaOmBeregningTilfeller, aksjonspunkt.beregningDto);
  }
  if (isUttakAksjonspunkt(aksjonspunkt.aksjonspunktKode) && aksjonspunkt.uttakPerioder && aksjonspunkt.uttakPerioder.length > 0) {
    return buildUttakText(aksjonspunkt);
  }

  if (aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT) {
    return [buildAvklarAnnenForelderText()];
  }
  if (aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD) {
    return getTextForForeldreansvarsvilkåretAndreLedd(isForeldrepenger);
  }
  if (erKlageAksjonspunkt(aksjonspunkt)) {
    return getTextForKlage(behandlingStatus, behandlingsresultat);
  }
  if (erTilbakekreving) {
    return getTextFromTilbakekrevingAksjonspunktkode(aksjonspunkt);
  }
  return getTextFromAksjonspunktkode(aksjonspunkt);
};

export default getAksjonspunkttekst;
