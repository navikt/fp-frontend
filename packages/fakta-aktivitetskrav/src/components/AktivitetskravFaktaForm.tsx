import React, {
  FunctionComponent, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from '@navikt/ft-form-hooks';
import { Heading } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KodeverkMedNavn, Aktivitetskrav } from '@fpsak-frontend/types';
import { FaktaSubmitButtonNew, FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { KontrollerAktivitetskravAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import AktivitetskravFaktaTable from './AktivitetskravFaktaTable';

interface PureOwnProps {
  harApneAksjonspunkter: boolean;
  sorterteAktivitetskrav: Aktivitetskrav[];
  submitCallback: (aksjonspunkter: KontrollerAktivitetskravAp) => Promise<void>;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  readOnly: boolean;
  submittable: boolean;
  formData: { aktivitetskrav: Aktivitetskrav[], begrunnelse: string },
  setFormData: (data: { aktivitetskrav: Aktivitetskrav[], begrunnelse: string }) => void,
}

const AktivitetskravFaktaForm: FunctionComponent<PureOwnProps> = ({
  harApneAksjonspunkter,
  sorterteAktivitetskrav,
  aktivitetskravAvklaringer,
  readOnly,
  submittable,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const [aktivitetskrav, oppdaterAktivitetskrav] = useState<Aktivitetskrav[]>(formData?.aktivitetskrav || sorterteAktivitetskrav);

  const bekreft = useCallback((begrunnelse: string) => {
    submitCallback({
      kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
      avklartePerioder: aktivitetskrav as Required<Aktivitetskrav>[],
      begrunnelse,
    });
  }, [aktivitetskrav]);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse,
    },
  });

  useEffect(() => () => {
    setFormData({ aktivitetskrav, begrunnelse: formMethods.getValues('begrunnelse') });
  }, []);

  const begrunnelse = formMethods.watch('begrunnelse');

  const isSubmittable = useMemo(() => submittable && aktivitetskrav?.every((a) => a.vurdering) && !!begrunnelse,
    [aktivitetskrav, begrunnelse]);

  const [isDirty, setDirty] = useState<boolean>(false);

  return (
    <>
      <Heading size="small"><FormattedMessage id="AktivitetskravFaktaForm.Overskrift" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {[intl.formatMessage({ id: 'AktivitetskravFaktaForm.AksjonspunktHjelpetekst' })]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <AktivitetskravFaktaTable
        aktivitetskrav={aktivitetskrav}
        oppdaterAktivitetskrav={oppdaterAktivitetskrav}
        aktivitetskravAvklaringer={aktivitetskravAvklaringer}
        setDirty={setDirty}
        readOnly={readOnly}
      />
      <VerticalSpacer twentyPx />
      <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <FaktaBegrunnelseTextFieldNew
          name="begrunnelse"
          isSubmittable
          isReadOnly={readOnly}
          hasBegrunnelse
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={isSubmittable}
          isReadOnly={readOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={isDirty || formMethods.formState.isDirty}
        />
      </Form>
    </>
  );
};

export default AktivitetskravFaktaForm;
