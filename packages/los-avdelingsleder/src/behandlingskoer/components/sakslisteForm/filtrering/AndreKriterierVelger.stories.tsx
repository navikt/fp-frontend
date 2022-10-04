import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../../../data/fplosRestApi';
import andreKriterierType from '../../../../kodeverk/andreKriterierType';
import AndreKriterierVelger from './AndreKriterierVelger';

export default {
  title: 'avdelingsleder/behandlingskoer/AndreKriterierVelger',
  component: AndreKriterierVelger,
};

const Template: Story<{ defaultVerdier: Record<string, boolean> }> = ({
  defaultVerdier,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK.name, data: alleKodeverk },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name, data: {} },
  ];

  const formMethods = useForm({
    defaultValues: defaultVerdier,
  });

  const verdier = formMethods.watch();

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <AndreKriterierVelger
          valgtSakslisteId={1}
          valgtAvdelingEnhet="NAV Viken"
          values={verdier}
          hentAvdelingensSakslister={action('button-click')}
          hentAntallOppgaver={action('button-click')}
        />
      </Form>
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultVerdier: {
    [andreKriterierType.TIL_BESLUTTER]: true,
    [`${andreKriterierType.TIL_BESLUTTER}_inkluder`]: true,
  },
};
