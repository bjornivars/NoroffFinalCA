import React, { useState } from 'react';


export default function Contact() {
    const [[name], setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState(NaN);
    const [message, setMessage] = useState('');

    const [firstnameError, setFirstnameError] = useState(true);
    const [lastnameError, setLastnameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [telephoneError, setTelephoneError] = useState(true);
    const [messageError, setMessageError] = useState(true);

    const [correctlySent, setcorrectlySent] = useState(undefined);


    let handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let telephonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,4}$/;

        switch (name) {
            case 'firstname':
                (value !== '') ? setFirstnameError(false) : setFirstnameError(true);
                setFirstname(value);
                break;
            case 'lastname':
                (value !== '') ? setLastnameError(false) : setLastnameError(true);
                setLastname(value);
                break;
            case 'email':
                (emailPattern.test(value)) ? setEmailError(false) : setEmailError(true);
                setEmail(value);
                break;
            case 'telephone':
                (telephonePattern.test(value)) ? setTelephoneError(false) : setTelephoneError(true);
                setTelephone(value)
                break;
            case 'message':
                (value !== '') ? setMessageError(false) : setMessageError(true);
                setMessage(value)
                break;
            default:
                break;
        }
        setName(value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        if (!firstnameError || !lastnameError || !emailError || !messageError) {
            sessionStorage.setItem('firstname', firstname)
            sessionStorage.setItem('lastname', lastname)
            sessionStorage.setItem('email', email)
            sessionStorage.setItem('telephone', telephone)
            sessionStorage.setItem('message', message)
            setcorrectlySent('Well done! Your message has been sent (but only to Session Storage)')
        } else {
            setcorrectlySent('Something went wront.. Try again later')
        }   
    }

    return (
        <div className='row mt-5'>
            <div className='col-md-5 m-auto '>
                <h1 className='heading'>Please contact us</h1>
                <form className='mt-5' onSubmit={handleSubmit}>
                    <h2 className='mb-4'>Contact form</h2>
                    <p>Firstname</p>
                    <input type='text'
                        name='firstname'
                        className='form-control'
                        onChange={handleChange}
                    />
                    <p className={(firstnameError) ? 'errorMessage' : 'd-none'}>Please enter firstname</p>
                    <br />
                    <p>Lastname</p>
                    <input type='text'
                        name='lastname'
                        className='form-control'
                        onChange={handleChange}
                    />
                    <p className={(lastnameError) ? 'errorMessage' : 'd-none'}>Please enter lastname</p>

                    <br />
                    <p>Email</p>
                    <input type='text'
                        name='email'
                        className='form-control'
                        onChange={handleChange}
                    />
                    <p className={(emailError) ? 'errorMessage' : 'd-none'}>Please enter a valid email</p>

                    <br />
                    <p>Telephone</p>
                    <input type='number'
                        name='telephone'
                        className='form-control'
                        onChange={handleChange}
                    />
                    <p className={(telephoneError) ? 'errorMessage' : 'd-none'}>Please enter a valid email</p>

                    <br />
                    <p>Message</p>
                    <input type='text'
                        name='message'
                        className='form-control'
                        onChange={handleChange}
                    />
                    <p className={(messageError) ? 'errorMessage' : 'd-none'}>Please enter a message</p>
                    <br />
                    <p>{correctlySent}</p>
                    <input type='submit' disabled={firstnameError || lastnameError || emailError || messageError || telephoneError || correctlySent} className='btn btn-primary' />
                </form>
            </div>
        </div>
    )
}