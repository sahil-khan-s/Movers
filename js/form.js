function sendMail() {
    var params = {
      name: document.getElementById("first-name").value,
      email: document.getElementById("mail").value,
      message: document.getElementById("comment").value,
    };
  
    const serviceID = "service_4r33pgs";
    const templateID = "template_31pxw5q";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("first-name").value = "";
          document.getElementById("mail").value = "";
          document.getElementById("comment").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }