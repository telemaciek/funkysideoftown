"use strict";
(function () {

  var photosPath = "funkysideoftown.com/funkysideoftown/photos/"

  var photosContainer = document.getElementById("photosContainer");

  function printPost(obj) {
    var postContainer = document.createElement("article");
    photosContainer.appendChild(postContainer);
    postContainer.className = "post " + obj.type + obj.photos.length;
    postContainer.id = "id_" + obj.photos[0];

    var photoContainer = document.createElement("div");
    photoContainer.className = 'post-content';
    postContainer.appendChild(photoContainer);
    obj.photos.forEach(printPhoto.bind(null, photoContainer, obj.title));


    // printCaption(obj.title + " — " + obj.location, postContainer);
    printCaption(obj.location, postContainer);
  };

  function printPhoto(container, title, photo) {
    var imageContainer = document.createElement("div");
    var imgElement = document.createElement("img");
    imageContainer.appendChild(imgElement);
    container.appendChild(imageContainer);
    imgElement.setAttribute("data-src", photosPath + photo + '.jpg');
    imgElement.setAttribute("class", 'lazyload');
    imgElement.setAttribute("src", 'photo-placeholder.png');
    imgElement.alt = title;
  };

  function printCaption(caption, container) {
    var descriptionContainer = document.createElement("p");
    container.appendChild(descriptionContainer);
    descriptionContainer.className = "post-caption";
    descriptionContainer.innerHTML = caption;
  };

  photos
    .sort(function (current, next) {
      var currentTimestamp = (new Date(current.date)).getTime();
      var nextTimestamp = (new Date(next.date)).getTime();
      return nextTimestamp - currentTimestamp;
    })
    .forEach(function (obj) {
      printPost(obj);
    });

}());