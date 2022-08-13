import { Box, Button, Flex, Heading, Spacer, Wrap, WrapItem } from '@chakra-ui/react';


const ExercisesMain = () => {
    //HTML
    return (
        <>
            <Heading as='h1' size='2xl' p={2}>
                JS Exercises
            </Heading>
            <Heading as='h2' size='lg' p={2}>
                <i>*exercise name*</i>
            </Heading>

            <Box borderBottom='2px' borderColor='gray.200' h={580}>
                <Flex>
                    <Spacer/>
                    <Box w='48%' h='580' />
                    <Spacer borderRight='2px' borderColor='gray.200'/>
                    <Spacer/>
                    <Box w='48%' h='580'/>
                    <Spacer/>
                </Flex>
            </Box>
            
            <Box p={5} overflowY={"scroll"} h="250">
                <Wrap>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='telegram' w={250} h={90} fontSize='xl'>
                            Exercise name
                        </Button>
                    </WrapItem>
                </Wrap>
            </Box>


        </>
    );
}

export default ExercisesMain;