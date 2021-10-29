import React, { useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import Modal from 'nav-frontend-modal';

import MenySakIndex from './MenySakIndex';
import MenyData from './MenyData';

export default {
  title: 'sak/sak-meny',
  component: MenySakIndex,
};

const Template: Story = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <MenySakIndex
      data={[
        new MenyData(true, 'Sett behandling på vent')
          .medModal(() => (
            <Modal
              isOpen={isOpen}
              closeButton
              contentLabel="Sett behandling på vent"
              onRequestClose={() => setOpen(false)}
              shouldCloseOnOverlayClick={false}
            >
              Sett behandling på vent
            </Modal>
          )),
        new MenyData(true, 'Lag ny behandling')
          .medModal(() => (
            <Modal
              isOpen={isOpen}
              closeButton
              contentLabel="Sett behandling på vent"
              onRequestClose={() => setOpen(false)}
              shouldCloseOnOverlayClick={false}
            >
              Lag ny behandling
            </Modal>
          )),
      ]}
    />
  );
};

export const MenyMedToHandlinger = Template.bind({});
