import styled from "styled-components";
import { reviewsArr } from "../Components/imgList"


const H2Style = styled.h2`
  text-align: center;
  font-family: 'Pacifico', cursive;
  margin: 1em auto;

`;

const ReviewsStyle = styled.div`
   display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(80% - 10px);
  /* height: 100% */
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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
    //width: calc(80% - 10px);
  }
`;

const ImgBorderStyle = styled.div`
  //margin-top: 2em;
  padding: 1em;
  border-radius: 50%;
  //border: rgba(0, 0, 0, 0.2) 1px solid;
  box-shadow: 0 0 7px 5px #c7c7c7;
`;

const TextStyle = styled.p`
  font-family: 'Pacifico', cursive;
  font-size: 2em;
  /* width: 30%; */
  //@media (max-width: 991px) {
  //  width: calc(70% - 10px);
  //}
`;


function Reviews() {
  return (
    <>
      <H2Style id="reviews">Отзывы моих покупателей</H2Style>
      <ReviewsStyle>
        {reviewsArr.map((x) => (
          <TestStyle key={x.id}>
            <ImgBorderStyle>
              <img src={x.image} />
            </ImgBorderStyle>
            <TextStyle>{x.text}</TextStyle>
          </TestStyle>
        )
        )}
      </ReviewsStyle>
    </>
  );
}

export default Reviews;