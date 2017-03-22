import axios from 'axios'

// Private

// -
// Fetch Github api with given path
// -
export function fetchGitHubAPIWithPath (path) {
  let header = {
    headers: {
      'Authorization': `token fbedabf134e561e8515b0c939d4f7b7b17f749ff`
    }
  }
  let pm = axios.get(`https://api.github.com${path}`, header)
  return pm
}

// -
// Since Github doesn't have pr count in repo object
// we need to use search api to search issue with type pr and open
// This will return json look like
// {
//   "total_count": 109,
//   "incomplete_results": false,
//   "items" : []
// }
// -
function fetchPRCount (scopeName) {
  const searchString = encodeURIComponent(`repo:${scopeName} type:pr is:open`)
  const path = `/search/issues?q=${searchString}`
  return fetchGitHubAPIWithPath(path)
}

// Get repo data with scopeName "user/repo"
function fetchRepoInfo (scopeName) {
  return fetchGitHubAPIWithPath(`/repos/${scopeName}`)
}

// -
// Public Export

// -
// Fetch Repository Info with scope (eg 'facebook/react')
// response would look like
// https://api.github.com/repos/facebookincubator/create-react-app
// also including `pull_requests_count` field
export function fetchRepository (scopeName) {
  return Promise.all([fetchRepoInfo(scopeName), fetchPRCount(scopeName)])
  .then((values) => {
    const [ repo, searchResult ] = values
    return {
      name: repo.data.name,
      description: repo.data.description,
      avatar_url: repo.data.organization.avatar_url,
      stargazers_count: repo.data.stargazers_count,
      open_issues_count: repo.data.open_issues_count,
      forks_count: repo.data.forks_count,
      pull_requests_count: searchResult.data.total_count
    }
  })
}

// Fetch Repository's stargazers with scope (eg 'facebook/react')
// https://api.github.com/repos/angular/angular/stargazers?=page=0
export function fetchStargazers (scopeName, page = 0, perPage = 30) {
  return fetchGitHubAPIWithPath(
    `/repos/${scopeName}/stargazers?page=${page}&per_page=${perPage}`
  )
}
