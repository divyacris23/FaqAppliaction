<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FAQs</title>
<style>
  .question-bar {
    list-style-type: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  
  .question-item {
    background-color: #f1f1f1;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
  }
  
  .answer-card {
    display: none;
    background-color: #e9e9e9;
    padding: 15px;
    margin-top: 5px;
    border-radius: 5px;
  }
</style>
</head>
<body>

<h2>Frequently Asked Questions</h2>

<ul class="question-bar">
  <li class="question-item" onclick="toggleAnswer(1)">Question 1: What is Lorem Ipsum?</li>
  <div id="answer1" class="answer-card">
    Answer 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </div>
  
  <li class="question-item" onclick="toggleAnswer(2)">Question 2: Why do we use it?</li>
  <div id="answer2" class="answer-card">
    Answer 2: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
  </div>
  
  <li class="question-item" onclick="toggleAnswer(3)">Question 3: Where does it come from?</li>
  <div id="answer3" class="answer-card">
    Answer 3: Contrary to popular belief, Lorem Ipsum is not simply random text.
  </div>
</ul>

<script>
function toggleAnswer(id) {
  let answer = document.getElementById(`answer${id}`);
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}
</script>

</body>
</html>
