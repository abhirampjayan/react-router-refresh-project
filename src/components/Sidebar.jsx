import NavMenu from './NavMenu';

const Sidebar = () => {
  return (
    <div className='bg-gray-800 h-screen min-w-[320px] flex flex-col text-white'>
      <div className='w-full justify-center flex py-8'>
        <h1 className='text-xl uppercase'>Side Bar</h1>
      </div>
      <NavMenu />
    </div>
  );
};

export default Sidebar;
