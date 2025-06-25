  // signup
  
  function signup(){
      let email = document.getElementById('uemail').value
      let pass = document.getElementById('upass').value
      localStorage.setItem("Email",email)
      localStorage.setItem("Password",pass)
      location.href = './signin.html'
       
   
  }
   

  //  signin

  function signin(){
       let email = document.getElementById('iemail').value
       let pass = document.getElementById('ipass').value
         
         
     if(
       localStorage.getItem("Email") == email &&
        localStorage.getItem("Password") == pass) {
        location.href='./wellcome.html'
      }
   
    else{

        alert('dobara sahi sey sign up kr k aye')
           location.href='./indux.html' 
    }
    
 }
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
    
   