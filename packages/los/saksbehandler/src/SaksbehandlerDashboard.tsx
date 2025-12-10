import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import type { NavAnsatt } from '@navikt/fp-types';

import { BehandlingskoerIndex } from './behandlingskoer/BehandlingskoerIndex';
import { driftsmeldingerOptions, losKodeverkOptions } from './data/fplosSaksbehandlerApi';
import { DriftsmeldingPanel } from './driftsmelding/DriftsmeldingPanel';
import { FagsakSøkIndex } from './fagsakSok/FagsakSøkIndex';
import { SaksstøttePaneler } from './saksstotte/SaksstøttePaneler';

import styles from './saksbehandlerDashboard.module.css';

interface Props {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  navAnsatt: NavAnsatt;
}

export const SaksbehandlerDashboard = ({ setLosErIkkeTilgjengelig, åpneFagsak, navAnsatt }: Props) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();

  const alleKodeverkQuery = useQuery(losKodeverkOptions());
  const driftsmeldingerQuery = useQuery(driftsmeldingerOptions());

  useEffect(() => {
    if (driftsmeldingerQuery.isError || alleKodeverkQuery.isError) {
      setLosErIkkeTilgjengelig();
    }
  }, [driftsmeldingerQuery.isError, alleKodeverkQuery.isError]);

  if (driftsmeldingerQuery.isPending || alleKodeverkQuery.isPending) {
    return null;
  }

  return (
    <>
      {driftsmeldingerQuery.data && <DriftsmeldingPanel driftsmeldinger={driftsmeldingerQuery.data} />}
      <div className={styles['gridContainer']}>
        <div className={styles['leftColumn']}>
          <BehandlingskoerIndex
            åpneFagsak={åpneFagsak}
            valgtSakslisteId={valgtSakslisteId}
            setValgtSakslisteId={setValgtSakslisteId}
            brukernavn={navAnsatt.brukernavn}
          />
          <div className={styles['sokContainer']}>
            <FagsakSøkIndex åpneFagsak={åpneFagsak} kanSaksbehandle={navAnsatt.kanSaksbehandle || false} />
          </div>
        </div>
        <div className={styles['rightColumn']}>
          <SaksstøttePaneler åpneFagsak={åpneFagsak} />
        </div>
      </div>
      <div>
        <AnimatedSantaBanner />
      </div>
    </>
  );
};

