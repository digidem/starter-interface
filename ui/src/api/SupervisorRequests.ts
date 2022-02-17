// Balena API Documentation: https://www.balena.io/docs/reference/supervisor/supervisor-api/
import expressApi from 'axios'

// Default API path
const apiPath = '/supervisor' as string
const defaultCacheTimeout = 0 as number

export const supervisorRequests = {
  applications_state() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/applications/state',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  blink() {
    return expressApi.post(apiPath, {
      type: 'POST',
      path: 'v1/blink',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  cleanup_volumes() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/cleanup-volumes',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  containerId() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/containerId',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  device() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v1/device',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  device_host_config_get() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v1/device/host-config',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  device_host_config_patch(data: unknown) {
    return expressApi.post(apiPath, {
      type: 'PATCH',
      path: 'v1/device/host-config',
      params: data,
      cacheTimeout: defaultCacheTimeout
    })
  },
  device_name() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/device/name',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  device_tags() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/device/tags',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  device_vpn() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/device/vpn',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  healthy() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v1/healthy',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  journald_logs() {
    return expressApi.post(apiPath, {
      type: 'POST',
      path: 'v2/local/logs',
      params: { follow: false, all: true },
      cacheTimeout: defaultCacheTimeout
    })
  },
  local_device_info() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/local/device-info',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  local_logs() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/local/logs',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  local_target_state_get() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/local/target-state',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  local_target_state_post(targetState: unknown) {
    return expressApi.post(apiPath, {
      type: 'POST',
      path: 'v2/local/target-state',
      params: targetState,
      cacheTimeout: defaultCacheTimeout
    })
  },
  ping() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'ping',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  purge(appId: number) {
    return expressApi.post(apiPath, {
      type: 'POST',
      path: 'v1/purge',
      params: { appId: appId },
      cacheTimeout: defaultCacheTimeout
    })
  },
  reboot(force: boolean) {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v1/reboot',
      params: { force: force },
      cacheTimeout: defaultCacheTimeout
    })
  },
  regenerate_api_key() {
    return expressApi.post(apiPath, {
      type: 'POST',
      path: 'v1/regenerate-api-key',
      cacheTimeout: defaultCacheTimeout
    })
  },
  restart(appId: number) {
    return expressApi.post(apiPath, {
      type: 'POST',
      path: 'v1/restart',
      params: { appId: appId },
      cacheTimeout: defaultCacheTimeout
    })
  },
  shutdown(force: boolean) {
    return expressApi.post(apiPath, {
      type: 'POST',
      path: 'v1/shutdown',
      params: { force: force },
      cacheTimeout: defaultCacheTimeout
    })
  },
  state_status() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/state/status',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  update(force: boolean) {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v1/update',
      params: { force: force },
      cacheTimeout: defaultCacheTimeout
    })
  },
  v1_blink() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v1/blink',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  },
  version() {
    return expressApi.post(apiPath, {
      type: 'GET',
      path: 'v2/version',
      params: false,
      cacheTimeout: defaultCacheTimeout
    })
  }
}