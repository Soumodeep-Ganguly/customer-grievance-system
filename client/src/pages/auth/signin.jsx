import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../app/auth'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Toast from '../../components/toast'
import './signin.scss'
import {
    Card,
    Spacer,
    Button,
    Input,
    Checkbox,
} from '@nextui-org/react';
import Container from '../../components/layout/Container'
import Text from '../../components/misc/Text'


export default function SignIn() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const authContext = useContext(AuthContext)

    useEffect(() => {
        if (authContext.user) window.location = "/"
    }, [authContext.user])

    const signInUser = async () => {
        if (email.trim() === "") return Toast.fire({ icon: 'error', title: "Email required" })
        if (password === "") return Toast.fire({ icon: 'error', title: "Password required" })

        setLoading(true)
        try {
            let res = await axios.post('/api/auth/signin', { email, password })
            authContext.signin(res)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            Toast.fire({ icon: 'error', title: error?.response?.data?.error || "Unable to Sign-In" })
        }
    }

    return (
        <Container>
            <Text size={22} align="center">Welcome Back!</Text>
            <Spacer y={10} />
            <Input
                clearable
                bordered
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
            <Checkbox>
                <Text>Remember me</Text>
            </Checkbox>

            <Spacer y={4} />

            <div className='flex'>
                <Button color='primary' onClick={() => signInUser()} isLoading={loading} className='mr-1' fullWidth>Sign in</Button>
                <Link className='w-full' to={"/signup"}><Button color='primary' className='ml-1' variant='bordered' fullWidth>Sign Up</Button></Link>
            </div>

            <Spacer y={8} />


            <Link to={`/forgot-password`}><Text align={"center"}>Forgot password?</Text></Link>
        </Container>
    )
}
