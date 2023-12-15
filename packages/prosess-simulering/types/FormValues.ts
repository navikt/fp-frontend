export type FeilutbetalingFormValues = {
  videreBehandling?: string;
  varseltekst?: string;
  begrunnelse?: string;
};

export type EtterbetalingSøkerFormValues = {
  begrunnelseEtterbetaling?: string;
};

type FormValues = FeilutbetalingFormValues & EtterbetalingSøkerFormValues;

export default FormValues;
