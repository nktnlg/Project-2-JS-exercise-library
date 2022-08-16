import { Box, Button, Flex, Heading, Spacer, Wrap, WrapItem } from '@chakra-ui/react';
import { useState } from 'react';
import data from '../MockDB/exercises';
import Exercise from './Exercise';
import ExerciseExplanation from './ExerciseExplanation';
import ExerciseLabel from './ExerciseLabel';




const ExercisesMain = () => {

    const [selected, setSelected] = useState({title: "select an exercise"})
    const exercises = data.concat(data)
    //HTML
    return (
        <>
            <Heading as='h1' size='2xl' p={2}>
                JS Exercises
            </Heading>
            <Heading as='h2' size='lg' p={2}>
                <i>{selected.title}</i>
            </Heading>

            <Box borderBottom='2px' borderColor='gray.200' h={580}>
                <Flex>
                    <Spacer/>
                    {/* Left Block: */}
                    <Exercise/>

                    {/* Center Line: */}
                    <Spacer borderRight='2px' borderColor='gray.200'/>
                    <Spacer/>

                    {/* Right Block: */}
                    <ExerciseExplanation/>
                    <Spacer/>
                </Flex>
            </Box>
            
            <Box p={5} overflowY={"scroll"} h={"272"}>
                {exercises ? (
                    <Wrap>
                        {exercises.map((label)=>(
                            <WrapItem >
                            <ExerciseLabel label={label}/>
                        </WrapItem>
                        ))}
                    </Wrap>
                ): 
                (<p>no data</p>)}
            </Box>


        </>
    );
}

export default ExercisesMain;