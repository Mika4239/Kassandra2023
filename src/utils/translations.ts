const TbaKeys = {
  qm: "qualification match",
  ef: "eighth finals",
  qf: "quarterfinals",
  sf: "semifinals",
  f: "finals",
  m: "match",
};

export const translateMatch = (key: string) => {
  const tbaKeyArr = key.split("_")[1].split(/(\d+)/);
  // all the even places in the array are strings and odds places are numbers, so we need to translate only the strings
  return tbaKeyArr
    .map((matchKey, index) =>
      index % 2 == 0 ? TbaKeys[matchKey as keyof typeof TbaKeys] : matchKey
    )
    .join(" ");
};

export const translateTeam = (key: string, index?: number) => {
  const alliance = (index as number) < 3 ? "blue" : "red";
  return `${alliance} ${(index as number) + 1} - ${key.replace("frc", "")}`;
};
