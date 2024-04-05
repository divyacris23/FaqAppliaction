<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>

<style type="text/css">
.sidebar .nav-dropdown.open > .nav-dropdown-items {
      padding-left: 20px;
      max-height: fit-content !important; }
</style>

<div class="sidebar">
    <nav class="sidebar-nav" id="sidebar-nav-scroller">
    	<!-- <div class="container">
       		<div class="navbar-search col-md-12">
   				<div class="row">
			        <button type="submit" class="col-md-2" style="display: inline-block;border: none;margin-left: -5px !important;background: white;color: #c2cfd6;">
			            <i class="mdi mdi-magnify"></i>
			        </button>
				        <input name="findMenu" id="findMenu" type="text" class="form-control col-md-10" placeholder="Find Menu" style="-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;/* background: white; */min-height: 35px;/* border: none !important; *//* padding: 10px; */background-color: #ffffff;width: 100%;">
			    </div>
		    </div>
		</div> -->
		
		<c:set var ="userLocale" scope="page" value = "${pageContext.response.locale }"/>
        <ul class="nav" id="left-sidebar">
        	<li class="nav-item">
        		
        	</li>
            <li class="nav-item nav-dropdown">
                <a class="nav-link" href="<c:url value='/dashboard'/>">
                    <i class="mdi mdi-gauge"></i> <spring:message code="webapp.leftsidebar.dashboard" />
                    <!-- <span class="badge badge-main badge-boxed badge-warning">New</span> -->
                </a>
            </li>

            <%--<li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-account"></i> <spring:message code="webapp.leftsidebar.employeeMaster" /></a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="<c:url value='/create-employee'/>"> <spring:message code="webapp.leftsidebar.employeeMaster.createEmployee" /></a>
                    </li>
                </ul>
            </li>--%>

			<%--<li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-menu"></i> <spring:message code="webapp.leftsidebar.menuSection" /></a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="<c:url value='/menu-section/menu-entry'/>"> <spring:message code="webapp.leftsidebar.menuSection.menuEntry" /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<c:url value='/menu-section/menu-rights'/>"> <spring:message code="webapp.leftsidebar.menuSection.menuRights" /></a>
                    </li>
                </ul>
            </li>

            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-account"></i> <spring:message code="webapp.leftsidebar.employeeMaster" /></a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="<c:url value='/create-employee'/>"> <spring:message code="webapp.leftsidebar.employeeMaster.createEmployee" /></a>
                    </li>
                </ul>
            </li>

            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-account"></i> <spring:message code="create.organization.unit" /></a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="<c:url value='/create-unit'/>"> <spring:message code="create.organization.unit" /></a>
                    </li>
                </ul>
            </li>--%>
            
            <!-- <li class="nav-title">Layouts</li>
            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-atom"></i> Apps
                    <span class="badge badge-main badge-boxed badge-warning">New</span>
                </a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Calendar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Mailbox</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Direct Message</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Projects
                            <span class="badge badge-sub badge-boxed badge-warning">New</span>
                        </a>
                    </li>
                </ul>

            </li>
            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-layers"></i> Layouts</a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Blank Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Sidebar Colored</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Sidebar Light </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Minimized Sidebar Light</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Minimized Sidebar Colored</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Compact Sidebar Light</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Compact Sidebar Colored</a>
                    </li>
                </ul>

            </li>
            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-book-open-page-variant"></i> Pages</a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Signup</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Log In</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Lock Screen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Forgot Password</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Maintenance</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> 400 Bad Request</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> 403 Forbidden</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> 404 Not Found</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> 500 Internal Server Error</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> 503 Service Unavailable</a>
                    </li>
                </ul>

            </li>

            <li class="nav-title">
                UI Elements
            </li>
            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-chart-bubble"></i> UI Components </a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Alerts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Badges</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Breadcrumbs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Buttons</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Cards</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Carousel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Dropdowns</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">List Groups</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Modals</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Tabs & Accordions </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Pagination</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Progress</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Tooltip & Popover</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-developer-board"></i> Advanced UI </a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> User Cards</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Alertify </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Bootstrap Switch </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Bootbox & Sweetalert </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Lightbox </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Rating</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Stylish Tooltip</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Toastr</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Vertical Timeline</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Horizontal Timeline</a>
                    </li>
                </ul>
            </li>

            <li class="nav-title">
                Forms Tables & widgets
            </li>

            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-file-document"></i> Forms</a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Form Layouts </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Form Elements</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Form Validation</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Custom Elements </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Form Plugins </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Form Masks </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> File Upload </a>
                    </li>

                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"> Editors </a>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Summernote</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Markdown</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>


            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-table-large"></i> Tables</a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Basic Tables</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Table Layouts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Data Tables</a>
                    </li>
                </ul>
            </li>

            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-widgets"></i> Widgets</a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Satistics Widget </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Data Widget</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Chart Widget</a>
                    </li>

                </ul>
            </li>

            <li class="nav-title"> Extras </li>
            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-brush"></i> Icons</a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Font Awesome </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Simple Line Icons</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Material Design Icons</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Themify Icons</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Linea Icons</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Weather Icons</a>
                    </li>
                </ul>
            </li>

            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-poll-box"></i> Charts</a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Chart.js</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Flot Chart</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Morris Chart </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Peity Chart</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#"> Chartist Chart</a>
                    </li>

                </ul>
            </li>

            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-map"></i> Maps
                    <span class="badge badge-main badge-boxed badge-warning">New</span>
                </a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Vector maps
                            <span class="badge badge-sub badge-boxed badge-warning">New</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="divider"></li>

            <li class="nav-item nav-dropdown">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="mdi mdi-checkbox-multiple-blank"></i> multilevel</a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> level 1.1</a>
                    </li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"> level 1.2</a>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="#"> level 1.2.1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> level 1.2.2</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> level 1.3</a>
                    </li>
                </ul>
            </li> -->
        </ul>
    </nav>

</div>
<script>
/* $("#findMenu").on("change", function() {
	console.log("Testing");
	var searchParm = $(this).val();
	if(searchParm.length >= 3) {
		$.ajax({
			url: getContextPath() + "/menu-section/menu-rights/get-menus",
			type: "post",
            dataType: "json",
            data: JSON.stringify({query:searchParm}),
            contentType:"application/json; charset=utf-8",
            success: function (json) {
                console.log(json);
                $("#sidebar > nav > .nav").empty();
                var response = JSON.parse(JSON.stringify(json));
                $.each(json, function(i, item) {
                	console.log(item);
                	$("#sidebar > nav > .nav").append("<li class='nav-item'><a class='nav-link' href='"+ getContextPath() +"/"+ item.menu_controller +"'>"+item.menu_desc+"</a></li>");
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
            	$("#sidebar > nav > .nav").empty();
            }
		});
	} else {
		$("#sidebar > nav > .nav").empty();
	}
	console.log(searchParm);
}); */
</script>