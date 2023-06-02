

function modifyHTMLGithub() {
    $('#avatar').attr('src', userData.avatar_url);
    $('#name>a').html(userData.name)
    $('#name>a').attr('href', `https://github.com/${userData.name}`)
    $('#bio').html(`"${getBio(userData)}"`)
    $('#email').html("Email: " + getEmail(userData))
    // $('#email').html("Email: 1135975331@kangwon.ac.kr")
    $('#location').html("Location: " + getLocation(userData))
    $('#followers').html("Followers: " + userData.followers)
    $('#following').html("Following: " + userData.following)
    $('#created').html("Account Created: " + userData.account_created)
    $('#updated').html("Account Updated: " + userData.account_updated)
}

function getBio(userData) {
    return userData.bio === null ? `<i>No Bio Provided</i>` : userData.bio;
}

function getEmail(userData) {
    if(userData.name === "1135975331")
        return "1135975331@kangwon.ac.kr"
    else if(userData.email === null)
        return `<i>No Email Provided</i>`
    else
        return userData.email
}

function getLocation(userData) {
    return userData.location === null ? `<i>No Location Provided</i>` : userData.location;
}
