import { Link } from 'react-router-dom';

const LiMenu = ({ name, children }) => {
  return (
    <div>
      <li>
        <Link
          to={`./${name}`}
          href="www.google.com"
          className="inline-block w-full pl-1 hover:bg-yellow-500 hover:text-black"
        >
          {children}
        </Link>
      </li>
    </div>
  );
};
export default LiMenu;
