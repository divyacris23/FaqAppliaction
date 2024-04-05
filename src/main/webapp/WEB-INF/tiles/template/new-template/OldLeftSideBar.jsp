<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>

<style type="text/css">
	.navbar-vertical .navbar-collapse {
		height: unset !important;
	}
	.navbar-vertical .navbar-collapse .nav-link {
		padding-top: 0.2rem !important;
    	padding-bottom: 0.2rem !important;
	}
</style>

<aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div class="sidenav-header" align="center">
      <img src="<c:url value='/resources/assets/img/logos/ircdma.jpg' />" class="img img-responsive img-fluid mt-2">
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
		
		<c:forEach items="${sessionScope.menuList}" var="menuList">
			<li class="nav-item">
				<a class="nav-link " href="<c:url value='${menuList.menuPath}' />">
					<div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
						<i class="${menuList.menuIcon} ${menuList.menuClass} text-sm opacity-10"></i>
					</div>
<%-- 					<span class="nav-link-text ms-1">${menuList.menuDesc} 1111</span>
 --%>				</a>
			</li>
		</c:forEach>
      <!--   <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
        </li> -->
        <li class="nav-item">
          <a class="nav-link " href="<c:url value='/user-profile/view-profile' />">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-single-02 text-danger text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">My Profile</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="#" data-toggle="modal" data-target="#contact-us-modal" >
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa fa-envelope text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Contact Us</span>
          </a>
        </li>
           <li class="nav-item">
          <a class="nav-link " href="<c:url value='/user-profile/demo-profile' />">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa fa-envelope text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Demo Profile</span>
          </a>
        </li>
            <li class="nav-item">
          <a class="nav-link " href="<c:url value='/user-profile/demo-profile-input' />">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa fa-envelope text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Demo Profile inputtttttt</span>
          </a>
        </li>
          <li class="nav-item">
          <a class="nav-link " href="<c:url value='/user-profile/demoMulInpProfile' />">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa fa-envelope text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Demo Profile Multi input</span>
          </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onclick='$("#logout-form").submit()'>
            	<div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
	              	<i class="fa fa-lock text-dark text-sm opacity-10"></i>
	            </div>
	            <span class="nav-link-text ms-1">Logout 1</span>
			</a>
                   <form id="logout-form" action='<c:url value="/logoutProcessUrl"/>' method="post">
    					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					</form>
        </li>

		<c:if test="${sessionScope.userProfile.userType=='D'|| sessionScope.userProfile.userType=='C' || sessionScope.userProfile.userType=='S' }">
			<li class="nav-item mt-3">
				<h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Help Documents</h6>
			</li>
			<c:if test="${sessionScope.userProfile.userType=='D' || sessionScope.userProfile.userType=='S' }">
				<li class="nav-item">
					<a class="nav-link" href="<c:url value='/download/help-doc?t=userdiv'/>">
						<div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa  fa-file-pdf-o text-danger text-sm opacity-10"></i>
						</div>
						<span class="nav-link-text ms-1">Division Manual</span>
					</a>
				</li>
			</c:if>
			<c:if test="${sessionScope.userProfile.userType=='D'|| sessionScope.userProfile.userType=='C' || sessionScope.userProfile.userType=='S' }">
				<li class="nav-item">
					<a class="nav-link" href="<c:url value='/download/help-doc?t=usercontrol'/>">
						<div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
							<i class="fa  fa-file-pdf-o text-danger text-sm opacity-10"></i>
						</div>
						<span class="nav-link-text ms-1">Control Center Manual</span>
					</a>
				</li>
			</c:if>
		</c:if>
		</ul>
	</div>
  <!-- 
  ///////////////////////////////////////// -->
  <!--Main Navigation-->
<%-- <header>
  <!-- Sidebar -->
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          class="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
        
           <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-lock fa-fw me-3"></i><span>Password</span></a
        >
       <c:forEach items="${sessionScope.menuList}" var="menuList">
       		 <a  href="<c:url value='${menuList.menuPath}' />" class="list-group-item list-group-item-action py-2 ripple">
          		<i class="${menuList.menuIcon}"></i><span>&nbsp; &nbsp; &nbsp; &nbsp; ${menuList.menuDesc}</span>
       		 </a>
        </c:forEach>
        
        
        
        	<c:forEach items="${sessionScope.menuList}" var="menuList">
			<li class="nav-item">
				<a class="nav-link " href="<c:url value='${menuList.menuPath}' />">
					<div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
						<i class="${menuList.menuIcon} ${menuList.menuClass} text-sm opacity-10"></i>
					</div>
					<span class="nav-link-text ms-1">${menuList.menuDesc}</span>
				</a>
			</li>
		</c:forEach>
        
        
        
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-lock fa-fw me-3"></i><span>Password</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-globe fa-fw me-3"></i><span>International</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-building fa-fw me-3"></i><span>Partners</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a
        >
        <a href="#" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
        >
      </div>
    </div>
  </nav>
  <!-- Sidebar -->

   
</header>
<!--Main Navigation-->

<!--Main layout-->
<main style="margin-top: 58px;">
  <div class="container pt-4"></div>
</main>
<!--Main layout-->

<style type="text/css">
body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}

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
</style> --%>
</aside>
  
  