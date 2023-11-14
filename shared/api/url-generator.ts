const API = "/api";
const API_V1 = `${API}/v1`;
const AUTH_API = `${API_V1}/auth`;
const USERS_API = `${API_V1}/users`;

export class UrlGenerator {
  login(): string {
    return `${AUTH_API}`;
  }

  getAuthUser(): string {
    return `${AUTH_API}/user`;
  }

  getUserProfileByNickname(nickname: string): string {
    return `${USERS_API}/${nickname}`;
  }
}
