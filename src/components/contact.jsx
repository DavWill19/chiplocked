import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Fade } from 'react-reveal';
import React from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const [disable, setDisable] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_6fzhwvh', 'template_ubxhzqh', e.target, 'q0WXogHCNn9ursp-s'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          alert('Message Sent!')
        },
        (error) => {
          console.log(error.text)
          alert('Something went wrong, please try again')
        }
      )
      setDisable(true)
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <Fade left>
                  <h2>Event organizers & Retailers</h2>
                  <p>
                    We offer discounts for bulk orders. Send us a message.
                  </p>
                </Fade>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <Fade left>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                          required
                          onChange={handleChange}
                          value={name}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                          onChange={handleChange}
                          value={email}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                      required
                      onChange={handleChange}
                      value={message}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                </Fade>
                <Fade left>
                  <button disable={disable}  type='submit' className='btn btn-custom btn-lg'>
                    Send Message
                  </button>
                </Fade>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <Fade right>
              <div className='contact-item'>
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className='fa fa-user'></i> Founder
                  </span>{' '}
                  Jase Weyandt
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Location
                  </span>
                  Hollidaysburg, PA
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{' '}
                  info@chiplocked.com
                </p>
              </div>
            </Fade>
          </div>
          <div className='col-md-12'>
            <Fade bottom>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <li>
                      <a href='https://www.instagram.com/ChipLocked/'>
                        <i className='fa fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.amazon.com/'>
                        <i className="fa fa-amazon" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@chiplocked.com?Subject=Chiplocked.com Query">
                        <i className='fa fa-envelope-o'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Chip-Locked LLC
          </p>
        </div>
      </div>
    </div>
  )
}
