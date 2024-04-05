<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="UTF-8">
    <title>FAQ</title>
    <style>
body {
	background-image: url('images/light.jpg');
	/* Replace with your image URL */
	background-size: cover;
	background-repeat: no-repeat;
	font-family: Arial, sans-serif;
	padding: 20px;
}

.category {
	margin-bottom: 20px;
}

.card-title {
	font-weight: bold;
	font-size: 1.2em;
	margin-bottom: 10px;
	cursor: pointer;
}

.card {
	border: 1px solid #ccc;
	border-radius: 5px;
	margin: 10px;
	padding: 10px;
}

.question {
	cursor: pointer;
}

.answer {
	display: none;
	margin-top: 10px;
}

.question:hover {
	text-decoration: underline;
}

.active .answer {
	display: block;
}
</style>

    <script>
    function toggleCategory(categoryId) {
        const category = document.getElementById(categoryId);
        category.style.display = (category.style.display === 'block') ? 'none' : 'block';
    }

    document.addEventListener('DOMContentLoaded', function() {
        const questions = document.querySelectorAll('.question');

        questions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = question.nextElementSibling;
                answer.classList.toggle('active');
            });
        });
    });

        </script>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-full-width">
  <div class="container">
    <a class="navbar-brand" href="#">UTS Mobile Ticketing</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div class="container">
<h2>Frequently Asked Questions</h2>



</br>

<div class="container">

   
    <div class="category">
        <div class="card-title" onclick="toggleCategory('utsonmobile')">Utsonmobile Application Related Query</div>
        <div class="card-body">
     		 <div class="row">
            <div class="question">Who can use the utsonmobile application?</div>
            <div class="answer">The services are not available to persons under the age of 17 or to anyone previously suspended or removed from the services by Indian Railways. By accepting the Terms & Conditions or by otherwise using the Services or the Site, you represent that You are at least 17 years of age and have not been previously suspended or removed from the Services. You represent and warrant that you have the right, authority, and capacity to enter into this Agreement and to abide by all the terms and conditions of this Agreement. You shall not impersonate any person or entity, or falsely state or otherwise misrepresent identity, age or affiliation with any person or entity.</div>

            <div class="question">How to download the utsonmobile application?</div>
            <div class="answer">The Android version of the application can be downloaded from Google Play Store. The Windows version of the application can be downloaded from the Windows Store and the iOS version can be downloaded from the Apple store. The application is free to download.</div>

            <div class="question">What are the pre-requisites to avail the utsonmobile application service?</div>
            <div class="answer">The passenger should have Android/Windows/iPhone smartphone only. The phone should have minimum GPRS connectivity to use the services. The passenger should have money in their Railway Wallet (R-Wallet) or use Net-banking/Debit/Credit card facility. In order to book paperless tickets, the smart phone should be GPS enabled.</div>
       </div>
       </div>
       
        </div>
    </div>

    <!-- Registration and Login Related Query -->
    <div class="category">
        <div class="card-title" onclick="toggleCategory('registration')">Registration and Login Related Query</div>
        <div class="card" id="registration">
            <div class="question">Is it mandatory to register for using the utsonmobile system?</div>
            <div class="answer">Yes, it is mandatory to register.</div>

            <div class="question">Where to do registration?</div>
            <div class="answer">Registration can be done through mobile phone application or website (https://www.utsonmobile.indianrail.gov.in). The passenger first will get registered by providing his/her mobile number, name, password, gender and date of birth. After successful registration, an SMS will be sent to the user with login-id and password and zero-balance R-Wallet will be created without any additional cost.</div>
        </div>
    </div>

	<div class="container mt-5">
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">UTS Mobile Application Qus</h5>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <p>Who can use the utsonmobile application?</p>
        </div>
        <div class="col-md-6">
          <p> How to download the utsonmobile application?</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>What are the pre-requisites to avail the utsonmobile application service?</p>
        </div>
        <div class="col-md-6">
          <p> Is it mandatory to register for using the utsonmobile system?</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
           <div class="faq-item">
        <div class="question" onclick="toggleAnswer('answer1')">Question 1: What is Lorem Ipsum?</div>
        <div id="answer1" class="answer">Answer 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
    </div>
    
    <div class="faq-item">
        <div class="question" onclick="toggleAnswer('answer2')">Question 2: Why do we use it?</div>
        <div id="answer2" class="answer">Answer 2: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
    </div>
        </div>
      </div>
    </div>
  </div>
</div>
	
    <!-- R-Wallet Payment Related -->
    <div class="category">
        <div class="card-title" onclick="toggleCategory('payment')">R-Wallet Payment Related</div>
        <div class="card" id="payment">
            <div class="question">Is it necessary to top up the inbuilt R-Wallet?</div>
            <div class="answer">No, it is not mandatory to top-up the R-Wallet. The application is integrated with the other payment options like Net-banking/Debit card/Credit card/UPI/Wallets through Paytm, MobiKwik, FreeCharge payment aggregators.</div>

            <div class="question">Is my payment information secure?</div>
            <div class="answer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        </div>
    </div>

    <!-- Ticket Booking Related Query -->
    <div class="category">
        <div class="card-title" onclick="toggleCategory('ticket')">Ticket Booking Related Query</div>
        <div class="card" id="ticket">
            <div class="question">Can a ticket be booked inside the station premises?</div>
            <div class="answer">According to the Railway commercial rule, a passenger should enter the Railway premises after purchasing the ticket. Hence, booking a ticket using utsonmobile application inside the station premises is not permissible.</div>

            <div class="question">What are the modes of ticketing through utsonmobile application?</div>
            <div class="answer">The passenger can book either Paperless or Paper mode of ticket. <b>Paperless Ticket:</b> While booking the ticket, the passenger current geo location will be checked using phone GPS and the ticket will be booked if the passenger is not inside the Railway fencing area like station premises and inside the train. The passenger can travel without taking hardcopy of the ticket. The smartphone should be GPS enabled. However, the GPS is not required to book/renew season tickets. <b>Paper Ticket:</b> The passenger can book ticket from anywhere. On successful booking of ticket, the passenger will get Booking ID along with other ticket details as SMS/Notification. The passenger should go to the source station and take print out from the ATVM, CoTVM, OCR machines using the booking ID. The passenger can also approach UTS booking counter to take ticket printout.</div>
        </div>
    </div>

</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const questions = document.querySelectorAll('.question');

        questions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = question.nextElementSibling;
                answer.classList.toggle('active');
            });
        });
    });

</script>

</body>
</html>
