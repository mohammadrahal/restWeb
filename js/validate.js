function validateform(){  
const name=document.getElementById('name'); 
const email=document.getElementById('email');  
//   console.log("hello world!")
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(email==null || email==""){  
  alert("please enter email");  
  return false;  
  }  
}  
