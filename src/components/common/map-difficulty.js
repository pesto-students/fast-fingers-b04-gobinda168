export const mapDifficulty = (difficulty) => {
  switch (difficulty) {
    case 1.5:
      return "medium";
    case 2:
      return "hard";
    default:
      return "easy";
  }
};
export const reverseMapDifficulty = (difficulty) => {
  switch (difficulty) {
    case "medium":
      return 1.5;
    case "hard":
      return 2;
    default:
      return 1;
  }
};
