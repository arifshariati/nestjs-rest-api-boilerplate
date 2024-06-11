import { EnvConfigService } from '../env-config/env-config.service';

export const getMongooseModuleOptions = (config: EnvConfigService) => (
  config.getMongodbUrl(),
  {
    dbName: config.getMongodbName(),
    autoCreate: true,
  }
);
