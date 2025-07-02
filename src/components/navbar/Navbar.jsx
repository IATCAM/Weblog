import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
  const navs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Articles",
      link: "/article",
    },
    {
      title: "About",
      link: "/about",
    }
  ];

  return (
    <div className="h-22 shadow-md shadow-cyan-600 flex items-center mb-20">
      <div className="flex items-center customContainer">
        <h3 className="text-2xl font-bold text-cyan-700">{props.title}</h3>
        <ul className="flex pl-14 gap-8 text-xl font-medium">
          {navs.map((item) => (
            <li key={item.link}>
              <Link className={location.pathname === item.link ? "text-blue-500" : "text-gray-800"} to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Navbar;