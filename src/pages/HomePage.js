import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
import Paginations from "../components/Paginations";
import { useParams, useLoaderData, useSearchParams } from "react-router-dom";
import { dataLoader } from "../loader/dataLoader";

export async function loader() {
  const jobs = await dataLoader();
  return { jobs };
}

function HomePage() {
  const { jobs } = useLoaderData();
  // console.log(jobs);
  const params = useParams();

  let paramNumber = 1;
  if (Number(params.page)) paramNumber = Number(params.page);
  let a = 6 * (paramNumber - 1);
  let b = paramNumber * 6;

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {jobs.slice(a, b).map((job) => (
          <Grid key={job.id} item xs={12} md={6} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Paginations pages={Math.trunc(jobs.length / 6)} />
    </Container>
  );
}

export default HomePage;
