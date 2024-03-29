import styled from "styled-components";
import { reviewsArr } from "../Components/imgList";

const H2Style = styled.h2`
  text-align: center;
  font-family: "Pacifico", cursive;
  margin: 1em auto;
`;

const ReviewsStyle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 2em;

  @media (max-width: 991px){
    display: flex;
    flex-direction: column;

  };
`;
const TestStyle = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1.5em;
  padding: 0.5em;
  width: calc(50% - 10px);
  
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  };

  
`;

const ImgBorderStyle = styled.div`
  padding: 1em;
  border-radius: 50%;
  box-shadow: 0 0 7px 5px #c7c7c7;
`;

const TextStyle = styled.p`
  font-family: "Pacifico", cursive;
  font-size: 1.1em;
`;

function Reviews() {
  return (
    <>
      <H2Style id="reviews">Отзывы моих покупателей</H2Style>
      <ReviewsStyle>
        {reviewsArr.map((x) => (
          <TestStyle key={x.id}>
            <ImgBorderStyle>
              <img src={x.image} alt="" />
            </ImgBorderStyle>
            <TextStyle>{x.text}</TextStyle>
          </TestStyle>
        ))}
      </ReviewsStyle>
    </>
  );
}

export default Reviews;
