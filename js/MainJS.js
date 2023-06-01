$('document').ready(async function() {
    // $('#contents').load("./html/AboutMe.html")
    // $('#contents').load("./html/GithubProfile.html")
    await $('#contents').load("./html/GithubRepos.html")
    await initUserData()
    
    $('#aboutMe').click(async function(event) {
        console.log("aboutMe Clicked")
        // $('#contents').load("./html/AboutMe.html")
        await loadHtml('#contents', "./html/AboutMe.html")
    })
    
    $('#githubProfile').click(async function(event) {
        $('#contents').load("./html/GithubProfile.html")
        // await loadHtml('#contents', "./html/GithubProfile.html")
        await initUserData()
        debugConsoleLog()
        modifyHTMLGithub()
        
        
        // userData.repos.sort(function(a, b) {})
        
        

    })
    
    $('#repos').click(async function(event) {
        console.log("third Clicked")
        // await loadHtml('#contents', "./html/GithubRepos.html")
        $('#contents').load("./html/GithubRepos.html")
        await initUserData()
        displayRepositories(userData.repos)
    })
})


let userData = {
    name: "",
    avatar_url: "",
    email: "",
    location: "",
    bio: "",
    followers: -1,
    following: -1,
    account_created: "",
    account_updated: "",

    repos_data_url: "",
    repos: [],

}

class UserRepoData
{
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.full_name = data.full_name;
        this.repo_desc = data.description == null ? "<i>No description</i>" : data.description;
        this.lang = data.language;
        this.repo_url = data.html_url;
        this.created_time = removeUnnecessaryChar(data.created_at);
        this.updated_time = removeUnnecessaryChar(data.updated_at);
        this.pushed_time = removeUnnecessaryChar(data.pushed_at);
    }
}

function debugConsoleLog() {
    console.log(userData)

    for(let i=0; i<userData.repos.length; i++) {
        let repoData = userData.repos[i];
        console.log(repoData.name)
    }
}

async function loadHtml(selector, htmlPath) {
    await $(selector).load(htmlPath)
}


