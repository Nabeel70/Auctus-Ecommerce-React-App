import React, { useState } from 'react';
import './styles.css';
import telegramIcon from '../../../Assets/Images/TelegramIcon.png'
import emailIcon from '../../../Assets/Images/EmailIcon.png'
// import EmailShare from 'react-email-share-link'

const ContactsSection = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telegram, setTelegram] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

  return (
    <div className='ContactsSection' id = 'contactSection'>
        <h1 className='ContactsHeading'>CONTACT</h1>
        <div className='ContactsMainSection'>
            <div className='contactsMainSectionHeader'>
                TICKET FORM
            </div>
            <div className='contactsFormSection'>
                <div className='firstRow'>
                    <div className='leftSection'>
                        <div className='label'>
                            *Name:
                        </div>
                        <input 
                            className='input normalInput'
                            value={name}
                            onChange = {(e) => setName(e.target.value)}
                            type = 'text'
                        />
                    </div>
                    <div className='rightSection'>
                    <div className='label'>
                        *Email:
                        </div>
                        <input 
                            className='input normalInput'
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                            type = 'email'
                        />
                    </div>
                </div>
                <div className='secondRow'>
                    <div className='leftSection'>
                        <div className='label'>
                            Telegram Username:
                        </div>
                        <input 
                            className='input normalInput'
                            value={telegram}
                            onChange = {(e) => setTelegram(e.target.value)}
                            type = 'text'
                        />
                    </div>
                </div>
                <div className='thirdRow'>
                    <div className='subjectSection'>
                        <div className='label'>
                            Subject (If order, include order #):
                        </div>
                        <input 
                            className='input fullInput'
                            value={subject}
                            onChange = {(e) => setSubject(e.target.value)}
                            type = 'text'
                        />
                    </div>
                </div>
                <div className='messageBox'>
                    <div className='messageSection'>
                        <div className='label'>
                            Message:
                        </div>
                        <textarea 
                            className='input messageInput'
                            value={message}
                            onChange = {(e) => setMessage(e.target.value)}
                            type = 'text'
                        />
                    </div>
                </div>
            </div>
            <div className='submitButtonContainer'>
                {/* <EmailShare email="support@auctuspharmagroup.com" subject={subject} body= {`Name: ${name} \nE-mail: ${email} \nTelegram Id: ${telegram} \n \n${message}`} >
                    {link => (
                        <a href={link} data-rel="external"> 
                </a>
                    )}
                </EmailShare> */}
               {/* <a href='mailto:aalokbarma17@gmail.com?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/'> */}
                    <div className='submitButton'>
                        SUBMIT 
                    </div>
               {/* </a> */}
            </div>
        </div>
        <div className='contactsFooter'>
            <div className='telegramSection'>
                <div className='telegramIconContainer'>
                    <img src={telegramIcon} alt = 'Telegram Logo' className='telegramLogo'/>
                </div>
                <a href='https://t.me/AuctusPharma ' target='_blank' className='telegramLink' rel="noreferrer">@AUCTUSPHARMA </a>
            </div>
            <div className='mailLink'>
                <div className='mailIconContainer'>
                    <img src={emailIcon} alt = 'Email Logo' className='emailicon' />
                </div>
                <a href='mailto:aalokbarma17@gmail.com?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/' className='emailLink'>SUPPORT@AUCTUSPHARMSGROUP.COM</a>
            </div>
        </div>
    </div>
  )
}

export default ContactsSection;