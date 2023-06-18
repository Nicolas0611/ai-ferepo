export interface RoutesProps {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
  errorElement?: JSX.Element;
  loader?: () => Promise<Response>;
  children?: Array<object>;
}
