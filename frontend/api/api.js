const BASE_URL = "https://socratic-teacher-bot.vercel.app/api";

const authEndpoints = {
    LOGIN_API: BASE_URL + "/auth/login", // post
    SIGNUP_API: BASE_URL + "/auth/register", // post
}

const sessionEndpoints = {
    CREATE_SESSION_API: BASE_URL + "/session/create", // post
    CHAT_API: BASE_URL + "/chat/chat", // post
}

export { authEndpoints, sessionEndpoints }