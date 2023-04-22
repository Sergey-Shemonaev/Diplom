import ComponentCarusel from "../Components/ComponentCarusel";
import TextOfLogo from "./textOfLogo";
import Work from "./Work";
import Reviews from "./Reviews";
import styled from "styled-components";

const MainStyle = styled.main`
 margin: 0 1em;
`;

function ContentBody() {
  return (
    <MainStyle>
      <TextOfLogo />
      <ComponentCarusel />
      <Work />
      <Reviews />
    </MainStyle >
  );
}

export default ContentBody;
