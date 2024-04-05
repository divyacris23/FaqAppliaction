<!-- FAQ 3 - Bootstrap Brain Component -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.nio.file.*, com.fasterxml.jackson.databind.ObjectMapper, java.util.Map, java.util.List"%>

<!DOCTYPE html>
<html>
<head>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.3/components/faqs/faq-3/assets/css/faq-3.css">
<script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<meta charset="UTF-8">
<title>FAQ</title>
    
</head>
<body>
<header>
<%@ include file="left-side-bar.jsp" %>
</header>


<section class="bsb-faq-3 py-3 py-md-5 py-xl-8">
  <div class="container">
  
  <form action="/search" method="get" class="my-3">
            <div class="input-group">
                
                <input type="text" class="form-control form-control-md" aria-label="Medium" id="searchQuery" name="query" placeholder="Type Your Qus" required>
                <div class="input-group-append">
                    <input type="submit" value="Search">
                </div>
            </div>
        </form>
    <!-- <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center">Frequently Asked Questions</h2>
        <p class="text-secondary text-center lead fs-4">Welcome to our FAQ page, your one-stop resource for answers to commonly asked questions.</p>
        <p class="mb-5 text-center">Whether you're a new customer looking to learn more about what we offer or a long-time user seeking clarification on specific topics, this page has clear and concise information about our products and services.</p>
         <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
      </div>
    </div> -->
  </div>

  <!-- FAQs: My Account -->
  <div class="mb-8">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-xl-10">
          <div class="d-flex align-items-end mb-5">
            <i class="bi bi-cart-plus me-3 lh-1 display-5"></i>
            <h3 class="m-0">Utsonmobile Application Related Query</h3>
          </div>
        </div>
        <div class="col-11 col-xl-10">
          <div class="accordion accordion-flush" id="faqAccount">
            <div class="accordion-item bg-transparent border-top border-bottom py-3">
              <h2 class="accordion-header" id="faqAccountHeading1">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
                  Who can use the utsonmobile application?
                </button>
              </h2>
              <div id="faqAccountCollapse1" class="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
                <div class="accordion-body">
                  <p>The services are not available to persons under the age of 17 or to anyone previously suspended or removed from the services by Indian Railways. By accepting the Terms & Conditions or by otherwise using the Services or the Site, you represent that You are at least 17 years of age and have not been previously suspended or removed from the Services. You represent and warrant that you have the right, authority, and capacity to enter into this Agreement and to abide by all the terms and conditions of this Agreement. You shall not impersonate any person or entity, or falsely state or otherwise misrepresent identity, age or affiliation with any person or entity.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="accordion-header" id="faqAccountHeading2">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse2" aria-expanded="false" aria-controls="faqAccountCollapse2">
                 How to download the utsonmobile application?
                </button>
              </h2>
              <div id="faqAccountCollapse2" class="accordion-collapse collapse" aria-labelledby="faqAccountHeading2">
                <div class="accordion-body">
                  <p>The Android version of the application can be downloaded from Google Play Store. The Windows version of the application can be downloaded from the Windows Store and the iOS version can be downloaded from the Apple store. The application is free to download..</p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="accordion-header" id="faqAccountHeading3">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse3" aria-expanded="false" aria-controls="faqAccountCollapse3">
                 What are the pre-requisites to avail the utsonmobile application service?
                </button>
              </h2>
              <div id="faqAccountCollapse3" class="accordion-collapse collapse" aria-labelledby="faqAccountHeading3">
                <div class="accordion-body">
                  <p>The passenger should have Android/Windows/iPhone smartphone only. The phone should have minimum GPRS connectivity to use the services. The passenger should have money in their Railway Wallet (R-Wallet) or use Net-banking/Debit/Credit card facility. In order to book paperless tickets, the smart phone should be GPS enabled.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQs: Placing an Order -->
  <div class="mb-8">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-xl-10">
          <div class="d-flex align-items-end mb-5">
          <i class="bi bi-person-gear me-3 lh-1 display-5"></i>
            <!-- <i class="bi bi-cart-plus me-3 lh-1 display-5"></i> -->
            <h3 class="m-0">Registration and Login Related Query</h3>
          </div>
        </div>
        <div class="col-11 col-xl-10">
          <div class="accordion accordion-flush" id="faqOrder">
            <div class="accordion-item bg-transparent border-top border-bottom py-3">
              <h2 class="accordion-header" id="faqOrderHeading1">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse1" aria-expanded="false" aria-controls="faqOrderCollapse1">
                 Is it mandatory to register for using the utsonmobile system?
                </button>
              </h2>
              <div id="faqOrderCollapse1" class="accordion-collapse collapse" aria-labelledby="faqOrderHeading1">
                <div class="accordion-body">
                  <p>Yes, it is mandatory to register.</p>
                </div>
              </div>
            </div>
            
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="accordion-header" id="faqOrderHeading2">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqOrderCollapse2" aria-expanded="false" aria-controls="faqOrderCollapse2">
                  Where to do registration?
                </button>
              </h2>
              <div id="faqOrderCollapse2" class="accordion-collapse collapse" aria-labelledby="faqOrderHeading2">
                <div class="accordion-body">
                  <p>Registration can be done through mobile phone application or website <b>(https://www.utsonmobile.indianrail.gov.in).</b> The passenger first will get registered by providing his/her mobile number, name, password, gender and date of birth. After successful registration, an SMS will be sent to the user with login-id and password and zero-balance R-Wallet will be created without any additional cost.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQs: Refunds and Exchanges -->
  <div class="mb-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11 col-xl-10">
          <div class="d-flex align-items-end mb-5">
            <i class="bi bi-bag-dash me-3 lh-1 display-5"></i>
            <h3 class="m-0">R-Wallet Payment Related Query</h3>
          </div>
        </div>
        <div class="col-11 col-xl-10">
          <div class="accordion accordion-flush" id="faqRefund">
            <div class="accordion-item bg-transparent border-top border-bottom py-3">
              <h2 class="accordion-header" id="faqRefundHeading1">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqRefundCollapse1" aria-expanded="false" aria-controls="faqRefundCollapse1">
                  What is a R-Wallet?
                </button>
              </h2>
              <div id="faqRefundCollapse1" class="accordion-collapse collapse" aria-labelledby="faqRefundHeading1">
                <div class="accordion-body">
                  <p>R-Wallet is closed wallet of Indian Railways. Being a closed wallet, all the rules of RBI for Closed Wallet will apply to this wallet also.</p>
                  <ul>
                    <li>The R-Wallet with zero-balance will be created without any additional cost upon successful registration by the passenger. The minimum recharge value is Rs.100 and multiples of Rs.100 which can grow up to Rs. 10000/-.The maximum stored-value amount in this R-Wallet is Rs.10000.
                    Currently, there is 3% bonus on every R-Wallet recharge (for limited period only).</li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="accordion-header" id="faqRefundHeading2">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqRefundCollapse2" aria-expanded="false" aria-controls="faqRefundCollapse2">
                  Is it necessary to top up the inbuilt R-Wallet?
                </button>
              </h2>
              <div id="faqRefundCollapse2" class="accordion-collapse collapse" aria-labelledby="faqRefundHeading2">
                <div class="accordion-body">
                  <p>No, it is not mandatory to top-up the R-Wallet. The application is integrated with the other payment options like Net-banking/Debit card/Credit card/UPI/Wallets through Paytm, MobiKwik, FreeCharge payment aggregators.</p>
                  
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="accordion-header" id="faqRefundHeading3">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqRefundCollapse3" aria-expanded="false" aria-controls="faqRefundCollapse3">
                  How to Recharge R-Wallet?
                </button>
              </h2>
              <div id="faqRefundCollapse3" class="accordion-collapse collapse" aria-labelledby="faqRefundHeading3">
                <div class="accordion-body">
                  <p>R-Wallet will be issued with zero balance to all the users upon successful registration in the system either through utsonmobile mobile applications or website <b>(https://www.utsonmobile.indianrail.gov.in).</b> The user can recharge their R-Wallet at the UTS counters available at Railway Stations or through the website (https://www.utsonmobile.indianrail.gov.in). R-Wallet will be recharged instantly after completion of recharge process. However, if R-Wallet recharge gets failed and money has been deducted from customer's bank account, R-Wallet will be recharged with the same amount after getting confirmation from bank in settlement process. This process will take 2 to 3 working days.
					<br>
					<br>Currently, there is 3% bonus on every R-Wallet recharge (for limited period only).</p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="accordion-header" id="faqRefundHeading4">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqRefundCollapse4" aria-expanded="false" aria-controls="faqRefundCollapse4">
                   How to check the R-Wallet balance?
                </button>
              </h2>
              <div id="faqRefundCollapse4" class="accordion-collapse collapse" aria-labelledby="faqRefundHeading4">
                <div class="accordion-body">
                  <p>The user can check the balance of R-Wallet either in the UTS mobile applications or in the website <b>(https://www.utsonmobile.indianrail.gov.in).</b></p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="accordion-header" id="faqRefundHeading5">
                <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqRefundCollapse5" aria-expanded="false" aria-controls="faqRefundCollapse5">
                 How to surrender my R-Wallet?
                </button>
              </h2>
              <div id="faqRefundCollapse5" class="accordion-collapse collapse" aria-labelledby="faqRefundHeading5">
                <div class="accordion-body">
                  <p>The passenger has to initiate the surrender R-Wallet request from the mobile application and he/she will get a secret code as SMS. The passenger has to go to the Railway Station and show the secret code to the booking operator and get the cash refund after deducting the clerkage amount. However, the surrender policy will change time to time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
  

</section>

</body>
</html>