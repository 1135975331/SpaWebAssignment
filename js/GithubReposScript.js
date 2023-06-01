function displayRepositories(repositoryDataArr/*: UserRepoData[]*/, itemsPerPage, curRepoListPage) {
    
    // repositoryDataArr.sort(function)
    
    $('#repoInfoList').html('');

    for (let i = itemsPerPage * (curRepoListPage-1); i < itemsPerPage * curRepoListPage && i < repositoryDataArr.length ; i++) {
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
                <p class="repo-pushed">Last&nbsp; Pushed: ${repoData.pushed_time}</p>
                <p class="repo-updated">Last Updated: ${repoData.updated_time}</p>
            </div>
        </li>`;
        
        $('#repoInfoList').append(infoListHtml);
    }
}

function displayPageButtons(repoDataArrLen, itemsPerPage, curRepoListPage) {
    $('.list-page').html('');
    
    let totalPages = Math.ceil(repoDataArrLen / itemsPerPage);
    
    for(let i = 1; i <= totalPages; i++) {
        if(i === curRepoListPage)
            $('.list-page').append(`<li class="list-page-number" id="pageSelected">${i}</li>`);
        else
            $('.list-page').append(`<li class="list-page-number">${i}</li>`);
    }
    
}