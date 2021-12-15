"use strict";
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const errorMsgElement = document.getElementById("span#ErrorMsg");
const snap = document.getElementById("snap");

const constraints = {
  video: {
    width: 1280,
    height: 720,
  },
};
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
    I;
  }
}

function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

init();
