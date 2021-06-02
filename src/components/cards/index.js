import Data from "../../data.json";
import "../cards/style.css"

function Cards(props) {
    return (
        <div className="MainCard">
          {
            Data.Card.map((res) => {
              return (
                <div className="Card">
                  <h1 className="TituloCard">{res.Texto}</h1>
                  <p className="TextoCard">{res.Description}</p>
                </div>
              )
            })
          }
        </div>

    );
  } 
  
  /*#ff4654 #101823*/
  
  export default Cards;