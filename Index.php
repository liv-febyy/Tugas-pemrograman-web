<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grafik Dinamis</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="container">
    <form id="dataForm">
      <input type="text" id="labelInput" placeholder="Label">
      <input type="number" id="valueInput" placeholder="Value">
      <button type="button" id="addData">Add Data</button>
    </form>
    <canvas id="myChart" width="700" height="400"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $label = $_POST['label'];
  $value = $_POST['value'];
  
  $file = fopen("data.csv", "a");
  fputcsv($file, [$label, $value]);
  fclose($file);
  
  header("Location: form.html"); // balik ke form
}
?>