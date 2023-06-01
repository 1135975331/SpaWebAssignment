function displayRepositories(repositoryDataArr/*: UserRepoData[]*/) {
    
    // repositoryDataArr.sort(function)
    // let itemsPerPage = 10;
    
    let infoListHtml = '';
    $('#repoInfoList').html(infoListHtml);
    
    
    for(let i = 0; i < repositoryDataArr.length; i++) {
        let repoData = repositoryDataArr[i];
        // infoListHtml += 
        let infoListHtml = 
            `<li class="repo-list-item">
                <div class="repo-box">
                    <a class="repo-name" href="${repoData.repo_url}">${repoData.name}</a>
                    <p class="repo-id">ID: ${repoData.id}</p>
                    <p class="repo-lang">${repoData.lang}</p>
                    <p class="repo-desc">${repoData.repo_desc}</p>
                    <br>
                    <p class="repo-created">Repo Created: ${repoData.created_time}</p>
                    <p class="repo-updated">Last Updated: ${repoData.updated_time}</p>
                    <p class="repo-pushed">Last&nbsp; Pushed: ${repoData.pushed_time}</p>
                </div>
            </li>`;
        
        $('#repoInfoList').append(infoListHtml);
    }
    
}