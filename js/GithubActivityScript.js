async function initUserData() {
    await $.ajax({ url: 'https://api.github.com/users/1135975331', success: function(data) {
            // console.log(data)
            setUserData(userData, data)
        } });

    await $.ajax({ url: `${userData.repos_data_url}`, success: function(data) {
            // console.log(data);
            for(let i=0; i<data.length; i++) {
                let repoData = data[i];
                let userRepoDataInst = new UserRepoData(repoData);
                userData.repos.push(userRepoDataInst)
            }
        } });
}

function modifyHTMLGithub() {
    $('#avatar').attr('src', userData.avatar_url);
    $('#name').html(userData.name)
    $('#bio').html(`"${userData.bio}"`)
    // $('#email').html("Email: " + userData.email)
    $('#email').html("Email: 1135975331@kangwon.ac.kr")
    $('#location').html("Location: " + userData.location)
    $('#followers').html("Followers: " + userData.followers)
    $('#following').html("Following: " + userData.following)
    $('#created').html("Account Created: " + userData.account_created)
    $('#updated').html("Account Updated: " + userData.account_updated)
}

function setUserData(userData, data) {
    userData.name = data.login;
    userData.avatar_url = data.avatar_url;
    userData.email = data.email;
    userData.location = data.location;
    userData.bio = data.bio;
    userData.followers = data.followers;
    userData.following = data.following;
    
    userData.account_created = `${data.created_at}`.replace('T',' ').replace('Z', '');
    userData.account_updated = `${data.updated_at}`.replace('T',' ').replace('Z', '');
    
    
    userData.repos_data_url = data.repos_url;
}