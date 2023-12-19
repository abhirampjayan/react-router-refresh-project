import { NavLink } from 'react-router-dom';

const navItems = [
  {
    id: 1,
    link: '/',
    text: 'Home',
  },
  {
    id: 1,
    link: '/about',
    text: 'About',
  },
  {
    id: 1,
    link: '/message',
    text: 'Chart',
  },
];

const NavMenu = () => {
  return (
    <div className='w-full p-4 flex flex-col gap-2'>
      {navItems.map((item) => (
        <NavLink key={item.id} to={item.link}>
          <div className='bg-orange-600 hover:bg-orange-500 text-gray-50 p-4 rounded-lg'>
            {item.text}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;
