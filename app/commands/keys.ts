import { req } from "../core/util";

export async function printKeys() {
  const teamResponse = await req("https://api.clickup.com/api/v2/team");
  const teamId = teamResponse.teams[0].id;
  const teamName = teamResponse.teams[0].name;
  console.log(`Team: ${teamName}`);
  console.log(`TeamId: ${teamId}`);
  console.log(process.env.API_KEY)
}
