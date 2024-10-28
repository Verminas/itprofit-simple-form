import Inputmask from "inputmask";

const inputPhone = document.getElementById("phone");

const im = new Inputmask({mask: "+375 (99) 999-99-99", placeholder: "+375 (99) 999-99-99", autoUnmask: true});
im.mask(inputPhone);