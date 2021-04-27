import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as chakaraInputPropos
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputPropos extends chakaraInputPropos{
  name: string;
  label?: string;
  error?: FieldError;
}

export function Input({name, label, error, ...rest }: InputPropos){
  console.log(error)
  return(
      <FormControl isInvalid={!!error}>
          { !!label && <FormLabel  htmlFor={name}>{label}</FormLabel>}
          <ChakraInput
              name={name}
              id="email"
              focusBorderColor="purple.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                  bgColor: 'gray.900'
              }}
              size="lg"
              { ...rest }
          />
          { !! error && (
              <FormErrorMessage>
                 { error.message }
              </FormErrorMessage>
          )}
      </FormControl>
  )
}
