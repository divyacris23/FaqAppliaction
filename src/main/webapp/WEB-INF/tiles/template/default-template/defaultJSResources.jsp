<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>

<script src="<c:url value='/resources/plugins/nicescroll/jquery.nicescroll.min.js'/>"></script>

<!-- jquery-loading -->
<script src="<c:url value='/resources/plugins/jquery-loading/dist/jquery.loading.min.js'/>"></script>
<%--<script src="<c:url value='/resources/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js'/>"></script>--%>
<script src="<c:url value='/resources/plugins/bootstrap-datepicker/js/fullcalendar.min.js'/>"></script>
<script src="<c:url value='/resources/plugins/form-masks/dist/formatter.min.js'/>"></script>
<script src="<c:url value='/resources/plugins/bootbox/bootbox.min.js' />"></script>

<!-- octadmin Main Script -->
<script src="<c:url value='/resources/js/app.js'/>"></script>
<!--Alertify js -->
<script src="<c:url value='/resources/plugins/Alertify/js/alertify.js'/>"></script>

<!-- Custom JS -->
<script src="<c:url value='/resources/js/custom.js?version=' /><spring:message code='js.versions' />"></script>

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
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->