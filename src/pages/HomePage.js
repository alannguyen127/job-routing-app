import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
import Paginations from "../components/Paginations";
import { useParams, useLoaderData } from "react-router-dom";
import { useNavigation } from "react-router-dom";

export const dataLoader = async () => {
  try {
    const res = await fetch("http://localhost:5000/jobs");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// dataLoader().then((result) => console.log(result));

function HomePage() {
  const jobData = useLoaderData();

  // console.log(jobData);
  const params = useParams();

  let paramNumber = 1;
  if (Number(params.page)) paramNumber = Number(params.page);
  let a = 6 * (paramNumber - 1);
  let b = paramNumber * 6;

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {jobData.slice(a, b).map((job) => (
          <Grid key={job.id} item xs={12} md={6} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Paginations pages={Math.trunc(jobData.length / 6)} />
    </Container>
  );
}

export default HomePage;
