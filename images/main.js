const linksSocialMedia = {
  github: 'maxwillian29',
  youtube: 'Mandiocaa',
  instagram: 'max_wsilva',
  facebook: 'max.kaka.9',
  twitter: 'max_wsilva'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userGitHub.href = data.html_url
      fotoPessoal.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
