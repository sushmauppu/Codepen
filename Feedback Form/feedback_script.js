function signIn() {
    const name = document.getElementById("name").value;
    const hallTicketNumber = document.getElementById("hallTicketNumber").value;

    if(name.trim() !== "" && hallTicketNumber.trim() !== "") {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        document.getElementById("userName").textContent = name;
    } else {
        alert("Please enter both name and hall ticket number.");
    }
  }

  function validateForm() {
      const radios = document.querySelectorAll('input[type="radio"]');
      let checkedCount = 0;
      for (const radio of radios) {
          if (radio.checked) {
              checkedCount++;
          }
      }
      if (checkedCount < 5) {
          alert("Please provide feedback for all subjects.");
          return false;
      }
      return true;
  }
