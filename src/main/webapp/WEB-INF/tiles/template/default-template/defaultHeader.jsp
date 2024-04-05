<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>

<style>
.notify-bubble {
    position: absolute;
  	top: -10px;
    right: 0px;
    padding: 2px 5px 2px 6px;    
    color: white;
    font-size: 0.65em;
    border-radius: 50%;
    box-shadow: 1px 1px 1px gray;
  }
  
  .scrollable-menu {
    height: auto;
    max-height: 200px;
    overflow-x: hidden;
}
.card-text{
	text-align: center;
	vertical-align: middle;
}

.marqueeLeft {
        width: 100%;
        overflow: hidden;
        padding-left: 0px;
    }

</style>
<header class="app-header navbar">
    <div class="hamburger hamburger--arrowalt-r navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto is-active">
        <div class="hamburger-box">
            <div class="hamburger-inner"></div>
        </div>
    </div>
    <!-- end hamburger -->
    <a class="navbar-brand" href="<c:url value='#'/>">
        <strong>Indian Railways</strong>
    </a>

    <div class="hamburger hamburger--arrowalt-r navbar-toggler sidebar-toggler d-md-down-none mr-auto">
        <div class="hamburger-box">
            <div class="hamburger-inner"></div>
        </div>
    </div>
    <!-- end hamburger -->
	<div style="width:30%;" class="bold-text">
		<div class="marqueeLeft"></div>
	</div>
    <!-- <div class="navbar-search">
        <button type="submit" class="navbar-search-btn">
            <i class="mdi mdi-magnify"></i>
        </button>
        <input type="text" class="navbar-search-input" placeholder="Find User a user, team, meeting ..">
    </div> -->
    <!-- end navbar-search -->

    <ul class="nav navbar-nav ">
        
        
        
        

        <li class="nav-item dropdown">
            <a class="btn btn-round btn-theme btn-sm" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <span class="">
                	<c:out default="${pageContext.request.userPrincipal.name}" escapeXml="true" value="${not empty sessionScope.userProfile.employeeName ? sessionScope.userProfile.employeeName : pageContext.request.userPrincipal.name}"/>
                    <i class="fa fa-arrow-down"></i>
                </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right user-menu animated flipInY ">
                <div class="wrap">
                    <div class="dw-user-box">
                        <div class="u-img">
                            <!-- <img src="http://via.placeholder.com/100x100" alt="user" /> -->
<%--                             <img src='${pageContext.request.contextPath}${sessionScope.userProfile.photoId}' alt="user"  class='rounded-circle' height="80" width="100"/>
 --%>                            <img src="<c:url value='${sessionScope.userProfile.photoId}'/>" alt="user"  class='rounded-circle' height="80" width="100"/>
                            
                            
                        </div>
                        <div class="u-text">
                            <p class="text-muted"><c:out default="${pageContext.request.userPrincipal.name}" escapeXml="true" value="${not empty sessionScope.userProfile.employeeName ? sessionScope.userProfile.employeeName : pageContext.request.userPrincipal.name}" /></p>
                            <!-- <a href="#" class="btn btn-round btn-theme btn-sm">View Profile</a> -->
                        </div>
                    </div>
                    <!-- end dw-userprofile-box -->
                    <%-- <a class="dropdown-item" href="<c:url value='/contact-us'/>">
                        <i class="fa fa-pencil"></i>Contact Us</a>--%>

                    <!-- <div class="dropdown-divider"></div> -->

                    <a class="dropdown-item" href="#" onclick='$("#logout-form").submit()'>
                        <i class="fa fa-lock"></i> Logout</a>
                        
                     <form id="logout-form" action="<c:url value="/logoutProcessUrl"/>" method="post">
    					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					</form>
                </div>
                <!-- end wrap -->
            </div>
            <!-- end dropdown-menu -->
        </li>
        <!-- end nav-item -->


    </ul>

    <div class="hamburger hamburger--arrowalt-r navbar-toggler aside-menu-toggler ">
        <div class="hamburger-box">
            <div class="hamburger-inner"></div>
        </div>
    </div>
