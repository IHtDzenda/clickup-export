import getTeamId from "../core/getTeamId";
import { req } from "../core/util";

export async function showUserTasks() {
  const teamId = await getTeamId();
  const teamTasks = await req(
    `https://api.clickup.com/api/v2/team/${teamId.teamId}/task?assignees[]=${teamId.userId}&subtasks=true`,
  );
  teamTasks.tasks.forEach((task: any) => {
    console.log(`${task.name} - ${task.url}`);
  })
  
}
