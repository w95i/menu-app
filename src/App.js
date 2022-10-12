import {React , useState} from "react";
import { Container } from "react-bootstrap";
import CardList from "./component/CardList";
import Categore from "./component/Categore";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import { Items } from "./Data";

const App=()=> {
  
  const [itemdata, setitemdata] = useState(Items)
  //get all category uniq
  const allcategory=['الكل',...new Set(Items.map((i)=>i.categore))]
  //filter by category
  const filterbycategory=(cate)=>{
    if (cate==="الكل")
    {
      setitemdata(Items)
    }else{
    const Newarr=Items.filter((item)=>item.categore===cate)
    setitemdata(Newarr)
  }}
  //filter by search
  const filterbysearch=(word)=>{
    if (word !== ''){
    const Newarr=Items.filter((item)=>item.title===word)
    setitemdata(Newarr)
  }}
  return (
    <div className="color-body font">
      <NavBar filterbysearch={filterbysearch}/>
      <Container>
        <Header/>
        <Categore filterbycategory={filterbycategory} allcategory={allcategory}/>
        <CardList itemdata={itemdata}/>
      </Container>
    </div>
  );
}

export default App;
