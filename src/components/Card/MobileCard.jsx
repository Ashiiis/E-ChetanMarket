import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MessageIcon from "@mui/icons-material/Message";

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MobileCard({ shop }) {
  const [expanded, setExpanded] = React.useState(false);

  const {
    name = "Unnamed Shop",
    description = "No description available.",
    contact = "No contact available.",
    location = "No location provided.",
    image = "/static/images/cards/default.jpg",
  } = shop || {};

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#fffff",
        maxWidth: 345,
        margin: "1rem",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(56, 154, 31, 0.84)",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="shop">
            {name.charAt(0)}
          </Avatar>
        }
        title={
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: 600 }}>
            {name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ fontSize: "12px", color: "text.secondary" }}>
            {location}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={`${name} image`}
        sx={{
          objectFit: "cover",
          borderRadius: "0 0 10px 10px",
        }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ fontSize: "14px", color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ fontSize: "20px", color: red[500] }} />
        </IconButton>
        <IconButton
          aria-label="message shopkeeper"
          onClick={() => alert(`Message ${name}`)}
        >
          <MessageIcon sx={{ fontSize: "20px", color: "#1976d2" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ fontSize: "20px", color: "#4caf50" }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontSize: "12px", fontWeight: 600 }}>
            Contact:
          </Typography>
          <Typography paragraph sx={{ fontSize: "12px", color: "text.secondary" }}>
            {contact}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "12px", fontWeight: 600 }}>
            Location:
          </Typography>
          <Typography paragraph sx={{ fontSize: "12px", color: "text.secondary" }}>
            {location}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
