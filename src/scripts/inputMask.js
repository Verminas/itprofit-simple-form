import Inputmask from "inputmask";

const inputPhone = document.getElementById("telephone");

const im = new Inputmask("+375 (99) 999-99-99");
im.mask(inputPhone);