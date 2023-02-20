import { IDevice } from './../models/IDevice';
import Device from './DeviceItem';
import '../styles/DeviceList.scss';
import { useDevice } from '../hooks/useDevice';
import { useCallback, useEffect } from 'react';
import { useBrand } from '../hooks/useBrand';
import { useType } from '../hooks/useType';


const DeviceList = () => {
  const { devices, updateDevices } = useDevice();
  const { selectedBrand } = useBrand();
  const { selectedType } = useType();
  useEffect(() => {
    updateDevices();
  }, [])
  const filterState = useCallback(() => {
    if (selectedBrand.id === -1 && selectedType.id === -1) {
      return devices
    }
    if (selectedBrand.id === -1 && selectedType.id !== -1) {
      return devices
        .filter((currentDevice) =>
          currentDevice.typeId === selectedType.id
        )
    }
    if (selectedBrand.id !== -1 && selectedType.id === -1) {
      return devices
        .filter((currentDevice) =>
          currentDevice.brandId === selectedBrand.id
        )
    }
    if (selectedBrand.id !== -1 && selectedType.id !== -1) {
      return devices
        .filter((currentDevice) =>
          currentDevice.brandId === selectedBrand.id
          &&
          currentDevice.typeId === selectedType.id
        )
    }
  }, [selectedBrand, selectedType]);


  // choosedType 
  // &&
  // choosedType.id === device.typeId 
  // &&

  if (!devices.length) return <div>There are no devices yet</div>
  return (
    <div className='device-list'>
      {filterState()?.map((dev: IDevice) => (
        <Device key={dev.id} device={dev}></Device>
      ))}
    </div>
  )
}

export default DeviceList