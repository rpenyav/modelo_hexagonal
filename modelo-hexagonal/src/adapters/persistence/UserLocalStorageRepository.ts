import IUserRepository from "../../domain/repositories/IUserRepository";

export default class UserLocalStorageRepository implements IUserRepository {
  getToken(): string | null {
    return localStorage.getItem("access_token");
  }

  saveToken(token: string): void {
    localStorage.setItem("access_token", token);
  }

  deleteToken(): void {
    localStorage.removeItem("access_token");
  }
}
