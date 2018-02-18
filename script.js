"use strict";
(function () {

  var photosPath = "photos/"

  var photosContainer = document.getElementById("photosContainer");

  function printPost(obj) {
    var postContainer = document.createElement("article");
    photosContainer.appendChild(postContainer);
    postContainer.className = obj.type + obj.photos.length;

    postContainer.id = "id_" + obj.photos[0];

    switch (obj.type) {
      case 'vhh':
        var firstPhotoContainer = document.createElement("div");
        postContainer.appendChild(firstPhotoContainer);
        printPhoto(firstPhotoContainer, obj.title, obj.photos[0]);
        var secondPhotoContainer = document.createElement("div");
        postContainer.appendChild(secondPhotoContainer);
        printPhoto(secondPhotoContainer, obj.title, obj.photos[1]);
        printPhoto(secondPhotoContainer, obj.title, obj.photos[2]);
        break;
      default:
        obj.photos.forEach(printPhoto.bind(null, postContainer, obj.title));
        break;
    }

    // printCaption(obj.title + " — " + obj.location, postContainer);
    printCaption(obj.location, postContainer);
  };

  function printPhoto(container, title, photo) {
    var imgElement = document.createElement("img");
    container.appendChild(imgElement);
    imgElement.setAttribute("src", photosPath + photo + '.jpg');
    imgElement.alt = title;
  };

  function printCaption(caption, container) {
    var descriptionContainer = document.createElement("p");
    container.appendChild(descriptionContainer);
    descriptionContainer.className = "caption";
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
