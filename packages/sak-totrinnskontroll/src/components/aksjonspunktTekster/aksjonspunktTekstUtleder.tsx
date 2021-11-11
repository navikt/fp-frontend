import React, { ReactElement } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import behandlingStatusCode from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import klageVurderingOmgjoerCodes from '@fpsak-frontend/kodeverk/src/klageVurderingOmgjoer';
import aksjonspunktCodes, { isUttakAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import arbeidsforholdHandlingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdHandlingType';
import {
  Kodeverk, KodeverkMedNavn, KlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollArbeidsforhold,
} from '@fpsak-frontend/types';

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

// Eksportert kun for test
export const getFaktaOmArbeidsforholdMessages = (
  arbeidforholdDto: TotrinnskontrollArbeidsforhold,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
): ReactElement[] => {
  const formattedMessages = [];
  const { kode } = arbeidforholdDto.arbeidsforholdHandlingType;
  if (arbeidforholdDto.brukPermisjon === true) {
    formattedMessages.push(<FormattedMessage
      id="ToTrinnsForm.FaktaOmArbeidsforhold.SoekerErIPermisjon"
      values={{
        b: (chunks: any) => <b>{chunks}</b>,
      }}
    />);
    return formattedMessages;
  }
  if (arbeidforholdDto.brukPermisjon === false) {
    formattedMessages.push(<FormattedMessage
      id="ToTrinnsForm.FaktaOmArbeidsforhold.SoekerErIkkeIPermisjon"
      values={{
        b: (chunks: any) => <b>{chunks}</b>,
      }}
    />);
    if (kode === arbeidsforholdHandlingType.BRUK) {
      return formattedMessages;
    }
  }
  const type = arbeidsforholdHandlingTyper.find((t) => t.kode === kode);
  const melding = type !== undefined && type !== null ? type.navn : '';
  formattedMessages.push(<FormattedMessage id="ToTrinnsForm.FaktaOmArbeidsforhold.Melding" values={{ melding, b: (chunks: any) => <b>{chunks}</b> }} />);
  return formattedMessages;
};

const buildArbeidsforholdText = (
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
): ReactElement[] => {
  if (!aksjonspunkt.arbeidforholdDtos || aksjonspunkt.arbeidforholdDtos.length === 0) {
    return [<FormattedMessage id="ToTrinnsForm.FaktaOmArbeidsforhold.DetErVurdert" />];
  }

  return aksjonspunkt.arbeidforholdDtos.map((arbeidforholdDto) => {
    const formattedMessages = getFaktaOmArbeidsforholdMessages(arbeidforholdDto, arbeidsforholdHandlingTyper);
    return (
      <>
        <FormattedMessage
          id="ToTrinnsForm.OpplysningerOmSøker.Arbeidsforhold"
          values={{
            orgnavn: arbeidforholdDto.navn,
            orgnummer: arbeidforholdDto.organisasjonsnummer,
            arbeidsforholdId: arbeidforholdDto.arbeidsforholdId ? `...${arbeidforholdDto.arbeidsforholdId.slice(-4)}` : '',
            b: (chunks: any) => <b>{chunks}</b>,
          }}
        />
        { formattedMessages.map((formattedMessage) => (
          <React.Fragment key={formattedMessage.props.id}>
            {formattedMessage}
          </React.Fragment>
        ))}
      </>
    );
  });
};

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

  return beregningDto.faktaOmBeregningTilfeller.flatMap(({ kode }) => {
    const t = faktaOmBeregningTilfeller.find((tilfelle) => tilfelle.kode === kode);
    return t ? [<div>{t.navn}</div>] : [];
  });
};

const omgjoerTekstMap = {
  DELVIS_MEDHOLD_I_KLAGE: 'ToTrinnsForm.Klage.DelvisOmgjortTilGunst',
  GUNST_MEDHOLD_I_KLAGE: 'ToTrinnsForm.Klage.OmgjortTilGunst',
  UGUNST_MEDHOLD_I_KLAGE: 'ToTrinnsForm.Klage.OmgjortTilUgunst',
} as Record<string, string>;

const getTextForKlageHelper = (
  klageVurderingResultat: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'],
): ReactElement => {
  let aksjonspunktTextId = '';
  switch (klageVurderingResultat?.klageVurdering?.kode) {
    case klageVurderingCodes.STADFESTE_YTELSESVEDTAK:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.StadfesteYtelsesVedtak';
      break;
    case klageVurderingCodes.OPPHEVE_YTELSESVEDTAK:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.OppheveYtelsesVedtak';
      break;
    case klageVurderingCodes.AVVIS_KLAGE:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.Avvist';
      break;
    case klageVurderingCodes.HJEMSENDE_UTEN_Å_OPPHEVE:
      aksjonspunktTextId = 'ToTrinnsForm.Klage.HjemsendUtenOpphev';
      break;
    case klageVurderingCodes.MEDHOLD_I_KLAGE:
      if (klageVurderingResultat.klageVurderingOmgjoer
        && klageVurderingResultat.klageVurderingOmgjoer.kode !== klageVurderingOmgjoerCodes.UDEFINERT) {
        aksjonspunktTextId = omgjoerTekstMap[klageVurderingResultat.klageVurderingOmgjoer.kode];
        break;
      }
      aksjonspunktTextId = 'VedtakForm.ResultatKlageMedhold';
      break;
    default:
      break;
  }
  return <FormattedMessage id={aksjonspunktTextId} />;
};

const getTextForKlage = (behandlingStaus: Kodeverk, klagebehandlingVurdering?: KlageVurdering): ReactElement[] => {
  if (behandlingStaus.kode === behandlingStatusCode.FATTER_VEDTAK) {
    if (klagebehandlingVurdering?.klageVurderingResultatNK) {
      return [getTextForKlageHelper(klagebehandlingVurdering.klageVurderingResultatNK)];
    }
    if (klagebehandlingVurdering?.klageVurderingResultatNFP) {
      return [getTextForKlageHelper(klagebehandlingVurdering.klageVurderingResultatNFP)];
    }
  }
  return [];
};

const buildAvklarAnnenForelderText = (): ReactElement => <FormattedMessage id="ToTrinnsForm.AvklarUttak.AnnenForelderHarRett" />;

const erKlageAksjonspunkt = (aksjonspunkt: TotrinnskontrollAksjonspunkt): boolean => aksjonspunkt
  .aksjonspunktKode === aksjonspunktCodes.BEHANDLE_KLAGE_NFP
  || aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.BEHANDLE_KLAGE_NK
  || aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP
  || aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA;

const getAksjonspunkttekst = (
  isForeldrepenger: boolean,
  behandlingStatus: Kodeverk,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  faktaOmBeregningTilfeller: KodeverkMedNavn[],
  erTilbakekreving: boolean,
  aksjonspunkt: TotrinnskontrollAksjonspunkt,
  klagebehandlingVurdering?: KlageVurdering,
): ReactElement[] => {
  if (aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING) {
    return buildOpptjeningText(aksjonspunkt);
  }
  if (aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE) {
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
    return getTextForKlage(behandlingStatus, klagebehandlingVurdering);
  }
  if (aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD) {
    return buildArbeidsforholdText(aksjonspunkt, arbeidsforholdHandlingTyper);
  }
  if (erTilbakekreving) {
    return getTextFromTilbakekrevingAksjonspunktkode(aksjonspunkt);
  }
  return getTextFromAksjonspunktkode(aksjonspunkt);
};

export default getAksjonspunkttekst;
