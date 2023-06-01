

function modifyHTMLGithub() {
    $('#avatar').attr('src', userData.avatar_url);
    $('#name>a').html(userData.name)
    $('#name>a').attr('href', `https://github.com/${userData.name}`)
    $('#bio').html(`"${userData.bio}"`)
    $('#email').html("Email: " + getEmail(userData))
    // $('#email').html("Email: 1135975331@kangwon.ac.kr")
    $('#location').html("Location: " + getLocation(userData))
    $('#followers').html("Followers: " + userData.followers)
    $('#following').html("Following: " + userData.following)
    $('#created').html("Account Created: " + userData.account_created)
    $('#updated').html("Account Updated: " + userData.account_updated)
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
    if(userData.location === null)
        return `<i>No Location Provided</i>`
    else
        return userData.location
}
