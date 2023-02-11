import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { IStore } from './../models/IStore';
import { IDevice } from './../models/IDevice';
import Device from './Device';
import '../styles/DeviceList.scss';


const DeviceList = () => {
  const devices = useSelector((state: IStore) => state.device.devices)
  return (
    <div className='device-list'>
      {devices.map((device: IDevice) => (
        <Device key={device.id} device={device}></Device>
      ))}
    </div>
  )
}

export default DeviceList