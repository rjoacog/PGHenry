import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

export default function UserForm() {
    return (
        <div>
            <FormControl textAlign={"center"} mb="200">
                <FormLabel textAlign={"center"} mt="4">Name</FormLabel>
                <Input id='name' type='text' width={"auto"} border="1px" borderColor={"black"} />
                <FormLabel textAlign={"center"} mt="4">Lastname</FormLabel>
                <Input id='lastname' type='text' width={"auto"} border="1px" borderColor={"black"} />
                <FormLabel textAlign={"center"} mt="4">Username</FormLabel>
                <Input id='username' type='text' width={"auto"} border="1px" borderColor={"black"} />
                <FormLabel htmlFor='email' textAlign={"center"} mt="4">Email address</FormLabel>
                <Input id='email' type='email' width={"auto"} border="1px" borderColor={"black"} />
                <FormHelperText >We'll never share your email.</FormHelperText>
                <FormLabel htmlFor="password" textAlign={"center"} mt="4">Password</FormLabel>
                <Input id='password' type='password' width={"auto"} border="1px" borderColor={"black"} />
                <FormLabel htmlFor="password" textAlign={"center"}mt="4">Confirm Password</FormLabel>
                <Input id='confirmpassword' type='password' width={"auto"} border="1px" borderColor={"black"} />
                <FormLabel  textAlign={"center"} mt="4">BirthDay</FormLabel>
                <Input id='birthday' type='date' width={"auto"} border="1px" borderColor={"black"} />
            </FormControl>
        </div>
    )
}
