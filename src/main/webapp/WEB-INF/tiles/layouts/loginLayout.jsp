<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">

<head>

	<meta charset="utf-8" />

	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="apple-touch-icon" sizes="76x76" href="/resources/assets/img/favicon.png">

	<link rel="icon" type="image/png" href="/resources/assets/img/favicon.png">

    <meta name="description" content="Indian Railways Content Distribution and Management Application" />

    <meta name="keywords" content="FAQ Indian Railways,Login, Railway, Content, Distribution, Management, Application">

	<meta name="_csrf" content="${_csrf.token}"/>

	<meta name="_csrf_header" content="${_csrf.headerName}"/>

	<meta name="_context" content="${pageContext.request.contextPath}"/>

	<title><tiles:insertAttribute name="title" /></title>

	<tiles:insertAttribute name="cssResources" />

	

</head>

 <style>

/* body {

  background-image: url('/IRCDMABOOT/resources/img/ircdmabg.png');

} */

</style> 

<body class="" style = "background-color: #684ecc;">

  

  <main class="main-content  mt-0">

    <section>

      <div class="page-header min-vh-100">

        <div class="container"    >

        

	

          <div class="row">

            <div class="col-xl-12 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">

            	<tiles:insertAttribute name="body-content" />

			</div>

            <!-- <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">

              <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style="background-image: url('../resources/img/ircdmavid3.png');

          background-size: cover;">

          <br>

          <br>

                <span class="mask bg-gradient-primary opacity-1"></span>

                <h4 class="mt-5 text-white font-weight-bolder position-relative">&nbsp;&nbsp;&nbsp;</h4>

               

              </div>

            </div> -->

          </div>

        </div>

      </div>

    </section>

  </main>

	<tiles:insertAttribute name="footer-content" />

</body>


<tiles:insertAttribute name="jsResources" />

</html>