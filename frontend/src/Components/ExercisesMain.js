import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Code, Flex, Heading, Input, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react';


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

                    <Box w='48%' h='580'>
                        <Flex py={2}>
                            <Box w='70px' h='10'><Text>Input</Text></Box> 
                            <Spacer />
                            <Box w='700px' h='10'><Input/></Box> 
                            <Spacer />
                            <Box w='70px' h='10'><Button>OK</Button></Box> 
                        </Flex>
                        <hr/>
                        <Flex py={2}>
                            <Box w='70px' h='10'><Text>Output</Text></Box> 
                            <Spacer />
                            <Box w='810px' h='10'><Input/></Box> 
                        </Flex>
                        <Accordion allowToggle>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                    Show Answer
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                 <pre> 
                                    dvsadsvasdvasdvasdvasdvasdvadsv
                                    

                                 </pre>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>


                    <Spacer borderRight='2px' borderColor='gray.200'/>
                    <Spacer/>

                    <Box w='48%' h='580'>
                        <div>
                            <p>Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.</p>
                            <p>This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.</p>
                            <p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.</p>
                            <b>What is considered Valid?</b>
                            <p>A string of braces is considered valid if all braces are matched with the correct brace.</p>
                            <b>Examples</b>
                            <br/>
                            <Code >
                                <Code>"(){}[]"   =>  True</Code><br/>
                                <Code>"([{}])"   =>  True</Code><br/>
                                <Code>"(}"       =>  False</Code><br/>
                                <Code>"[(])"     =>  False</Code><br/>
                                <Code>"[({})](]" =>  False</Code><br/>
                            </Code>
                        </div>
                    </Box>
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