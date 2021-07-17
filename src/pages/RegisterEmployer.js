import { Formik, Form  } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, Header } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/CustomFormControls/KodlamaIoTextInput';


export default function RegisterEmployer() {

    const initialValues = { companyName: "", email: "", phoneNumber: "", sector: "", password: "", passwordAgain: "" ,webAddress: ""}

    const schema = Yup.object({
        email: Yup.string().email("E-postanız Yanlış Formatta").required("Lütfen E-Posta Adresinizi Girin"),
        companyName: Yup.string().required("Şirket Adı Alanı Zorunludur"),
        phoneNumber: Yup.number().required("Telefon Numarası Alanı Zorunludur").test('len', 'Telefon Numaranız 11 haneden az/fazla olamaz.', val => val && val.toString().length === 10),
        password: Yup.string().required('Şifre Alanı Zorunludur.').min(8, 'Şifreniz Çok Kısa. En az 8 haneden oluşmalıdır.'),
        passwordAgain: Yup.string().required("Şifre Tekrarı Zorunludur").oneOf([Yup.ref('password'), null], 'Şifreler Eşleşmiyor.'),
        sector: Yup.string().required("Sektör Alanı Zorunludur"),
        webAddress: Yup.string().required("Web Adresi Alanı Zorunludur"),



    })


    return (
        <div>
            <Header as="h2">İşveren Kayıt Ekranı</Header>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                <Form className="ui form">
                    <KodlamaIoTextInput name="companyName" placeholder="Şirket Adınız"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="email" placeholder="Mailiniz"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="phoneNumber" placeholder="Telefon Numaranız"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="sector" placeholder="İş Sektörünüz"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="webAddress" placeholder="Websiteniz"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="password" placeholder="Şifreniz" type="password"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="passwordAgain" placeholder="Tekrar Şifreniz" type="password"></KodlamaIoTextInput>
                    <Button color="green" type="submit">İşveren Olarak Kayıt Ol</Button>
                </Form>

            </Formik>
        </div>
    )
}
