import { Formik, Form  } from 'formik'
import React, { Component } from 'react'
import { Accordion, Button, Icon } from 'semantic-ui-react'
import * as Yup from "yup";
import KodlamaIoTextInput from '../utilities/CustomFormControls/KodlamaIoTextInput';


const PrivateInfosInitialValues = { firstName: "", email: "", lastName: "" }
const ChangePasswordInitialValues = { password: "", passwordAgain: ""}

    const schema = Yup.object({
        email: Yup.string().email("E-postanız Yanlış Formatta").required("Lütfen E-Posta Adresinizi Girin"),
        firstName: Yup.string().required("Lütfen Adınızı Girin"),
        lastName: Yup.string().required("Lütfen Soyadınızı Girin"),
        password: Yup.string().required('Şifre Alanı Zorunludur.').min(8, 'Şifreniz Çok Kısa. En az 8 haneden oluşmalıdır.'),
        passwordAgain: Yup.string().required("Şifre Tekrarı Zorunludur").oneOf([Yup.ref('password'), null], 'Şifreler Eşleşmiyor.'),

    })

export default class AccordionExampleStyled extends Component {

    






  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion className="aker" styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Kişisel Bilgiler
          
        </Accordion.Title>
        
        <Accordion.Content active={activeIndex === 0}>
        <Formik
                validationSchema={schema}
                initialValues={PrivateInfosInitialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                <Form className="ui form">
                    <KodlamaIoTextInput name="firstName" placeholder="Adınız"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="lastName" placeholder="Soy Adınız"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="email" placeholder="Mailiniz"></KodlamaIoTextInput>
                    <p>Ad, soyad ve e-posta bilgilerinde değişiklik yaptığında, tüm özgeçmişlerin güncellenecektir.</p>
                    <Button color="green" type="submit">Bilgileri Güncelle</Button>
                </Form>

            </Formik>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Şifreyi Değiştir
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        <Formik
                validationSchema={schema}
                initialValues={ChangePasswordInitialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                <Form className="ui form">
                    <KodlamaIoTextInput name="oldPassword" placeholder="Eski Şifrenizi Girin" type="password"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="password" placeholder="Yeni Şifrenizi Girin" type="password"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="passwordAgain" placeholder="Yeni Şifrenizi Tekrar Girin" type="password"></KodlamaIoTextInput>
                    <Button color="green" type="submit">Şifreyi Değiştir</Button>
                </Form>

            </Formik>
        </Accordion.Content>

        
      </Accordion>
    )
  }
}