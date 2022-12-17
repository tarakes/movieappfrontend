import MovieFrame from "./MovieFrame";
import Grid from '@mui/material/Grid';
import {useState,useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import DisplayCard from "./DisplayCard";
import Header from "./Header";
export default function GridFrame(){
   const [movielist,setmovielist]=useState([]);
   const [loading,setloading]=useState(false);
   const [pageno,setpageno]=useState(1);
   const [hasmore,sethasMore]=useState(true);
   const [filterflag,setfilterflag]=useState(false);
   const [open, setOpen] = useState(false);
   const [focuselement,setfocuselement]=useState();
   let flag=0;
   async   function fetchmovie(){
    setloading(true);
      try {
        const response=   await axios.get(`${process.env.REACT_APP_API}?pageno=1`);
       
        setmovielist(response.data);
        setpageno(prev=>prev+1);
       
      } catch (error) {
        console.log(error);
      }
    setloading(false);
   }
    useEffect(()=>{
    
fetchmovie();
    },[]) 
    async function fetchData(){
    
    
        if(pageno>10){
            sethasMore(false);
            return;
        }
        try {
          console.log("fetchdata"+pageno);
               const response=   await axios.get(`${process.env.REACT_APP_API}?pageno=${pageno}`);
               setmovielist((prevarr)=>[...prevarr,...response.data]);
               
               setpageno(prev=>prev+1);
             } catch (error) {
               console.log(error);
             } 
    }
 
  async function handleChange(event){
    let tempflag=flag;
    flag++;
    if(event.target.value===""){
        
  try {
        
        const response=   await axios.get(`${process.env.REACT_APP_API}?pageno=1`);
       
        if(tempflag+1===flag){
        setmovielist(response.data); 
       
        setpageno(2);
        setfilterflag(false);
        sethasMore(true);
       

        }
      } catch (error) {
        console.log(error);
      }
 
    return;
    }
   
  try {
  const response=await  axios.get(`${process.env.REACT_APP_API}/filter?moviename=${event.target.value}`);
  if(tempflag+1===flag){
  setmovielist(response.data);
  setfilterflag(true);
  
  }
  } catch (error) {
    console.log(error);
  }
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  function handleClick(element){
    setfocuselement(element); 
     handleToggle(); 
 
  
   
  }
    return (
           <>
            <Header  onChange={handleChange}/>
   <h3>Most Recent movies</h3>
   {
    loading && <CircularProgress style={{marginLeft:"50%"}}/>
   }
    <Backdrop
                      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer +1 }}
                      open={open}
                      onClick={handleClose}
                      
                   
                    >
                     <DisplayCard element={focuselement} /> 
                     
                    </Backdrop>
        { !filterflag &&   !loading &&  
          <InfiniteScroll
            dataLength={movielist.length} 
            next={fetchData}
            hasMore={hasmore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
         id="infinityscroll"
          >
           
            <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }} >
              {
                movielist.map((element)=>{
                    return (
                      <>
                      <MovieFrame moviename={element.title} rating={element.rating} imagelink={element.image} key={element.title} onClick={()=>handleClick(element)}  />
                     
                    </>
                    );
                })
              }
            
            </Grid>
           
          </InfiniteScroll>
          }
          {
            filterflag && !loading &&
            <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3 }} >
            {
              movielist.map((element)=>{
                  return (
                    <>
                      <MovieFrame moviename={element.title} rating={element.rating} imagelink={element.image} key={element.title} onClick={()=>handleClick(element)}  />
                     
                    </>
                      );
              })
            }
          
          </Grid>
          }
          
          </>
    );
}