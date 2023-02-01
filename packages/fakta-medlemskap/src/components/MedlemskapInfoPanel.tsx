import React, {
  FunctionComponent, ReactElement, useCallback, useState, useEffect, useMemo,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Button } from '@navikt/ds-react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AksjonspunktStatus, isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import {
  AlleKodeverk, Medlemskap, Soknad, MedlemPeriode,
} from '@navikt/fp-types';
import {
  AvklarFortsattMedlemskapAp, BekreftBosattVurderingAp, BekreftErMedlemVurderingAp, BekreftLovligOppholdVurderingAp,
  BekreftOppholdsrettVurderingAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import AksjonspunktCode, { hasAksjonspunkt } from '@navikt/fp-kodeverk/src/aksjonspunktCodes';

import MedlemskapEndringerTabell from './oppholdInntektOgPerioder/MedlemskapEndringerTabell';
import OppholdInntektOgPeriodeForm, { FormValues as OppholdFormValues } from './oppholdInntektOgPerioder/OppholdInntektOgPeriodeForm';

type AksjonspunktData = Array<BekreftBosattVurderingAp
  | BekreftErMedlemVurderingAp
  | BekreftOppholdsrettVurderingAp
  | BekreftLovligOppholdVurderingAp
  | AvklarFortsattMedlemskapAp>;

const inngangsAksjonspunkter = [
  AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT,
  AksjonspunktCode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  AksjonspunktCode.AVKLAR_OPPHOLDSRETT,
  AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD,
];

const mapOgFiltrerPerioder = (
  ap: Aksjonspunkt,
  perioder: MedlemPeriode[],
): MedlemPeriode[] => perioder.filter((periode) => periode.aksjonspunkter.includes(ap.definisjon)
  || (periode.aksjonspunkter.length > 0 && ap.definisjon === AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP));

const transformValues = (
  perioder: MedlemPeriode[],
  aksjonspunkter: Aksjonspunkt[],
): AksjonspunktData => {
  const aktiveInngangsAksjonspunkter = aksjonspunkter.filter((ap) => inngangsAksjonspunkter.some((kode) => kode === ap.definisjon));
  const harÅpneInngangsAksjonspunkter = aktiveInngangsAksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
  const aktivtFortsattMedlemskapAksjonspunkt = aksjonspunkter.filter((ap) => ap.definisjon === AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP);

  // Submit inngangsaksjonspunkt dersom åpent eller det ikke finnes aksjonspunkt fortsatt medlemskap
  const sendInnAksjonspunkter = harÅpneInngangsAksjonspunkter || aktivtFortsattMedlemskapAksjonspunkt.length === 0
    ? aktiveInngangsAksjonspunkter : aktivtFortsattMedlemskapAksjonspunkt;

  // @ts-ignore Fiks
  return sendInnAksjonspunkter.map((ap) => ({
    kode: ap.definisjon,
    begrunnelse: '',
    bekreftedePerioder: mapOgFiltrerPerioder(ap, perioder),
  }));
};

const finnAksjonspunkttekster = (
  aksjonspunkter: Aksjonspunkt[],
): ReactElement[] => {
  const helpTexts = [];
  if (hasAksjonspunkt(AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="HarFortsattMedlemskap" id="MedlemskapInfoPanel.HarFortsattMedlemskap" />);
  }
  if (hasAksjonspunkt(AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="ErSokerBosattINorge" id="MedlemskapInfoPanel.ErSokerBosattINorge" />);
  }
  if (hasAksjonspunkt(AksjonspunktCode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="GyldigMedlemFolketrygden" id="MedlemskapInfoPanel.GyldigMedlemFolketrygden" />);
  }
  if (hasAksjonspunkt(AksjonspunktCode.AVKLAR_OPPHOLDSRETT, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="EOSBorgerMedOppholdsrett1" id="MedlemskapInfoPanel.EOSBorgerMedOppholdsrett" />);
  }
  if (hasAksjonspunkt(AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="IkkeEOSBorgerMedLovligOpphold" id="MedlemskapInfoPanel.IkkeEOSBorgerMedLovligOpphold" />);
  }
  return helpTexts;
};

interface OwnProps {
  submittable: boolean;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AksjonspunktData) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  soknad: Soknad;
  alleKodeverk: AlleKodeverk;
  medlemskap: Medlemskap;
  formData?: MedlemPeriode[],
  setFormData: (data: MedlemPeriode[]) => void,
}

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
const MedlemskapInfoPanel: FunctionComponent<OwnProps> = ({
  submittable,
  readOnly,
  submitCallback,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  soknad,
  alleKodeverk,
  medlemskap,
  formData,
  setFormData,
}) => {
  const sortertePerioder = useMemo(() => [...medlemskap.perioder || []].sort((a, b) => a.vurderingsdato.localeCompare(b.vurderingsdato)),
    [medlemskap.perioder]);

  const [perioder, setPerioder] = useState<MedlemPeriode[]>((formData || sortertePerioder));
  const [isSubmitting, setSubmitting] = useState(false);
  const [isDirty, setDirty] = useState(false);

  useEffect(() => () => {
    setFormData(perioder);
  }, [perioder]);

  const finnFørstePeriodeMedUløstAp = (medlemPerioder: MedlemPeriode[]) => medlemPerioder.find((p) => p.aksjonspunkter.length > 0 && !p.begrunnelse);

  const [valgtPeriode, setValgtPeriode] = useState<MedlemPeriode | undefined>(perioder.length > 1 ? finnFørstePeriodeMedUløstAp(perioder) : perioder[0]);

  const velgPeriodeCallback = useCallback((_p, _id, periode: MedlemPeriode): void => {
    setValgtPeriode(periode);
  }, []);

  const updateOppholdInntektPeriode = useCallback((vurderingsdato: string, values: OppholdFormValues): void => {
    const periodeIndex = perioder.findIndex((p) => p.vurderingsdato === vurderingsdato);

    const oppdatertPeriode = {
      ...perioder[periodeIndex],
      ...values,
    };

    const nyePerioder = perioder.map((p, index) => (periodeIndex === index ? oppdatertPeriode : p));
    setPerioder(nyePerioder);
    setDirty(true);
    if (nyePerioder.length > 1) {
      setValgtPeriode(finnFørstePeriodeMedUløstAp(nyePerioder));
    }
  }, [perioder]);

  const isConfirmButtonDisabled = (): boolean => {
    if (!isDirty) {
      return true;
    }

    if (perioder && perioder.length > 0) {
      const ubekreftPerioder = perioder.filter((periode) => periode.aksjonspunkter.length > 0 && !periode.begrunnelse);

      if (ubekreftPerioder.length > 0) {
        return true;
      }
    }

    return false;
  };

  const lagre = () => {
    setSubmitting(true);
    return submitCallback(transformValues(perioder, aksjonspunkter));
  };

  const lagreEnkeltPeriode = (periode: MedlemPeriode) => {
    setSubmitting(true);
    return submitCallback(transformValues([periode], aksjonspunkter));
  };

  return (
    <>
      <Heading size="small"><FormattedMessage id="OppholdInntektOgPerioder.Overskrift" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {aksjonspunkter.some((ap) => ap.status === AksjonspunktStatus.OPPRETTET) && (
        <>
          <AksjonspunktHelpTextHTML>
            {finnAksjonspunkttekster(aksjonspunkter)}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      {hasAksjonspunkt(AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP, aksjonspunkter) && (
        <MedlemskapEndringerTabell
          perioder={perioder}
          aksjonspunkter={aksjonspunkter}
          valgtPeriodeVurderingsdato={valgtPeriode ? valgtPeriode.vurderingsdato : undefined}
          velgPeriodeCallback={velgPeriodeCallback}
        />
      )}
      {valgtPeriode && (
        <OppholdInntektOgPeriodeForm
          key={valgtPeriode.vurderingsdato}
          readOnly={readOnly}
          valgtPeriode={valgtPeriode}
          soknad={soknad}
          aksjonspunkter={aksjonspunkter}
          submittable={submittable}
          updateOppholdInntektPeriode={updateOppholdInntektPeriode}
          alleKodeverk={alleKodeverk}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          medlemskap={medlemskap}
          lagreEnkeltPeriode={perioder.length === 1 ? lagreEnkeltPeriode : undefined}
          setValgtPeriode={setValgtPeriode}
        />
      )}
      <VerticalSpacer twentyPx />
      {!readOnly && perioder.length > 1 && (
        <Button
          size="small"
          variant="primary"
          onClick={lagre}
          disabled={isSubmitting || isConfirmButtonDisabled()}
          loading={isSubmitting}
          type="button"
        >
          <FormattedMessage id="OppholdInntektOgPerioder.Bekreft" />
        </Button>
      )}
    </>
  );
};

export default MedlemskapInfoPanel;
