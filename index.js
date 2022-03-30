function User_save() {
  localStorage.removeItem("user");
  localStorage.setItem("user", document.getElementById("user_name").value);
  localStorage.setItem("order", "1");
}
document.getElementById("user_name").onchange = function () {
  User_save();
};
