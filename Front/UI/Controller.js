let buttonAdd = document.querySelector(".add");
buttonAdd.addEventListener("click", showAdd);

function showAdd() {
  let post = {};
  let conf;
  let add = document.getElementsByClassName("adding")[0];
  add.style.display = "grid";
  let image = add.querySelector("img");
  let descr = add.querySelector("textarea");
  let hash = add.querySelectorAll("input")[1];
  let b = false;
  let uploadPhoto = add.querySelector(".new-img");
  uploadPhoto.addEventListener('change', function(e) {
    let reader = new FileReader();
    let files = e.target.files;
    reader.onloadend = function() {
      image.src = reader.result;
    }
    let link = reader.readAsDataURL(files[0]);
    b = true;
  });
  add.querySelector(".confirm-add").addEventListener("click", conf = function(e) {
    post.desription = descr.value;
    if (hash.value !== "") {
      post.hashTags = hash.value.split("#");
      post.hashTags = post.hashTags.join("").split(" ");
    }
    post.photoLink = image.src;
    if (b) {
      if (!main.addPhotoPost(post))
        alert("Неккоректные данные");
      else {
        add.style.display = "none";
        descr.value = "";
        hash.value = "";
        image.src = "addphoto.png";
        uploadPhoto.value = "";
        b = false;
        add.querySelector(".confirm-add").removeEventListener("click", conf);
        addListeners();
      }
    } else alert("Загрузите фото");
  });
  add.querySelector(".close-add").addEventListener("click", function(e) {
    add.style.display = "none";
    add.querySelector(".confirm-add").removeEventListener("click", conf);
  });
}

let out = document.querySelector(".out");
out.addEventListener("click", logOut);

function logOut() {
  if (main.getUser() !== "") {
    main.logOut();
    document.getElementsByClassName("add")[0].style.display = "none";
    main.showPhotoPosts();
  } else {
    let t;
    let toLog = document.querySelector(".logIn");
    toLog.style.display = "grid";
    let login = toLog.querySelector("input");
    let passw = toLog.querySelectorAll("input")[1];
    let ok = toLog.querySelector("button");
    ok.addEventListener("click",t=function(e){
      if(login.value!=="" && passw.value!==""){
        toLog.style.display = "none";
        main.logIn(login.value);
        login.value="";
        passw.value="";
        document.getElementsByClassName("add")[0].style.display="flex";
        main.showPhotoPosts();
        this.removeEventListener("click",t);
    }
      else alert("Введите логин и пароль");
    });
  } //removeListeners();
}

function removeListeners() {
  let likes = document.querySelectorAll(".button");
  for (let i of likes)
    i.removeEventListener("click", liking);
}

let filter = document.querySelector(".filter-button");
filter.addEventListener("click", doFilter);

function doFilter() {
  let allFilters = document.querySelectorAll(".filter input");
  let name = allFilters[0].value;
  let date = allFilters[1].value;
  let hashTag = document.getElementById("filters");
  let hash = hashTag.options[hashTag.selectedIndex].text;
  let filter = {};
  if (name !== undefined && name !== "")
    filter.author = name;
  if (date !== undefined && date !== "")
    filter.createdAt = new Date(date);
  if (hash !== undefined && hash !== "") {
    filter.hashTags = [];
    filter.hashTags.push(hash);
  }
  scroll(0,0);
  main.showPhotoPosts(filter);
  addListeners();
}

let buttonsLike = document.querySelectorAll(".button");
for (let like of buttonsLike)
  like.addEventListener("click", liking);


function liking() {
  let user = main.getUser();
  let b = false;
  let post = main.getPhotoPost(this.id);
  for (let i = 0; i < post.likes.length; i++) {
    if (user === post.likes[i]) {
      post.likes.splice(i, 1);
      b = true;
      View.replacePost(post);
    }
  }
  if (!b) {
    post.likes.push(user);
    View.replacePost(post);
  }
  main.save();
  addListeners();
}

let deleteButt = document.querySelectorAll(".bin");
for (let del of deleteButt)
  del.addEventListener("click", deleting);

function deleting() {
  let user = main.getUser();
  main.removePhotoPost(this.id);
}

let settings = document.querySelectorAll(".setting");
for (let sett of settings)
  sett.addEventListener("click", showPaste);

function showPaste() {
  let settButton = this;
  let conf;
  let paste = document.getElementsByClassName("paste")[0];
  let post = main.getPhotoPost(settButton.id);
  paste.querySelector("img").src = post.photoLink;
  let descr = paste.querySelector("textarea");
  descr.value = post.desription;
  let hash = paste.querySelector("input");
  if (post.hashTags.length !== 0)
    hash.value = ("#" + post.hashTags.join(" #"));
  paste.style.display = "grid";
  let confirm = paste.querySelector(".confirm-paste");
  confirm.addEventListener("click", conf = function(e) {
    let newPost = {};
    newPost.id = post.id;
    newPost.author = post.author;
    newPost.photoLink = post.photoLink;
    newPost.createdAt = post.createdAt;
    newPost.likes = post.likes;
    newPost.desription = descr.value;
    newPost.hashTags = hash.value.split("#");
    newPost.hashTags = newPost.hashTags.join("").split(" ");
    if (!main.editPhotoPost(post.id, newPost))
      alert("Неккоректные данные");
    else {
      paste.style.display = "none";
      confirm.removeEventListener("click", conf);
      addListeners();
    }
  });
  let close = paste.querySelector(".close-paste");
  close.addEventListener("click", function(e) {
    paste.style.display = "none";
    paste.querySelector("img").src = "addphoto.png";
    paste.querySelector("textarea").value = "";
    paste.querySelector("input").value = "";
    confirm.removeEventListener("click", conf);
  });
}



function addListeners() {
  if (main.getUser()) {
    buttonsLike = document.querySelectorAll(".button");
    for (let like of buttonsLike)
      like.addEventListener("click", liking);
  }

  deleteButt = document.querySelectorAll(".bin");
  for (let del of deleteButt)
    del.addEventListener("click", deleting);

  settings = document.querySelectorAll(".setting");
  for (let sett of settings)
    sett.addEventListener("click", showPaste);
}
