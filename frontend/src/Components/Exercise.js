import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input, Spacer, Text } from "@chakra-ui/react";

const Exercise = ({}) => {
    //HTML
    return (
        <Box w='48%' h='580'>
                        {/* Input: */}
                        <Flex py={2}>
                            <Box w='70px' h='10'><Text>Input</Text></Box> 
                            <Spacer />
                            <Box w='700px' h='10'><Input/></Box> 
                            <Spacer />
                            <Box w='70px' h='10'><Button>OK</Button></Box> 
                        </Flex>
                        <hr/>
                        {/* Output: */}
                        <Flex py={2}>
                            <Box w='70px' h='10'><Text>Output</Text></Box> 
                            <Spacer />
                            <Box w='810px' h='10'><Input/></Box> 
                        </Flex>

                        {/* Show item: */}
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
                                <Text textAlign={'left'}> 
                                    dvsadsvasdvasdvasdvasdvasdvadsv
                                </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
    )
}

export default Exercise;