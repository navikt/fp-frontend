import React, { useState } from 'react';

import { Image, AdvarselModal } from '@fpsak-frontend/shared-components';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import questionNormalUrl from '@fpsak-frontend/assets/images/question_normal.svg';
import questionHoverUrl from '@fpsak-frontend/assets/images/question_hover.svg';

export default {
  title: 'sharedComponents/Image',
  component: Image,
};

export const visIkon = () => (
  <Image
    alt="Alt-tekst"
    src={innvilgetImageUrl}
  />
);

export const visKlikkbartIkon = () => {
  const [visModal, setVisModal] = useState(false);

  return (
    <>
      <Image
        alt="Alt-tekst"
        src={innvilgetImageUrl}
        onClick={() => setVisModal(true)}
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

export const visIkonMedTooltip = () => (
  <Image
    alt="Alt-tekst"
    src={innvilgetImageUrl}
    tooltip={<div><b>Dette er en tooltip-tekst</b></div>}
  />
);

export const visAnnetIkonVedHoover = () => (
  <Image
    alt="Alt-tekst"
    src={questionNormalUrl}
    srcHover={questionHoverUrl}
  />
);
