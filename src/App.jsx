import logo from "./assets/images/logo.svg";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter.jsx"
import Search from "./components/Search/Search.jsx"
const App = () => {



  const getData = async()=>{
    try{
      const response =await fetch("https://api.chucknorris.io/jokes/random");
      const data= await response.json();
      console.log(data)
    }
    catch(error){
      console.error(error)
    }
  }
  


  
  return (
    <div
      className="bg flex justify-center"
    >
    
       <div className="w-4xl h-screen text-white flex flex-col gap-8 items-center justify-center">
        <img src={logo} alt="لوگو" />
      

 <Search />
  <CategoryFilter />
  <button onClick={getData}>Get Data</button>

      </div>

    </div>
  );
};
export default App;
