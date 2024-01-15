#pragma once

#include <Arduino.h>

class App {
private:
	String			   _name;

public:
	App(String name);

	void setup();
	void loop();
};
