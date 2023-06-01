async function initUserData() {
    await $.ajax({ url: 'https://api.github.com/users/1135975331', success: function(data) {
            // console.log(data)
            setUserData(userData, data)
        } });

    await $.ajax({ url: `${userData.repos_data_url}`, success: function(data) {
            // console.log(data);
            userData.repos = [];
            for(let i=0; i<data.length; i++) {
                let repoData = data[i];
                let userRepoDataInst = new UserRepoData(repoData);
                userData.repos.push(userRepoDataInst)
            }
        } });
}

function setUserData(userData, data) {
    userData.name = data.login;
    userData.avatar_url = data.avatar_url;
    userData.email = data.email;
    userData.location = data.location;
    userData.bio = data.bio;
    userData.followers = data.followers;
    userData.following = data.following;

    userData.account_created = removeUnnecessaryChar(`${data.created_at}`);
    userData.account_updated = removeUnnecessaryChar(`${data.updated_at}`);


    userData.repos_data_url = data.repos_url;
}

function removeUnnecessaryChar(timeStr/*: string*/) {
    if(typeof(timeStr) !== 'string') return "";
    
    return timeStr.replace('T',' ').replace('Z', '');
}