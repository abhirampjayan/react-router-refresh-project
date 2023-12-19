import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className='w-screen bg-slate-200 h-screen flex'>
      <Sidebar />
      <div className='bg-white flex flex-grow m-12 rounded-3xl'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
