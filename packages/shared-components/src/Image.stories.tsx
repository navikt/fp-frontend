import React, { ReactElement, useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import questionNormalUrl from '@fpsak-frontend/assets/images/question_normal.svg';
import questionHoverUrl from '@fpsak-frontend/assets/images/question_hover.svg';
import AdvarselModal from './AdvarselModal';
import Image from './Image';

export default {
  title: 'sharedComponents/Image',
  component: Image,
};

const Template: Story<{
  src: string;
  srcHover: string;
  tooltip: ReactElement;
  hasOnClick?: boolean;
}> = ({
  src,
  srcHover,
  tooltip,
  hasOnClick = false,
}) => {
  const [visModal, setVisModal] = useState(false);
  return (
    <>
      <Image
        alt="Alt-tekst"
        src={src}
        srcHover={srcHover}
        tooltip={tooltip}
        onClick={hasOnClick ? () => setVisModal(true) : undefined}
      />
      {visModal && (
        <AdvarselModal
          bodyText="Dette er en advarsel"
          showModal
          submit={() => setVisModal(false)}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  src: innvilgetImageUrl,
};

export const IkonMedTooltip = Template.bind({});
IkonMedTooltip.args = {
  src: innvilgetImageUrl,
  tooltip: <div><b>Dette er en tooltip-tekst</b></div>,
};

export const AnnetIkonVedHoover = Template.bind({});
AnnetIkonVedHoover.args = {
  src: questionNormalUrl,
  srcHover: questionHoverUrl,
};

export const KlikkbartIkon = Template.bind({});
KlikkbartIkon.args = {
  src: innvilgetImageUrl,
  hasOnClick: true,
};
