<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>

<style type="text/css">
.my-hover-class:hover {
    /* Add your hover effect styles here */
    background-color: #f0f0f0; /* Change the background color on hover */
    color: #000; /* Change the text color on hover */
    /* Add any other styles you want to apply on hover */
}


	.navbar-vertical .navbar-collapse {
		height: unset !important;
	}
	.navbar-vertical .navbar-collapse .nav-link {
		padding-top: 0.2rem !important;
    	padding-bottom: 0.2rem !important;
	}
</style>

<aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
     
     <!--Main Navigation-->
<header>
  <!-- Sidebar -->
<aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ps ps--active-y" id="sidenav-main">
	<div class="sidenav-header" style = "height:100px;align: center">
		<i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
		<a class="navbar-brand m-1" href="/dashboard" style = "padding-top:0px;">
			<br>
 			<img  style="min-height:80px;padding-left:13%;" src="<c:url value='/resources/assets/img/logos/insynch.png' />" alt="main_logo">
			<!-- <span class="ms-1 font-weight-bold">InSynch</span> -->
		</a>
	</div>
	<hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse w-auto h-auto ps" id="sidenav-collapse-main">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="dashboard">
					<div class="icon icon-shape icon-sm text-center   d-flex align-items-center">
					<i class="fa fa-dashboard text-dark text-sm"></i>
					</div>
					<span class="nav-link-text ms-1">Dashboard</span>
				</a>
			</li>

		<li class="nav-item">
			<a class="nav-link btn btn-primary text-white" href="#" onclick='$("#logout-form").submit()'>
				<div class="icon icon-shape icon-sm text-center  me-2 d-flex align-items-center ">
					<i class="fa fa-lock"></i>
				</div>
				<span class="nav-link-text ">Logout</span>
			</a>
		</li>   
         </ul>
         <form id="logout-form" action='<c:url value="/logoutProcessUrl"/>' method="post">
    					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					</form>
      </div>
	</aside>
  <!-- Sidebar -->

 
</header>
<script>

</script>
<!--Main Navigation-->

<!--Main layout-->
<main style="margin-top: 58px;">
  <div class="container pt-4"></div>
</main>
<!--Main layout-->
     

<!--Main Navigation-->

<!--Main layout-->
<main style="margin-top: 58px;">
  <div class="container pt-4"></div>
</main>
<!--Main layout-->
--%>
<style type="text/css">
<!--
body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-right: 20px;
      padding-left: 20px;
  }
}
--%>
/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style> 
</aside>
  
  