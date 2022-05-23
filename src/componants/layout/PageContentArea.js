import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const PageContentArea = (props) => {
  return ( 
  <div className="container">
    <TodoForm />
    <TodoList />
  </div>
   );
}
 
export default PageContentArea;