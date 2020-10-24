export const mapDifficulty = (difficulty) => {
  switch (difficulty) {
    case 1.5:
      return "Medium";
    case 2:
      return "Hard";
    default:
      return "Easy";
  }
};
