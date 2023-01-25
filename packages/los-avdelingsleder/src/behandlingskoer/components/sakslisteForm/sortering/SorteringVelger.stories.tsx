import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { BehandlingType } from '@navikt/ft-kodeverk';

import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import { alleKodeverkLos } from '@navikt/fp-storybook-utils';
import getIntlDecorator from '@navikt/fp-storybook-utils/decorators/withIntl';

import SorteringVelger from './SorteringVelger';
import koSortering from '../../../../kodeverk/KoSortering';
import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../../../data/fplosRestApi';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/SorteringVelger',
  component: SorteringVelger,
  decorators: [withIntl],
};

const Template: Story<{ valgteBehandlingtyper: string[], erDynamiskPeriode: boolean }> = ({
  valgteBehandlingtyper,
  erDynamiskPeriode,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name, data: undefined },
  ];

  const verdier = {
    sortering: koSortering.BEHANDLINGSFRIST,
    fra: 2,
    til: 3,
    fomDato: '2020-01-10',
    tomDato: '2020-10-01',
    erDynamiskPeriode,
  };

  const formMethods = useForm({
    defaultValues: verdier,
  });

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <SorteringVelger
          valgtSakslisteId={1}
          valgteBehandlingtyper={valgteBehandlingtyper}
          valgtAvdelingEnhet="NAV Viken"
          erDynamiskPeriode={verdier.erDynamiskPeriode}
          hentAvdelingensSakslister={action('button-click')}
          hentAntallOppgaver={action('button-click')}
        />
      </Form>
    </RestApiMock>
  );
};

export const SorteringsvelgerNårMangeBehandlingstyperErValgt = Template.bind({});
SorteringsvelgerNårMangeBehandlingstyperErValgt.args = {
  valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
  erDynamiskPeriode: false,
};

export const SorteringsvelgerNårDynamiskPeriodeErValgt = Template.bind({});
SorteringsvelgerNårDynamiskPeriodeErValgt.args = {
  valgteBehandlingtyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.DOKUMENTINNSYN],
  erDynamiskPeriode: true,
};

export const SorteringsvelgerNårKunTilbakekrevingErValgt = Template.bind({});
SorteringsvelgerNårKunTilbakekrevingErValgt.args = {
  valgteBehandlingtyper: [BehandlingType.TILBAKEKREVING],
  erDynamiskPeriode: false,
};
