import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { IconButton, VStack, Heading } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const initialTodo = [
  //   {
  //     id: 1,
  //     task: "eat",
  //   },
  //   {
  //     id: 2,
  //     task: "sleep",
  //   },
  // ];
  const [todos, setTodos] = useState(
    ()=> JSON.parse(localStorage.getItem("todos")) || []

  );

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))

  }, [todos])
  

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  return (
    <VStack p={4} spacing={8}>
      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound="true"
        p={4}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.300)"
        bgClip="text"
      >
        TODO APPLICATION
      </Heading>
      <Todo todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
