export type Member = { name: string; funFact: string };
export type Team = { name: string; pm: string; members: Member[] };

export const teamTemplate: Team = {
  name: "Team Template",
  pm: "Your PM Name",
  members: [
    { name: "Member 1", funFact: "A fun fact about Member 1" },
    { name: "Member 2", funFact: "A fun fact about Member 2" },
    { name: "Member 3", funFact: "A fun fact about Member 3" },
    { name: "Member 4", funFact: "A fun fact about Member 4" },
  ]
};