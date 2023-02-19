import { IDevice } from './../models/IDevice';
import Device from './DeviceItem';
import '../styles/DeviceList.scss';
import { useDevice } from '../hooks/useDevice';
import { useEffect } from 'react';


const DeviceList = () => {
  const { device, updateDevices } = useDevice();
  useEffect(() => {
    updateDevices();
  }, [])
  if(!device.devices.length) return <div>There are no devices yet</div>
  return (
    <div className='device-list'>
      {device.devices.map((device: IDevice) => (
        <Device key={device.id} device={device}></Device>
      ))}
    </div>
  )
}

export default DeviceList