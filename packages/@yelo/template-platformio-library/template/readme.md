# <%= pascalName %>

## Scripts

### Build Examples

```bash
pio ci ./examples/Basic/ -c ./platformio.ini -l . -e ENV_NAME
```

### Build and Upload Examples

```bash
rm -rf /tmp/pio && mkdir -p /tmp/pio
pio ci ./examples/Basic/ -c ./platformio.ini -l . -e ENV_NAME --build-dir /tmp/pio --keep-build-dir
cd /tmp/pio
pio run -e ENV_NAME -t upload
cd -
```
