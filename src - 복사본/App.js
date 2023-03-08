import Macaron from "./Macaron";
import Food from "./Food";
import cakes from "./cakes.json"

function App() {
  return (
    <>
    <div className="app">안녕하세요!</div>
    {cakes.map(cake => (
          <Macaron
          propsid={cake.id}
          propsname={cake.name}
          propsimage={cake.image}  
          />
     ))}

    {/* <Food 
    propsName={"문자열"}
    propsName2={"문자열2"}
    propsName3={"문자열3"}
    /> */}
    </>
  );
}




export default App;
