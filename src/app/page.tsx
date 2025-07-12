import BlogList from "@/component/BlogList/BlogList";
import { Container, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom sx={{ borderLeft: 4, borderRight: 4, borderColor: 'primary.main', paddingX: 2 }}>
        Blogs
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        <BlogList />
      </Paper>
    </Container>
  );
}
