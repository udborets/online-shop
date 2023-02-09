import { ITypeProps } from '../models/ITypeProps';

const TypeBarType = ({ children }: ITypeProps) => {
  return (
    <div
      className='type-bar__type'
    >
      {children}
    </div>
  )
}

export default TypeBarType