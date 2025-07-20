export interface ArduinoBoard {
  image: string;
  intro: string;
  microcontroller: string;
  operating_voltage: string;
  input_voltage: string;
  digital_pins: string;
  analog_pins: string;
  flash_memory: string;
  sram?: string;
  eeprom?: string;
  clock_speed: string;
  dimensions: string;
  weight: string;
  compatible_modules: string[];
  components: Record<string, string>;
  // Optional fields for specific boards
  microprocessor?: string;
  wifi?: string;
  ethernet?: string;
  usb?: string;
  connectivity?: string;
  fpga?: string;
  camera?: {
    resolution: string;
    frame_rate: string;
    type: string;
  };
  sensors?: Record<string, string>;
  wireless?: Record<string, string>;
  cellular?: Record<string, string>;
  interfaces?: Record<string, string>;
  storage?: Record<string, string>;
  fpga_logic_elements?: string;
}

export interface ArduinoBoardData {
  [key: string]: ArduinoBoard;
}