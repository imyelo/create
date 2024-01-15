#include "./App.h"
#include <Arduino.h>

#ifndef APP_DEVICE_NAME
#define APP_DEVICE_NAME "MY_DEVICE"
#endif

auto app = App(APP_DEVICE_NAME);

void setup() {
	app.setup();
}

void loop() {
	app.loop();
}
