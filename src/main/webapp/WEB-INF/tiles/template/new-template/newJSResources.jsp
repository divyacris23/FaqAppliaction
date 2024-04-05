<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>


<!--   Core JS Files   -->
<script src="<c:url value='/resources/assets/js/core/popper.min.js' />"></script>
<script src="<c:url value='/resources/assets/js/core/bootstrap.min.js' />"></script>
<script src="<c:url value='/resources/assets/js/plugins/perfect-scrollbar.min.js' />" ></script>
<script src="<c:url value='/resources/assets/js/plugins/smooth-scrollbar.min.js' />" ></script>
<script src="<c:url value='/resources/assets/js/plugins/chartjs.min.js' />" ></script>
<script src="<c:url value='/resources/assets/js/cute-alert.js' />" ></script>
<script src="<c:url value='/resources/plugins/bootbox/bootbox.min.js' />"></script>
<script src="<c:url value='/resources/plugins/moment/moment.min.js' />"></script>
<!-- Github buttons -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
<!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
<script src="<c:url value='/resources/assets/js/argon-dashboard.min.js?v=2.0.4' />" ></script>
<!--Alertify js -->
<script src="<c:url value='/resources/plugins/Alertify/js/alertify.js'/>"></script>
<script src="<c:url value='/resources/plugins/bootstrap-multi-select/js/bootstrap-multiselect.min.js'/>"></script>
<script src="<c:url value='/resources/plugins/select2/dist/js/select2.min.js' />" ></script>

<!-- Custom JS -->
<script src="<c:url value='/resources/js/custom.js?version=' /><spring:message code='js.versions' />' />" ></script>

<!-- model header theme danger  -->
<div class="modal fade" id="exampleModal-danger-header" tabindex="-1" role="dialog"  aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-warning">
                <h6 class="modal-title text-white">Warning</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <p></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="continue-session" class="btn btn-warning">Continue Session</button>
            </div>
        </div>
    </div>
</div>
<!-- /.modal -->

<script type="text/javascript">
 	$(document).ready(function(e){
 		console.log("${requestScope['javax.servlet.forward.request_uri']}");
 		$('aside.sidenav .navbar-nav .nav-link').each(function(i, item){
 			if($(item).attr('href')=="${requestScope['javax.servlet.forward.request_uri']}") {
 				$(item).addClass('active');
 				$(item).find('i').removeClass('text-warning text-dark').addClass('text-light');
 			}
 			
 		});
 	});
 
 </script>