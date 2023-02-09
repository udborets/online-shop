import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import Type from './Type';
import '../styles/TypeBar.scss'
import { IStore } from '../models/IStore';

const TypeBar = () => {
  const devices = useSelector((state: IStore) => state.device)
  return (
    <div className='type-bar'>
      <div className="type-bar__container">
        {
          devices.types.map((type) => (
            <Type key={type.id}>{type.name}</Type>
          ))
        }
      </div>
    </div>
  )
}

export default TypeBar