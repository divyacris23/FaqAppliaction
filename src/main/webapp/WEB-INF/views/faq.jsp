<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="UTF-8">
    <title>FAQ</title>
    <style>
        .category {
            margin-bottom: 20px;
        }

        .category-title {
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
            text-decoration: underline;
            cursor: pointer;
            colour:blue
        }

        .answer {
            display: none;
            margin-top: 10px;
        }
        
        .question:hover .answer, .question.active .answer {
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
                question.classList.toggle('active');
            });
        });
    });

        </script>
</head>
<body>

<div class="container">

    <!-- Registration Related Questions -->
    <div class="category">
    
    <div class="card-header">
      <h5 class="card-title">Utsonmobile Application Related Query</h5>
    </div>
        
        <div class="card">
            <div class="question">Who can use the utsonmobile application?</div>
            <div class="answer">The services are not available to persons under the age of 17 or to anyone previously suspended or removed from the services by Indian Railways. By accepting the Terms & Conditions or by otherwise using the Services or the Site, you represent that You are at least 17 years of age and have not been previously suspended or removed from the Services. You represent and warrant that you have the right, authority, and capacity to enter into this Agreement and to abide by all the terms and conditions of this Agreement. You shall not impersonate any person or entity, or falsely state or otherwise misrepresent identity, age or affiliation with any person or entity.</div>

            <div class="question">How to download the utsonmobile application?</div>
            <div class="answer">The Android version of the application can be downloaded from Google Play Store.
                                The Windows version of the application can be downloaded from the Windows Store and the iOS version can be downloaded from the Apple store.
                                The application is free to download.</div>

            <div class="question">What are the pre-requisites to avail the utsonmobile application service?</div>
            <div class="answer">The passenger should have Android/Windows/iPhone smartphone only. The phone should have minimum GPRS connectivity to use the services. The passenger should have money in their Railway Wallet (R-Wallet) or use Net-banking/Debit/Credit card facility. In order to book paperless tickets, the smart phone should be GPS enabled.</div>
        </div>
    </div>

    <!-- General Questions -->
    <div class="category">
        <div class="category-title">Registration and Login Related Query</div>
        <div class="card">
            <div class="question"> Is it mandatory to register for using the utsonmobile system?</div>
            <div class="answer">Yes, it is mandatory to register.</div>

            <div class="question"> Where to do registration?</div>
            <div class="answer">Registration can be done through mobile phone application or website (https://www.utsonmobile.indianrail.gov.in).

                                The passenger first will get registered by providing his/her mobile number, name, password, gender and date of birth.

                                After successful registration, an SMS will be sent to the user with login-id and password and zero-balance R-Wallet will be created without any additional cost.</div>


        </div>
    </div>

    <!-- Payment Related Questions -->
    <div class="category">
        <div class="category-title">R-Wallet Payment Related</div>
        <div class="card">
            <div class="question"> Is it necessary to top up the inbuilt R-Wallet?</div>
            <div class="answer">No, it is not mandatory to top-up the R-Wallet. The application is integrated with the other payment options like Net-banking/Debit card/Credit card/UPI/Wallets through Paytm, MobiKwik , FreeCharge payment aggregators.</div>

            <div class="question">Q8: Is my payment information secure?</div>
            <div class="answer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>

        </div>
    </div>

            <div class="category-title">Ticket Booking Related Query</div>
            <div class="card">
            <div class="question"> Can a ticket be booked inside the station premises?</div>
            <div class="answer">According to the Railway commercial rule, a passenger should enter the Railway premises after purchasing the ticket. Hence, booking a ticket using utsonmobile application inside the station premises is not permissible.</div>

       <div class="question"> What are the modes of ticketing through utsonmobile application?</div>
        <div class="answer">The passenger can book either Paperless or Paper mode of ticket.

        <b>Paperless Ticket:</b> While booking the ticket, the passenger current geo location will be checked using phone GPS and the ticket will be booked if the passenger is not inside the Railway fencing area like station premises and inside the train. The passenger can travel without taking hardcopy of the ticket. The smartphone should be GPS enabled. However, the GPS is not required to book/renew season tickets.
        <b>Paper Ticket:</b> The passenger can book ticket from anywhere. On successful booking of ticket, the passenger will get Booking ID along with other ticket details as SMS/Notification. The passenger should go to the source station and take print out from the ATVM, CoTVM, OCR machines using the booking ID. The passenger can also approach UTS booking counter to take ticket printout.</div>
        </div>
    </div>

</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const questions = document.querySelectorAll('.question');

        questions.forEach(question => {
            question.addEventListener('click', function() {
                question.classList.toggle('active');
            });
        });
    });
</script>

</body>
</html>
