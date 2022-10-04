import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../../../data/fplosRestApi';
import FagsakYtelseTypeVelger from './FagsakYtelseTypeVelger';

export default {
  title: 'avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger',
  component: FagsakYtelseTypeVelger,
};

const Template: Story<{ verdier: Record<string, boolean> }> = ({
  verdier,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK.name, data: alleKodeverk },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name, data: undefined },
  ];

  const formMethods = useForm({
    defaultValues: verdier,
  });

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <FagsakYtelseTypeVelger
          valgtSakslisteId={1}
          valgtAvdelingEnhet="NAV Viken"
          hentAvdelingensSakslister={action('button-click')}
          hentAntallOppgaver={action('button-click')}
        />
      </Form>
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  verdier: {
    [FagsakYtelseType.FORELDREPENGER]: true,
    [FagsakYtelseType.ENGANGSSTONAD]: true,
  },
};
