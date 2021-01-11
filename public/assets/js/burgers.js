// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const devourBurgerBtns = document.querySelectorAll(".devour-burger");

  // Set up the event listener for the create button
  if (devourBurgerBtns) {
    devourBurgerBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        // const newDevour = e.target.getAttribute("data-devour");
        const newDevour = { devoured: true };
        // const newDevourState = {
        //   devoured: newDevour,
        // };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          //   body: JSON.stringify(newDevourState),
          body: JSON.stringify(newDevour),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  // CREATE
  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        burger_name: document.getElementById("ca").value.trim(),
      };

      console.log(newBurger);

      // Send POST request to create a new quote
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // Make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById("ca").value = "";

        // Reload the page so the user can see the new quote
        console.log("Created a new burger!");
        location.reload();
      });
    });
  }
});
