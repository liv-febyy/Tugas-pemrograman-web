let labels = ["January", "February", "March", "April", "May"];
let data = [10, 20, 15, 25, 30];

// Ambil elemen canvas
const ctx = document.getElementById("myChart").getContext("2d");

// Buat grafik awal
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Data',
      data: data,
      borderColor: 'blue',
      borderWidth: 2,
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          color: 'black' // pastikan angka terlihat
        }
      },
      x: {
        ticks: {
          color: 'black'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'black'
        }
      }
    }
  }
});

// Fungsi untuk menambah data
document.getElementById("addData").addEventListener("click", function () {
  const label = document.getElementById("labelInput").value;
  const value = document.getElementById("valueInput").value;

  // Validasi input
  if (label === "" || value === "") {
    alert("Label dan nilai tidak boleh kosong.");
    return;
  }

  labels.push(label);
  data.push(parseFloat(value));
  chart.update();

  // Kosongkan form
  document.getElementById("labelInput").value = "";
  document.getElementById("valueInput").value = "";
});