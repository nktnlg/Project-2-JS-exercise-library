import { Box, Code, Link, Text } from "@chakra-ui/react";
import { Markup } from 'react-render-markup';


const ExerciseExplanation = ({selected}) => {


    
    //HTML
    return (
        <Box overflowY={"scroll"} px={8} >
                        <Text textAlign={'left'} id="explanation">

                            <Markup markup={selected.explanation}/>

                            {selected.examples? (<>
                            <b>Examples:</b>
                            <Code w={'100%'} p={4}>
                            <Markup markup={selected.examples}/>
                            </Code></>
                            ): <></>}

                            {selected.source_short? (
                            <Text>Source: <Link href={selected.source_url} target="_blank">{selected.source_short}</Link></Text>
                            ): <></>}
                        
                        </Text>
                    </Box>
    )
}

export default ExerciseExplanation;