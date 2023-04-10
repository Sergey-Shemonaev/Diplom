// import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import {Formik} from "formik";


const DivStyle = styled.div`

  width: 50%;
  
  @media (min-width: 320px) and (max-width: 425px) {
    padding: 2em;
    opacity: .5;
    width: 100%;
    margin: 2em auto ;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 2em;
    opacity: .5;
    width: 100%;
    margin: 2em auto ;
  }
`;

const FormikStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

function Forma() {
    return (
        <DivStyle>
            <Formik
                initialValues={{email: '', tel: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = '';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
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
                        <input type="text"
                               name="name"
                               value={values.text}
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input type="tel"
                               name="tel"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.tel}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                        < input
                            type="text"
                            required="required"
                            pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                            minLength="6"
                            name="Введите телефон"
                            placeholder="+7 xxx-xxx-xxx"
                            autoComplete="off"/>
                    </FormikStyle>
                )}
            </Formik>

        </DivStyle>
    );
}

export default Forma;