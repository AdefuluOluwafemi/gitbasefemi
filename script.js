function ValidateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Field must be filled out");
      return false;
    }
  }

  function ValidateForm() {
    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("Field must be filled out");
      return false;
    }
  }

  function ValidateForm() {
    var x = document.forms["myForm"]["number"].value;
    if (x == "") {
      alert("Field must be filled out");
      return false;
    }
  }

  function ValidateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Field must be filled out");
      return false;
    }
  }

  function ValidateForm(){
    var x = document.forms["myForm"]["password"].value;
    if (x == "") {
      alert("Field must be filled out");
      return false;
    }
  }

  function ajaxpost(){
    var data = new FormData();
  data.append("fname",document.getElementById("fname").value);
  data.append("lname",document.getElementById("lname").value);
  data.append("number",document.getElementById("number").value);
  data.append("email",document.getElementById("email").value);
    var xhr = new XMLHttpRequest();
 
    xhr.open("POST","PHP.php");
    xhr.onload = function() {
        
        alert(this.response);
    };
    xhr.send(data);

    return false;
  }
 

  