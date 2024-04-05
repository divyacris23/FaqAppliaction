<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <style>
        /* Full height image covering the sides of the page */
        body, html {
            height: 100%;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
        .header-container {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        .vertical-image-left, .vertical-image-right {
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
            z-index: -1;
            filter: brightness(70%);
            object-fit: cover;
        }
        .vertical-image-left {
            left: 0;
        }
        .vertical-image-right {
            right: 0;
        }
        .logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150px; /* Adjust the width as per your requirement */
            z-index: 1;
        }
        nav {
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
            z-index: 1;
        }
        nav a {
            margin: 0 10px;
        }
    </style>
</head>
<body>

<!-- Header Section -->
<header class="header-container d-flex flex-column align-items-center py-4">
    <!-- Vertical Image on Left -->
    <img src="images/ttrain.jpg" alt="Vertical Image Left" class="vertical-image-left">
    
    <!-- Vertical Image on Right -->
    <img src="images/ttrain.jpg" alt="Vertical Image Right" class="vertical-image-right">
    
    <!-- Logo -->
    <img src="path_to_your_logo.png" alt="Logo" class="logo">
    
    <!-- Navigation Links -->
    <nav>
        <a href="/" class="btn btn-outline-primary">Home</a>
        <a href="/other" class="btn btn-outline-primary">Other</a>
    </nav>
</header>

</body>
</html>
