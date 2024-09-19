import Header from "./Header";
import About from "./About"

export default function home (){
    return(
        <div >
          <div className="flex flex-col items-center justify-center border-4 border-yellow-500 p-8">
          <Header/> 
          </div>
                     
               <div className="flex flex-col items-center justify-center p-8">

                  <h1 className="text-6xl font-bold text-rose-700">This is Home Page</h1>
          <About/>        
          </div>
        </div>
    )
}