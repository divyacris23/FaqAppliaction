<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>
<%@page import="java.net.InetAddress" %>

<footer class="footer pt-3  ">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-12 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-muted text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>,
                Designed and Developed by
                <a href="https://www.cris.org.in" class="font-weight-bold text-primary" target="_blank">Centre for Railway Information Systems (CRIS)</a>. This application works best in <b>Google Chrome 70.0 and above</b>
              </div>
            </div>
            <!--
            <div class="col-lg-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                <li class="nav-item">
                  <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
            -->
          </div>
        </div>
      </footer>

	<div id="loading-modal" class="modal fade">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-body" align="center">
					<img src="<c:url value='/resources/assets/img/loading_data1.gif' />" class="img img-responsive img-fluid" style="width:50px;height:50px;"/>
					<p style="font-size:12px;font-weight:600;margin-bottom:2px;margin-top:1rem;">Please wait, while we're processing your request..</p>
				</div>
			</div>
		</div>
	</div>

<div class="modal fade bs-example-modal-md" id="contact-us-modal" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="col-md-8 offset-md-2 text-center">
                    	<h6 class="modal-title">Contact Us</h6>
                    </div>
                    <div class="col-md-2">
                    	<button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="hideModal(this)" style="float: right;">
                        	<span aria-hidden="true">×</span>
                    	</button>
                    </div>
                </div>
                <div class="modal-body">
                    <table>
                    	<tr>
                    		<td>
                    			<img src="<c:url value='/resources/assets/img/email.jpg'  />" style="width:120px;height:100px;"/>
                    		</td>
                    		<td>	
                    		<p style="font-weight:600;color:#000;">For any query or concern, please write to us at <b>ircdma@cris.org.in</b></p>
                    		</td>
                    	</tr>
                    </table>
		        	
				</div>
                <!-- <div class="modal-footer text-center">
                	<button type="button" class="btn btn-danger" data-dismiss="modal" onclick="hideModal(this)">Close</button>
                </div> -->
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

<script type="text/javascript">
	$(document).ready(function(){
		$('#loading-modal').modal({
		    backdrop: 'static',
		    keyboard: false
		})
	});
	
</script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SKFF8C9X5D"></script>
<script>
  window.dataLayer = window.dataLayer || [];//??
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SKFF8C9X5D');
</script>

<script>(function(d){var s = d.createElement("script");s.setAttribute("data-account", "HBUdYbzJzs");s.setAttribute("src", "https://cdn.userway.org/widget.js");(d.body || d.head).appendChild(s);})(document)</script><noscript>Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a></noscript>