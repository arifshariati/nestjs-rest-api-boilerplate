export interface IDatabaseConfig {
  getDatabaseName(): string;
  getDatabaseHostName(): string;
  getDatabasePortNumber(): number;
}
