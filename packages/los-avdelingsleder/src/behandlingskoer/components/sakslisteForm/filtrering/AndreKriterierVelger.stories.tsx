import React from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { alleKodeverkLos,getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { requestApi,RestApiGlobalStatePathsKeys, RestApiPathsKeys } from '../../../../data/fplosRestApi';
import andreKriterierType from '../../../../kodeverk/andreKriterierType';
import AndreKriterierVelger from './AndreKriterierVelger';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/AndreKriterierVelger',
  component: AndreKriterierVelger,
  decorators: [withIntl],
};

const Template: StoryFn<{ defaultVerdier: Record<string, boolean> }> = ({ defaultVerdier }) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
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
          valgtAvdelingEnhet="Nav Vikafossen"
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
