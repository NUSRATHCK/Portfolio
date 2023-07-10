function validation(){
  

  var email = document.getElementById('exampleInputEmail1').value;
  var reg = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/;
  var result= reg.test('email');


  alert("form has been submitted")
  return true;
}

