

function modifyHTMLGithub() {
    $('#avatar').attr('src', userData.avatar_url);
    $('#name>a').html(userData.name)
    $('#name>a').attr('href', `https://github.com/${userData.name}`)
    $('#bio').html(`"${userData.bio}"`)
    // $('#email').html("Email: " + userData.email)
    $('#email').html("Email: 1135975331@kangwon.ac.kr")
    $('#location').html("Location: " + userData.location)
    $('#followers').html("Followers: " + userData.followers)
    $('#following').html("Following: " + userData.following)
    $('#created').html("Account Created: " + userData.account_created)
    $('#updated').html("Account Updated: " + userData.account_updated)
}
