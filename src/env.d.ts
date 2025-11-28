declare interface Env {
  readonly NG_APP_API_URL: string;
  [key: string]: any;
}

// Usar _NGX_ENV_ (personalizable)
declare const _NGX_ENV_: Env;
