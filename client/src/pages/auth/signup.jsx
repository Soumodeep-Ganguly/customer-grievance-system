import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../app/auth'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Toast from '../../components/toast'
import './signup.scss'
import Container from '../../components/layout/Container'
import {
    Card,
    Spacer,
    Button,
    Input,
    Checkbox,
} from '@nextui-org/react';
import Text from '../../components/misc/Text'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const authContext = useContext(AuthContext)

    useEffect(() => {
        if (authContext.user) window.location = "/"
    }, [authContext.user])

    const signUpUser = async () => {
        if (name.trim() === "") return Toast.fire({ icon: 'error', title: "Name required" })
        if (email.trim() === "") return Toast.fire({ icon: 'error', title: "Email required" })
        if (password === "") return Toast.fire({ icon: 'error', title: "Password required" })

        setLoading(true)
        try {
            let res = await axios.post('/api/auth', { name, email, password })
            authContext.signin(res)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            Toast.fire({ icon: 'error', title: error?.response?.data?.error || "Unable to Sign-Up" })
        }
    }

    return (
        <Container>
            <Text size={22} align="center">Create New Account</Text>
            <Spacer y={10} />
            <Input
                clearable
                bordered
                onChange={(e) => setName(e.target.value)}
                fullWidth
                size="lg"
                placeholder="Full Name"
            />
            <Spacer y={1} />
            <Input
                clearable
                bordered
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                size="lg"
                placeholder="Email"
            />
            <Spacer y={1} />
            <Input
                clearable
                bordered
                type="password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                placeholder="Password"
            />
            <Spacer y={4} />

            <Button color='primary' onClick={() => signUpUser()} isLoading={loading} className='mr-1' fullWidth>Create Account</Button>

            <Spacer y={8} />

            <Link to={`/signin`}><Text align={"center"}>Back to Login</Text></Link>

        </Container>
    )
}