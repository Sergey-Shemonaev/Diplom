import styled from "styled-components";
import { Formik } from "formik";

const DivStyle = styled.div`
  width: 50%;
  text-align: center;
  font-family: Pacifico, cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media (min-width: 426px) and (max-width: 768px) {
    opacity: 0.5;
    width: 100%;
    margin: 2em auto;
  }

  @media (min-width: 320px) and (max-width: 425px) {
    opacity: 0.5;
    width: 100%;
    margin: 2em auto;
  }
`;

const H5Style = styled.h5`
  padding: 10px;
`;

const FormikStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const LabelStule = styled.label`
  border-bottom: 1px solid #00000060;
  margin: 1em 0;
  text-align: center;
`;

const InputStule = styled.input`
  width: 100%;
  border: none;
  padding: 5px 0;
  text-align: center;
`;

const ButtonStyle = styled.button`
  border: 1px solid #bbbbbb;
  padding: 10px;
`;

function Forma() {
  return (
    <DivStyle>
      <H5Style>Есть вопросы? Нужна консультация?</H5Style>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          tel: "",
        }}
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
            <LabelStule htmlFor="firstName">
              <h5>Введите Имя</h5>
              <InputStule
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              // placeholder="Введите Имя"
              />
            </LabelStule>
            <LabelStule htmlFor="email">
              <h5>Введите Email</h5>
              <InputStule
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              // placeholder="Введите Email"
              />
              {errors.email && touched.email && errors.email}
            </LabelStule>
            <LabelStule>
              <h5>Введите номер телефона</h5>
              <InputStule
                type="tel"
                name="tel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tel}
              //  placeholder="+7 xxx-xxx-xx"
              />
            </LabelStule>
            <ButtonStyle type="submit" disabled={isSubmitting}>
              Оставить заявку
            </ButtonStyle>
          </FormikStyle>
        )}
      </Formik>
    </DivStyle>
  );
}

export default Forma;
