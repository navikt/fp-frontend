import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Fagsak, Aksjonspunkt, Soknad } from '@navikt/fp-types';
import {
  AvklarDekningsgradAp,
  MerkOpptjeningUtlandAp,
  OverstyringAvklarStartdatoForPeriodenAp,
  OverstyringDekningsgradAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { HStack, VStack } from '@navikt/ds-react';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import InnhentDokOpptjeningUtlandPanel from './innhentDok/InnhentDokOpptjeningUtlandPanel';
import StartdatoForForeldrepengerperiodenForm from './startdatoForForeldrepenger/StartdatoForForeldrepengerperiodenForm';

import DekningradApForm from './dekningsgrad/DekningradApForm';
import DekningradForm from './dekningsgrad/DekningradForm';

interface OwnProps {
  fagsak: Fagsak;
  soknad?: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  dokStatus?: string;
  harApneAksjonspunkter: boolean;
  submitCallback: (
    data:
      | MerkOpptjeningUtlandAp
      | OverstyringAvklarStartdatoForPeriodenAp
      | OverstyringDekningsgradAp
      | AvklarDekningsgradAp,
  ) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  formData?: any;
  setFormData: (data: any) => void;
  kanOverstyreAccess: boolean;
}

const erMarkertUtenlandssak = (aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK);

const SakenFaktaPanel: FunctionComponent<OwnProps> = ({
  fagsak,
  soknad,
  aksjonspunkter,
  dokStatus,
  harApneAksjonspunkter,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
  submittable,
  formData,
  setFormData,
  kanOverstyreAccess,
}) => {
  const automatiskMarkeringAvUtenlandssakAp = aksjonspunkter.find(
    ap => ap.definisjon === AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  );
  const automatiskAp = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.AVKLAR_DEKNINGSGRAD);
  const overstyringsAp = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.OVERSTYR_DEKNINGSGRAD);

  return (
    <>
      {harApneAksjonspunkter && erMarkertUtenlandssak(aksjonspunkter) && (
        <>
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage key="OpptjeningUtland" id="SakenFaktaPanel.OpptjeningUtland" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      {harApneAksjonspunkter && aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.AVKLAR_DEKNINGSGRAD) && (
        <>
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage key="AvklarDekningsgrad" id="SakenFaktaPanel.AvklarDekningsgrad" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <VStack gap="10">
        {soknad && automatiskAp && (
          <DekningradApForm
            søknad={soknad}
            fagsak={fagsak}
            aksjonspunkt={automatiskAp}
            submitCallback={submitCallback}
            readOnly={readOnly}
          />
        )}
        <HStack gap="10">
          {automatiskMarkeringAvUtenlandssakAp && (
            <InnhentDokOpptjeningUtlandPanel
              dokStatus={dokStatus}
              readOnly={readOnly}
              harApneAksjonspunkter={harApneAksjonspunkter}
              aksjonspunkt={automatiskMarkeringAvUtenlandssakAp}
              submittable={submittable}
              submitCallback={submitCallback}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {fagsak.fagsakYtelseType !== FagsakYtelseType.SVANGERSKAPSPENGER && !!soknad && (
            <StartdatoForForeldrepengerperiodenForm
              aksjonspunkt={aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO)}
              submitCallback={submitCallback}
              readOnly={readOnly}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              soknad={soknad}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </HStack>
        {soknad && !automatiskAp && fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER && (
          <DekningradForm
            søknad={soknad}
            fagsak={fagsak}
            aksjonspunkt={overstyringsAp}
            submitCallback={submitCallback}
            readOnly={readOnly}
            kanOverstyreAccess={kanOverstyreAccess}
          />
        )}
      </VStack>
    </>
  );
};

export default SakenFaktaPanel;
