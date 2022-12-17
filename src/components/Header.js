 import "../css/Header.css";
 import Searchbar from "./SearchBar";
export default function header({onChange}){
   return <div>
    <img src="/logo.png" alt="INSYNK STUDIOUS" />
  <div  id="searchbar"><Searchbar onChange={onChange}/></div>
  <div id="line"></div>
   </div>
}