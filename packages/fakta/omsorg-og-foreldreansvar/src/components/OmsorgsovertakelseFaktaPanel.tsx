import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, HStack, Label } from '@navikt/ds-react';
import { RhfDatepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { isNotEqual } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, SoknadType } from '@navikt/fp-kodeverk';
import type { foreldrepenger_familiehendelse_rest_AvklartDataOmsorgDto, Soknad } from '@navikt/fp-types';

import type { OmsorgOgForeldreansvarFormValues } from '../types/OmsorgOgForeldreansvarFormValues';

const getAntallBarn = (
  soknad: Soknad,
  familiehendelse: foreldrepenger_familiehendelse_rest_AvklartDataOmsorgDto,
): number => {
  const antallBarn = soknad.antallBarn ?? NaN;
  return familiehendelse.antallBarnTilBeregning ?? antallBarn;
};

export type FormValues = {
  omsorgsovertakelseDato?: string;
  foreldreansvarDato?: string;
};

interface Props {
  readOnly: boolean;
  erAksjonspunktForeldreansvar: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  soknad: Soknad;
  familiehendelse: foreldrepenger_familiehendelse_rest_AvklartDataOmsorgDto;
}

/**
 * OmsorgsovertakelseFaktaPanel
 */
export const OmsorgsovertakelseFaktaPanel = ({
  readOnly,
  erAksjonspunktForeldreansvar,
  alleMerknaderFraBeslutter,
  soknad,
  familiehendelse,
}: Props) => {
  const intl = useIntl();
  const antallBarn = getAntallBarn(soknad, familiehendelse);

  const { control } = useFormContext<OmsorgOgForeldreansvarFormValues>();

  return (
    <FaktaGruppe
      title={intl.formatMessage({
        id: erAksjonspunktForeldreansvar
          ? 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarInfo'
          : 'OmsorgOgForeldreansvarFaktaForm.OmsorgInfo',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
    >
      <HStack gap="space-40">
        <RhfDatepicker
          name="omsorgsovertakelseDato"
          control={control}
          label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.OmsorgsovertakelseDate' })}
          validate={[required, hasValidDate]}
          isReadOnly={readOnly}
          isEdited={isNotEqual(finnOmsorgsovertakelseDato(soknad), familiehendelse.omsorgsovertakelseDato)}
        />
        {erAksjonspunktForeldreansvar && (
          <RhfDatepicker
            name="foreldreansvarDato"
            control={control}
            label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.ForeldreansvarDato' })}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
          />
        )}
        <div>
          <Label size="small">
            <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.NrOfChildren" />
          </Label>
          <BodyShort size="small">{antallBarn}</BodyShort>
        </div>
      </HStack>
    </FaktaGruppe>
  );
};

OmsorgsovertakelseFaktaPanel.buildInitialValues = (
  soknad: Soknad,
  familiehendelse: foreldrepenger_familiehendelse_rest_AvklartDataOmsorgDto,
): FormValues => ({
  omsorgsovertakelseDato: familiehendelse.omsorgsovertakelseDato ?? finnOmsorgsovertakelseDato(soknad),
  foreldreansvarDato: familiehendelse.foreldreansvarDato ?? undefined,
});

const finnOmsorgsovertakelseDato = (søknad: Soknad) => {
  if (søknad.soknadType === SoknadType.ADOPSJON) {
    return søknad.omsorgsovertakelseDato ?? undefined;
  }

  return undefined;
};
