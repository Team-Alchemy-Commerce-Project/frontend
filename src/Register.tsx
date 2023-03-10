import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode1, setZipcode1] = useState(0);
    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [phone_number, setPhoneNumber] = useState(0);
    const [card_number, setCardNumber] = useState(0);
    const [expiration, setExpiration] = useState(0);
    const [security_code, setSecurityCode] = useState(0);
    const [zipcode2, setZipcode2] = useState(0);
    const navigate = useNavigate();
    
    async function newRegister() {
        try {

            const response = await axios.post('http://127.0.0.1:8080/register', {
                'username': username,
                'street_address': street_address,
                'city': city, 'state': state, 'zipcode1': zipcode1,
                'email': email, 'full_name': full_name, 'profile_picture': profile_picture,
                'password': password, 'confirm_password': confirm_password, 'phone_number': phone_number,
                'card_number': card_number, 'expiration': expiration,
                'security_code': security_code,
                'zipcode2': zipcode2, 
            });

            if (response.status === 200) {

                const message = response.data.message;
                alert(message);
                return navigate('/login')
            }
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
 
    return (
        <>
        <h1>Register</h1>
        <Container>
            <Wrapper>
                <Form onSubmit={(event: any) => {event.preventDefault()}} >
                    <InputWrapper>
                        <Label htmlFor='full_name' >Full Name</Label>
                        <Input value={full_name} type='text' id='full_name' name='full_name' required onChange={(e) => { setFullName(e.currentTarget.value) }} />
                        <Label htmlFor='email' >Email</Label>
                        <Input value={email} type='text' id='email' name='email' required onChange={(e) => { setEmail(e.currentTarget.value) }} />
                        <Label htmlFor='username' >Username</Label>
                        <Input value={username} type='text' id='username' name='username' required onChange={(e) => { setUsername(e.currentTarget.value) }} />
                        <Label htmlFor='password' >Password</Label>
                        <Input value={password} type='password' id='password' name='password' required onChange={(e) => { setPassword(e.currentTarget.value) }} />
                        <Label htmlFor='confirm_password' >Confirm Password</Label>
                        <Input value={confirm_password} type='password' id='confirm_password' name='confirm_password' required onChange={(e) => { setConfirmPassword(e.currentTarget.value) }} />    
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor='street_address' >Street Address</Label>
                        <Input value={street_address} type='text' id='street_address' required name='street_address' onChange={(e) => { setStreetAddress(e.currentTarget.value) }} />
                        <Label htmlFor='city' >City</Label>
                        <Input value={city} type='text' id='city' name='city' required onChange={(e) => { setCity(e.currentTarget.value) }} />
                        <Label htmlFor='state' >State</Label>
                        <Input value={state} type='text' id='state' name='state' required onChange={(e) => { setState(e.currentTarget.value) }} />
                        <Label htmlFor='zipcode1' >Zip Code</Label>
                        <Input value={zipcode1} type='number' id='zipcode1' name='zipcode1' required onChange={(e) => { setZipcode1(Number(e.currentTarget.value)) }} />
                        <Label htmlFor='profile_picture' >Profile Picture</Label>
                        <Input value={profile_picture} type='text' id='profile_picture' name='profile_picture' placeholder='Enter Optional Photo URL' onChange={(e) => { setProfilePicture(e.currentTarget.value) }} />                    
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor='card_number' >Credit Card Number</Label>
                        <Input value={card_number} type='number' id='card_number' name='card_number' onChange={(e) => { setCardNumber(Number(e.currentTarget.value)) }} />
                        <Label htmlFor='expiration' >Expiration</Label>
                        <Input value={expiration} type='number' id='expiration' name='expiration' onChange={(e) => { setExpiration(Number(e.currentTarget.value)) }} />
                        <Label htmlFor='security_code' >Security Code</Label>
                        <Input value={security_code} type='number' id='security_code' name='security_code' onChange={(e) => { setSecurityCode(Number(e.currentTarget.value)) }} />
                        <Label htmlFor='zip_code2' >Zip Code</Label>
                        <Input value={zipcode2} type='number' id='zip_code2' name='zip_code2' onChange={(e) => { setZipcode2(Number(e.currentTarget.value)) }} />
                        <Label htmlFor='phone_number' >Telephone</Label>
                        <Input value={phone_number} type='number' id='phone_number' name='phone_number' onChange={(e) => { setPhoneNumber(Number(e.currentTarget.value)) }} />
                    </InputWrapper>
                    <ButtonWrapper>
                        <button type='submit' onClick={newRegister} >Register</button>
                    </ButtonWrapper>
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Register;

const Container = styled.div`
height: 30vh;
width: 100vw;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
display: flex;
padding: 70px;
max-height: 400px;
border-radius: 20px;
align-items: center;
flex-direction: column;
margin-top: -140px;
    
`

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
padding: 6rem;
    
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  

`

const Label = styled.label`
display: flex;
color:rgb(71, 255, 215);
margin-left: 10px;
`

const Input = styled.input`
padding: 0.5rem;
margin: 0.5rem 0.25rem;
border-radius: 5px;
border: none;
`
    
const ButtonWrapper = styled.div`
margin-top: 20px;
margin-left: 10px;

`