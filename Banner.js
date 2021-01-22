import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css';
// import Search from './Search';


function Banner() {
    const history = useHistory();


    const [showSearch , setShowSearch] =useState(false);



    return (
        <div className='banner' style={{ background: `url(${'./img/2.jfif'})` }}> 
         <div className="banner_search">
             
             <Button onClick={()=> setShowSearch(!showSearch)}
             className="banner_searchButton" variant="outlined"> 
             {showSearch ?"Hide" : "Search Date"}</Button>

             {/* {showSearch &&<Search />} */}
         </div>



        <div className="banner_info">
            <h1>Get your dreaming House from Here</h1>
            <h5>
                Buy had live your life in a spacial way This is amazing to get a experiance to live here!
            </h5>

            <Button  onClick={()=>history.push('/search')}  
            variant='outlined'>Get Here</Button>
        </div>
            
        </div>
    )
}

export default Banner
