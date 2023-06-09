// Get the list items, and the left and right containers
    let lists = document.getElementsByClassName("list");
    let rightBox = document.getElementById("right");
    let leftBox = document.getElementById("left");

    // Attach event listeners to each list item for drag and drop
    for (list of lists) {
      list.addEventListener("dragstart", function (e) {
        let selected = e.target;

        // Event listeners for the right container
        rightBox.addEventListener("dragover", function (e) {
          e.preventDefault();
        });
        rightBox.addEventListener("drop", function (e) {
          alert('Drop has been triggered');
          rightBox.appendChild(selected);
          selected = null;
        });

        // Event listeners for the left container
        leftBox.addEventListener("dragover", function (e) {
          e.preventDefault();
        });
        leftBox.addEventListener("drop", function (e) {
          leftBox.appendChild(selected);
          selected = null;
        });
      });
    }

    // Function to reset the containers
    function resetContainers() {
      // Clear the second container
      rightBox.innerHTML = "<h2>Container2</h2>";

      // Reset the first container to its original state
      let initialItems = [
        '<div class="list" draggable="true"><img src="img.png"> List Item 1</div>',
        '<div class="list" draggable="true"><img src="img.png"> List Item 2</div>',
        '<div class="list" draggable="true">&nbsp     &nbsp List Item 3 </div>',
        '<div class="list" draggable="true"><img src="uoh.jpg"></div>'
      ];

      // Remove existing event listeners
      for (list of lists) {
        list.removeEventListener("dragstart", handleDragStart);
      }

      // Reset the first container with initial items
      leftBox.innerHTML = "<h2>Container1</h2>";
      for (let item of initialItems) {
        leftBox.innerHTML += item;
      }

      // Re-attach the event listeners
      for (list of lists) {
        list.addEventListener("dragstart", handleDragStart);
      }
    }

    // Function to handle the drag start event
    function handleDragStart(e) {
      let selected = e.target;

      rightBox.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      rightBox.addEventListener("drop", function (e) {
        alert('Drop has been triggered');
        rightBox.appendChild(selected);
        selected = null;
      });

      leftBox.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      leftBox.addEventListener("drop", function (e) {
        leftBox.appendChild(selected);
        selected = null;
      });
    }