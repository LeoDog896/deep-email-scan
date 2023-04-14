import { Octokit, App } from "npm:octokit";

const token = Deno.env.get("GITHUB_TOKEN");

const error = (message: string) => console.error(`%cerror: %c${message}`, "color: red; font-weight: bold", "color: reset");

if (!token) {
    error("ENV variable `GITHUB_TOKEN` is not set");
    Deno.exit(1);
}

const octokit = new Octokit({ auth: token });

const targetUser = Deno.args[0];

if (!targetUser) {
    error("No username provided");
    Deno.exit(1);
}

const { data: repos } = await octokit.request("GET /users/{username}/repos", {
    username: targetUser,
});

console.log(repos);
