import { NextResponse } from "next/server"
const { Octokit } = require("@octokit/rest");

// Replace "YOUR_GITHUB_TOKEN" with your GitHub personal access token
const octokit = new Octokit({
  auth: "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",
});

export async function POST() {
  try {
    const repoName = "my-new-repo1"; // Replace with your desired repository name
    const repoDescription = "My new repository created with Node.js."; // Replace with your desired repository description
    // const response = await octokit.repos.createForAuthenticatedUser({
    //   name: repoName,
    //   description: repoDescription,
    //   private:true,

    // });
    let a = await octokit.request('POST /orgs/smartpairlabs/repos', {
      org: 'ORG',
      name: 'Hello-World1',
      description: 'This is your first repository',
      homepage: 'https://github.com',
      'private': false,
      has_issues: true,
      has_projects: true,
      has_wiki: true,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    let b = await octokit.request('PUT /orgs/smartpairlabs/teams/development-team/repos/smartpairlabs/Hello-World1', {
      org: 'ORG',
      team_slug: 'TEAM_SLUG',
      owner: 'OWNER',
      repo: 'REPO',
      permission: 'push',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    console.log(b)
    return NextResponse.json(
      { message: 'Ok', success: true, data: { a, b } },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Error occured' },
      { status: 500 }
    )
  }
}




