export default interface IUserRepository {
  getToken(): string | null;
  saveToken(token: string): void;
  deleteToken(): void;
}
