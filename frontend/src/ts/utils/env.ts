import { envConfig } from "virtual:env-config";

export function hasBackend(): boolean {
  return envConfig.backendUrl !== "";
}

export function isDevEnvironment(): boolean {
  return envConfig.isDevelopment;
}
