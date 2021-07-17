import { Formik, Form  } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, Header } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/CustomFormControls/KodlamaIoTextInput';

export default function Login() {

    const initialValues = { email: "", password: ""}

    const schema = Yup.object({
        email: Yup.string().email("E-postanız Yanlış Formatta").required("Lütfen E-Posta Adresinizi Girin"),
        password: Yup.string().required('Şifre Alanı Zorunludur.').min(8, 'Şifreniz Çok Kısa. En az 8 haneden oluşmalıdır.'),
    })


    return (
        <div>
            <Header as="h2">Giriş Ekranı</Header>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                <Form className="ui form">
                    <KodlamaIoTextInput name="email" placeholder="Mailiniz"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="password" placeholder="Şifreniz" type="password"></KodlamaIoTextInput>
                    <Button color="green" type="submit">Giriş Yap</Button>
                </Form>

            </Formik>
        </div>
    )
}
