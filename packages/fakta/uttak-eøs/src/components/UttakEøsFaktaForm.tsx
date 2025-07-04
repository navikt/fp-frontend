import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Button, ErrorSummary, Heading, HStack, Radio, RadioGroup, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, isAksjonspunktOpen } from '@navikt/fp-kodeverk';
import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import type { BekreftAnnenpartsUttakEøsAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { type FormValues as UttakEøsFaktaFormValues, UttakESFaktaDetailForm } from './UttakEøsFaktaDetailForm.tsx';
import { UttakEøsFaktaTable } from './UttakEøsFaktaTable';

interface Props {
  annenForelderUttakEøs?: AnnenforelderUttakEøsPeriode[];
  submittable: boolean;
  kanOverstyre: boolean;
}

export const UttakESFaktaForm = ({ annenForelderUttakEøs, submittable, kanOverstyre }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, isReadOnly, submitCallback } = usePanelDataContext<BekreftAnnenpartsUttakEøsAp>();
  const harApneAksjonspunkter = aksjonspunkterForPanel.some(ap => isAksjonspunktOpen(ap.status));
  const sortertePerioder = annenForelderUttakEøs?.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))) || [];

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<{
    visTabell: boolean; // Ikke en del av form. Bedre måte å gjøre dette på?
    annenForelderUttakEøsPerioder: AnnenforelderUttakEøsPeriode[];
    begrunnelse: string | undefined;
  }>();

  const [perioder, setPerioder] = useState<AnnenforelderUttakEøsPeriode[]>(
    mellomlagretFormData?.annenForelderUttakEøsPerioder ?? sortertePerioder,
  );
  const [erOverstyrt, setErOverstyrt] = useState(false);
  const [visTabell, setVisTabell] = useState(mellomlagretFormData?.visTabell ?? sortertePerioder.length > 0);
  const [visLeggTilPeriodeForm, setVisLeggTilPeriodeForm] = useState(false);
  const [feilmelding, setFeilmelding] = useState<string | undefined>();

  const formMethods = useForm<FaktaBegrunnelseFormValues>({
    defaultValues: mellomlagretFormData
      ? { begrunnelse: mellomlagretFormData.begrunnelse }
      : FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel[0]),
  });

  const automatiskeAksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon !== AksjonspunktKode.OVERSTYR_FAKTA_UTTAK_EØS,
  );

  const erRedigerbart = !isReadOnly && (automatiskeAksjonspunkter.length > 0 || erOverstyrt);

  const bekreft = (begrunnelse: string) => {
    if (visTabell && perioder.length === 0) {
      setFeilmelding(intl.formatMessage({ id: 'UttakEøsFaktaInfoPanel.FeilmeldingIngenPerioder' }));
    } else {
      setFeilmelding(undefined);
    }

    submitCallback({
      kode: erOverstyrt ? AksjonspunktKode.OVERSTYR_FAKTA_UTTAK_EØS : AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
      begrunnelse,
      perioder: visTabell ? perioder : [],
    });
  };

  useEffect(() => {
    if (!visTabell) {
      setFeilmelding(undefined);
    }
  }, [visTabell]);

  useEffect(() => {
    const periodeMap = perioder.map(({ fom, tom }) => [fom, tom]);
    const erOverlappendePerioder = periodeMap.length > 0 ? !!dateRangesNotOverlapping(periodeMap) : undefined;
    if (erOverlappendePerioder) {
      setFeilmelding(intl.formatMessage({ id: 'UttakEøsFaktaInfoPanel.OverlappendePerioder' }));
    } else {
      setFeilmelding(undefined);
    }
  }, [perioder]);

  const begrunnelse = formMethods.watch('begrunnelse'); // TODO: Greit å gjøre dette eller litt overkill?
  useEffect(() => {
    setMellomlagretFormData({
      visTabell: visTabell,
      annenForelderUttakEøsPerioder: perioder,
      begrunnelse: formMethods.getValues('begrunnelse'),
    });
  }, [visTabell, perioder, begrunnelse]);

  return (
    <VStack gap="8">
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="UttakFaktaForm.FaktaUttakEos" />
        </Heading>
        {kanOverstyre && !isReadOnly && automatiskeAksjonspunkter.length === 0 && (
          <OverstyringKnapp onClick={() => setErOverstyrt(true)} erOverstyrt={erOverstyrt} />
        )}
      </HStack>
      {harApneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="UttakEøsFaktaInfoPanel.Aksjonspunkt" />
        </AksjonspunktHelpTextHTML>
      )}
      {feilmelding && (
        <ErrorSummary>
          <ErrorSummary.Item>{feilmelding}</ErrorSummary.Item>
        </ErrorSummary>
      )}
      <VStack gap="10">
        <RadioGroup
          legend={<FormattedMessage id="UttakEøsFaktaInfoPanel.harPeriodeIEøs" />}
          onChange={setVisTabell}
          defaultValue={mellomlagretFormData?.visTabell ?? visTabell}
          readOnly={!erRedigerbart}
        >
          <Radio value={true}>
            <FormattedMessage id="UttakEøsFaktaInfoPanel.Ja" />
          </Radio>
          <Radio value={false}>
            <FormattedMessage id="UttakEøsFaktaInfoPanel.Nei" />
          </Radio>
        </RadioGroup>
        {visTabell && (
          <>
            <UttakEøsFaktaTable
              annenForelderUttakEøsPerioder={perioder}
              setPerioder={setPerioder}
              isReadOnly={!erRedigerbart}
            />
            {erRedigerbart && (
              <>
                {visLeggTilPeriodeForm && (
                  <UttakESFaktaDetailForm
                    oppdater={(nyPeriode: UttakEøsFaktaFormValues) => {
                      setPerioder(prevPerioder =>
                        [...prevPerioder, nyPeriode].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))),
                      );
                      setVisLeggTilPeriodeForm(false);
                    }}
                    avbryt={() => setVisLeggTilPeriodeForm(false)}
                  />
                )}
                {!visLeggTilPeriodeForm && (
                  <div>
                    <Button
                      size="small"
                      variant="tertiary"
                      type="button"
                      icon={<PlusCircleIcon />}
                      onClick={() => setVisLeggTilPeriodeForm(true)}
                      disabled={isReadOnly}
                    >
                      <FormattedMessage id="UttakFaktaForm.LeggTilPeriode" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </>
        )}
        <Form formMethods={formMethods} onSubmit={values => bekreft(notEmpty(values.begrunnelse))}>
          <VStack gap="4">
            <FaktaBegrunnelseTextField
              control={formMethods.control}
              isSubmittable
              isReadOnly={!erRedigerbart}
              hasBegrunnelse
            />
            {erRedigerbart && (
              <FaktaSubmitButton
                isSubmittable={submittable && !feilmelding}
                isReadOnly={isReadOnly}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
            )}
          </VStack>
        </Form>
      </VStack>
    </VStack>
  );
};
