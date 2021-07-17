import { Formik, Form  } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, Header } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/CustomFormControls/KodlamaIoTextInput';

export default function RegisterCandidate() {

    const initialValues = { firstName: "", email: "", lastName: "", identityNumber: "", password: "", passwordAgain: "" }

    const schema = Yup.object({
        email: Yup.string().email("E-postanız Yanlış Formatta").required("Lütfen E-Posta Adresinizi Girin"),
        firstName: Yup.string().required("Lütfen Adınızı Girin"),
        lastName: Yup.string().required("Lütfen Soyadınızı Girin"),
        identityNumber: Yup.number().required("TC Alanı Zorunludur.").test('len', 'TC Numaranız 11 haneden az/fazla olamaz.', val => val && val.toString().length === 11),
        password: Yup.string().required('Şifre Alanı Zorunludur.').min(8, 'Şifreniz Çok Kısa. En az 8 haneden oluşmalıdır.'),
        passwordAgain: Yup.string().required("Şifre Tekrarı Zorunludur").oneOf([Yup.ref('password'), null], 'Şifreler Eşleşmiyor.'),

    })

    return (
        <div>
            <Header as="h2">İş Arayan Kayıt Ekranı</Header>

            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                <Form className="ui form">
                    <KodlamaIoTextInput name="firstName" placeholder="Adınız"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="lastName" placeholder="Soy Adınız"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="email" placeholder="Mailiniz"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="identityNumber" placeholder="TC Kimlik Numaranız"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="password" placeholder="Şifreniz" type="password"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="passwordAgain" placeholder="Tekrar Şifreniz" type="password"></KodlamaIoTextInput>
                    <Button color="green" type="submit">İş Arayan Olarak Kayıt Ol</Button>
                </Form>

            </Formik>



        </div>
    )
}
