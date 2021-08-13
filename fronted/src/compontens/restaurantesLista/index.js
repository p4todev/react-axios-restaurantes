import React,{useState,useEffect} from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL : 'http://localhost:3000/restaurantes',

});

const RestauranteLista  = props => {

    const [restaurantes,setRestaurantes] = useState([]);
    
    useEffect(()=>{
      consulta();
    },[]);

    const consulta = () => {
      api.get('/')
      .then(res=>{
        console.log(res.data);
        setRestaurantes(res.data);
      })
      .catch(e=>console.log(e));
    }
    

    return (
        <div >
          {restaurantes.map((restaurant)=>{
            return(
            <div>
               <h2>{restaurant.nombre}</h2>
                <p>{restaurant.valoracion}</p>
            </div>
            );
          }
  
          )}
        </div>
    )
}

export default RestauranteLista;
