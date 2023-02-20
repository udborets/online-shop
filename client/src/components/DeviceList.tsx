import { IDevice } from './../models/IDevice';
import Device from './DeviceItem';
import '../styles/DeviceList.scss';
import { useDevice } from '../hooks/useDevice';
import { useCallback } from 'react';


const DeviceList = () => {
  const { device } = useDevice();
  console.log(device.selectedBrand, device.selectedType)
  const filterState = useCallback(() => {
    if (device.selectedBrand.id === -1 && device.selectedType.id === -1) {
      return device.devices
    }
    if (device.selectedBrand.id === -1 && device.selectedType.id !== -1) {
      return device.devices
        .filter((currentDevice) =>
          currentDevice.typeId === device.selectedType.id
        )
    }
    if (device.selectedBrand.id !== -1 && device.selectedType.id === -1) {
      return device.devices
        .filter((currentDevice) =>
          currentDevice.brandId === device.selectedBrand.id
        )
    }
    if (device.selectedBrand.id !== -1 && device.selectedType.id !== -1) {
      return device.devices
        .filter((currentDevice) =>
          currentDevice.brandId === device.selectedBrand.id
          &&
          currentDevice.typeId === device.selectedType.id
        )
    }
  }, [device.selectedBrand, device.selectedType]);


  // choosedType 
  // &&
  // choosedType.id === device.typeId 
  // &&

  if (!device.devices.length) return <div>There are no devices yet</div>
  return (
    <div className='device-list'>
      {filterState()?.map((dev: IDevice) => (
        <Device key={dev.id} device={dev}></Device>
      ))}
    </div>
  )
}

export default DeviceList