interface AddTeamDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
}