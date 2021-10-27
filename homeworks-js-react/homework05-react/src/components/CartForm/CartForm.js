import React from 'react';
import './CartForm.scss';
import {Formik, Form, useField} from 'formik';
import NumberFormat from "react-number-format";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart } from '../../store/cart/actions'

const CartFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'To short').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'To short').max(50, 'Too Long!').required('Required'),
  age: Yup.number().positive("Age can't be negative").integer("Age should'n be non-integer").min(16, "Age shouldn't be less than 16").required('Required'),
  deliveryAdress: Yup.string().min(6, 'Must be at least 6 characters').max(100, 'Too Long!').required('Required'),
  phoneNumber: Yup.string().matches(/^[(|)|\-|0-9]+$/, "Invalid phone number").required('Required')
})

const CartForm = () => {

  const dispatch = useDispatch();
  const cart = useSelector(({cart}) => cart);

  const handleFormSubmit = (values, {setSubmitting}) => {
    const {firstName, lastName, age, deliveryAdress, phoneNumber} = values;
    const order = JSON.stringify(cart)
    
    setTimeout(() => {
      console.log(`
        First Name: ${firstName}\n
        Last Name: ${lastName}\n
        Age: ${age}\n
        Delivery Adress: ${deliveryAdress}\n
        Phone Number: ${phoneNumber}\n
        Odered Product: ${order}`)
      dispatch(cleanCart())
      setSubmitting(false)
    }, 1500);
}

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
    <div className="form-item">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />      
    </div>
    {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyPhoneInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
    <div className="form-item">
      <label htmlFor={props.id || props.name}>{label}</label>
      <NumberFormat className="text-input" {...field} {...props} />      
    </div>
    {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age: '',
        deliveryAdress: '',
        phoneNumber: ''
      }}
      validationSchema={CartFormSchema}
      onSubmit={handleFormSubmit}
    >
      {({isSubmitting, isValid, dirty}) => (
        <Form className="form-cart">
          <MyTextInput
            label="First Name:"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name:"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Age:"
            name="age"
            type="number"
            placeholder="16"
          />

          <MyTextInput
            label="Delivery Adress:"
            name="deliveryAdress"
            type="text"
            placeholder="Kyiv, some str, 18"
          />
          <MyPhoneInput 
            label="Phone Number:"
            name="phoneNumber"
            type="tel"
            format="(###)###-##-##"
            allowEmptyFormatting={true}
            mask="#"
          />
          <button className="submit-btn" disabled={isSubmitting || !(isValid && dirty)} type="submit">Checkout</button>
        </Form>
      )}
    </Formik>
  )
}

export default CartForm;