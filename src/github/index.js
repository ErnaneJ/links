const userName = 'ernanej';
const baseApi = 'https://api.github.com/users';
const REPOS = `${baseApi}/${userName}/repos`;

export default {
  // Get /repos
  getRepos: async () => {
    const resp = await fetch(REPOS);
    return await resp.json();
  }
}