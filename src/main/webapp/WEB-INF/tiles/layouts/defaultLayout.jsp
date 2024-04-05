<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="Indian Railways Content Distribution and Management Application" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="IRCDMA, Indian Railways, Railway, Content, Distribution, Management">
	<meta name="_csrf" content="${_csrf.token}"/>
	<meta name="_csrf_header" content="${_csrf.headerName}"/>
	<meta name="_timeout" content="${pageContext.session.maxInactiveInterval}"/>
	<meta name="_context" content="${pageContext.request.contextPath}"/>
    <title><tiles:insertAttribute name="title" /></title>
	<tiles:insertAttribute name="cssResources" />
</head>
<body class="app sidebar-fixed aside-menu-off-canvas aside-menu-hidden header-fixed">
	<!-- Header Start -->
		<tiles:insertAttribute name="header-content" />
	<!-- Header End -->
	<div class="app-body">
		<!-- Left Sidebar Start -->
			<tiles:insertAttribute name="left-sidebar" />
		<!-- Left Sidebar End -->
		<!-- Main Start -->
			 <tiles:insertAttribute name="body-content" />
		<!-- Main End -->
		<!-- Aside Start -->
			<tiles:insertAttribute name="right-sidebar" />
		<!-- Aside End -->
	</div>
	<!-- Footer Start -->
		<tiles:insertAttribute name="footer-content" />
	<!-- Footer End -->
	<tiles:insertAttribute name="jsResources" />
	<tiles:insertAttribute name="extrascript" />
</body>