import { useEffect, useState } from 'react';

const POLLING_INTERVAL_MS = 10 * 60 * 1000;

export const useAppVersjonDeteksjon = () => {
  const [serverVersjon, setServerVersjon] = useState<string | null>(null);
  const [nyVersjonTilgjengelig, setNyVersjonTilgjengelig] = useState(false);

  const [klientVersjon, setKlientVersjon] = useState<string | null>(null);

  useEffect(() => {
    const sjekkServerVersjon = async () => {
      try {
        const res = await fetch('/version');

        if (res.ok) {
          const data = (await res.json()) as { app_image?: string };
          if (data.app_image) {
            if (klientVersjon === null) {
              setKlientVersjon(data.app_image);
            }

            if (data.app_image !== serverVersjon) {
              setServerVersjon(data.app_image);

              if (klientVersjon && data.app_image !== klientVersjon) {
                setNyVersjonTilgjengelig(true);
              }
            }
          }
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Feilet med å hente app-versjon:', e);
      }
    };
    void sjekkServerVersjon();

    const interval = setInterval(sjekkServerVersjon, POLLING_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [klientVersjon, serverVersjon]);

  return nyVersjonTilgjengelig;
};
