import IAdminButton from "../../models/IAdminButton";

const AdminButton = ({ onClick, text } : IAdminButton) => {
  return (
    <button className='admin-btn' onClick={() => onClick((state: boolean) => !state)}>{text}</button>
  )
}

export default AdminButton