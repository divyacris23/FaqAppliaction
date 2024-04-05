<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.nio.file.*, com.fasterxml.jackson.databind.ObjectMapper, java.util.Map, java.util.List"%>
<%@ page import="java.util.stream.Collectors" %>

<!DOCTYPE html>
<html>
<head>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.3/components/faqs/faq-3/assets/css/faq-3.css">
    <script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <meta charset="UTF-8">
    <title>FAQ</title>
</head>
<body>
<header>
    <%@ include file="header.jsp" %>
</header>

<section class="bsb-faq-3 py-3 py-md-5 py-xl-8">
    <div class="container">
        <form action="/search" method="get" class="my-3">
            <div class="input-group">
                <input type="text" class="form-control form-control-md" aria-label="Medium" id="searchQuery" name="query" placeholder="Type Your Qus" required>
                <div class="input-group-append">
                    <input type="submit" value="Search">
                </div>
            </div>
        </form>

        <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class="mb-4 display-5 text-center">Frequently Asked Questions</h2>
                <p class="text-secondary text-center lead fs-4">Welcome to our FAQ page, your one-stop resource for answers to commonly asked questions.</p>
                <p class="mb-5 text-center">Whether you're a new customer looking to learn more about what we offer or a long-time user seeking clarification on specific topics, this page has clear and concise information about our products and services.</p>
                <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
            </div>
        </div>

        <% 
            // Read JSON data
            InputStream inputStream = new FileInputStream("D:\\UTSonmobileWork\\try.json");
            ObjectMapper objectMapper = new ObjectMapper();
            List<Map<String, String>> faqs = objectMapper.readValue(inputStream, List.class);
            
            // Group FAQs by subcategory
            Map<String, List<Map<String, String>>> groupedFaqs = faqs.stream()
                    .collect(Collectors.groupingBy(faq -> faq.get("subcategory")));

            // Generate FAQ sections
            for (Map.Entry<String, List<Map<String, String>>> entry : groupedFaqs.entrySet()) {
        %>
            <div class="mb-8">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-11 col-xl-10">
                            <div class="d-flex align-items-end mb-5">
                                <i class="bi bi-cart-plus me-3 lh-1 display-5"></i>
                                <h3 class="m-0"><%= entry.getKey() %></h3>
                            </div>
                        </div>
                        <div class="col-11 col-xl-10">
                            <div class="accordion accordion-flush" id="faq<%= entry.getKey().replaceAll("\\s+", "") %>">
                                <% for (Map<String, String> faq : entry.getValue()) { %>
                                    <div class="accordion-item bg-transparent border-top border-bottom py-3">
                                        <h2 class="accordion-header" id="faq<%= faq.get("subcategory").replaceAll("\\s+", "") %>Heading<%= faq.get("question").hashCode() %>">
                                            <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faq<%= faq.get("subcategory").replaceAll("\\s+", "") %>Collapse<%= faq.get("question").hashCode() %>" aria-expanded="false" aria-controls="faq<%= faq.get("subcategory").replaceAll("\\s+", "") %>Collapse<%= faq.get("question").hashCode() %>">
                                                <%= faq.get("question") %>
                                            </button>
                                        </h2>
                                        <div id="faq<%= faq.get("subcategory").replaceAll("\\s+", "") %>Collapse<%= faq.get("question").hashCode() %>" class="accordion-collapse collapse" aria-labelledby="faq<%= faq.get("subcategory").replaceAll("\\s+", "") %>Heading<%= faq.get("question").hashCode() %>">
                                            <div class="accordion-body">
                                                <p><%= faq.get("answer") %></p>
                                            </div>
                                        </div>
                                    </div>
                                <% } %>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <% } %>
    </div>
</section>

</body>
</html>
