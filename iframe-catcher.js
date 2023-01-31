// Function to check if URL has ?iframe_url parameter
function checkUrlForIframe() {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("iframe_url")) {
      return urlParams.get("iframe_url");
    }
    return false;
  }
  
  // Function to create and inject iFrame into page
  function injectIframe(url) {
    let iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    iframe.style.border = "none";
    
    // Create and style hover button
    let button = document.createElement("button");
    button.innerHTML = "Close iFrame";
    button.style.position = "absolute";
    button.style.top = "0";
    button.style.right = "0";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.padding = "5px 10px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    
    // Add event listener to remove iFrame and button on click
    button.addEventListener("click", function() {
      iframe.remove();
      button.remove();
    });
    
    // Append iFrame and button to body
    document.body.appendChild(iframe);
    document.body.appendChild(button);
  }
  
  // Check URL for ?iframe_url parameter
  let iframeUrl = checkUrlForIframe();
  
  // If URL has ?iframe_url parameter, inject iFrame into page
  if (iframeUrl) {
    injectIframe(iframeUrl);
  }
  