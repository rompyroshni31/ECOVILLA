var firebaseConfig = {
  apiKey: "AIzaSyCsRWRWb4rxJNEXuhOIN0a1mYEF5ss2CdI",
  authDomain: "echovilla-9a605.firebaseapp.com",
  databaseURL: "https://echovilla-9a605-default-rtdb.firebaseio.com",
  projectId: "echovilla-9a605",
  storageBucket: "echovilla-9a605.appspot.com",
  messagingSenderId: "881174352279",
  appId: "1:881174352279:web:5bd12f583f63123c2734d2",
  measurementId: "G-GRP7XNXGEV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
  
    // Save message
    saveMessage(name, company, email, phone);
  
    // Show alert
    document.querySelector('.alert').contactUs.display = 'block';
  
    // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').contactUs.display = 'none';
    // },3000);
  
    // Clear form
    function show_alert() {
      alert("Your details has been sent successfully!");
    }
     document.getElementById('contactForm').reset();
   }
  
  // Function to get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
    });
  }