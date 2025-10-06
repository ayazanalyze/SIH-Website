/**
 * Opens the FlowBot chatbot interface in a new browser tab.
 * This is the function linked to both the header button and the hero CTA.
 */
function launchFlowBot() {
    // Replace 'flowbot.html' with the actual URL of your chatbot application
    const chatbotURL = 'flowbot.html'; 
    window.open(chatbotURL, '_blank');
}

// Function to attach the event listeners to the buttons after the page loads
function setupFlowBotButtons() {
    // 1. Get the header button (using its link target #chatbot, but we'll override the default link behavior)
    const headerButton = document.querySelector('header a[href="#chatbot"]');
    
    // 2. Get the primary hero CTA button
    const heroButton = document.querySelector('section a[href="#chatbot"]');
    
    // Check if the buttons exist before trying to attach listeners
    if (headerButton) {
        // Prevent the default anchor link behavior (scrolling to #chatbot)
        headerButton.addEventListener('click', function(event) {
            event.preventDefault();
            launchFlowBot();
        });
    }

    if (heroButton) {
        // Prevent the default anchor link behavior (scrolling to #chatbot)
        heroButton.addEventListener('click', function(event) {
            event.preventDefault();
            launchFlowBot();
        });
    }
}

// Ensure the function runs after the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', setupFlowBotButtons);
