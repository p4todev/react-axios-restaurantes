import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {
  ListContainer,
  ListCard,
  ListInfo,
  ListBtn,
  ListInfoName,
  ListInfoAdress
} from './restauranteListaElements'

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
        <ListContainer className="lista-restaurantes">
          {restaurantes.map((restaurant)=>{
            return(
              <>
                  <ListCard>
                    <ListInfo>
                      <ListInfoName>{restaurant.nombre}</ListInfoName>
                      <ListInfoAdress>{restaurant.direccion}</ListInfoAdress>
                    </ListInfo>
                    <ListBtn>
                      ver info
                    </ListBtn>
                  </ListCard>
              </>
            );
          }
  
          )}
        </ListContainer>
    )
}

export default RestauranteLista;
