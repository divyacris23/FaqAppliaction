<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Page</title>
    <!-- Bootstrap CSS -->
 	 <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
 	 <script>
        function toggleAnswer(id) {
            var answer = document.getElementById(id);
            answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
        }
    </script>
    <style>
      
      .header {
      background-image: url('images/back.jpg'); 
      background-repeat: no-repeat;/* Replace 'your-background-image.jpg' with the path to your image */
       background-size: cover;
      color: white; /* Text color */
      padding: 50px 0; /* Adjust padding as needed */
      text-align: center;
      background-position: left top;
      
    }
        .navbar-full-width {
            width: 100%;
        }
        .android-image {
            width: 80px; /* Adjust width as needed */
            height: 80px; /* Maintain aspect ratio */
            margin-left: 1000px;
            margin-right: 10px;
        }
        .apple-image {
            width: 80px; /* Adjust width as needed */
            height: 80px; /* Maintain aspect ratio */
            margin-left: 1000px;
            margin-right: 10px;
        }
         .question {
            cursor: pointer;
        }

        .answer {
            display: none;
            margin-top: 10px;
        }
         .active .answer {
            display: block;
        }
        
    </style>


</head>
<body>
<header>

</header>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-full-width">
    <div class="container">
        <a class="navbar-brand" href="#">Frequently Asked Questions</a>
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Getting Started</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Help</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">FAQ</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Main Content -->
<div class="container mt-5">
    <h1>Search Page</h1>
    <form action = "/search" method = "get" class="my-3">
    <div class="input-group">
        <input type="text" class="form-control" aria-label="Medium" id="searchInput" placeholder="Type Your Qus">
        <div class="input-group-append">
            <button type="submit" class="btn btn-primary">Search</button>
        </div>
    </div>
</form>

	<a href="https://play.google.com/store/apps/details?id=com.cris.utsmobile">
			<img src="images/android.png" alt="Android" class="android-image">
		</a>
		
		<a href="https://apps.apple.com/in/app/uts/id1357055366">
			<img src="images/apple.jpg" alt="Apple" class="apple-image">
		</a>

		<!-- Search Results (dummy content) -->

</div>

<div class="container mt-5">
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">UTS Mobile Application Qus</h5>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
         <div class="question">Who can use the utsonmobile application?</div>
          <div class="answer">The services are not available to persons under the age of 17 or to anyone previously suspended or removed from the services by Indian Railways. By accepting the Terms & Conditions or by otherwise using the Services or the Site, you represent that You are at least 17 years of age and have not been previously suspended or removed from the Services. You represent and warrant that you have the right, authority, and capacity to enter into this Agreement and to abide by all the terms and conditions of this Agreement. You shall not impersonate any person or entity, or falsely state or otherwise misrepresent identity, age or affiliation with any person or entity.</div>
		 </div>
        <div class="col-md-6">
          <div class="question">How to download the utsonmobile application?</div>
          <div class="answer">The Android version of the application can be downloaded from Google Play Store. The Windows version of the application can be downloaded from the Windows Store and the iOS version can be downloaded from the Apple store. The application is free to download.</div>

        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="question">What are the pre-requisites to avail the utsonmobile application service?</div>
          <div class="answer">The passenger should have Android/Windows/iPhone smartphone only. The phone should have minimum GPRS connectivity to use the services. The passenger should have money in their Railway Wallet (R-Wallet) or use Net-banking/Debit/Credit card facility. In order to book paperless tickets, the smart phone should be GPS enabled.</div>
                
        </div>
        <div class="col-md-6">
          <p> Is it mandatory to register for using the utsonmobile system?</p>
        </div>
      </div>
     
    </div>
  </div>
</div>



<!-- Bootstrap JS (Optional, only if you require Bootstrap JavaScript functionalities) -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>