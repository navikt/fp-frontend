import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { DekoratorMedFeilviserSakIndex } from './DekoratorMedFeilviserSakIndex';

import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const meta = {
  title: 'sak/sak-dekoratør',
  component: DekoratorMedFeilviserSakIndex,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    tittel: 'Svangerskap, fødsel og adopsjon',
    tittelLenke: '/fpsak',
    navAnsattNavn: 'Espen Utvikler',
    setSiteHeight: action('button-click'),
    fjernFeilmeldinger: action('button-click'),
    interneLenker: [],
    eksterneLenker: [
      {
        tekst: 'Nav',
      },
    ],
    theme: 'light',
    setTheme: action('setTheme'),
  },
  render: function Render(storyArgs) {
    const [args, setArgs] = useState(storyArgs);

    const fjernFeilmeldinger = () => {
      args.fjernFeilmeldinger();
      setArgs(oldArgs => ({ ...oldArgs, feilmeldinger: [] }));
    };

    return <DekoratorMedFeilviserSakIndex {...args} fjernFeilmeldinger={fjernFeilmeldinger} />;
  },
} satisfies Meta<typeof DekoratorMedFeilviserSakIndex>;
export default meta;

const melding =
  'Noe feilet. Feilen kan være forbigående. Prøv og behandle saken litt senere. Om feilen oppstår igjen meld den inn via porten.';
type Story = StoryObj<typeof meta>;

export const UtenFeilmeldinger: Story = {
  args: {
    feilmeldinger: [],
    interneLenker: [
      {
        tekst: 'Journal',
      },
    ],
  },
};

export const MedFeilmeldinger: Story = {
  args: {
    feilmeldinger: [
      {
        melding: 'Feilmelding 1',
      },
      {
        melding: 'Spesialtegn-test: Høna &amp; egget og &#34;test1&#34; og &#39;test2&#39;',
      },
    ],
  },
};

export const MedFeilmeldingDetaljer: Story = {
  args: {
    feilmeldinger: [
      {
        melding,
        tilleggsInfo: {
          melding: 'test',
          ekstra: 'test2',
        },
      },
    ],
  },
};

export const MedNøstaFeilmeldingDetaljer: Story = {
  args: {
    feilmeldinger: [
      {
        melding,
        tilleggsInfo: {
          melding: 'test',
          årsaker: ['første årsak', 'andre årsak'],
          kontekst: {
            saksnummer: '123456',
            erKritisk: false,
          },
        },
      },
    ],
  },
};

export const MedFeilmeldingDetaljerSomErTekst: Story = {
  args: {
    feilmeldinger: [
      {
        melding,
        tilleggsInfo: 'Feildetaljer som er en tekst',
      },
    ],
  },
};

