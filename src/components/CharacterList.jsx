import { List } from "@mui/material";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

const CharacterList = ({ characters }) => {
  return (
    <List className="character-list">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </List>
  );
};

export default CharacterList;
