import PageContentArea from "./componants/layout/PageContentArea";
import PageFooter from "./componants/layout/PageFooter";
import PageHeader from "./componants/layout/PageHeader";

const App = (props) => {
  return ( 
    <div>
     <PageHeader />
     <PageContentArea />
     <PageFooter />
    </div>
   );
}
 
export default App;