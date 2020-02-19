import React, { useEffect, FunctionComponent } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { useHistory } from "react-router-dom";

// Styled Component
const StyledRandomCocktail = styled.div`
  max-width: 500px;
  padding: 1rem;
  display: "flex";
  flex-direction: column;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const Thumb = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
`;

type MainTextProps = {
  fontSize: string;
  position?: "absolute";
  align?: string;
};
const MainText = styled.h1<MainTextProps>`
  display: inline-block;
  width: 100%;
  position: ${props => props.position || "initial"};
  bottom: 0;
  font-size: ${props => props.fontSize};
  font-family: "Galada", cursive;
  text-align: ${props => props.align || "left"};
  color: yellow;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin: 0;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const styles = {
  flex: 1,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const RandomCocktail: FunctionComponent<RandomCocktailProps> = ({
  getRandomCocktail,
  randomCocktail
}) => {
  const history = useHistory();

  const transition = useTransition(!!randomCocktail.strDrinkThumb, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const goToDetailsPage = () => {
    history.push(`/details/${randomCocktail.idDrink}`);
  };

  useEffect(() => {
    getRandomCocktail();
  }, [getRandomCocktail]);

  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={{ ...styles, ...props }}>
              <StyledRandomCocktail onClick={goToDetailsPage}>
                <MainText align='center' fontSize='1.5rem'>
                  Random Cocktail
                </MainText>
                <Thumb>
                  <MainText
                    align='center'
                    position='absolute'
                    fontSize='1.3rem'>
                    {randomCocktail.strDrink}
                  </MainText>
                  <Image src={randomCocktail.strDrinkThumb} />
                </Thumb>
              </StyledRandomCocktail>
            </animated.div>
          )
      )}
    </>
  );
};

type RandomCocktailProps = {
  getRandomCocktail: () => void;
  randomCocktail: any;
};

export default RandomCocktail;
