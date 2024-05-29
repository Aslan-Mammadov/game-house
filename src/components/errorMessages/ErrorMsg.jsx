import {
    Alert,
    AlertIcon,
    AlertTitle,
   
  } from '@chakra-ui/react'

const ErrorMsg = ({error}) => {
  return (
    <>
      <Alert status='error'>
  <AlertIcon />
  <AlertTitle>{error}</AlertTitle>
</Alert>
    </>
  )
}

export default ErrorMsg
