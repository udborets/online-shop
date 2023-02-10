export interface IRoute {
  path: string;
  Component: () => JSX.Element;
}
