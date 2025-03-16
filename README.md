# Plant Moisture Reader

A full-stack IoT project that monitors plant moisture levels using Raspberry Pi Pico sensors and displays the data through a modern web interface. The system provides real-time moisture tracking and historical data visualization for your plants.

## System Architecture

The project consists of four main components:

1. **Moisture Sensors** (Raspberry Pi Pico)

   - Reads moisture levels using capacitive soil sensors
   - Connects via WiFi for data transmission
   - Reports readings through MQTT
   - Includes LED status indicators for diagnostics

2. **MQTT Broker**

   - Handles communication between sensors and database
   - Processes incoming sensor data
   - Ensures reliable data transmission

3. **Database** (PostgreSQL)

   - Stores historical moisture readings
   - Manages plant and sensor relationships
   - Enables data analysis and trending

4. **Web Interface** (Next.js)
   - Modern, paper-styled UI for data visualization
   - Real-time moisture level displays
   - Historical data charts
   - Plant management interface

## Features

- **Real-time Monitoring**

  - Live moisture level readings
  - Multiple sensor support per plant
  - Visual status indicators

- **Data Visualization**

  - Interactive charts showing moisture trends
  - Historical data analysis
  - Easy-to-read moisture levels

- **Plant Management**
  - Add and manage multiple plants
  - Configure sensors for each plant
  - Track plant health over time

## Technology Stack

### Hardware

- Raspberry Pi Pico W
- Capacitive Soil Moisture Sensor v2.0
- Built-in LED for status indication

### Software

- **Frontend**:

  - Next.js 13+ (App Router)
  - TypeScript
  - TailwindCSS
  - Chart.js for data visualization

- **Backend**:

  - PostgreSQL database
  - MQTT for sensor communication
  - MicroPython (Raspberry Pi Pico)

- **Development**:
  - Turborepo for monorepo management
  - ESLint for code quality
  - TypeScript for type safety

## Getting Started

### Hardware Setup

1. Set up the Raspberry Pi Pico with required components:

   - Raspberry Pi Pico W
   - Capacitive Soil Moisture Sensor
   - Power supply

2. Flash the MicroPython code to the Pico:
   - Upload all required files
   - Configure WiFi and MQTT settings

### Software Setup

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd plant-reader
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit .env with your database and MQTT settings

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

```
plant-reader/
├── packages/
│   ├── services/
│   │   └── plant-reader-app/    # Next.js web application
│   ├── db/                      # Database schemas and types
│   └── mqtt/                    # MQTT client and handlers
└── docs/                        # Documentation
```

## LED Status Indicators (Hardware)

The Pico's onboard LED indicates different states:

- Fast blinking (0.1s): Time sync in progress
- Medium blinking (0.5s): WiFi connecting
- Slow blinking (1.0s): MQTT connecting
- LED off: Normal operation

## MQTT Data Format

Sensors publish data in the following JSON format:

```json
{
  "plant_reader_id": "sensor_id",
  "created_at": [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "weekday",
    0
  ],
  "moisture_level": "percentage",
  "meta_data": {}
}
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Turborepo](https://turbo.build/repo)
- Powered by [Next.js](https://nextjs.org/)
- Hardware powered by [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/)
