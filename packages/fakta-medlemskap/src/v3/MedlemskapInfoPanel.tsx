import React, { FC, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, VStack } from '@navikt/ds-react';
import { Aksjonspunkt } from '@navikt/ft-types';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { MedlemskapFaktaProps } from './MedlemskapFaktaIndex';
import { FaktaBegrunnelseTextFieldNew } from '@navikt/fp-fakta-felles';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

import { FormValues } from './types';
import AksjonspunktHelpText from './components/AksjonspunktHelpText';
import SituasjonsOversikt from './components/situasjon/SituasjonOversikt';
import OpplysningerOmUtenlandsopphold from './components/opplysningsKort/OpplysningerOmUtenlandsopphold';

const inngangsAksjonspunkter = [
  // TODO: erstatt disse med nye ap når vi vet hvilke vi har
  AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT,
];

const createInitialValues = (aksjonspunkter: Aksjonspunkt[]): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(ap => inngangsAksjonspunkter.some(value => ap.definisjon == value));
  return {
    begrunnelse: aksjonspunkt?.begrunnelse,
    // TODO finn ut hvordan vi henter ut tidligere vurdering
    vurdering: undefined,
  };
};

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
const MedlemskapInfoPanel: FC<MedlemskapFaktaProps> = ({
  submittable,
  readOnly,
  submitCallback,
  aksjonspunkter,
  medlemskap,
  soknad,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);

  const formMethods = useForm<FormValues>({
    defaultValues: createInitialValues(aksjonspunkter),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const bekreft = useCallback((_: FormValues) => {
    // TODO submit når vi vet hvordan det skal se ut
    setSubmitting(true);
    return submitCallback([]);
  }, []);

  return (
    <VStack gap="6">
      {aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET) && (
        <AksjonspunktHelpText aksjonspunkter={aksjonspunkter} />
      )}

      <SituasjonsOversikt medlemskap={medlemskap} soknad={soknad} />
      <OpplysningerOmUtenlandsopphold soknad={soknad} avvik={medlemskap.manuellBehandling?.avvik} />

      <Form formMethods={formMethods} onSubmit={values => bekreft(values)}>
        <VStack gap="6">
          <FaktaBegrunnelseTextFieldNew
            isReadOnly={readOnly}
            isSubmittable={submittable}
            hasBegrunnelse={!!begrunnelse}
          />
          {!readOnly && aksjonspunkter.length > 0 && (
            <div>
              <Button size="small" variant="primary" disabled={isSubmitting} loading={isSubmitting} type="submit">
                <FormattedMessage id="MedlemskapInfoPanel.Submit" />
              </Button>
            </div>
          )}
        </VStack>
      </Form>
    </VStack>
  );
};

export default MedlemskapInfoPanel;
