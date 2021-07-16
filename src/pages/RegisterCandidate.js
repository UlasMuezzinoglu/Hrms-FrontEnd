import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField } from 'semantic-ui-react';
export default function RegisterCandidate() {


    const initialValues = {firstName: "",email: "",lastName: "",identityNumber: "",password: "",passwordAgain: ""}

    const schema = Yup.object({
        email: Yup.string().email("Lütfen E-Posta Adresinizi Girin"),
        firstName: Yup.string().required("Lütfen Adınızı Girin"),
        lastName: Yup.string().required("Lütfen Soyadınızı Girin"),
        identityNumber: Yup.number().required("TC Alanı Zorunludur."),
        password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
        passwordAgain: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),

    })

    return (
        <div>
            <Formik
                validationSchema={schema}
                initialValues = {initialValues}
                onSubmit = {(values) =>{
                    console.log(values)
                }}
            >

                <Form className="ui form">
                    <FormField>
                        <Field name="firstName" placeholder="Adınız">
                        </Field>
                    </FormField>
                    <FormField>
                        <Field name="lastName" placeholder="Soyadınız">
                        </Field>
                    </FormField>
                    <FormField>
                        <Field name="email" placeholder="Mailiniz">
                        </Field>
                    </FormField>
                    <FormField>
                        <Field name="identityNumber" placeholder="TC Kimlik Numaranız">
                        </Field>
                    </FormField>
                    <FormField>
                        <Field name="password" placeholder="Şifreniz" type="password">
                        </Field>
                    </FormField>
                    <FormField>
                        <Field name="passwordAgain" placeholder="Tekrar Şifreniz" type="password">
                        </Field>
                    </FormField>
                    <Button color="green" type="submit">Kayıt Ol</Button>
                    
                </Form>

            </Formik>
        </div>
    )
}
