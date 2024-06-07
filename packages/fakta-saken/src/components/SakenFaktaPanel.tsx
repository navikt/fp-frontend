import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Fagsak, Soknad } from '@navikt/fp-types';
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

import DekningradPanel from './dekningsgrad/DekningradPanel';

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
}) => {
  const automatiskMarkeringAvUtenlandssakAp = aksjonspunkter.find(
    ap => ap.definisjon === AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  );
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
        {soknad && (
          <DekningradPanel
            fagsak={fagsak}
            søknad={soknad}
            submitCallback={submitCallback}
            aksjonspunkter={aksjonspunkter.filter(
              ap =>
                ap.definisjon === AksjonspunktCode.AVKLAR_DEKNINGSGRAD ||
                ap.definisjon === AksjonspunktCode.OVERSTYR_DEKNINGSGRAD,
            )}
            readOnly={readOnly}
          />
        )}
      </VStack>
    </>
  );
};

export default SakenFaktaPanel;
