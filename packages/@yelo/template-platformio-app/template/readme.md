# <%= pascalName %>

## Scripts

### Build

```bash
PLATFORMIO_BUILD_FLAGS="'-D APP_DEVICE_NAME=\"YOUR_DEVICE_NAME\"'" pio run -e YOUR_ENV
```

### Upload

```bash
PLATFORMIO_BUILD_FLAGS="'-D APP_DEVICE_NAME=\"YOUR_DEVICE_NAME\"'" pio run  -e YOUR_ENV -t upload
```
