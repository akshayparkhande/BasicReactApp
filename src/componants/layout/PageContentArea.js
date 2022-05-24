import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const PageContentArea = (props) => {
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default PageContentArea;