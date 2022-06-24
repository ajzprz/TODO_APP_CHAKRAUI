import React from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme={'yellow'} p={4} m={4} borderRadius='lg'>
        Yes, No task for Today !!!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderStyle="solid"
      borderColor="grey.100"
      borderWidth={1}
      borderRadius="lg"
      p={4}
      w="100%"
      maxWidth={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack>
          <Text>{todo.task}</Text> <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default Todo;
