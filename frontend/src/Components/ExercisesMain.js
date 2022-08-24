import { Box, Flex, Heading, Spacer, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { useState } from 'react';
import data from '../MockDB/exercises';
import Exercise from './Exercise';
import ExerciseExplanation from './ExerciseExplanation';
import ExerciseLabel from './ExerciseLabel';

import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
  } from 'react-reflex'
  
  import 'react-reflex/styles.css'




const ExercisesMain = () => {

    const [labelsHeight, setLabelsHeight] = useState('85%')
    const [selected, setSelected] = useState(null)
    const exercises = data.concat(data)
    //HTML
    return (
        <ReflexContainer orientation="horizontal" >
            <ReflexElement className="top-pane" minSize={120} maxSize={120}>
                        <Heading as='h1' size='2xl' p={2}>
                            JS Exercises
                        </Heading>
                        {selected ? (
                            <Heading as='h2' size='lg' p={2}>
                                {selected.title}
                            </Heading>) :<></> } 

            </ReflexElement>

            <ReflexElement  className="content-pane" minSize={200}>

                <ReflexContainer orientation="horizontal">   
                    
                    {selected && (
                        <ReflexElement className="exercise-pane">
                            <ReflexContainer orientation="vertical">

                                    <ReflexElement className="answer-pane" minSize={350}>
                                        <Exercise selected={selected} />
                                    </ReflexElement>

                                    <ReflexSplitter/>

                                    <ReflexElement className="explanation-pane" minSize={350}>
                                        <ExerciseExplanation selected={selected}/>
                                    </ReflexElement>
                                    
                                </ReflexContainer>
                        </ReflexElement>)}

                    <ReflexSplitter/>

                    <ReflexElement className="labels-pane" minSize={250}>
                        <Heading as='h2' size='lg' p={2}>
                            Exercises list
                        </Heading>
                        <Box p={5} overflowY={"scroll"} >
                            {exercises ? (
                                    <Wrap>
                                        {exercises.map((label)=>(
                                            <WrapItem p={6} onClick={()=>{setSelected(label); setLabelsHeight('25%')}}>
                                                <ExerciseLabel label={label}/>
                                            </WrapItem>
                                        ))}
                                    </Wrap>
                                ): (<p>no data</p>)}
                        </Box>
                    </ReflexElement>

                </ReflexContainer>

            </ReflexElement>

        </ReflexContainer>
    );
}

export default ExercisesMain;