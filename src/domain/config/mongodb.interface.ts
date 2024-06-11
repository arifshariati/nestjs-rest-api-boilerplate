export interface IDatabaseConfig {
  getMongodbUrl(): string;
  getMongodbName(): string;
  getMongodbHost(): string;
  getMongodbPort(): number;
}
