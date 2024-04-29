import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import SkillChip from "../components/SkillChip";

export default function ActionAreaCard({ job }) {
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <Card sx={{ minHeight: "320px", position: "relative" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
          <hr />
        </Typography>
        <SkillChip skill={job.skills} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ pt: "10px" }}
          textAlign={"justify"}
        >
          {job.description}
        </Typography>
      </CardContent>
      <CardActions
      // sx={{
      //   position: "absolute",
      //   bottom: "10px",
      //   left: "50%",
      //   transform: "translate(-50%)",
      // }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(`/job/${job.id}`)}
          state={{ backgroundLocation: location }}
          sx={{
            backgroundColor: "#ffa726",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