</header>

<c:if test="${(not empty sessionScope.impersonated && sessionScope.impersonated=='Y') || (not empty sessionScope.loggedInAsOther && sessionScope.loggedInAsOther=='Y')}">
		 
	<span class="badge badge-boxed badge-success" style="width: 100%;position:absolute; top:0px; right: 0px; z-index:10000; font-size:11px;">
		You (${sessionScope.userProfile.actualID }) are logged in as User : ${sessionScope.userProfile.employeeName} (${sessionScope.userProfile.userId})</span>
	
	<style type="text/css">
		.app-header.navbar{
			top: 10px;
		}
	</style>
	
</c:if>
 <!-- sample Large modal content -->
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"  aria-hidden="true"
        style="display: none;">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" >List Of Birthday</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                			 <form class="needs-validation" role="form" novalidate> 
                					<div class="row" >
                                            <div class="col-md-4">
                                                <div class="form-group row">
		                                    		<div class="col-md-4">
		                                    			<label for="railwayUnitDescription" class="form-control-label" data-toggle="tooltip" data-placement="top" title="">Railway Unit Type<strict>*</strict></label>
		                                   			</div>
		                                   			<div class="col-md-7">
		                                        		<select id="railwayUnitDescription" name="railwayUnitDescription" class="form-control" onchange="getRailwayNameByUnitFlag(this.value)" autofocus="autofocus" required>
					     	        						<option value="">Please Select</option>     						
					     	        					</select>
					     	        					<div class="invalid-feedback" id = "railway-unit-type-remark">
          														Please choose a Railway Unit Type.
       													</div>
					     	        					
					     	        				</div>
                                				</div>
                                			</div>
                                	
		                                	<div class="col-md-4">
		                            			<div class="form-group row">
		                                    		<div class="col-md-4">
		                                    			<label for="railwayUnitName" class="form-control-label" data-toggle="tooltip" data-placement="top" title="" >Railway Unit Name <strict>*</strict></label>
		                                   			</div>
		                                   			<div class="col-md-7">
		                                        		<select id="railwayUnitName" name="railwayUnitName" class="form-control"  autofocus="autofocus" required>
					     	        						<option value="">Please Select</option>  					
					     	        					</select>
					     	        					<div class="invalid-feedback">
          														Please choose a Railway Unit Name.
       													</div>
					     	        				</div>
		                                		</div>
		                                	</div>
		                                 <div class="col-md-4">
		                            		<div class="form-group row">
		                                		<div class="col-md-4">
                                					<div class="form-group">
		                                					<button type="submit" class="btn bg-theme" style="margin-top: 0px;" id="birthdaylistByRailwayUnitName">GO</button>
		                                			</div>
		                                		</div>
		                                	</div>
		                                </div>
		                                
                                	</div>
                                	 </form> 
                                	
                    <div class="table-responsive"> 
                             <table class="table table-bordered" id="birthdaydatatable">
                                            <thead class = "bg-theme">
                                            	<tr>
                                                <!-- <tr bgcolor="#3867D6"> -->
                                                    <th><font color="#fff">Sl.No</font></th>
                                                    <th><font color="#fff">Employee Image</font></th>                                                
                                                    <th><font color="#fff">Employee Name (HRMS Employee ID)</font></th>
                                                    <th><font color="#fff">Designation</font></th>
                                                    <th><font color="#fff">Department</font></th>
                                                                                                      
                                                </tr>
                                            </thead>
                                            <tbody id = "birthdayListBody">
                                               
                                            </tbody>
                              </table>
                     </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger waves-effect text-left" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <input type="hidden" value="${sessionScope.otpTransVerified}" id="otpTransVerified"/>
    
   <!--  <div class="loader">Loading...</div> -->
    
    <!-- /.modal -->


<script type="text/javascript">

$(function() {
    

	  $('[data-toggle="tooltip"]').tooltip()

    
});
</script>
