import { Button } from "@chakra-ui/react";

const ExerciseLabel = ({label}) => {
    //HTML
    return (
        <Button colorScheme='telegram' w={250} h={90} fontSize='xl' whiteSpace={'normal'}>
                                {label.title}
                            </Button>
    )
}

export default ExerciseLabel;