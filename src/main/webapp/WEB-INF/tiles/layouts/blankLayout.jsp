<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/pages/tag-libs.jsp" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="Indian Railways Content Distribution and Management Application" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="IRCDMA, Indian Railways, Railway, Content Distribution, Management">
	<meta name="_csrf" content="${_csrf.token}"/>
	<meta name="_csrf_header" content="${_csrf.headerName}"/>
	<c:choose>
		<c:when test="${!androidApp}">
			<meta name="_timeout" content="${pageContext.session.maxInactiveInterval}"/>
		</c:when>
		<c:otherwise>
			<meta name="_timeout" content="50000"/>
		</c:otherwise>
	</c:choose>
   
	
	<meta name="_context" content="${pageContext.request.contextPath}"/>
	<tiles:insertAttribute name="cssResources" />
</head>
<body class="">
	<div class="app-body">
		<!-- Main Start -->
			 <tiles:insertAttribute name="body-content" />
		<!-- Main End -->
	</div>
	<tiles:insertAttribute name="jsResources" />
</body>