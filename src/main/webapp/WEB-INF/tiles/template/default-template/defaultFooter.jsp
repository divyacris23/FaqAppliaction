<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>
<%@page import="java.net.InetAddress" %>

<footer class="app-footer">
    <div class="text-theme">© <script>
                  document.write(new Date().getFullYear())
                </script>,
                Designed and Developed by
                <a href="https://www.cris.org.in" class="font-weight-bold text-primary" target="_blank">Centre for Railway Information Systems (CRIS)</a>. This application works best in <b>Google Chrome 70.0 and above</b>
		<%String ip = "";
		InetAddress inetAddress = InetAddress.getLocalHost();
		ip = inetAddress.getHostAddress();
		out.println(" : Host : "+inetAddress.getHostName());%>
		<div style="display:none">
			<%out.println("Server IP Address :: "+ip);%>:${pageContext.request.localPort}<br>
			${pageContext.request.localAddr}
		</div>
	</div>
</footer>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SKFF8C9X5D"></script>
<script>
  window.dataLayer = window.dataLayer || [];//??
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SKFF8C9X5D');
</script>