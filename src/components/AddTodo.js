import React, { useState } from "react";
import { Input, Button, HStack, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No Content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      task: content,
    };

    addTodo(todo);
    setContent("");
  }
  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={4}>
        <Input
          variant={"filled"}
          placeholder="Task For Today"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button px={8} colorScheme="pink" type="submit">
          Add TODO
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
