import {
  Avatar,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Signin() {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30px",
        backgroundColor: "#F4F2FD",
        opacity: "0.8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "16px",
          margin: "20px 20px 0 20px",
        }}
      >
        <Avatar alt="logo" src={process.env.PUBLIC_URL + "/favicon.ico"} />
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontFamily: "Ubuntu, sans-serif",
            color: "#808080",
            fontWeight: "600",
          }}
        >
          Dear Diary
        </Typography>
      </Container>

      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: "Ubuntu, sans-serif",
          color: "#01ACDC",
          marginBottom: "30px",
          fontWeight: "600",
        }}
      >
        Sign In
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <TextField
          size="small"
          label="Your Nickname"
          id="outlined-basic"
          variant="outlined"
          required
        />
        <Button
          size="small"
          variant="contained"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#01ACDC",
            color: "#fff",
            "&:hover": { backgroundColor: "#01ACDC" },
          }}
        >
          Random
        </Button>
      </Container>
      <Button
        size="small"
        variant="contained"
        sx={{
          borderRadius: "10px",
          margin: "20px",
          backgroundColor: "#01ACDC",
          color: "#fff",
          "&:hover": { backgroundColor: "#01ACDC" },
          gap: "10px",
        }}
      >
        Continue
        <ArrowForwardIcon />
      </Button>
    </Card>
  );
}
