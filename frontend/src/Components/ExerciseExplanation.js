import { Box, Code, Link, Text } from "@chakra-ui/react";
import { Markup } from 'react-render-markup';


const ExerciseExplanation = ({selected}) => {


    
    //HTML
    return (
        <Box w='48%' h='580'overflowY={"scroll"}>
                        <Text textAlign={'left'} py={2} id="explanation">

                            <Markup markup={selected.explanation}/>

                            {selected.examples? (<>
                            <b>Examples:</b>
                            <Code w={'100%'} p={4}>
                            <Markup markup={selected.examples}/>
                            </Code></>
                            ): <></>}

                            {selected.source? (
                            <Text>Source: <Link href={selected.source.url}>{selected.source.short}</Link></Text>
                            ): <></>}
                        
                        </Text>
                    </Box>
    )
}

export default ExerciseExplanation;