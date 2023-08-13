let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrImage.src =
      "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1691824841~exp=1691825441~hmac=24f9d1eb2dd1bebdf51cb04f7f3f8ff83547069d0d20d7e936c03506c7786c97";
    imgBox.classList.add("show-img");
  }
}
