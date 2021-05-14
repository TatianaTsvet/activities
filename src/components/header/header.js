import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import "./header.scss";

const Header = () => (
  <Typography>
    <Link href="/activities">Activities</Link>
    <Link href="/mylist">My List</Link>
  </Typography>
);
export default Header;