// TODO: Slett denne når jula er over eller hvis folk hater det
const AnimatedSantaBanner = () => (
  <svg
    viewBox="0 0 1200 200"
    width="100%"
    height="auto"
    xmlns="http://www.w3.org/2000/svg"
    style={{ backgroundColor: '#2c3e50' }}
  >
    <text
      x="150" // X position, near top-right corner
      y="30" // Y position
      fontSize="24" // Font size
      fontFamily="sans-serif"
      fill="#f4d03f"
      textAnchor="end" // align right
      alignmentBaseline="middle"
    >
      God jul!
    </text>
    {/* Snowflakes */}
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
    {[...Array(15)].map((_, i) => (
      // eslint-disable-next-line react-hooks/purity
      <circle key={i} cx={Math.random() * 1200} cy={Math.random() * 200} r={Math.random() * 3 + 2} fill="white">
        {/* eslint-disable-next-line react-hooks/purity */}
        <animate attributeName="cy" values="0;200" dur={`${Math.random() * 5 + 3}s`} repeatCount="indefinite" />
      </circle>
    ))}

    {/* Christmas Trees (cone-shaped, correct orientation) */}
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
    {[...Array(8)].map((_, i) => {
      const x = 50 + i * 140;
      return (
        <g key={i} transform={`translate(${x},190)`}>
          {/* Tree layers — wide bottom → narrow top */}
          <polygon points="0,0 40,0 20,-40" fill="#27ae60" />
          <polygon points="5,-25 35,-25 20,-60" fill="#239b56" />
          <polygon points="10,-50 30,-50 20,-80" fill="#1e8449" />

          {/* Trunk */}
          <rect x="16" y="0" width="8" height="15" fill="#8b4513" />

          {/* Ornaments */}
          <circle cx="20" cy="-20" r="2.5" fill="#e74c3c" />
          <circle cx="15" cy="-45" r="2.5" fill="#f1c40f" />
          <circle cx="25" cy="-65" r="2.5" fill="#3498db" />

          {/* Star */}
          <polygon points="20,-95 23,-89 29,-88 24,-83 25,-77 20,-80 15,-77 16,-83 11,-88 17,-89" fill="#f4d03f">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
          </polygon>
        </g>
      );
    })}

    {/* Sleigh group */}
    <g id="santaSleigh" transform="translate(-500,50)">
      {/* Advanced sleigh */}
      <g transform="translate(0,0)">
        {/* Base runners */}
        <path d="M0,25 Q20,35 40,25 Q60,35 80,25" fill="none" stroke="#6e2c00" strokeWidth="3" />

        {/* Sleigh body */}
        <path d="M5,0 L75,0 Q80,0 80,20 L5,20 Q0,20 5,0" fill="#c0392b" stroke="#922b21" strokeWidth="1" rx="5" />

        {/* Backrest */}
        <rect x="55" y="-10" width="20" height="15" fill="#922b21" rx="3" />

        {/* Seat cushion */}
        <rect x="5" y="0" width="50" height="5" fill="#e74c3c" />
      </g>

      {/* Santa sitting inside the sled */}
      <g transform="translate(15,-10)">
        {/* Head */}
        <circle cx="20" cy="0" r="7" fill="#fce4c4" stroke="#000" strokeWidth="0.3" />
        {/* Beard */}
        <path d="M13,2 Q20,12 27,2" fill="#fff" stroke="#fff" strokeWidth="0.5" />
        {/* Hat */}
        <polygon points="14,-2 20,-15 26,-2" fill="#e74c3c" />
        <circle cx="20" cy="-15" r="2" fill="#fff" /> {/* pompom */}
        {/* Body */}
        <rect x="14" y="0" width="12" height="15" fill="#e74c3c" rx="3" />
        {/* Belt */}
        <rect x="14" y="8" width="12" height="3" fill="#000" />
        {/* Arms */}
        <rect x="7" y="3" width="7" height="3" fill="#e74c3c">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-20 7 3;0 7 3;-20 7 3"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="26" y="3" width="7" height="3" fill="#e74c3c" transform="rotate(20 26 3)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="20 26 3;0 26 3;20 26 3"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* Reindeers rendered RIGHT → LEFT so Rudolph leads */}
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {[...Array(8)].map((_, i) => {
        const reversedIndex = 7 - i; // flips visual order
        const isRudolph = i === 0; // FIRST rendered = LEAD reindeer (far right)

        return (
          <g key={i} transform={`translate(${90 + reversedIndex * 50},0)`}>
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#a0522d" />
            <circle cx="14" cy="-5" r="5" fill="#a0522d" />

            {/* Nose */}
            {isRudolph ? (
              <circle cx="20" cy="-5" r="2.8" fill="red">
                <animate attributeName="r" values="2;4;2" dur="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" repeatCount="indefinite" />
              </circle>
            ) : (
              <circle cx="20" cy="-5" r="2" fill="black" />
            )}

            {/* Legs */}
            <rect x="-6" y="7" width="3" height="10" fill="#a0522d">
              <animate attributeName="y" values="7;12;7" dur="0.5s" repeatCount="indefinite" />
            </rect>
            <rect x="3" y="7" width="3" height="10" fill="#a0522d">
              <animate attributeName="y" values="12;7;12" dur="0.5s" repeatCount="indefinite" />
            </rect>

            {/* Antlers */}
            <path d="M12,-8 L10,-16 M12,-8 L14,-16 M16,-8 L18,-16" stroke="#a0522d" strokeWidth="1.5" />
          </g>
        );
      })}
    </g>

    {/* Fly animation */}
    <animateTransform
      xlinkHref="#santaSleigh"
      attributeName="transform"
      type="translate"
      from="-600,50"
      to="1200,50"
      dur="25s"
      repeatCount="indefinite"
    />
  </svg>
);
