import axios from "axios";
import IUserRepository from "../../domain/repositories/IUserRepository";

const API_URL = process.env.REACT_APP_API_URL;

export default class AuthService {
  constructor(private userRepository: IUserRepository) {}

  async login(email: string, password: string): Promise<string> {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const accessToken: string = response.data.access_token;
    this.userRepository.saveToken(accessToken);
    return accessToken;
  }

  logout(): void {
    this.userRepository.deleteToken();
  }

  getToken(): string | null {
    return this.userRepository.getToken();
  }
}
