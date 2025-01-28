import { createContext, ReactElement, useState } from 'react';

export const FormDataContext = createContext<any>(null);

export const FormDataProvider = ({ children }: { children: ReactElement | null }) => {
  const [formData, setFormData] = useState();

  return <FormDataContext value={{ formData, setFormData }}>{children}</FormDataContext>;
};
