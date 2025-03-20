// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: Mar 17, 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value
  // output
  document.getElementById("user-address").innerHTML =
    "<p>The address is: " + streetNumber + " " + streetName + ".</p>"
}
