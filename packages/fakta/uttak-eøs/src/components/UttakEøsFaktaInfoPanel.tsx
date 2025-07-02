import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Button, ErrorSummary, Heading, HStack, Radio, RadioGroup, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, isAksjonspunktOpen } from '@navikt/fp-kodeverk';
import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import type { BekreftAnnenpartsUttakEøsAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, usePanelDataContext } from '@navikt/fp-utils';

import { type FormValues, UttakEøsFaktaForm } from './UttakEøsFaktaForm';
import { UttakEøsFaktaTable } from './UttakEøsFaktaTable';

interface Props {
  annenForelderUttakEøs?: AnnenforelderUttakEøsPeriode[];
  kanOverstyre: boolean;
  submittable: boolean;
}

export const UttakEøsFaktaInfoPanel = ({ annenForelderUttakEøs, submittable }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, isReadOnly, submitCallback } = usePanelDataContext<BekreftAnnenpartsUttakEøsAp>();
  const harApneAksjonspunkter = aksjonspunkterForPanel.some(ap => isAksjonspunktOpen(ap.status));

  const [perioder, setPerioder] = useState<AnnenforelderUttakEøsPeriode[]>(
    annenForelderUttakEøs?.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom))) || [],
  );

  const [visTabell, setVisTabell] = useState(perioder.length > 0);
  const [visLeggTilPeriodeForm, setVisLeggTilPeriodeForm] = useState(false);
  const [feilmelding, setFeilmelding] = useState<string | undefined>();

  const formMethods = useForm<{ begrunnelse: string | null }>({
    defaultValues: { begrunnelse: aksjonspunkterForPanel[0].begrunnelse },
  });

  const bekreft = (begrunnelse: string) => {
    if (visTabell && perioder.length === 0) {
      setFeilmelding(intl.formatMessage({ id: 'UttakEøsFaktaInfoPanel.FeilmeldingIngenPerioder' }));
    } else {
      setFeilmelding(undefined);
    }

    submitCallback({
      kode: AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
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

  return (
    <VStack gap="8">
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="UttakFaktaForm.FaktaUttakEos" />
        </Heading>
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
          defaultValue={perioder.length > 0}
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
            <UttakEøsFaktaTable annenForelderUttakEøsPerioder={perioder} setPerioder={setPerioder} />
            {visLeggTilPeriodeForm && (
              <UttakEøsFaktaForm
                oppdater={(nyPeriode: FormValues) => {
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
        <Form formMethods={formMethods} onSubmit={values => bekreft(notEmpty(values.begrunnelse))}>
          <VStack gap="4">
            <FaktaBegrunnelseTextField isSubmittable isReadOnly={isReadOnly} hasBegrunnelse />
            <FaktaSubmitButton
              isSubmittable={submittable && !feilmelding}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </VStack>
        </Form>
      </VStack>
    </VStack>
  );
};
