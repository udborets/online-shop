export default interface IError {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string | undefined;
  setError: (a:any) => any;
}
