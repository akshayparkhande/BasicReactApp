import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const PageContentArea = (props) => {
  return ( 
  <div className="container">
    <TodoList />
    <TodoForm />
  </div>
   );
}
 
export default PageContentArea;