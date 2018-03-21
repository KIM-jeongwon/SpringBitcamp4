<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var = "context" value ="<%=application.getContextPath()%>"/>
<html>
<head>
	<title>Home</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"> 
<%-- <link rel="stylesheet" href="${context}/resources/css/bootstrap-theme.css" />
<link rel="stylesheet" href="${context}/resources/css/bootstrap.css" />
<link rel="stylesheet" href="${context}/resources/css/magnific-popup.css" /> --%>
<link rel="stylesheet" href="${context}/resources/css/style.css" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="${context}/resources/js/app.js"></script>
<%-- <script src="${context}/resources/js/bootstrap.js"></script>
<script src="${context}/resources/js/jquery.magnific-popup.min.js"></script>
<script src="${context}/resources/js/jquery-3.3.1.min.js"></script> --%>
</head>
<body>
<div id="wrapper">
	<h1></h1>
</div>
<div id="wrapperS"></div>
<div id="wrapperD"></div>
</body>
</html>
<script>
	app.init('${context}');
</script>
