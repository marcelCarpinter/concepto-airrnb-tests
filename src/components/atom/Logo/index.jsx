import React from "react";

//React Components
import { logoBase as LogoBase, logoProps, logoDefaults } from "./logoBase";

//resources
import LogoSvg from "assets/svgs/logo.svg";

function Logo({ theme }) {
  return (
    <LogoBase theme={theme} as="a" href="/">
      <img src={LogoSvg} alt="Logo de AitRNB" />
    </LogoBase>
  );
}

Logo.propTypes = logoProps;

Logo.defaultProps = logoDefaults;

export default Logo;
