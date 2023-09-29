import { useEffect, useMemo, useState } from "react";
import SelectFromData from "../../components/selectFromData/selectFromData";
import useStyles from "./selectMatchStyles";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { resetMatchData, setMatchTeam } from "../../redux/matchDataSlice";
import NavBar from "../../components/navBar/navBar";

const SELECT_MATCH = "Select Match";

const EVENT = "event";
const MATCH = "match";
const TEAM = "team";

const START = "Start";
const NEXT_PATH = "/autonomous";

const USER = "user";

const TbaKeys = {
  qm: "qualification match",
  ef: "eighth finals",
  qf: "quarterfinals",
  sf: "semifinals",
  f: "finals",
  m: "match",
};

const translateMatch = (key: string) => {
  const tbaKeyArr = key.split("_")[1].split(/(\d+)/);
  // all the even places in the array are strings and odds places are numbers, so we need to translate only the strings
  return tbaKeyArr
    .map((matchKey, index) =>
      index % 2 == 0 ? TbaKeys[matchKey as keyof typeof TbaKeys] : matchKey
    )
    .join(" ");
};

const translateTeam = (key: string, index?: number) => {
  const alliance = (index as number) < 3 ? "blue" : "red";
  return `${alliance} ${(index as number) + 1} - ${key.replace("frc", "")}`;
};

const SelectMatch: React.FC = () => {
  const { classes } = useStyles();

  const [events, setEvents] = useState<Event[]>([]);
  const [matches, setMatches] = useState<string[]>([]);
  const [teams, setTeams] = useState<string[]>([]);

  const event = useAppSelector((state) => state.matchData.event);
  const match = useAppSelector((state) => state.matchData.match);
  const userId = useAppSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const getData = async <T,>(url: string): Promise<T> => {
    const resp = await fetch(url, {
      headers: {
        "X-TBA-Auth-Key": import.meta.env.VITE_TBA_AUTH_KEY,
      },
    });
    return resp.json();
  };

  useEffect(() => {
    dispatch(resetMatchData());

    getData<Event[]>("https://www.thebluealliance.com/api/v3/events/2023")
      .catch((error) => console.log(error))
      .then((response) => response && setEvents(response));
  }, []);

  useMemo(() => {
    getData<Match[]>(
      `https://www.thebluealliance.com/api/v3/event/${event}/matches/simple`
    )
      .catch((error) => console.log(error))
      .then(
        (response) =>
          response &&
          setMatches(
            response
              .sort((a, b) => a.predicted_time - b.predicted_time)
              .map((event) => event.key)
          )
      );

    match !== "" &&
      getData<Match>(
        `https://www.thebluealliance.com/api/v3/match/${match}/simple`
      )
        .catch((error) => console.log(error))
        .then(
          (response) =>
            response &&
            setTeams(
              response.alliances.blue.team_keys.concat(
                response.alliances.red.team_keys
              )
            )
        );
  }, [match]);

  const translateEvent = (key: string) => {
    return events.find((event) => event.key == key)?.name || "";
  };

  const start = () => {
    dispatch(setMatchTeam({ name: USER, input: userId || "" }));
  };

  return (
    <>
      <NavBar />
      <div className={classes.selectPage}>
        <h1 className={classes.title}>{SELECT_MATCH}</h1>
        <SelectFromData
          name={EVENT}
          data={events.map((event) => event.key)}
          dataTranslate={translateEvent}
        />
        <SelectFromData
          name={MATCH}
          data={matches}
          dataTranslate={translateMatch}
        />
        <SelectFromData
          name={TEAM}
          data={teams}
          dataTranslate={translateTeam}
        />
        <NavLink to={NEXT_PATH}>
          <Button variant="contained" onClick={start}>
            {START}
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default SelectMatch;
