import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import useStyles from "./teamCardStyles";

const TeamCard: React.FC<TeamCardProps> = (props) => {
  const { classes } = useStyles();
  const { name, number, description, image } = props.team;

  return (
    <Card className={classes.teamCard}>
      <CardHeader title={name} subheader={number} />
      <CardMedia component="img" image={image} alt={`${name} image`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <GroupRemoveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
