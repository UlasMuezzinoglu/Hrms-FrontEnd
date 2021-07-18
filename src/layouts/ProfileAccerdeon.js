import { Formik, Form  } from 'formik'
import React, { Component } from 'react'
import { Accordion, Button, Icon } from 'semantic-ui-react'
import * as Yup from "yup";
import KodlamaIoTextInput from '../utilities/CustomFormControls/KodlamaIoTextInput';


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
          Takip Ettiğin Firmalar
          
        </Accordion.Title>
        
        <Accordion.Content active={activeIndex === 0}>
        test
        </Accordion.Content>

        
      </Accordion>
    )
  }
}