import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let router = useLocation();
  return (
    <>
      <nav className="flex justify-between p-3 sticky top-0 drop-shadow-lg shadow-md bg-white">
        <h1 className="text-lg font-bold">
          <Link to="/">News App</Link>
        </h1>
        <ul className="flex space-x-5">
          <Link to="/">
            <li
              className={`${
                router.pathname === "/" ? "bg-slate-300" : ""
              } px-1 rounded`}
            >
              Home
            </li>
          </Link>
          <Link to="/About">
            <li
              className={`${
                router.pathname === "/About" ? "bg-slate-300" : ""
              } px-1 rounded`}
            >
              About
            </li>
          </Link>
        </ul>
      </nav>
      <ul className="flex flex-wrap p-3 space-x-2 justify-center gap-y-2 shadow-sm">
        <Link
          to="/business"
          className={`${
            router.pathname === "/business" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Business</li>
        </Link>
        <Link
          to="/entertainment"
          className={`${
            router.pathname === "/entertainment" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Entertainment</li>
        </Link>
        <Link
          to="/environment"
          className={`${
            router.pathname === "/environment" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Environment</li>
        </Link>
        <Link
          to="/food"
          className={`${
            router.pathname === "/food" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Food</li>
        </Link>
        <Link
          to="/health"
          className={`${
            router.pathname === "/health" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Health</li>
        </Link>
        <Link
          to="/politics"
          className={`${
            router.pathname === "/politics" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Politics</li>
        </Link>
        <Link
          to="/science"
          className={`${
            router.pathname === "/science" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Science</li>
        </Link>
        <Link
          to="/sports"
          className={`${
            router.pathname === "/sports" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Sports</li>
        </Link>
        <Link
          to="/technology"
          className={`${
            router.pathname === "/technology" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Technology</li>
        </Link>
        <Link
          to="/top"
          className={`${
            router.pathname === "/top" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>Top</li>
        </Link>
        <Link
          to="/world"
          className={`${
            router.pathname === "/world" ? "bg-slate-300" : ""
          } border-2 rounded-xl px-2 `}
        >
          <li>World</li>
        </Link>
      </ul>
    </>
  );
}
