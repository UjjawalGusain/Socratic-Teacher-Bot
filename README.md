# Socratic Teacher Bot

## Project Overview

The Socratic Teacher Bot is a Gen AI-powered teaching assistant designed to enhance student understanding of Data Structures and Algorithms (DSA) using the Socratic teaching method. This project leverages the Google Gemini model and the LangChain framework to engage students through dynamic and reflective questioning, promoting deeper comprehension of sorting algorithms.

This project is a submission to the [Google Gen AI Exchange Hackathon 2024](https://devfolio.co/google-genaiexchange) by Devfolio.

### Key Features

- **Socratic Method**: The bot encourages critical thinking by asking probing questions rather than providing direct answers.
- **Session Management**: Maintains a session history to keep track of conversations, allowing for context-aware responses.
- **Dynamic Prompting**: Uses various categories of prompts to adapt responses based on student interactions.
- **Error Handling**: Includes robust error handling for API interactions and session management.

## Technologies Used
- **Framework**: LangChain JS
- **Backend**: Node.js, Express, MongoDB (with Mongoose)
- **AI Model**: Google Gemini
- **Frontend**: React (not included in this repository, but expected to integrate with the backend)
- **Environment Variables**: Uses dotenv for configuration

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- A valid Google Gemini API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Navigate to the project directory:

    ```bash
    cd your-repo-name 
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Create a .env file in the root directory and add your Google Gemini API key and MongoDB connection string:

    ```bash
    GOOGLE_GEMINI_API_KEY=your_api_key_here
    MONGODB_URI=your_mongodb_connection_string_here
    ```

### Usage

1. Start the server:

    ```bash
    node server.js
    ```

2. The API will be available at:

    ```bash
    http://localhost:5000/api/
    ```

### API Endpoints

1. Authentication Routes:

    ```bash
    /api/auth
    ```

2. Chat Routes:

    ```bash
    /api/chat
    ```

3. Session Routes:

    ```bash
    /api/session
    ``` 


### How to Interact with the Bot

The bot engages with students through prompts categorized into various types, including:

- Follow-Up Prompts: To build upon previous answers.
- Challenge Prompts: To encourage students to tackle more complex problems.
- Guiding Prompts: To provide hints and steer the conversation.
- Reinforcement Prompts: To consolidate learning after correct answers.

### Example Interaction
- Student Input: "What is bubble sort?"
- Bot Response: "What do you think is the time complexity of bubble sort? Can you optimize it?"

### Session Management
- A unique session ID is generated for each interaction, which allows for tracking conversation history.
- The session is stored in MongoDB, and messages are saved with incrementing chat numbers.

### Error Handling
The application includes error handling for:

- Missing environment variables (e.g., API key).
- Empty prompts or responses from the AI model.
- Session retrieval issues.

### Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions or improvements.

### Acknowledgements
Thanks to [Blume Ventures](https://blume.vc/) for the opportunity to develop this project.

Special thanks to the creators of Google Gemini and LangChain for their powerful APIs and frameworks.

