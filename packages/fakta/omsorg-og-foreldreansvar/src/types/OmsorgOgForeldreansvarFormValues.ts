import { type FormValues as OmsorgFormValues } from '../components/OmsorgsovertakelseFaktaPanel';
import { type FormValues as RettighetFormValues } from '../components/RettighetFaktaPanel';

export type OmsorgOgForeldreansvarFormValues = OmsorgFormValues &
  RettighetFormValues & {
    vilkarType?: string;
  };
