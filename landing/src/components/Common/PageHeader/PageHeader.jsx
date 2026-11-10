import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

function PageHeader({ title }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold dark:text-secondary text-textprimary pb-2">
        {title}
      </h3>
      <Breadcrumb />
    </div>
  );
}

export default PageHeader;
