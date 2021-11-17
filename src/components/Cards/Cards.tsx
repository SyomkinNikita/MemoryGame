import * as React from "react";
import { game } from "@utils/game.json";
import { TJsonGame } from "@localTypes/common";
import { Styled } from './styled';


export const Cards: React.FC = () => {
  const [cards, setCards] = React.useState(game);
  const [quantityLetterOnBoard, setQuantityLetterOnBoard] = React.useState(0);

  // #TODO: сделать плавный переход карточек от показы буквы до скрытия её
  const [transition, setTransition] = React.useState(false); 
  
  const changeStateClick = (card: TJsonGame) => {
    setTransition(true);
    setQuantityLetterOnBoard(quantityLetterOnBoard + 1);
    card.state = !card.state;
  };

  React.useEffect(() => {
    if (quantityLetterOnBoard === 2) {
      setQuantityLetterOnBoard(0);

      let newCards = cards.map(card => {
        if (!card.state) {
          return card
        } else {
          let {id, value, state} = {id: card.id, value: card.value, state: false};
          return {id, value, state}
        }
      });
      
      setCards(newCards);
    };
  }, [cards, quantityLetterOnBoard]);
  console.log(cards, quantityLetterOnBoard);

  return (
    <React.Fragment>
      {cards.map(card => (
        <Styled.ContainerCard key={card.id} onClick={() => changeStateClick(card)} transition={transition}>
          <Styled.CardWithLetter> 
            {card.state && card.value} 
          </Styled.CardWithLetter>
        </Styled.ContainerCard>
      ))}
    </React.Fragment>
  );
};
