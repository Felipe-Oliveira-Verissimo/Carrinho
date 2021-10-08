import styled from 'styled-components'

const Container=styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: arial;
  padding: 3em;


  .lista-produtos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .carousel-container {
    width: 100%;
    height: 21em;
  }

  .botao button{
     display: flex;
     color: white;
     background-color: #ff6500;
     font-family: arial;
     padding: 1em 2em; 
     border: none;
     border-radius: 20px;
  }
`
export{Container};