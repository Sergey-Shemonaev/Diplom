// import Form from 'react-bootstrap/Form';
import styled from "styled-components";
import { Formik } from "formik";

const DivStyle = styled.div`
  width: 50%;

  @media (min-width: 320px) and (max-width: 425px) {
    /* padding: 2em; */
    opacity: 0.5;
    width: 100%;
    margin: 2em auto;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 2em;
    opacity: 0.5;
    width: 100%;
    margin: 2em auto;
  }
`;

const FormikStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  text-align: center;
  font-family: Pacifico, cursive;
`;

const LabelStule = styled.label`
  border-bottom: 1px solid black;
  margin: 1em 0;
  text-align: center;
`;

const InputStule = styled.input`
  width: 100%;
  border: none;
  padding: 5px 0;
  text-align: center;
`;

function Forma() {
  return (
    <DivStyle>
      <Formik
        initialValues={{ email: "", tel: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <FormikStyle onSubmit={handleSubmit}>
            <h5 >Есть вопросы? Нужна консультация?</h5>
            <LabelStule>
              <h5>Введите Имя</h5>
              <InputStule type="text" placeholder="Введите Имя" />
            </LabelStule>
            <LabelStule>
              <h5>Введите Email</h5>
              <InputStule type="email" placeholder="Введите Email" />
            </LabelStule>
            <LabelStule>
              <h5>Введите номер телефона</h5>
              <InputStule type="tel" placeholder="+7 xxx-xxx-xx" />
            </LabelStule>
          </FormikStyle>
        )}
      </Formik>
    </DivStyle>
  );
}

export default Forma;
