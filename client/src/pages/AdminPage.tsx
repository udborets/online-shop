import '../styles/AdminPage.scss';
import CreateDevice from './../components/modals/CreateDevice';
import CreateType from './../components/modals/CreateType';
import CreateBrand from './../components/modals/CreateBrand';
import { useState } from 'react';
import AdminButton from './../components/ui/AdminButton';

const AdminPage = () => {
  const [typeActive, setTypeActive] = useState(false);
  const [brandActive, setBrandActive] = useState(false);
  const [deviceActive, setDeviceActive] = useState(false);

  return (
    <div className='current-page'>
      <AdminButton onClick={() => setDeviceActive(old => !old)} text={'Create device'} />      
      <AdminButton onClick={() => setTypeActive(old => !old)} text={'Create type'} />      
      <AdminButton onClick={() => setBrandActive(old => !old)} text={'Create brand'} />      
      <CreateDevice active={deviceActive} setActive={setDeviceActive} >
        <div>
          device
        </div>
      </CreateDevice>
      <CreateType active={typeActive} setActive={setTypeActive} >
        <div>
          type
        </div>
      </CreateType>
      <CreateBrand active={brandActive} setActive={setBrandActive} >
        <div>
          brand
        </div>
      </CreateBrand>
    </div>
  )
}

export default AdminPage