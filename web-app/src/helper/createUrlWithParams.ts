export type CreateUrlWithParamsArg = {
    url: string;
    params: string | string[][] | Record<string, string> | URLSearchParams | undefined;
  };
  
  const createUrlWithParams = ({ url, params }: CreateUrlWithParamsArg) =>
    `${url}?${new URLSearchParams(params).toString()}`;
  
  export default createUrlWithParams;
  