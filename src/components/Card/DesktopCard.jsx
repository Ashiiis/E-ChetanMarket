import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import MessageIcon from "@mui/icons-material/Message";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function DesktopCard({shop}) {
  const [expanded, setExpanded] = React.useState(false);
  const {
    name = "Unnamed Shop",
    description = "No description available.",
    contact = "No contact available.",
    location = "No location provided.",
    image = "/static/images/cards/default.jpg", // Default image
  } = shop || {};

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      

      <Card sx={{minWidth: 800, maxWidth: "100%",margin: "auto",width: "100%", top:"5"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="shop">
              {name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={location}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={`${name} image`}
        />
        <CardContent>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row" }}
            alignItems={{ md: "center" }}
          >
            <Grid item xs={12} md={8}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="message shopkeeper" onClick={() => alert(`Message ${name}`)}>
                 <MessageIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Grid>
          </Grid>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="subtitle1">Contact:</Typography>
          <Typography paragraph>{contact}</Typography>
          <Typography variant="subtitle1">Location:</Typography>
          <Typography paragraph>{location}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
