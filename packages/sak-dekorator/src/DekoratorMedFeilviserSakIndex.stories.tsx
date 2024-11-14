import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { DekoratorMedFeilviserSakIndex } from './DekoratorMedFeilviserSakIndex';
import { Feilmelding } from './typer/feilmeldingTsType';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';

export default {
  title: 'sak/sak-dekoratør',
  component: DekoratorMedFeilviserSakIndex,
};

const Template: StoryFn<{
  kanJournalføre?: boolean;
  feilmeldinger?: Feilmelding[];
}> = ({ kanJournalføre, feilmeldinger = [] }) => {
  const [errorMessages, setErrorMessages] = useState(feilmeldinger);
  return (
    <div style={{ marginLeft: '-56px' }}>
      <DekoratorMedFeilviserSakIndex
        tittel="Svangerskap, fødsel og adopsjon"
        tittelLenke="/fpsak"
        navAnsattNavn="Espen Utvikler"
        fjernFeilmeldinger={() => setErrorMessages([])}
        setSiteHeight={() => undefined}
        feilmeldinger={errorMessages}
        eksterneLenker={[
          {
            tekst: 'Nav',
          },
        ]}
        interneLenker={
          kanJournalføre
            ? [
                {
                  tekst: 'Journal',
                },
              ]
            : []
        }
      />
    </div>
  );
};

export const UtenFeilmeldinger = Template.bind({});
UtenFeilmeldinger.args = {
  feilmeldinger: [],
  kanJournalføre: true,
};

export const MedFeilmeldinger = Template.bind({});
MedFeilmeldinger.args = {
  feilmeldinger: [
    {
      melding: 'Feilmelding 1',
    },
    {
      melding: 'Spesialtegn-test: Høna &amp; egget og &#34;test1&#34; og &#39;test2&#39;',
    },
  ],
};

export const MedFeilmeldingDetaljer = Template.bind({});
MedFeilmeldingDetaljer.args = {
  feilmeldinger: [
    {
      melding:
        'Noe feilet. Feilen kan være forbigående. Prøv og behandle saken litt senere. Om feilen oppstår igjen meld den inn via porten.',
      tilleggsInfo: {
        melding: 'test',
        ekstra: 'test2',
      },
    },
  ],
};
