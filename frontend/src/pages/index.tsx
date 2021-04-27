import { Flex, Button, Stack, useToast, Heading, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { Icon } from '@chakra-ui/icons'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineUser} from 'react-icons/ai'
import { Input } from '../components/form/input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from "../services"

type SignInFormData = {
    email: string;
    passord: string;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail é obrigatório').email('Email não é válido'),
    name: yup.string().required('Nome é obrigatório')
})

export default function Home() {

    const toast = useToast()

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    })

    const {errors} = formState

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {

      try{
        const user = await api.post('users', values)

        toast({
          title: "E-mail criado com sucesso.",
          description: "Verifique sua caixa de email.",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,

        })

      }catch(err){
        console.log(err.response)

      }
    }

    return (
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
            <Flex
                as="form"
                width="100%"
                maxWidth="468"
                bg="black.100"
                p="8"
                m="4"
                borderRadius="8"
                flexDirection="column"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">
                <Heading mb="8" m="auto" >Cadastre-se</Heading>

                  <InputGroup>
                    <InputLeftElement h="56px"
                      pointerEvents="none"
                      children={<Icon h="100%"  fontSize="18" as={AiOutlineUser} />}
                    />
                    <Input
                        name="name"
                        type="text"
                        fontSize="18"
                        pl="10"
                        height="56px"
                        placeholder="Name"
                        error={errors.name}
                        {...register('name')}
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement h="56px"
                      pointerEvents="none"
                      children={<Icon
                        _hover={{
                          color: 'red'
                        }}
                          fontSize="18"
                          as={HiOutlineMail}
                        />
                      }
                    />
                    <Input
                        name="email"
                        type="email"
                        fontSize="18"
                        pl="10"
                        height="56px"
                        placeholder="Email"
                        error={errors.email}
                        {...register('email')}
                    />
                  </InputGroup>
                </Stack>
                <Button
                    type="submit"
                    colorScheme="purple"
                    h="56px"
                    fontSize="16"
                    mt="8"
                    isLoading={formState.isSubmitting}
                >
                Cadastrar
                </Button>
            </Flex>
        </Flex>

    )
}

