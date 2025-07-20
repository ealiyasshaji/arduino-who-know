import { ArduinoBoardData } from '../types/arduino';

export const arduinoBoards: ArduinoBoardData = {
  "Arduino UNO R3": {
    image: "https://store.arduino.cc/cdn/shop/files/A000066_03.front_1000x750.jpg?v=1727098250",
    intro: "The Arduino UNO R3 is the most popular Arduino board, perfect for beginners and experienced makers alike.",
    microcontroller: "ATmega328P",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "14 (of which 6 provide PWM output)",
    analog_pins: "6",
    flash_memory: "32 KB (ATmega328P) of which 0.5 KB used by bootloader",
    sram: "2 KB (ATmega328P)",
    eeprom: "1 KB (ATmega328P)",
    clock_speed: "16 MHz",
    dimensions: "68.6 x 53.4 mm",
    weight: "25g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor"
    ],
    components: {
      "ATmega328P": "Main microcontroller that runs your code",
      "16 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "USB Port": "For power and programming",
      "Power Jack": "Alternative power input",
      "ICSP Header": "For programming the bootloader",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V"
    }
  },
  "Arduino Nano": {
    image: "https://store.arduino.cc/cdn/shop/files/A000005_03.front_1000x750.jpg?v=1727098231",
    intro: "The Arduino Nano is a compact board perfect for projects where space is limited.",
    microcontroller: "ATmega328P",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "14 (of which 6 provide PWM output)",
    analog_pins: "8",
    flash_memory: "32 KB (ATmega328P) of which 2 KB used by bootloader",
    sram: "2 KB (ATmega328P)",
    eeprom: "1 KB (ATmega328P)",
    clock_speed: "16 MHz",
    dimensions: "45 x 18 mm",
    weight: "7g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor"
    ],
    components: {
      "ATmega328P": "Main microcontroller that runs your code",
      "16 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "Mini-B USB Port": "For power and programming",
      "ICSP Header": "For programming the bootloader",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V"
    }
  },
  "Arduino Mega": {
    image: "https://store.arduino.cc/cdn/shop/files/A000067_00.front_1000x750.jpg?v=1727098253",
    intro: "The Arduino Mega is a more powerful board with more pins and memory, perfect for complex projects.",
    microcontroller: "ATmega2560",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "54 (of which 15 provide PWM output)",
    analog_pins: "16",
    flash_memory: "256 KB (ATmega2560) of which 8 KB used by bootloader",
    sram: "8 KB (ATmega2560)",
    eeprom: "4 KB (ATmega2560)",
    clock_speed: "16 MHz",
    dimensions: "101.52 x 53.3 mm",
    weight: "37g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor",
      "GPS Module", "SD Card Module", "Camera Module", "Stepper Motor Driver",
      "CNC Shield", "3D Printer Controller"
    ],
    components: {
      "ATmega2560": "Main microcontroller that runs your code",
      "16 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "USB Port": "For power and programming",
      "Power Jack": "Alternative power input",
      "ICSP Header": "For programming the bootloader",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V"
    }
  },
  "Arduino Leonardo": {
    image: "https://store.arduino.cc/cdn/shop/files/A000057_03.front_1000x750.jpg?v=1727098244",
    intro: "The Arduino Leonardo is the first Arduino board with built-in USB communication, eliminating the need for a secondary processor.",
    microcontroller: "ATmega32U4",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "20 (of which 7 provide PWM output)",
    analog_pins: "12",
    flash_memory: "32 KB (ATmega32U4) of which 4 KB used by bootloader",
    sram: "2.5 KB (ATmega32U4)",
    eeprom: "1 KB (ATmega32U4)",
    clock_speed: "16 MHz",
    dimensions: "68.6 x 53.3 mm",
    weight: "28g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor",
      "Keyboard Emulation", "Mouse Emulation", "MIDI devices"
    ],
    components: {
      "ATmega32U4": "Main microcontroller with built-in USB communication",
      "16 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "Micro USB Port": "For power and programming",
      "Power Jack": "Alternative power input",
      "ICSP Header": "For programming the bootloader",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V"
    }
  },
  "Arduino Due": {
    image: "https://store.arduino.cc/cdn/shop/files/A000062_00.front_1000x750.jpg?v=1727098247",
    intro: "The Arduino Due is the first Arduino board based on a 32-bit ARM core microcontroller, offering significantly more processing power.",
    microcontroller: "AT91SAM3X8E",
    operating_voltage: "3.3V",
    input_voltage: "7-12V",
    digital_pins: "54 (of which 12 provide PWM output)",
    analog_pins: "12",
    flash_memory: "512 KB",
    sram: "96 KB",
    clock_speed: "84 MHz",
    dimensions: "101.6 x 53.3 mm",
    weight: "36g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor",
      "GPS Module", "SD Card Module", "Camera Module", "Stepper Motor Driver",
      "CNC Shield", "3D Printer Controller", "Audio Processing"
    ],
    components: {
      "AT91SAM3X8E": "32-bit ARM Cortex-M3 microcontroller",
      "84 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "2 Micro USB Ports": "One for programming, one for native USB",
      "Power Jack": "Alternative power input",
      "ICSP Header": "For programming the bootloader",
      "Reset Buttons": "2 reset buttons (one for each USB port)",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 3.3V"
    }
  },
  "Arduino Micro": {
    image: "https://store.arduino.cc/cdn/shop/files/A000053_03.front._1000x750.jpg?v=1727098237",
    intro: "The Arduino Micro is the smallest board in the Arduino family, featuring the ATmega32U4 microcontroller with built-in USB.",
    microcontroller: "ATmega32U4",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "20 (of which 7 provide PWM output)",
    analog_pins: "12",
    flash_memory: "32 KB (ATmega32U4) of which 4 KB used by bootloader",
    sram: "2.5 KB (ATmega32U4)",
    eeprom: "1 KB (ATmega32U4)",
    clock_speed: "16 MHz",
    dimensions: "48 x 18 mm",
    weight: "13g",
    compatible_modules: [
      "LED Matrix", "Small LCD Display", "Bluetooth Module", "Temperature Sensor",
      "Keyboard Emulation", "Mouse Emulation", "MIDI devices"
    ],
    components: {
      "ATmega32U4": "Main microcontroller with built-in USB communication",
      "16 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "Micro USB Port": "For power and programming",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V"
    }
  },
  "Arduino Yún": {
    image: "https://docs.arduino.cc/static/b0903a3777a34a4ee4ec5498babc6954/a207c/A000008_featured_2.jpg",
    intro: "The Arduino Yún combines the power of Linux with the ease of Arduino, featuring both a microcontroller and a microprocessor.",
    microcontroller: "ATmega32U4",
    microprocessor: "Atheros AR9331",
    operating_voltage: "5V",
    input_voltage: "5V",
    digital_pins: "20",
    analog_pins: "12",
    flash_memory: "32 KB (ATmega32U4) + 16 MB (Linux)",
    sram: "2.5 KB (ATmega32U4) + 64 MB (Linux)",
    wifi: "IEEE 802.11b/g/n",
    ethernet: "10/100 Mbit/s",
    usb: "2.0 Host",
    clock_speed: "16 MHz (ATmega32U4) + 400 MHz (AR9331)",
    dimensions: "73 x 53 mm",
    weight: "32g",
    compatible_modules: [
      "WiFi Projects", "IOT Applications", "Web Servers", "Cloud Integration",
      "Remote Monitoring", "Home Automation"
    ],
    components: {
      "ATmega32U4": "Arduino microcontroller that runs sketches",
      "Atheros AR9331": "Linux microprocessor for networking and complex processing",
      "16 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "Micro USB Port": "For power and programming",
      "Ethernet Port": "For wired network connection",
      "WiFi Module": "For wireless connectivity",
      "Reset Buttons": "Separate reset buttons for Arduino and Linux",
      "microSD Slot": "For expanded storage",
      "USB Host Port": "For connecting USB devices"
    }
  },
  "Arduino Portenta H7": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00042_00.iso_1000x750.jpg?v=1727964313",
    intro: "The Arduino Portenta H7 is a high-performance board designed for industrial applications and artificial intelligence.",
    microcontroller: "STM32H747XI dual Cortex-M7+M4",
    operating_voltage: "3.3V",
    input_voltage: "5V USB or 6-60V VIN",
    digital_pins: "22",
    analog_pins: "7",
    flash_memory: "2 MB Flash + 16 MB SDRAM",
    connectivity: "WiFi, Bluetooth Low Energy, Ethernet",
    clock_speed: "480 MHz (M7) + 240 MHz (M4)",
    dimensions: "66 x 25 mm",
    weight: "15g",
    compatible_modules: [
      "Computer Vision", "Machine Learning", "High-Speed Data Processing",
      "Industrial Control", "Real-time Operating Systems", "Edge Computing"
    ],
    components: {
      "STM32H747XI": "Dual-core ARM Cortex microcontroller",
      "2MB Flash Memory": "For program storage",
      "16MB SDRAM": "For fast data processing",
      "USB-C Port": "For power and programming",
      "WiFi/BT Module": "For wireless connectivity",
      "Crypto-Authentication": "For secure communications",
      "DisplayPort": "For video output",
      "High-Density Connectors": "For expansion boards and shields"
    }
  },
  "Arduino MKR WiFi 1010": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00023_03.front_1000x750.jpg?v=1727098288",
    intro: "The Arduino MKR WiFi 1010 offers WiFi and Bluetooth connectivity in a compact form factor for IoT projects.",
    microcontroller: "SAMD21 Cortex-M0+",
    connectivity: "u-blox NINA-W10 (ESP32)",
    operating_voltage: "3.3V",
    input_voltage: "5V USB or 5-12V VIN",
    digital_pins: "22",
    analog_pins: "7",
    flash_memory: "256 KB",
    sram: "32 KB",
    clock_speed: "48 MHz",
    dimensions: "61.5 x 25 mm",
    weight: "10g",
    compatible_modules: [
      "WiFi Projects", "Bluetooth Projects", "IoT Devices", "Remote Sensing",
      "Smart Home Devices", "Connected Wearables"
    ],
    components: {
      "SAMD21": "Low-power ARM Cortex-M0+ microcontroller",
      "NINA-W10 Module": "WiFi and Bluetooth module based on ESP32",
      "USB Port": "For power and programming",
      "Li-Po Charging Circuit": "For battery operation",
      "Crypto-Authentication": "For secure communications",
      "ECC508 Crypto Chip": "For enhanced security"
    }
  },
  "Arduino Pro Mini": {
    image: "https://www.eeeshopbd.com/wp-content/uploads/2019/10/arduino-pro-mini-eeeshopbd-768x768.jpg",
    intro: "The Arduino Pro Mini is a minimalist board intended for semi-permanent installation in projects requiring small size.",
    microcontroller: "ATmega328P",
    operating_voltage: "3.3V or 5V (depending on model)",
    input_voltage: "3.35-12V (5V model) or 3.3-12V (3.3V model)",
    digital_pins: "14 (of which 6 provide PWM output)",
    analog_pins: "8",
    flash_memory: "32 KB (ATmega328P) of which 2 KB used by bootloader",
    sram: "2 KB (ATmega328P)",
    eeprom: "1 KB (ATmega328P)",
    clock_speed: "8 MHz (3.3V model) or 16 MHz (5V model)",
    dimensions: "33 x 18 mm",
    weight: "5g",
    compatible_modules: [
      "Small LED Displays", "Sensors", "Battery-powered Projects",
      "Wearable Electronics", "Space-constrained Applications"
    ],
    components: {
      "ATmega328P": "Main microcontroller that runs your code",
      "Crystal Oscillator": "Provides clock timing for the microcontroller",
      "Voltage Regulator": "Regulates input voltage",
      "Power LED": "Indicates when the board is powered",
      "Reset Button": "Resets the board"
    }
  },
  "Arduino Zero": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00003_03.front_2130x1400.jpg?v=1726731812",
    intro: "The Arduino Zero is a 32-bit extension of the UNO platform, featuring a powerful ARM Cortex-M0+ processor.",
    microcontroller: "ATSAMD21G18 (Cortex-M0+)",
    operating_voltage: "3.3V",
    input_voltage: "7-12V",
    digital_pins: "14 (of which 12 provide PWM output)",
    analog_pins: "6 (12-bit ADC)",
    flash_memory: "256 KB",
    sram: "32 KB",
    clock_speed: "48 MHz",
    dimensions: "68.6 x 53.3 mm",
    weight: "12g",
    compatible_modules: [
      "Advanced Signal Processing", "Audio Applications", "Digital Synthesizers",
      "USB Devices", "High-precision Sensors"
    ],
    components: {
      "ATSAMD21G18": "32-bit ARM Cortex-M0+ microcontroller",
      "USB Port": "For power and programming",
      "Embedded Debugger": "For advanced debugging capabilities",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "Debug LEDs": "Indicate debugging status"
    }
  },
  "Arduino Lilypad": {
    image: "https://www.tertiarycourses.com.sg/media/wysiwyg/arduion-lilypad.jpg",
    intro: "The Arduino Lilypad is designed for e-textiles and wearable projects with a unique circular design.",
    microcontroller: "ATmega328P",
    operating_voltage: "2.7-5.5V",
    input_voltage: "2.7-5.5V",
    digital_pins: "14 (of which 6 provide PWM output)",
    analog_pins: "6",
    flash_memory: "32 KB (ATmega328P) of which 2 KB used by bootloader",
    sram: "2 KB (ATmega328P)",
    eeprom: "1 KB (ATmega328P)",
    clock_speed: "8 MHz",
    dimensions: "50 mm diameter",
    weight: "4g",
    compatible_modules: [
      "Wearable Projects", "E-textiles", "LED Sequins", "Conductive Thread",
      "Fabric Sensors", "Soft Circuits"
    ],
    components: {
      "ATmega328P": "Main microcontroller",
      "Sew Tabs": "Large conductive pads for sewing with conductive thread",
      "Power Header": "For battery connection",
      "Reset Switch": "Resets the board",
      "Power LED": "Indicates when the board is powered"
    }
  },
  "Arduino MKR1000": {
    image: "https://th.bing.com/th/id/R.8a7533cef4ab0f44a0b51d89dd7e7df2?rik=VkNTQPZQf%2fdaRQ&riu=http%3a%2f%2fultra-lab.net%2fwp-content%2fuploads%2f2017%2f12%2fABX00004_back_2.jpg&ehk=3LuM1UKjsJYcFZxEWIEqHI0gIJRvCU4Ka1eIaD2ABDI%3d&risl=&pid=ImgRaw&r=0",
    intro: "The Arduino MKR1000 combines the functionality of the Zero and WiFi Shield in a compact form factor.",
    microcontroller: "SAMD21 Cortex-M0+",
    connectivity: "WINC1500 WiFi Module",
    operating_voltage: "3.3V",
    input_voltage: "5V USB or 5-12V VIN",
    digital_pins: "22",
    analog_pins: "7 (12-bit ADC)",
    flash_memory: "256 KB",
    sram: "32 KB",
    clock_speed: "48 MHz",
    dimensions: "61.5 x 25 mm",
    weight: "10g",
    compatible_modules: [
      "WiFi Projects", "IoT Devices", "Remote Sensing", 
      "Smart Home Devices", "Connected Wearables"
    ],
    components: {
      "SAMD21": "Low-power ARM Cortex-M0+ microcontroller",
      "WINC1500": "WiFi module",
      "USB Port": "For power and programming",
      "Li-Po Charging Circuit": "For battery operation",
      "Power LED": "Indicates when the board is powered",
      "Crypto-Authentication": "For secure communications"
    }
  },
  "Arduino Esplora": {
    image: "https://th.bing.com/th/id/R.fa1e69d2cb2894bc355adf6ca1ac16c6?rik=nqHQezMxq7QjgQ&riu=http%3a%2f%2fwww.robotiksistem.com%2farduino_esplora_1b.JPG&ehk=b3JEllBlqSnmeUG53mfy%2fFJfVZs4hBGc%2ftDgK7inQlU%3d&risl=&pid=ImgRaw&r=0",
    intro: "The Arduino Esplora is a ready-to-use board with built-in sensors and inputs inspired by game controllers.",
    microcontroller: "ATmega32U4",
    operating_voltage: "5V",
    input_voltage: "5V USB",
    digital_pins: "20",
    analog_pins: "12",
    flash_memory: "32 KB (ATmega32U4) of which 4 KB used by bootloader",
    sram: "2.5 KB (ATmega32U4)",
    eeprom: "1 KB (ATmega32U4)",
    clock_speed: "16 MHz",
    dimensions: "165 x 60 mm",
    weight: "53g",
    compatible_modules: [
      "Game Controllers", "Interactive Applications", "Educational Projects",
      "TFT LCD Screen", "SD Card Module"
    ],
    components: {
      "ATmega32U4": "Main microcontroller with built-in USB",
      "Joystick": "2-axis analog joystick with push button",
      "Buttons": "4 push buttons in diamond pattern",
      "Linear Potentiometer": "Slider for analog input",
      "Accelerometer": "3-axis accelerometer",
      "Temperature Sensor": "For ambient temperature readings",
      "Light Sensor": "For ambient light readings",
      "Microphone": "For sound detection",
      "RGB LED": "Programmable RGB LED",
      "Buzzer": "For sound output",
      "TFT LCD Connector": "For connecting compatible displays",
      "microSD Card Slot": "For storage expansion"
    }
  },
  "Arduino Ethernet": {
    image: "https://store.arduino.cc/cdn/shop/files/A000024_03.front_1000x750.jpg?v=1727100347",
    intro: "The Arduino Ethernet is an Arduino UNO with built-in Ethernet connectivity for network applications.",
    microcontroller: "ATmega328P",
    connectivity: "W5100 Ethernet Controller",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "14 (of which 4 provide PWM output)",
    analog_pins: "6",
    flash_memory: "32 KB (ATmega328P) of which 0.5 KB used by bootloader",
    sram: "2 KB (ATmega328P)",
    eeprom: "1 KB (ATmega328P)",
    clock_speed: "16 MHz",
    dimensions: "68.6 x 53.4 mm",
    weight: "28g",
    compatible_modules: [
      "Web Servers", "Data Logging", "Remote Control Systems",
      "Network Sensors", "Home Automation", "IOT Gateways"
    ],
    components: {
      "ATmega328P": "Main microcontroller",
      "W5100 Ethernet Controller": "Provides network connectivity",
      "RJ45 Port": "For Ethernet connection",
      "Power Jack": "Alternative power input",
      "microSD Card Slot": "For storage expansion",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "Ethernet Status LEDs": "Indicate network activity"
    }
  },
  "Arduino MKR Fox 1200": {
    image: "https://static.rapidonline.com/catalogueimages/product/73/48/s73-4843p02wc.jpg",
    intro: "The Arduino MKR Fox 1200 provides SigFox connectivity for IoT devices with long range and low power consumption.",
    microcontroller: "SAMD21 Cortex-M0+",
    connectivity: "ATA8520 SigFox Module",
    operating_voltage: "3.3V",
    input_voltage: "5V USB or 5-12V VIN",
    digital_pins: "22",
    analog_pins: "7 (12-bit ADC)",
    flash_memory: "256 KB",
    sram: "32 KB",
    clock_speed: "48 MHz",
    dimensions: "61.5 x 25 mm",
    weight: "10g",
    compatible_modules: [
      "Long-range IoT", "Remote Monitoring", "Asset Tracking",
      "Environmental Sensing", "Smart Agriculture"
    ],
    components: {
      "SAMD21": "Low-power ARM Cortex-M0+ microcontroller",
      "ATA8520": "SigFox module for LPWAN connectivity",
      "USB Port": "For power and programming",
      "Li-Po Charging Circuit": "For battery operation",
      "SigFox Antenna": "For network connectivity",
      "Power LED": "Indicates when the board is powered"
    }
  },
  "Arduino UNO R4": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00087_00.front_1000x750.jpg?v=1727101606",
    intro: "The Arduino UNO R4 is the latest evolution of the classic UNO series with a significantly more powerful processor and modern features.",
    microcontroller: "Renesas RA4M1 (ARM Cortex-M4)",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "14 (of which 6 provide PWM output)",
    analog_pins: "6",
    flash_memory: "256 KB",
    sram: "32 KB",
    eeprom: "Emulated",
    clock_speed: "48 MHz",
    dimensions: "68.6 x 53.4 mm",
    weight: "25g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor",
      "Motion Sensors", "Camera Modules", "Audio Modules"
    ],
    components: {
      "Renesas RA4M1": "Powerful ARM Cortex-M4 microcontroller",
      "16 MHz Crystal Oscillator": "Provides clock timing",
      "USB-C Port": "For power and programming",
      "ICSP Header": "For programming the bootloader",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V",
      "RGB LED": "User programmable RGB LED",
      "IMU": "6-axis IMU (accelerometer and gyroscope)"
    }
  },
  "Arduino Nano Every": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00028_03.front_1000x750.jpg?v=1727099488",
    intro: "The Arduino Nano Every is a miniature development board with a powerful modern microcontroller in the classic Nano form factor.",
    microcontroller: "ATmega4809",
    operating_voltage: "5V",
    input_voltage: "7-21V",
    digital_pins: "14 (of which 5 provide PWM output)",
    analog_pins: "8",
    flash_memory: "48 KB",
    sram: "6 KB",
    eeprom: "256 bytes",
    clock_speed: "20 MHz",
    dimensions: "45 x 18 mm",
    weight: "5g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor",
      "IR Sensors", "Small OLED Displays"
    ],
    components: {
      "ATmega4809": "Main microcontroller that runs your code",
      "UPDI Header": "For programming",
      "Micro USB Port": "For power and programming",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V",
      "ATECC608A": "Crypto authentication chip (on some versions)"
    }
  },
  "Arduino Mega 2560": {
    image: "https://store.arduino.cc/cdn/shop/files/A000067_00.front_1000x750.jpg?v=1727098253",
    intro: "The Arduino Mega 2560 is a powerful board with extensive I/O capabilities, perfect for larger projects requiring many pins.",
    microcontroller: "ATmega2560",
    operating_voltage: "5V",
    input_voltage: "7-12V",
    digital_pins: "54 (of which 15 provide PWM output)",
    analog_pins: "16",
    flash_memory: "256 KB (of which 8 KB used by bootloader)",
    sram: "8 KB",
    eeprom: "4 KB",
    clock_speed: "16 MHz",
    dimensions: "101.52 x 53.3 mm",
    weight: "37g",
    compatible_modules: [
      "LED Matrix", "Relay Module", "Bluetooth Module", "WiFi Module", 
      "LCD Display", "Servo Motors", "Ultrasonic Sensor", "Temperature Sensor",
      "CNC Shields", "3D Printer Controllers", "Multiple Stepper Motors",
      "Industrial Sensors", "GSM/GPRS Modules"
    ],
    components: {
      "ATmega2560": "Main microcontroller that runs your code",
      "16 MHz Crystal Oscillator": "Provides clock timing for the microcontroller",
      "USB-B Port": "For power and programming",
      "ICSP Header": "For programming the bootloader",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "TX/RX LEDs": "Indicate serial communication",
      "Voltage Regulator": "Regulates input voltage to 5V",
      "ATmega16U2": "Handles USB communication"
    }
  },
  "Arduino Nano 33 IoT": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00027_03.front_1000x750.jpg?v=1727098292",
    intro: "The Arduino Nano 33 IoT is a compact WiFi and Bluetooth enabled board with low power consumption, ideal for IoT projects.",
    microcontroller: "SAMD21 Cortex-M0+",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB, 21V with external power supply (5V pin)",
    digital_pins: "14",
    analog_pins: "8 (with 12-bit ADC)",
    flash_memory: "256 KB",
    sram: "32 KB",
    eeprom: "Emulated",
    clock_speed: "48 MHz",
    dimensions: "45 x 18 mm",
    weight: "5g",
    wireless: {
      wifi: "IEEE 802.11b/g/n 2.4 GHz",
      bluetooth: "v4.2 / BLE"
    },
    compatible_modules: [
      "IoT Sensors", "WiFi Projects", "BLE Beacons", "Temperature/Humidity Sensors",
      "Motion Sensors", "Accelerometers", "Small Displays", "Battery-powered Projects",
      "Cloud Connected Devices", "Smart Home Devices"
    ],
    components: {
      "SAMD21G18A": "Low-power ARM Cortex-M0+ processor",
      "NINA-W102": "u-blox WiFi and Bluetooth module",
      "Micro USB Port": "For power and programming",
      "LSM6DS3": "3-axis accelerometer and gyroscope",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "Charge Status LED": "Indicates charging status",
      "Voltage Regulator": "Regulates input voltage to 3.3V"
    }
  },
  "Arduino MKR GSM 1400": {
    image: "https://chip.mn/wp-content/uploads/abx00018_back_1_.jpg",
    intro: "The Arduino MKR GSM 1400 offers cellular connectivity through GSM networks, making it perfect for IoT projects in areas without WiFi.",
    microcontroller: "SAMD21 Cortex-M0+",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB, 5V through external battery",
    digital_pins: "8",
    analog_pins: "7 (with 12-bit ADC)",
    flash_memory: "256 KB",
    sram: "32 KB",
    eeprom: "Emulated",
    clock_speed: "48 MHz",
    dimensions: "67.64 x 25 mm",
    weight: "32g",
    cellular: {
      gsm_module: "u-blox SARA-U201",
      bands: "GSM 850 MHz, E-GSM 900 MHz, DCS 1800 MHz, PCS 1900 MHz",
      gprs: "Multi-slot class 10",
      sim_card: "Micro SIM card slot"
    },
    compatible_modules: [
      "Remote Monitoring Sensors", "GPS Trackers", "Environmental Monitoring",
      "Industrial Controls", "Smart Agriculture", "Remote Alarms",
      "Fleet Management Devices", "Vending Machines", "Remote Utility Meters"
    ],
    components: {
      "SAMD21G18A": "Low-power ARM Cortex-M0+ processor",
      "SARA-U201": "u-blox GSM/GPRS module",
      "Micro USB Port": "For power and programming",
      "LiPo Connector": "For battery connection",
      "Battery Charger": "For charging connected LiPo battery",
      "Micro SIM Slot": "For cellular connectivity",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "GSM LED": "Indicates GSM module status",
      "Antenna Connector": "For GSM antenna"
    }
  },
  "Arduino MKR WAN 1310": {
    image: "https://store.arduino.cc/cdn/shop/files/MKRWAN1310WANT_03.front_1000x750.jpg?v=1727098331",
    intro: "The Arduino MKR WAN 1310 is designed for LoRa and LoRaWAN communication, ideal for long-range, low-power IoT applications.",
    microcontroller: "SAMD21 Cortex-M0+",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB, 5V through external battery",
    digital_pins: "8",
    analog_pins: "7 (with 12-bit ADC)",
    flash_memory: "256 KB",
    sram: "32 KB",
    eeprom: "Emulated",
    clock_speed: "48 MHz",
    dimensions: "67.64 x 25 mm",
    weight: "32g",
    wireless: {
      lora_module: "Murata CMWX1ZZABZ",
      frequency: "868/915 MHz (region dependent)",
      range: "Up to 10km in open areas",
      power_efficiency: "Ultra-low power consumption"
    },
    compatible_modules: [
      "LoRa Sensors", "Environmental Monitoring", "Agricultural Monitoring",
      "Smart Cities", "Asset Tracking", "Remote Metering",
      "Long-Range Communication", "Battery-powered Sensors", "Weather Stations"
    ],
    components: {
      "SAMD21G18A": "Low-power ARM Cortex-M0+ processor",
      "CMWX1ZZABZ": "Murata LoRa/LoRaWAN module (STM32L082 + SX1276)",
      "Micro USB Port": "For power and programming",
      "LiPo Connector": "For battery connection",
      "Battery Charger": "For charging connected LiPo battery",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "LoRa LED": "Indicates LoRa module status",
      "ECC508": "Crypto authentication chip",
      "Antenna Connector": "For LoRa antenna"
    }
  },
  "Arduino MKR NB 1500": {
    image: "https://store.arduino.cc/cdn/shop/files/MKRNB1500WANT_03.front_1000x750.jpg?v=1727098326",
    intro: "The Arduino MKR NB 1500 enables NB-IoT (Narrowband-IoT) and LTE Cat M1 cellular connectivity for IoT applications with low bandwidth requirements.",
    microcontroller: "SAMD21 Cortex-M0+",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB, 5V through external battery",
    digital_pins: "8",
    analog_pins: "7 (with 12-bit ADC)",
    flash_memory: "256 KB",
    sram: "32 KB",
    eeprom: "Emulated",
    clock_speed: "48 MHz",
    dimensions: "67.64 x 25 mm",
    weight: "32g",
    cellular: {
      nb_module: "u-blox SARA-R410M-02B",
      bands: "NB-IoT and LTE Cat M1",
      sim_card: "Micro SIM card slot"
    },
    compatible_modules: [
      "Remote Sensors", "Smart Metering", "Industrial IoT",
      "Asset Tracking", "Smart Agriculture", "Infrastructure Monitoring",
      "Water Level Monitoring", "Pipeline Monitoring", "Remote Control Systems"
    ],
    components: {
      "SAMD21G18A": "Low-power ARM Cortex-M0+ processor",
      "SARA-R410M-02B": "u-blox NB-IoT/LTE Cat M1 module",
      "Micro USB Port": "For power and programming",
      "LiPo Connector": "For battery connection",
      "Battery Charger": "For charging connected LiPo battery",
      "Micro SIM Slot": "For cellular connectivity",
      "Reset Button": "Resets the board",
      "Power LED": "Indicates when the board is powered",
      "NB-IoT LED": "Indicates module status",
      "ECC508": "Crypto authentication chip",
      "Antenna Connector": "For NB-IoT antenna"
    }
  },
  "Arduino MKR Vidor 4000": {
    image: "https://botland.com.pl/img/art/inne/12946_3.jpg",
    intro: "The Arduino MKR Vidor 4000 combines a traditional microcontroller with an FPGA, enabling hardware acceleration for image processing, DSP, and other complex applications.",
    microcontroller: "SAMD21 Cortex-M0+",
    fpga: "Intel Cyclone 10CL016",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB, 5V through external battery",
    digital_pins: "8 (MKR pins)",
    analog_pins: "7 (with 12-bit ADC)",
    flash_memory: "256 KB (SAMD21) + 16 MB (QSPI)",
    sram: "32 KB (SAMD21) + 16 KB (FPGA)",
    fpga_logic_elements: "16K",
    clock_speed: "48 MHz (SAMD21), 64 MHz (FPGA)",
    dimensions: "67.64 x 25 mm",
    weight: "32g",
    wireless: {
      wifi_module: "u-blox NINA-W102",
      bluetooth: "v4.2 / BLE"
    },
    interfaces: {
      hdmi: "Mini HDMI output",
      camera: "MIPI camera connector"
    },
    compatible_modules: [
      "Computer Vision Projects", "Signal Processing", "HDMI Displays",
      "Camera Modules", "Digital Audio Processing", "Custom Hardware Logic",
      "Hardware Acceleration", "Real-time Processing", "FPGA Development"
    ],
    components: {
      "SAMD21G18A": "Low-power ARM Cortex-M0+ processor",
      "Cyclone 10CL016": "Intel FPGA",
      "NINA-W102": "u-blox WiFi and Bluetooth module",
      "Micro USB Port": "For power and programming",
      "Mini HDMI Port": "For video output",
      "LiPo Connector": "For battery connection",
      "Battery Charger": "For charging connected LiPo battery",
      "Reset Button": "Resets the board",
      "FPGA Configuration Memory": "Flash memory for FPGA configuration",
      "Camera Connector": "MIPI camera interface",
      "Power LED": "Indicates when the board is powered"
    }
  },
  "Arduino Portenta C33": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00074_03.front_1000x750.jpg?v=1727101251",
    intro: "The Arduino Portenta C33 is a cost-effective industrial-grade board balancing performance and affordability for professional applications and AI on the edge.",
    microcontroller: "STM32H723ZG (ARM Cortex-M7)",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB-C, 5V through VIN pin",
    digital_pins: "22",
    analog_pins: "7",
    flash_memory: "1 MB (Internal) + 8 MB (QSPI)",
    sram: "560 KB",
    clock_speed: "550 MHz",
    dimensions: "67.64 x 25.4 mm",
    weight: "10g",
    wireless: {
      wifi: "Optional WiFi via expansion board",
      bluetooth: "Optional BLE via expansion board"
    },
    interfaces: {
      usb: "USB-C (host/device)",
      expansion: "MKR/Portenta breakout-compatible"
    },
    compatible_modules: [
      "Industrial IoT", "Machine Learning", "Edge Computing",
      "Industrial Control", "Data Collection", "Sensor Processing",
      "Real-time Applications", "Embedded Systems", "Robot Control"
    ],
    components: {
      "STM32H723ZG": "High-performance ARM Cortex-M7 processor",
      "QSPI Flash": "8 MB external flash memory",
      "USB-C Port": "For power, programming, and data",
      "High-density Connector": "For expansion boards",
      "Reset Button": "Resets the board",
      "Boot Mode Selector": "For bootloader mode selection",
      "Power LED": "Indicates when the board is powered",
      "User LED": "Programmable status LED",
      "JTAG Connector": "For debugging"
    }
  },
  "Arduino Nicla Vision": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00051_03.front_1000x750.jpg?v=1727100383",
    intro: "The Arduino Nicla Vision is a compact AI-powered computer vision board with a digital camera, microphone, and motion sensors for machine learning applications.",
    microcontroller: "STM32H747AII6 (Dual Core - Cortex-M7/M4)",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB-C",
    digital_pins: "8",
    analog_pins: "3",
    flash_memory: "2 MB (Internal) + 16 MB (QSPI)",
    sram: "1 MB",
    clock_speed: "480 MHz (M7) / 240 MHz (M4)",
    dimensions: "23 x 23 mm",
    weight: "6g",
    wireless: {
      wifi: "IEEE 802.11b/g/n 2.4 GHz",
      bluetooth: "v5.1 / BLE"
    },
    camera: {
      resolution: "2MP (1600 x 1200)",
      frame_rate: "Up to 60fps",
      type: "Digital camera with integrated ISP"
    },
    sensors: {
      microphone: "Digital PDM microphone",
      imu: "LSM6DSOXTR 6-axis IMU (accelerometer + gyroscope)"
    },
    compatible_modules: [
      "Computer Vision", "Machine Learning", "Object Detection",
      "Face Recognition", "Gesture Control", "Voice Recognition",
      "Motion Analysis", "Edge AI", "Wearable Technology"
    ],
    components: {
      "STM32H747AII6": "Dual-core ARM Cortex-M7/M4 processor",
      "GC2145": "2MP digital camera",
      "MP34DT06JTR": "Digital PDM microphone",
      "LSM6DSOXTR": "6-axis IMU",
      "NINA-W106": "u-blox WiFi and Bluetooth module",
      "USB-C Port": "For power and programming",
      "QSPI Flash": "16 MB external flash memory",
      "Power LED": "Indicates when the board is powered",
      "Reset Button": "Resets the board",
      "User RGB LED": "Programmable RGB status LED"
    }
  },
  "Arduino Nicla Sense ME": {
    image: "https://store.arduino.cc/cdn/shop/files/ABX00050_03.front_1000x750.jpg?v=1727100352",
    intro: "The Arduino Nicla Sense ME is an ultra-compact sensing board loaded with environmental sensors for motion, environment, and health monitoring applications.",
    microcontroller: "nRF52832 (ARM Cortex-M4F)",
    operating_voltage: "3.3V",
    input_voltage: "5V via USB, 3.3V via battery connector",
    digital_pins: "8",
    analog_pins: "3",
    flash_memory: "512 KB",
    sram: "64 KB",
    clock_speed: "64 MHz",
    dimensions: "22.86 x 22.86 mm",
    weight: "5g",
    wireless: {
      bluetooth: "v5.0 / BLE"
    },
    sensors: {
      motion: "BHI260AP 6-axis IMU (accelerometer + gyroscope)",
      pressure: "BMP390 barometric pressure sensor",
      humidity: "BME688 gas, humidity, temperature and pressure sensor",
      gas: "BME688 VOC and gas sensor",
      microphone: "MP34DT06JTR digital microphone"
    },
    compatible_modules: [
      "Wearable Technology", "Environmental Monitoring", "Motion Tracking",
      "Health Sensing", "Air Quality Monitoring", "Fitness Devices",
      "Smart Home Sensors", "Altitude Measurements", "Audio Detection"
    ],
    components: {
      "nRF52832": "Low-power ARM Cortex-M4F processor with BLE",
      "BHI260AP": "Smart IMU with integrated sensor fusion",
      "BMP390": "High-precision barometric pressure sensor",
      "BME688": "Environmental sensor for gas, humidity, pressure and temperature",
      "MP34DT06JTR": "Digital PDM microphone",
      "Micro USB Port": "For power and programming",
      "LiPo Connector": "For battery connection",
      "Power LED": "Indicates when the board is powered",
      "Reset Button": "Resets the board",
      "RGB LED": "Programmable RGB status LED"
    }
  },
  "Arduino Yún Rev 2": {
    image: "https://static.insales-cdn.com/images/products/1/5888/193730304/arduino-yun-rev-2.2.jpg",
    intro: "The Arduino Yún Rev 2 combines an ATmega32U4 with a Linux-based OpenWrt system, offering both traditional Arduino functionality and advanced networking capabilities.",
    microcontroller: "ATmega32U4 + Atheros AR9331",
    operating_voltage: "5V (Arduino), 3.3V (Linux)",
    input_voltage: "5V via USB or VIN (7-12V recommended)",
    digital_pins: "20 (7 provide PWM output)",
    analog_pins: "12",
    flash_memory: "32 KB (ATmega32U4) + 16 MB (Linux)",
    sram: "2.5 KB (ATmega32U4) + 64 MB DDR2 (Linux)",
    eeprom: "1 KB (ATmega32U4)",
    clock_speed: "16 MHz (Arduino) + 400 MHz (Linux)",
    dimensions: "68.6 x 53.3 mm",
    weight: "32g",
    wireless: {
      wifi: "IEEE 802.11b/g/n (2.4GHz)",
      ethernet: "10/100 Mbit/s"
    },
    storage: {
      microsd: "MicroSD card slot",
      usb_host: "USB-A host port"
    },
    compatible_modules: [
      "Web Servers", "Network Applications", "IoT Gateways", "Data Loggers",
      "Remote Control Systems", "Cloud Connected Projects", "File Storage",
      "Media Centers", "Home Automation", "Connected Cameras"
    ],
    components: {
      "ATmega32U4": "8-bit AVR microcontroller for Arduino functions",
      "AR9331": "MIPS-based processor running OpenWrt Linux",
      "Micro USB Port": "For power and Arduino programming",
      "USB-A Host Port": "For connecting USB devices to Linux",
      "Ethernet Port": "RJ45 for wired network connection",
      "MicroSD Slot": "For expandable storage",
      "Reset Buttons": "Separate buttons for Arduino and Linux",
      "WiFi Module": "Integrated 2.4GHz wireless connectivity",
      "Power LED": "Indicates when the board is powered",
      "Bridge Library": "Facilitates communication between Arduino and Linux"
    }
  }
};