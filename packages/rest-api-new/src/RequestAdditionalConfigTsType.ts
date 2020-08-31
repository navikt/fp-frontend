type RequestAdditionalConfig = Readonly<{
  maxPollingLimit?: number;
  saveResponseIn?: string;
  isResponseBlob?: boolean,
}>

export default RequestAdditionalConfig;
