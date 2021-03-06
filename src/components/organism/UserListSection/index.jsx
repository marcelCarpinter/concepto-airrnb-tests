import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//material components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

//React components
import { myTheme } from "components/template";
import UserListSection from "components/organism/UserListSection";
import PreviewMessage from "components/atom/PreviewMessage";

const PageSection = styled.div`
  margin: ${(props) => props.theme.pageSections.margins};
`;

const FormPosition = styled.div`
  margin: 0rem 70% 0em 0em;
`;

const ButtonPosition = styled.div`
  width: 100%;
`;
const BackgroundPosition = styled.div`
  margin: 2rem 3em 2em 70%;
`;

function SearchSection({ theme }) {
  return (
    <PageSection theme={theme}>
      <FormPosition>
        <UserListSection>
          <PreviewMessage />
          <PreviewMessage />
          <PreviewMessage />
          <PreviewMessage />
        </UserListSection>
      </FormPosition>
    </PageSection>
  );
}

SearchSection.propTypes = {
  theme: PropTypes.object,
};

SearchSection.defaultProps = {
  theme: {
    pageSections: myTheme.pageSections,
  },
};

export default SearchSection;
