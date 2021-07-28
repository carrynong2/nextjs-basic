import Navbar from "../src/Navbar";
import AttractionCard from "../src/AttractionCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function HomePage({ data }) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <div style={{ marginTop: "1em" }}>
          <Typography variant="h4" gutterBottom>
            Around the World!!
          </Typography>
          <Grid container spacing={3}>
            {data.map((attraction) => (
              <Grid item xs={12} lg={4} key={attraction.id}>
                <AttractionCard attraction={attraction} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://www.mecallapi.com/api/attractions");
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}

export default HomePage;
