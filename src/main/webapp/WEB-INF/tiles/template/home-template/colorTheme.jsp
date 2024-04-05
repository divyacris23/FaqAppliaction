<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>
<div id="mybutton">
        <div class="btn-group dropup">
             <button type="button" class="btn btn-round btn-theme " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i class="mdi mdi-palette"></i>
             </button>
             <div class="dropdown-menu">
                     <h6 class="text-theme"><spring:message code="webapp.login.color_theme" /></h6>
                     <ul class="theme-colors">
                            <li class="theme-blue" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-blue.css'/>')"></li>
                            <li class="theme-green" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-green.css'/>')"></li>
                            <li class="theme-red" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-red.css'/>')"></li>
                            <li class="theme-yellow" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-yellow.css'/>')"></li>
                            <li class="theme-orange" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-orange.css'/>')"></li>
                            <li class="theme-teal" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-teal.css'/>')"></li>
                            <li class="theme-cyan" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-cyan.css'/>')"></li>
                            <li class="theme-purple" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-purple.css'/>')"></li>
                            <li class="theme-indigo" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-indigo.css'/>')"></li>
                            <li class="theme-pink" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-pink.css'/>')"></li>
                        </ul>
        
                        <ul class="theme-colors">
                            <li class="theme-facebook" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-facebook.css'/>')"></li>
                            <li class="theme-twitter" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-twitter.css'/>')"></li>
                            <li class="theme-linkedin" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-linkedin.css'/>')"></li>
                            <li class="theme-google-plus" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-google-plus.css'/>')"></li>
                            <li class="theme-flickr" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-flickr.css'/>')"></li>
                            <li class="theme-tumblr" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-tumblr.css'/>')"></li>
                            <li class="theme-xing" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-xing.css'/>')"></li>
                            <li class="theme-github" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-github.css'/>')"></li>
                            <li class="theme-html5" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-html5.css'/>')"></li>
                            <li class="theme-openid" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-openid.css'/>')"></li>
                            <li class="theme-stack-overflow" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-stack-overflow.css'/>')"></li>
                            <li class="theme-css3" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-css3.css'/>')"></li>
                            <li class="theme-dribbble" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-dribbble.css'/>')"></li>
                            <li class="theme-instagram" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-instagram.css'/>')"></li>
                            <li class="theme-pinterest" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-pinterest.css'/>')"></li>
                            <li class="theme-vk" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-vk.css'/>')"></li>
                            <li class="theme-yahoo" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-yahoo.css'/>')"></li>
                            <li class="theme-behance" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-behance.css'/>')"></li>
                            <li class="theme-dropbox" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-dropbox.css'/>')"></li>
                            <li class="theme-reddit" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-reddit.css'/>')"></li>
                            <li class="theme-spotify" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-spotify.css'/>')"></li>
                            <li class="theme-vine" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-vine.css'/>')"></li>
                            <li class="theme-foursquare" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-foursquare.css'/>')"></li>
                            <li class="theme-vimeo" onclick="appSwapStyleSheet('<c:url value='/resources/css/style-vimeo.css'/>')"></li>
        
                        </ul>
             </div>
        </div>
     </div>
    <!-- end mybutton -->