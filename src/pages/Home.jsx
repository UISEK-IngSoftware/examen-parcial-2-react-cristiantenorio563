import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Alert, Box } from "@mui/material";
import CharacterList from "../components/CharacterList";
import { getCharacters } from "../services/futuramaService";
import "./Home.css";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      const data = await getCharacters();
      setCharacters(data);
    } catch (err) {
      setError("No se pudieron cargar los personajes.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box className="center-content">
        <CircularProgress />
        <Typography>Cargando personajes...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container className="home-container">
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (characters.length === 0) {
    return (
      <Container className="home-container">
        <Alert severity="info">
          No existen personajes para mostrar.
        </Alert>
      </Container>
    );
  }

    return (
      <Container maxWidth="md" className="home-container">

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Personajes de Futurama
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5 }}
        >
          Futurama es una serie animada de ciencia ficción y comedia creada por Matt Groening y David X. Cohen. La historia sigue a Fry, un repartidor de pizza que es congelado accidentalmente y despierta 1000 años en el futuro. Allí trabaja en la empresa Planet Express junto a Leela, Bender y otros personajes, viviendo aventuras en el espacio con mucho humor y sátira.
        </Typography>

        <CharacterList characters={characters} />

      </Container>
    );
};

export default Home;
