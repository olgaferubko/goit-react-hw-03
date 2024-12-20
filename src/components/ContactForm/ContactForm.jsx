import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
    const initialValues = { name: "", number: "" };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format").required("Required"),
    });
    
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
    };
    
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.formContainer}>
        <div className={s.inputField}>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>

        <div className={s.inputField}> 
          <label>Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
              
        <button className={s.submitButton} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
