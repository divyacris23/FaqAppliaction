<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>
<!--   Core JS Files   -->
  <script src="<c:url value='/resources/assets/js/core/popper.min.js' />"></script>
  <script src="<c:url value='/resources/assets/js/core/bootstrap.min.js' />"></script>
  <script src="<c:url value='/resources/assets/js/plugins/perfect-scrollbar.min.js' />"></script>
  <script src="<c:url value='/resources/assets/js/plugins/smooth-scrollbar.min.js' />"></script>
  <script src="<c:url value='/resources/plugins/bootbox/bootbox.min.js' />"></script>
  <script src="<c:url value='/resources/plugins/Alertify/js/alertify.js'/>"></script>
  
  <script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  </script>
  <!-- Github buttons -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="<c:url value='/resources/assets/js/argon-dashboard.min.js?v=2.0.4' />"></script>