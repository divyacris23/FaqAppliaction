<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.3/components/faqs/faq-3/assets/css/faq-3.css">
<script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <meta charset="UTF-8">
    <title>FAQ</title>
    <style>
        .category {
            margin-bottom: 20px;
        }
        

        .card-title {
            font-weight: bold;
            font-size: 1.2em;
            margin-bottom: 10px;
            cursor: pointer;
            text-decoration: underline;
            
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

		 body {
    background-image: url('images/light.jpg'); /* Replace with your image URL */
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Arial, sans-serif;
    padding: 20px;
  }

    </style>

    <script>
    function toggleCategory(categoryId) {
    	console.log("Hello world!");
        const category = document.getElementById(categoryId);
        category.style.display = (category.style.display === 'block') ? 'none' : 'block';
    }
    
    function toggleAnswer(categoryId) {
    	console.log("Hello world!");
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
<header>
<%@ include file="header.jsp" %>
</header>

<div class="container">

    <div class="row">
        <!-- Utsonmobile Application Related Query -->
        <div class="col-sm-6">
         <div class="category">
                <div class="card-title" onclick="toggleCategory('utsonmobile')">Utsonmobile Application Related Query</div>
                <div class="card" id="utsonmobile">
                    <div class="question" onclick="toggleAnswer('answeruts1')">Who can use the utsonmobile application?</div>
                    <div class="answer" id="answeruts1"><p>The services are not available to persons under the age of 17 or to anyone previously suspended or removed from the services by Indian Railways. By accepting the Terms & Conditions or by otherwise using the Services or the Site, you represent that You are at least 17 years of age and have not been previously suspended or removed from the Services. You represent and warrant that you have the right, authority, and capacity to enter into this Agreement and to abide by all the terms and conditions of this Agreement. You shall not impersonate any person or entity, or falsely state or otherwise misrepresent identity, age or affiliation with any person or entity.</p></div>

                    <div class="question" onclick="toggleAnswer('answeruts2')">How to download the utsonmobile application?</div>
                    <div class="answer" id="answeruts2"><p>The Android version of the application can be downloaded from Google Play Store. The Windows version of the application can be downloaded from the Windows Store and the iOS version can be downloaded from the Apple store. The application is free to download.</p></div>

                    <div class="question" onclick="toggleAnswer('answeruts3')">What are the pre-requisites to avail the utsonmobile application service?</div>
                    <div class="answer" id="answeruts3"><p>The passenger should have Android/Windows/iPhone smartphone only. The phone should have minimum GPRS connectivity to use the services. The passenger should have money in their Railway Wallet (R-Wallet) or use Net-banking/Debit/Credit card facility. In order to book paperless tickets, the smart phone should be GPS enabled.</p></div>
                </div>
            </div>
        </div>

        <!-- Registration and Login Related Query -->
        <div class="col-sm-6">
            <div class="category">
                <div class="card-title" onclick="toggleCategory('registration')">Registration and Login Related Query</div>
                <div class="card" id="registration">
                    <div class="question" onclick="toggleAnswer('answerrm1')">Is it mandatory to register for using the utsonmobile system?</div>
                    <div class="answer" id="answerrm1">Yes, it is mandatory to register.</div>

                    <div class="question" onclick="toggleAnswer('answerrm2')">Where to do registration?</div>
                    <div class="answer" id ="answerrm2">Registration can be done through mobile phone application or website <b>(https://www.utsonmobile.indianrail.gov.in).</b> The passenger first will get registered by providing his/her mobile number, name, password, gender and date of birth. After successful registration, an SMS will be sent to the user with login-id and password and zero-balance R-Wallet will be created without any additional cost.</div>
               
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- R-Wallet Payment Related -->
        <div class="col-sm-6">
            <div class="category">
                <div class="card-title" onclick="toggleCategory('payment')">R-Wallet Payment Related</div>
                <div class="card" id="payment">
                    <div class="question">Is it necessary to top up the inbuilt R-Wallet?</div>
                    <div class="answer">No, it is not mandatory to top-up the R-Wallet. The application is integrated with the other payment options like Net-banking/Debit card/Credit card/UPI/Wallets through Paytm, MobiKwik, FreeCharge payment aggregators.</div>

                    <div class="question">Is my payment information secure?</div>
                    <div class="answer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                
                	
                	<div class="question"> What is a R-Wallet?</div>
                    <div class="answer">R-Wallet is closed wallet of Indian Railways. Being a closed wallet, all the rules of RBI for Closed Wallet will apply to this wallet also.
				<br>
				The R-Wallet with zero-balance will be created without any additional cost upon successful registration by the passenger. The minimum recharge value is Rs.100 and multiples of Rs.100 which can grow up to Rs. 10000/-.The maximum stored-value amount in this R-Wallet is Rs.10000.
				<br>
				Currently, there is 3% bonus on every R-Wallet recharge (for limited period only).</div>
				
				<div class="question">  How to Recharge R-Wallet??</div>
                    <div class="answer">R-Wallet will be issued with zero balance to all the users upon successful registration in the system either through utsonmobile mobile applications or website (https://www.utsonmobile.indianrail.gov.in). The user can recharge their R-Wallet at the UTS counters available at Railway Stations or through the website (https://www.utsonmobile.indianrail.gov.in). R-Wallet will be recharged instantly after completion of recharge process. However, if R-Wallet recharge gets failed and money has been deducted from customer's bank account, R-Wallet will be recharged with the same amount after getting confirmation from bank in settlement process. This process will take 2 to 3 working days.
					<br>
					Currently, there is 3% bonus on every R-Wallet recharge (for limited period only)..</div>
                
                
                
                </div>
            </div>
        </div>

        <!-- Ticket Booking Related Query -->
        <div class="col-sm-6">
            <div class="category">
                <div class="card-title" onclick="toggleCategory('ticket')">Ticket Booking Related Query</div>
                <div class="card" id="ticket">
                    <div class="question" onclick="toggleAnswer('answer1')">Can a ticket be booked inside the station premises?</div>
                    <div class="answer" id="answer1"><p>According to the Railway commercial rule, a passenger should enter the Railway premises after purchasing the ticket. Hence, booking a ticket using utsonmobile application inside the station premises is not permissible.</p></div>

                    <div class="question">What are the modes of ticketing through utsonmobile application?</div>
                    <div class="answer">The passenger can book either Paperless or Paper mode of ticket. <b>Paperless Ticket:</b> While booking the ticket, the passenger current geo location will be checked using phone GPS and the ticket will be booked if the passenger is not inside the Railway fencing area like station premises and inside the train. The passenger can travel without taking hardcopy of the ticket. The smartphone should be GPS enabled. However, the GPS is not required to book/renew season tickets. <b>Paper Ticket:</b> The passenger can book ticket from anywhere. On successful booking of ticket, the passenger will get Booking ID along with other ticket details as SMS/Notification. The passenger should go to the source station and take print out from the ATVM, CoTVM, OCR machines using the booking ID. The passenger can also approach UTS booking counter to take ticket printout.</div>
                
                	<div class="question"> What are the types of ticket that can be bought from the utsonmobile application?</div>
                    <div class="answer">Three types of ticket can be bought such as Journey ticket, Season ticket and Platform ticket (both Paperless and Paper based).</div>
                	
                	<div class="question"> Is it necessary to take the print out of the ticket?</div>
                    <div class="answer">For Paperless mode, the print of the ticket is not required and not allowed.<br>
                   						For Paper based ticket, the print of the ticket is mandatory and travel without printed ticket will enforce penalty.</div>
                  
                    <div class="question"> How to take the print out of the paper based ticket?</div>
                    <div class="answer">The passenger should go to the source station and take print out from the ATVM, CoTVM, OCR machines using the booking ID. The passenger can also approach UTS booking counter to take ticket printout. Travel without printed ticket will enforce penalty.</div>

                    <div class="question">What to do if my paper ticket is not printed at the ATVM/CoTVM/OCR machines?</div>
                    <div class="answer">Immediately contact the booking office supervisor or call Railway customer care.</div>
                    
                    
                    <div class="question"> Is paperless Season ticket is valid from the same day of booking?</div>
                    <div class="answer">No. It is valid only from the next day of booking.</div>
                  
                    <div class="question">Is it necessary to carry the same proof of ID which is mentioned in the season ticket?</div>
                    <div class="answer">Always carry disclosed Identity card bearing same serial number used at the time of booking Season Ticket, without which the season ticket will be invalid and the passenger will be treated as without ticket.</div>

                    <div class="question">How to book paperless ticket without any hassle?</div>
                    <div class="answer">Check your phone GPS is enabled.<br>
							Check your R-wallet balance for sufficient money or use other payment options.<br>
							Book your ticket before entering the station premises.</div>
					
					<div class="question"> What to do if my paperless ticket is not booked, but money got deducted?</div>
                    <div class="answer">Click the "Show Booked Ticket" button available in the Main screen.<br>
						If the ticket is not visible, then call customer care. In case money is deducted and ticket not booked,
						then the money will be refund automatically to your account after 7 days.</div>	
					
					<div class="question">How to cancel a mobile ticket?</div>
                    <div class="answer">Paperless ticket is not allowed for cancellation.
								Paper ticket may be cancelled in the following method
								1. The cancellation of ticket through mobile application is allowed only if the ticket is not printed at the kiosk.

								2. Once, the ticket is printed at the kiosk, and then cancellation is allowed only at the UTS counter within one hour after printout.
								<br> In both cancellation method, there will not be any cash refund at the time of cancellation. The refund amount after deduction of clerkage charge,
								 if any, will be automatically topped up in the user R-Wallet or will be refunded to customers account.</div>	
					
					<div class="question"> How to show the paperless ticket to the TTE?</div>
                    <div class="answer">Without login, use "SHOW BOOKED TICKET" option available in the login screen or<br>
						After login, use SHOW BOOKED TICKET option available in the main menu..</div>	
                </div>
            </div>
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
