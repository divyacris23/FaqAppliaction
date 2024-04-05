<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>
<aside class="aside-menu">
    <div class="aside-header bg-theme text-uppercase">Service Panel</div>
    <div class="aside-body">
        <h6 class="text-theme">Light Sidebar</h6>
        <ul class="theme-colors">
            <li class="theme-blue" onclick="swapStyleSheet('<c:url value='/resources/css/style-blue.css'/>')"></li>
            <li class="theme-green" onclick="swapStyleSheet('<c:url value='/resources/css/style-green.css'/>')"></li>
            <li class="theme-red" onclick="swapStyleSheet('<c:url value='/resources/css/style-red.css'/>')"></li>
            <li class="theme-yellow" onclick="swapStyleSheet('<c:url value='/resources/css/style-yellow.css'/>')"></li>
            <li class="theme-orange" onclick="swapStyleSheet('<c:url value='/resources/css/style-orange.css'/>')"></li>
            <li class="theme-teal" onclick="swapStyleSheet('<c:url value='/resources/css/style-teal.css'/>')"></li>
            <li class="theme-cyan" onclick="swapStyleSheet('<c:url value='/resources/css/style-cyan.css'/>')"></li>
            <li class="theme-purple" onclick="swapStyleSheet('<c:url value='/resources/css/style-purple.css'/>')"></li>
            <li class="theme-indigo" onclick="swapStyleSheet('<c:url value='/resources/css/style-indigo.css'/>')"></li>
            <li class="theme-pink" onclick="swapStyleSheet('<c:url value='/resources/css/style-pink.css'/>')"></li>
        </ul>

        <!-- <h6 class="text-theme">Social Colors</h6> -->
        <ul class="theme-colors">
            <li class="theme-facebook" onclick="swapStyleSheet('<c:url value='/resources/css/style-facebook.css'/>')"></li>
            <li class="theme-twitter" onclick="swapStyleSheet('<c:url value='/resources/css/style-twitter.css'/>')"></li>
            <li class="theme-linkedin" onclick="swapStyleSheet('<c:url value='/resources/css/style-linkedin.css'/>')"></li>
            <li class="theme-google-plus" onclick="swapStyleSheet('<c:url value='/resources/css/style-google-plus.css'/>')"></li>
            <li class="theme-flickr" onclick="swapStyleSheet('<c:url value='/resources/css/style-flickr.css'/>')"></li>
            <li class="theme-tumblr" onclick="swapStyleSheet('<c:url value='/resources/css/style-tumblr.css'/>')"></li>
            <li class="theme-xing" onclick="swapStyleSheet('<c:url value='/resources/css/style-xing.css'/>')"></li>
            <li class="theme-github" onclick="swapStyleSheet('<c:url value='/resources/css/style-github.css'/>')"></li>
            <li class="theme-html5" onclick="swapStyleSheet('<c:url value='/resources/css/style-html5.css'/>')"></li>
            <li class="theme-openid" onclick="swapStyleSheet('<c:url value='/resources/css/style-openid.css'/>')"></li>
            <li class="theme-stack-overflow" onclick="swapStyleSheet('<c:url value='/resources/css/style-stack-overflow.css'/>')"></li>
            <li class="theme-css3" onclick="swapStyleSheet('<c:url value='/resources/css/style-css3.css'/>')"></li>
            <li class="theme-dribbble" onclick="swapStyleSheet('<c:url value='/resources/css/style-dribbble.css'/>')"></li>
            <li class="theme-instagram" onclick="swapStyleSheet('<c:url value='/resources/css/style-instagram.css'/>')"></li>
            <li class="theme-pinterest" onclick="swapStyleSheet('<c:url value='/resources/css/style-pinterest.css'/>')"></li>
            <li class="theme-vk" onclick="swapStyleSheet('<c:url value='/resources/css/style-vk.css'/>')"></li>
            <li class="theme-yahoo" onclick="swapStyleSheet('<c:url value='/resources/css/style-yahoo.css'/>')"></li>
            <li class="theme-behance" onclick="swapStyleSheet('<c:url value='/resources/css/style-behance.css'/>')"></li>
            <li class="theme-dropbox" onclick="swapStyleSheet('<c:url value='/resources/css/style-dropbox.css'/>')"></li>
            <li class="theme-reddit" onclick="swapStyleSheet('<c:url value='/resources/css/style-reddit.css'/>')"></li>
            <li class="theme-spotify" onclick="swapStyleSheet('<c:url value='/resources/css/style-spotify.css'/>')"></li>
            <li class="theme-vine" onclick="swapStyleSheet('<c:url value='/resources/css/style-vine.css'/>')"></li>
            <li class="theme-foursquare" onclick="swapStyleSheet('<c:url value='/resources/css/style-foursquare.css'/>')"></li>
            <li class="theme-vimeo" onclick="swapStyleSheet('<c:url value='/resources/css/style-vimeo.css'/>')"></li>

        </ul>

        <h6 class="text-theme">Dark Sidebar</h6>
        <ul class="theme-colors">
            <li class="theme-blue" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-blue.css'/>')"></li>
            <li class="theme-green" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-green.css'/>')"></li>
            <li class="theme-red" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-red.css'/>')"></li>
            <li class="theme-yellow" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-yellow.css'/>')"></li>
            <li class="theme-orange" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-orange.css'/>')"></li>
            <li class="theme-teal" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-teal.css'/>')"></li>
            <li class="theme-cyan" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-cyan.css'/>')"></li>
            <li class="theme-purple" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-purple.css'/>')"></li>
            <li class="theme-indigo" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-indigo.css'/>')"></li>
            <li class="theme-pink" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-pink.css'/>')"></li>
        </ul>

        <!-- <h6 class="text-theme">Social Colors</h6> -->
        <ul class="theme-colors">
            <li class="theme-facebook" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-facebook.css'/>')"></li>
            <li class="theme-twitter" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-twitter.css'/>')"></li>
            <li class="theme-linkedin" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-linkedin.css'/>')"></li>
            <li class="theme-google-plus" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-google-plus.css'/>')"></li>
            <li class="theme-flickr" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-flickr.css'/>')"></li>
            <li class="theme-tumblr" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-tumblr.css'/>')"></li>
            <li class="theme-xing" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-xing.css'/>')"></li>
            <li class="theme-github" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-github.css'/>')"></li>
            <li class="theme-html5" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-html5.css'/>')"></li>
            <li class="theme-openid" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-openid.css'/>')"></li>
            <li class="theme-stack-overflow" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-stack-overflow.css'/>')"></li>
            <li class="theme-css3" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-css3.css'/>')"></li>
            <li class="theme-dribbble" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-dribbble.css'/>')"></li>
            <li class="theme-instagram" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-instagram.css'/>')"></li>
            <li class="theme-pinterest" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-pinterest.css'/>')"></li>
            <li class="theme-vk" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-vk.css'/>')"></li>
            <li class="theme-yahoo" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-yahoo.css'/>')"></li>
            <li class="theme-behance" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-behance.css'/>')"></li>
            <li class="theme-dropbox" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-dropbox.css'/>')"></li>
            <li class="theme-reddit" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-reddit.css'/>')"></li>
            <li class="theme-spotify" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-spotify.css'/>')"></li>
            <li class="theme-vine" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-vine.css'/>')"></li>
            <li class="theme-foursquare" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-foursquare.css'/>')"></li>
            <li class="theme-vimeo" onclick="swapStyleSheetDark('<c:url value='/resources/css/style-vimeo.css'/>')"></li>

        </ul>
    </div>

</aside>