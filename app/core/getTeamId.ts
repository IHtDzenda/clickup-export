import { req } from "./util";

export default async function getTeamId() {
  const teamResponse = await req("https://api.clickup.com/api/v2/team");
  const teamId = teamResponse.teams[0].id;

  const userId = teamResponse.teams[0].members.filter(
    (member) => member.user.email === process.env.USER_EMAIL,
  )[0].user.id;
  return { teamId, userId };
}
