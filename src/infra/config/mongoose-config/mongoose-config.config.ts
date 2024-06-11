import { EnvConfigService } from '../env-config/env-config.service';

export const getMongooseModuleOptions = async (config: EnvConfigService) => ({
  uri: config.getMongodbUrl(),
});
