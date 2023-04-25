import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { kielo, icon } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={ icon } alt="Kielo logo" width="35px" />
        ) : (
          <img src={ kielo } alt="Kielo paner" width="160px" />
        )}
      </Link>
    </Button>
  );
};
