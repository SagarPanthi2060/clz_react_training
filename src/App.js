import College from "./College"
import MyForm from "./MyForm"
import Mylinks from "./Mylinks"
import Myrouter from "./Myrouter"
import PracTailwind from "./PracTailwind"
import Practice from "./Practice"
import Practice1 from "./Practice1"
import Practice3 from "./Practice3"
import Practice4 from "./Practice4"

//make app function use app function at index.js
let App=()=>{
  return(
    <div>
      <PracTailwind></PracTailwind>
      <Mylinks></Mylinks>
      <Myrouter></Myrouter>
      <MyForm></MyForm>
      <Practice3></Practice3>
      <Practice4></Practice4>

    
      <College  name ="Crimson clz" location="butwal" collegecode={54321}></College>
      
      
      <Practice></Practice>
      <Practice1></Practice1>
      
    </div>
  )
}
export default App