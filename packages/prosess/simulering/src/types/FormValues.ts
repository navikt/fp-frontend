export type FeilutbetalingFormValues = {
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
};

export type EtterbetalingSøkerFormValues = {
  begrunnelseEtterbetaling?: string;
};

export type FormValues = FeilutbetalingFormValues & EtterbetalingSøkerFormValues;
