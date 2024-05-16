import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import SkillChip from "../components/SkillChip";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
}));

export default function ActionAreaCard({ job }) {
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <CardStyle ariant="outlined">
      <Stack>
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            {job.title}
            <hr />
          </Typography>
          <SkillChip skill={job.skills} />
          <Typography
            variant="body2"
            sx={{
              pt: "10px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: (theme) => theme.palette.common.white,
            }}
          >
            {job.description}
          </Typography>
        </CardContent>

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
            color: "black",
            m: "80px auto 40px",
          }}
        >
          Learn More
        </Button>
      </Stack>
    </CardStyle>
  );
}
