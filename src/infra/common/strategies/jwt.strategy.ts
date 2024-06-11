import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EnvConfigService } from 'src/infra/config/env-config/env-config.service';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: EnvConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.getJwtSecret(),
    });
  }

  async validate(payload: AccessTokenPayload) {
    return payload;
  }
}
