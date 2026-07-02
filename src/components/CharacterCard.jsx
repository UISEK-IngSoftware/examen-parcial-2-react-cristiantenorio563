import { Card, CardContent, Typography, Avatar, Box, Chip } from "@mui/material";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case "ALIVE":
        return "success";
      case "DEAD":
        return "error";
      default:
        return "warning";
    }
  };

  const getSpeciesColor = (species) => {
    switch (species) {
      case "HUMAN":
        return "primary";
      case "ROBOT":
        return "secondary";
      default:
        return "warning";
    }
  };

  return (
    <Card className="character-card" elevation={4}>
      <CardContent>
        <Box className="character-container">

          {/* Avatar */}
          <Avatar
            src={character.image}
            alt={character.name}
            className="character-avatar"
          />

          {/* Info */}
          <Box className="character-info">

            {/* Nombre */}
            <Typography variant="h6" className="character-name">
              {character.name}
            </Typography>

            {/* Género */}
            <Typography>
              <strong>Género:</strong> {character.gender}
            </Typography>

            {/* Chips Estado + Especie */}
            <Box className="status-container">

              <Chip
                label={`Estado: ${character.status}`}
                color={getStatusColor(character.status)}
                size="small"
              />

              <Chip
                label={`Especie: ${character.species}`}
                color={getSpeciesColor(character.species)}
                size="small"
              />

            </Box>

          </Box>

        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
