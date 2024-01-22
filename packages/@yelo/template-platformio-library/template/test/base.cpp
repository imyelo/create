#include "<%= pascalName %>.h"
#include "unity.h"

void setUp(void) {}

void tearDown(void) {}

void test_base(void) {
	TEST_ASSERT_TRUE(1);
}

int runUnityTests(void) {
	UNITY_BEGIN();
	RUN_TEST(test_base);
	return UNITY_END();
}

void setup() {
	delay(2000);
	runUnityTests();
}
void loop() {}
