function goToStudentPage() {
  var studentNumber = document.getElementById("studentNumber").value;
  var url = "https://sites.google.com/onedu.jje.go.kr/sjw" + studentNumber;
  window.location.href = url;
}
