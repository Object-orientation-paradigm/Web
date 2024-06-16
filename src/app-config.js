let backendHost;

const hostname = window && window.location && window.location.hostname;

console.log("hostname", hostname);
if (hostname === "localhost") {
  backendHost = "http://localhost:8080";
} else {
  backendHost = "http://localhost:8080"; // 배포된 서버의 URL로 변경
}

export const API_BASE_URL = `${backendHost}`;
