import { Link, useLocation } from "react-router-dom";

const NavigationBreadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  return (
    <div className="mt-[28px] mb-[40px]">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-[#717171] text-[18px] ">
            <Link to="/">Home</Link>
          </li>
          {paths.map((path, index) => {
            const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;
            return isLast ? (
              <li key={index} className="breadcrumb-item active active-page text-[18px] " aria-current="page">
                {path}
              </li>
            ) : (
              <li key={index} className="breadcrumb-item">
                <Link to={routeTo}>{path}</Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default NavigationBreadcrumb;
