import { Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Input, Textarea, Text} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Markup } from "react-render-markup";


const Exercise = ({selected}) => {

    const [inputVal, setInputVal] = useState('');
    const [outputVal, setOutputVal] = useState('');
    const [outputAnswer, setOutputAnswer] = useState('');

    useEffect(()=>{
        setInputVal('');
        setOutputVal('');
        setOutputAnswer('');
    }, [selected]);
    

    const typingHandler = (e) => {
        setInputVal(e.target.value)
    };
    const disableOutput = ()=>{
        document.getElementById("JS-exerciseCurrent").setAttribute("disabled", true)
    };
    
   

    const onTry = () => {
        
        setOutputVal(inputVal);

        executeFunction(inputVal)
        
        setInputVal('');
        document.getElementById("JS-exerciseCurrent").removeAttribute("disabled");
        document.getElementById("JS-exerciseCurrent").focus();
    };


    function executeFunction(input){
        try {
            let args = null
            if(selected.input_type !== 'str') {
                 args = input.split(',');
            }else{
                 args = input;
            }
            console.log(...args)

            let funcArgs = selected.arg.split(',');
            console.log(funcArgs)
            const func = Function(funcArgs.flat(), selected.code)

            switch(selected.input_type){
                case 'str': setOutputAnswer(func(args));
                break
                case 'multi_str': setOutputAnswer(func(...args));
                break
                case 'arr': setOutputAnswer(func(args));
                break
                default: setOutputAnswer('ERR: input_type unknown');
                break
            };
            
            
        } catch (error) {
            setOutputAnswer('failed to execute')
            console.log(error.message)
        }
    }
    
    

    function argSplit(string){
        return string.split(',');
    }

    //HTML
    return (
        <Box overflowY={"scroll"} p={4} >
                {/* Input: */}
                <Heading as='h3' size='md' p={2}>Test examples</Heading>
                <Flex p={2} w='100%' textAlign={'left'} bg={'rgb(240, 240, 240)'} borderRadius='15px'>
                            <Text><label for='JS-exerciseInput'>Input:</label></Text> 
                            <Input 
                            id='JS-exerciseInput' 
                            autocomplete="off"
                            variant='flushed' 
                            mx={2} 
                            onChange={typingHandler} 
                            value={inputVal}
                            placeholder={`E.g. ${selected.input_example}`}
                            
                            />
                            <Button id='JS-exerciseInputSubmit' w={'70px'} onClick={()=>{onTry()}} >Try</Button>
                </Flex>
                {/* Output: */}
                <Box my={4} px={2} bg={'rgb(240, 240, 240)'} borderRadius='15px'>
                    <Flex py={2} w='100%' textAlign={'left'}>
                        <Text h='10'><label mb="8px" for='JS-exerciseOutput'>Output:</label></Text> 
                        <Input 
                            variant='flushed'
                            id='JS-exerciseCurrent' 
                            autocomplete="off" 
                            cursor={'default'}
                            mx={2} value={outputVal} 
                            onClick={()=>{disableOutput()}}/>
                    </Flex>
                    <Textarea id='JS-exerciseOutput'
                            cursor={'default'}
                            value={outputAnswer}
                            size="sm"
                            maxH={350}
                            bg={'rgb(226, 232, 240)'}
                            readonly
                            my={3}
                            resize='none'
                    />
                </Box>
                {/* Show item: */}
                <Heading as='h3' size='md' p={2}>Check answer</Heading>
                <Box my={4} p={2} bg={'rgb(240, 240, 240)'} borderRadius='15px' >
                    <Accordion 
                    allowToggle 
                    bg={'rgb(226, 232, 240)'}
                    >
                                <AccordionItem borderRadius={'15px'}>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                        Show Answer
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} overflowX={"scroll"} >
                                    <Text textAlign={'left'} fontSize={16}> 
                                        <Markup markup={selected.answer}/>
                                    </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                    </Accordion>
                </Box>
                
        </Box>
    )
}

export default Exercise;