import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import kommunikasjonsretning from '@fpsak-frontend/kodeverk/src/kommunikasjonsretning';
import { Dokument } from '@fpsak-frontend/types';
import DokumenterSakIndex from './DokumenterSakIndex';

const behandlingUuid = '1';

export default {
  title: 'sak/sak-dokumenter',
  component: DokumenterSakIndex,
};

const Template: Story<{
  dokumenter: Dokument[];
}> = ({
  dokumenter,
}) => (
  <div style={{
    width: '700px', margin: '50px', padding: '20px', backgroundColor: 'white',
  }}
  >
    <DokumenterSakIndex
      documents={dokumenter}
      selectDocumentCallback={action('button-click')}
      behandlingUuid={behandlingUuid}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  dokumenter: [{
    journalpostId: '1',
    dokumentId: '1',
    behandlingUuidList: [behandlingUuid],
    tittel: 'Dette er et dokument',
    tidspunkt: '2017-08-02T00:54:25.455',
    kommunikasjonsretning: kommunikasjonsretning.INN,
    gjelderFor: 'test1',
  }, {
    journalpostId: '2',
    dokumentId: '2',
    behandlingUuidList: [],
    tittel: 'Dette er et nytt dokument',
    tidspunkt: '2017-02-02T01:54:25.455',
    kommunikasjonsretning: kommunikasjonsretning.UT,
    gjelderFor: 'test2',
  }, {
    journalpostId: '3',
    dokumentId: '3',
    behandlingUuidList: [],
    tittel: 'Dette er et tredje dokument',
    tidspunkt: '2017-01-02T10:54:25.455',
    kommunikasjonsretning: kommunikasjonsretning.NOTAT,
    gjelderFor: 'Dette er en lang tekst som skal kuttes',
  }] as Dokument[],
};

export const IngenDokumenter = Template.bind({});
IngenDokumenter.args = {
  dokumenter: [],
};
