$('document').ready(function() {
    // $('#contents').load("./html/AboutMe.html")
    $('#contents').load("./html/GithubActivity.html")
    
    
    $('#aboutMe').click(function(event) {
        console.log("aboutMe Clicked")
        $('#contents').load("./html/AboutMe.html")
    })
    
    $('#githubCommits').click(async function(event) {
        $('#contents').load("./html/GithubActivity.html")
        
        await initUserData()
        await debugConsoleLog();
        await modifyHTMLGithub()
        
        
        // userData.repos.sort(function(a, b) {})
        
        

    })
    
    $('#third').click(function(event) {
        console.log("third Clicked")
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
        this.repo_desc = data.repo_desc;
        this.lang = data.lang;
        this.repo_url = data.repo_url;
        this.created_time = data.created_time;
        this.updated_time = data.updated_time;
        this.pushed_time = data.pushed_time;
    }
}

function debugConsoleLog() {
    console.log(userData)

    for(let i=0; i<userData.repos.length; i++) {
        let repoData = userData.repos[i];
        console.log(repoData.name)
    }
}



