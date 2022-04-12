function here(eve, link) {
  let tapcontent = document.getElementsByClassName("tapcontent");
  for (let i = 0; i < tapcontent.length; i++) {
    tapcontent[i].style.display = "none";
  }

  let taplink = document.getElementsByClassName("taplink");
  for (let i = 0; i < taplink.length; i++) {
    taplink[i].classList.remove("active");
  }

  eve.currentTarget.classList.add("active");

  document.getElementById(link).style.display = "block";
}
