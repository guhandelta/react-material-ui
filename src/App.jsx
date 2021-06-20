import { Typography, Button, Grid, Container, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { useStyles } from './styles';


function App() {

  const { container, icon, button, cardGrid, cardStyle, cardMedia, cardContent, footer } = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom >Photo Album</Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography>
            <div className={button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Checkout my Album
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Checkout my Album
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
          <Container className={cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map(card =>(
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={cardStyle}>
                      <CardMedia 
                        className={cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                      />
                      <CardContent className={cardContent}>
                        <Typography gutterBottom variant="h5">Heading</Typography>
                        <Typography>This is a reusable Media Card</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="primary">Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
              ))}
            </Grid>
          </Container>
      </main>
      <footer className={footer}>
        <Typography gutterBottom align="center" variant="h6">My Moments</Typography>
        <Typography gutterBottom align="center" color="textSecondary" variant="subtitle1">Checkout later for more pics</Typography>
      </footer>
    </>
  );
}

export default App;
