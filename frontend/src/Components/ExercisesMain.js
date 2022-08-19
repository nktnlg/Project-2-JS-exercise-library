import { Box, Flex, Heading, Spacer, Wrap, WrapItem } from '@chakra-ui/react';
import { useState } from 'react';
import data from '../MockDB/exercises';
import Exercise from './Exercise';
import ExerciseExplanation from './ExerciseExplanation';
import ExerciseLabel from './ExerciseLabel';




const ExercisesMain = () => {

    const [labelsHeight, setLabelsHeight] = useState('85%')
    const [selected, setSelected] = useState(null)
    const exercises = data.concat(data)
    //HTML
    return (
        <>
        {/* Title + Exercise name */}
            <Box h={'15%'}>
            <Heading as='h1' size='2xl' p={2}>
                JS Exercises
            </Heading>
            {selected ? (<Heading as='h2' size='lg' p={2}>
                <i>{selected.title}</i>
            </Heading>):<></>}
            </Box>

        {/* Explanation  + answer */}
            {selected? (<Box borderBottom='2px' borderColor='gray.200' h={'60%'}>
                <Flex>
                    <Spacer/>
                    {/* Left Block: */}
                    <Exercise selected={selected} />

                    {/* Center Line: */}
                    <Spacer borderRight='2px' borderColor='gray.200'/>
                    <Spacer/>

                    {/* Right Block: */}
                    <ExerciseExplanation selected={selected}/>
                    <Spacer/>
                </Flex>
            </Box>):(<></>)}

        {/* Exercises labels */}
            <Box p={5} overflowY={"scroll"} h={labelsHeight}>
                {exercises ? (
                    <Wrap>
                        {exercises.map((label)=>(
                            <WrapItem p={6} onClick={()=>{setSelected(label); setLabelsHeight('25%')}}>
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