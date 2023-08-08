import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import useStyles from "./addTeamDialogStyles";
import { useAppSelector } from "../../redux/hooks";
import axios from "../../axios";

const TTILE = "Add Team";
const NAME = "Name";
const NUMBER = "Number";
const DESCRIPTION = "Description";
const IMAGE = "Image";
const CANCEL = "Cancel";
const ADD = "Add";

const AddTeamDialog: React.FC<AddTeamDialogProps> = (props) => {
  const { classes } = useStyles();
  const { open, setOpen, setTeams } = props;

  const currentUserId = useAppSelector(state => state.user._id);

  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const addTeam = () => {
    const newTeam: Team = {
      name: name,
      number: number || -1,
      description: description,
      image: image,
      admin: currentUserId ? [currentUserId] : []
    };

    axios.post('/teams', newTeam);
    setTeams(prev => [...prev, newTeam]);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{TTILE}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            className={classes.inputBox}
            label={NAME}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            className={classes.inputBox}
            label={NUMBER}
            type="number"
            value={number}
            onChange={(event) => setNumber(parseInt(event.target.value))}
          />
          <TextField
            className={classes.inputBox}
            multiline
            label={DESCRIPTION}
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            className={classes.inputBox}
            multiline
            label={IMAGE}
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>{CANCEL}</Button>
          <Button variant="contained" onClick={addTeam}>
            {ADD}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTeamDialog;
