import styled from "styled-components";
import PropTypes from "prop-types";
import { myTheme } from "components/template";

export const logoBase = styled.div`
  width: 100%;
  img {
    width: ${(props) => props.theme.size.logo};
  }
  &:visited {
    color: black;
  }
`;

export const logoProps = {
  theme: PropTypes.object,
};

export const logoDefaults = {
  theme: {
    size: myTheme.size,
  },
};
