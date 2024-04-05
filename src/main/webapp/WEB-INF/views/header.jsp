<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Search Page</title>
    <!-- Bootstrap CSS -->
 	 <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
 	 <style>
 	 header {
    /*  background-image: url('images/lightt.jpg');  *//* Replace 'your-background-image.jpg' with the path to your image */
     background-size: cover;
     color: blue; /* Text color */
     padding: 50px 0; /* Adjust padding as needed */
     text-align: center; /* Center text */
   }
        .rail-image {
            width: 280px; /* Adjust width as needed */
            height: auto; /* Maintain aspect ratio */
           margin-left:1000px
        }
        .project-name {
            font-size: 40px; 
            font-weight: bold;
            text-align: center;
            flex-grow: 1;
            color: #3f00ff ; 
            margin-right:1000px
        }
        .header-image {
            width: auto; 
            height: auto;
            margin-left: 20px;
        }
        
         @media screen and (max-width: 768px) {
            /* Media query for smaller screens */
            .header {
                flex-direction: column;
                align-items: center;
            }
            .rail-image,
            .header-image {
                margin: 10px 0;
            }
        }
 	 </style>
 	 
 	 </head>
<body>
<header>
<div class="header">
    	<img src='images/rmrail.png' alt="Header Image" class="rail-image">
   		 <div class="project-name">UTS Mobile Ticketing</div>
       <!--  <img src='images/ttrain.png' alt="Header Image" class="header-image"> -->
    </div>
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

<!-- Bootstrap JS (Optional, only if you require Bootstrap JavaScript functionalities) -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>