export const MedReellFeilmeldingMedStacktrace: Story = {
  args: {
    feilmeldinger: [
      {
        melding,
        tilleggsInfo: {
          blokkertAv: null,
          callId: 'CallId_1776860554564_157215548',
          exceptionCauseClass: 'java.lang.NullPointerException',
          exceptionCauseMessage: 'Navbruker må ha fødselsdato',
          feilkode: 'PT-876625',
          feilmelding:
            'Kunne ikke prosessere task, id=21321730, taskName=innhentsaksopplysninger.personopplysninger. Har feilet 1 ganger. Vil ikke prøve igjen',
          stacktrace:
            // eslint-disable-next-line max-len
            'java.lang.NullPointerException: Navbruker må ha fødselsdato\n\tat java.base/java.util.Objects.requireNonNull(Unknown Source)\n\tat no.nav.foreldrepenger.behandlingslager.aktør.Personinfo$Builder.build(Personinfo.java:150)\n\tat no.nav.foreldrepenger.domene.person.pdl.PersoninfoTjeneste.hentPersoninfo(PersoninfoTjeneste.java:184)\n\tat no.nav.foreldrepenger.domene.person.pdl.PersoninfoTjeneste$Proxy$_$$_WeldClientProxy.hentPersoninfo(Unknown Source)\n\tat no.nav.foreldrepenger.domene.person.PersoninfoAdapter.hentKjerneinformasjon(PersoninfoAdapter.java:86)\n\tat no.nav.foreldrepenger.domene.person.PersoninfoAdapter.lambda$innhentPersonopplysningerFor$0(PersoninfoAdapter.java:71)\n\tat java.base/java.util.Optional.flatMap(Unknown Source)\n\tat no.nav.foreldrepenger.domene.person.PersoninfoAdapter.innhentPersonopplysningerFor(PersoninfoAdapter.java:71)\n\tat no.nav.foreldrepenger.domene.person.PersoninfoAdapter$Proxy$_$$_WeldClientProxy.innhentPersonopplysningerFor(Unknown Source)\n\tat no.nav.foreldrepenger.domene.personopplysning.PersonopplysningInnhenter.innhentAktørId(PersonopplysningInnhenter.java:238)\n\tat no.nav.foreldrepenger.domene.personopplysning.PersonopplysningInnhenter.innhentPersonopplysninger(PersonopplysningInnhenter.java:65)\n\tat no.nav.foreldrepenger.domene.personopplysning.PersonopplysningInnhenter$Proxy$_$$_WeldClientProxy.innhentPersonopplysninger(Unknown Source)\n\tat no.nav.foreldrepenger.domene.registerinnhenting.RegisterdataInnhenter.innhentPersoninformasjon(RegisterdataInnhenter.java:144)\n\tat no.nav.foreldrepenger.domene.registerinnhenting.RegisterdataInnhenter.innhentPersonopplysninger(RegisterdataInnhenter.java:131)\n\tat no.nav.foreldrepenger.domene.registerinnhenting.RegisterdataInnhenter$Proxy$_$$_WeldClientProxy.innhentPersonopplysninger(Unknown Source)\n\tat no.nav.foreldrepenger.domene.registerinnhenting.task.InnhentPersonopplysningerTask.prosesser(InnhentPersonopplysningerTask.java:43)\n\tat no.nav.foreldrepenger.behandlingslager.task.BehandlingProsessTask.doTask(BehandlingProsessTask.java:29)\n\tat no.nav.foreldrepenger.domene.registerinnhenting.task.InnhentPersonopplysningerTask$Proxy$_$$_WeldClientProxy.doTask(Unknown Source)\n\tat no.nav.vedtak.felles.prosesstask.impl.ProsessTaskHandlerRef.doTask(ProsessTaskHandlerRef.java:95)\n\tat no.nav.vedtak.prosesstask.kontekst.KontekstCdiProsessTaskDispatcher$KontekstProsessTaskHandlerRef.doTask(KontekstCdiProsessTaskDispatcher.java:79)\n\tat no.nav.vedtak.prosesstask.kontekst.KontekstCdiProsessTaskDispatcher.dispatch(KontekstCdiProsessTaskDispatcher.java:44)\n\tat no.nav.vedtak.prosesstask.kontekst.KontekstCdiProsessTaskDispatcher$Proxy$_$$_WeldClientProxy.dispatch(Unknown Source)\n\tat no.nav.vedtak.felles.prosesstask.impl.TaskManager$1TrackCurrentDispatchedTask.dispatch(TaskManager.java:147)\n\tat no.nav.vedtak.felles.prosesstask.impl.TaskManagerRunnableTask.runInSpan(TaskManagerRunnableTask.java:49)\n\tat no.nav.vedtak.log.tracing.OtelSpanWrapper.span(OtelSpanWrapper.java:48)\n\tat no.nav.vedtak.felles.prosesstask.impl.TaskManagerRunnableTask.run(TaskManagerRunnableTask.java:37)\n\tat no.nav.vedtak.felles.prosesstask.impl.IdentRunnableTask.run(IdentRunnableTask.java:13)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Unknown Source)\n\tat java.base/java.util.concurrent.FutureTask.run(Unknown Source)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\n\tat java.base/java.lang.Thread.run(Unknown Source)\n',
          taskId: '21321730',
          taskName: 'innhentsaksopplysninger.personopplysninger',
        },
      },
    ],
  },
};
