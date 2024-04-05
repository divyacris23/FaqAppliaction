<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="apple-touch-icon" sizes="76x76" href="/resources/assets/img/favicon.png">
	<link rel="icon" type="image/png" href="/resources/assets/img/favicon.png">
    <meta name="description" content="Indian Railways Content Distribution and Management Application" />
    <meta name="keywords" content="IRCDMA Indian Railways,Login, Railway, Content, Distribution, Management, Application">

	<meta name="_context" content="${pageContext.request.contextPath}"/>

	<tiles:insertAttribute name="cssResources" />
	
</head>
<body class="g-sidenav-show bg-gray-100">
  <div class="min-height-300 bg-primary position-absolute w-100"></div>
	
	<!-- Header End -->
	<!-- Left Sidebar Start -->
		<tiles:insertAttribute name="left-sidebar" />
	<!-- Left Sidebar End -->
	<!-- Main Start -->
	<main class="main-content position-relative border-radius-lg ">
		<!-- Header Start -->
        <tiles:insertAttribute name="header-content" />
		<tiles:insertAttribute name="body-content" />
	<!-- Footer Start -->
		<tiles:insertAttribute name="footer-content" />
	<!-- Footer End -->
	</main>
	<!-- Main End -->
	<tiles:insertAttribute name="jsResources" />
	<tiles:insertAttribute name="extrascript" />
</body>

<script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  </script>