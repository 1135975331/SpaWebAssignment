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


$('document').ready(async () => {
    $('#contents').load("./html/AboutMe.html")
    // $('#contents').load("./html/GithubProfile.html")
    // $('#contents').load("./html/GithubRepos.html")
    await initUserData("1135975331")
    
    $('.aboutMe').click(async (event) => {
        console.log("aboutMe Clicked")
        // $('#contents').load("./html/AboutMe.html")
        await loadHtml('#contents', "./html/AboutMe.html")
    })
    
    
    $('.githubProfile').click(async (event) => {
        $('#contents').load("./html/GithubProfile.html")
        // await loadHtml('#contents', "./html/GithubProfile.html")
        let loadProfile = async function(userName) {
            await initUserData(userName)
            debugConsoleLog()
            modifyHTMLGithub()
        }
        await loadProfile("1135975331")

        $('button.profile-search-button').on('click', async function(event) {
            // if(event.keyCode !== 13) return;
            console.log("profile search button clicked")
            let userName = $('.profile-search').val()

            await loadProfile(userName)
            $('#commitHistoryGraph').attr('src', `https://ghchart.rshah.org/${userName}`)
        })
        
        $('.profile-search').on('mouseenter', changeEasterEggLabelOnHover)
    })
    
    
    $('.repos').click(async (event)=> {
        console.log("Repo Clicked")
        // await loadHtml('#contents', "./html/GithubRepos.html")
        
        let itemsPerPage = 5;
        
        $('#contents').load("./html/GithubRepos.html")
        let loadRepos = async function(userName) {
            await initUserData(userName)
            // userData.repos.reverse();
            displayRepositories(userData.repos, itemsPerPage, 1)
            displayPageButtons(userData.repos.length, itemsPerPage, 1)


            // $('.list-page').off('click', '.list-page-number', listPageNumberClickFunc)
            $('.list-page').on('click', '.list-page-number', function() {
                console.log('page clicked')
                console.log(`${$(this).text()}`)
                let clickedPageNumber = parseInt($(this).text());
                displayRepositories(userData.repos, itemsPerPage, clickedPageNumber)
                displayPageButtons(userData.repos.length, itemsPerPage, clickedPageNumber)
            })
        }
        await loadRepos("1135975331")
        
        $('button.profile-search-button').on('click', async function(event) {
            console.log("profile search in repoList button clicked")
            let userName = $('.profile-search').val()
            
            await loadRepos(userName)
        })
        
        $('.profile-search').on('mouseenter', changeEasterEggLabelOnHover)
    })
    
    
    $('#navbarIcon').click(() => {
        $('.navbar').toggleClass('active')
    })
})


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

function changeEasterEggLabelOnHover() {
    console.log("changeEasterEggLabelOnHover")
    $('.easter-egg-text').text("Insert GitHub User Nickname")
}


