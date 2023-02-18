import IModal from './IModal';
export default interface IError {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  error: any;
}
