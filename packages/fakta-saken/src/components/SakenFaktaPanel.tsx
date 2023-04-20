import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Soknad } from '@navikt/fp-types';
import {
  VerticalSpacer,
  AksjonspunktHelpTextHTML,
  FlexContainer,
  FlexRow,
  FlexColumn,
} from '@navikt/ft-ui-komponenter';
import {
  MerkOpptjeningUtlandAp,
  OverstyringAvklarStartdatoForPeriodenAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import InnhentDokOpptjeningUtlandPanel from './innhentDok/InnhentDokOpptjeningUtlandPanel';
import StartdatoForForeldrepengerperiodenForm from './startdatoForForeldrepenger/StartdatoForForeldrepengerperiodenForm';

import styles from './sakenFaktaPanel.module.css';

interface OwnProps {
  erSvangerskapspenger: boolean;
  soknad?: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  dokStatus?: string;
  harApneAksjonspunkter: boolean;
  submitCallback: (data: MerkOpptjeningUtlandAp | OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  formData?: any;
  setFormData: (data: any) => void;
}

const erMarkertUtenlandssak = (aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK);

const SakenFaktaPanel: FunctionComponent<OwnProps> = ({
  erSvangerskapspenger,
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
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.col}>
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
          </FlexColumn>
          {!erSvangerskapspenger && !!soknad && (
            <FlexColumn className={styles.col}>
              <StartdatoForForeldrepengerperiodenForm
                aksjonspunkt={aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO)}
                submitCallback={submitCallback}
                readOnly={readOnly}
                alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
                soknad={soknad}
                formData={formData}
                setFormData={setFormData}
              />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
    </>
  );
};

export default SakenFaktaPanel;
