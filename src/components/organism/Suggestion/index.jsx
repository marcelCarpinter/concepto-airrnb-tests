import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//material components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

//React components
import { myTheme } from "components/template";
import ImgBackground from "components/atom/ImgBackground";
import Button from "components/atom/Button";

const PageSection = styled.div`
  margin: ${(props) => props.theme.pageSections.margins};
  width: ${(props) => props.theme.pageSections.width};
  height: ${(props) => props.theme.pageSections.height};
`;

const TextPosition = styled.div`
  margin: 2rem 70% 2em 3em;
  > * {
    color: white;
  }
`;

const ButtonSize = styled.div`
  width: 400px;
  height: 50px;
  margin-left: 1rem;
`;

function SearchSection({ theme, background }) {
  return (
    <PageSection theme={theme}>
      <ImgBackground background={background}>
        <TextPosition>
          <Typography sx={{ p: 2 }} variant="h5" gutterBottom component="div">
            Encuentra hoteles y alojamientos vacacionales en Estados Unidos
          </Typography>
          <Typography sx={{ p: 2 }} variant="h6" gutterBottom component="div">
            Desde hoteles con excelentes evaluaciones hasta espacios
            vacacionales y todo tipo de alojamientos.
          </Typography>
          <ButtonSize>
            <Button
              name="Explorar los alrededores"
              customcolor="secundary"
            ></Button>
          </ButtonSize>
        </TextPosition>
        <Card />
      </ImgBackground>
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
