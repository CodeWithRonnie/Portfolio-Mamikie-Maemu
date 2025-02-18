function toggleMenu(){
    console.log('Menu Toggled');
    let menu = document.querySelector('.menu-links');
    let icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

function scrollToContact(){
    let contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({behavior: 'smooth'});

}


// chatbot section
const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatContent = document.getElementById('chat-content');
const userInput = document.getElementById('user-input');

const predefinedAnswers = {
  'projects': 'I currently do not have any projects to showcase. However, I am working on a weather app project from SheCodes, it is helping me on my learning journey.',
  'skills': 'My skills include HTML, CSS, JavaScript, Python, Java and React basics.',
  'certificates': 'I have several certifications, including Introduction to Artificial Intelligence from coursera and Python Programming from recognized platforms like Udemy and also my Diploma in Information Technology from Richfield Graduate Institute of Technology.',
  'availability': 'I am available for freelance work or full-time opportunities. Feel free to reach out for collaboration!',
  'current projects': 'Currently, I am working on a personal portfolio website and a weather app project from SheCodes.',
  'education': 'I have a Diploma in Information Technology from Richfield Graduate Institute of Technology.'
};

chatIcon.addEventListener('click', () => {
  chatWindow.style.display = 'flex';
});

closeChat.addEventListener('click', () => {
  chatWindow.style.display = 'none';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const userMessage = userInput.value;
    if (userMessage) {
      addMessage('user', userMessage);
      provideAnswer(userMessage);
      userInput.value = '';
    }
  }
});

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatContent.appendChild(messageElement);
}

function provideAnswer(message) {
  let response = 'I\'m not sure how to answer that.';
  
  // Check for predefined answers
  for (let key in predefinedAnswers) {
    if (message.toLowerCase().includes(key)) {
      response = predefinedAnswers[key];
      break;
    }
  }
  
  setTimeout(() => {
    addMessage('bot', response);
  }, 1000);
}
