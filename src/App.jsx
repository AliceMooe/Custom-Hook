
import useToggle from "./hooks/useToggle";



function App() {
 
  const [isShow,toggle]  = useToggle();
  // const [isShow,toggle]  = useToggle(true);
  return (
    <section>
 
        <button onClick={toggle}> {isShow ? "hide" : "show"}   </button>
        { isShow && <h1>Component is showing.</h1> }
       
     
    </section>
  );
}

export default App;
