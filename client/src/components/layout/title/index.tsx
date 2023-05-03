import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { kielo_paner, kielo_logo } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={kielo_logo} alt="Kielo logo" width="35px" />
        ) : (
          <img src={kielo_paner} alt="Kielo paner" width="160px" />
        )}
      </Link>
    </Button>
  );
};
