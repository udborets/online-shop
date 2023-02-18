import { ReactElement } from "react";

export default interface IModal {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}