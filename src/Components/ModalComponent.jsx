// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
// import React, { useState } from 'react';
import styled from "styled-components";

const FormikStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Modals(props) {
  const handleClose = () => props.hide();

  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        onClick={(e) => e.stopPropagation()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Заказать товар</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ email: "", password: "" }}
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
                alert(JSON.stringify(values, null, 2));
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
                <label>Введите имя</label>
                <input type="text" name="name" />
                <label>Введите E-mail</label>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <label>Введите номер телефона</label>
                <input type="tel" />
              </FormikStyle>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <button variant="primary" onClick={handleClose}>
            Оформить
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
