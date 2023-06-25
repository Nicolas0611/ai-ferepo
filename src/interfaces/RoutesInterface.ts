export interface RoutesProps {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
  errorElement?: JSX.Element;
  loader?: any;
  children?: Array<object>;
}
