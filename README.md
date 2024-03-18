# URL Shortener App

A simple URL shortener application built using Node.js, Express.js, MongoDB, and EJS.
Also special thanks to Piyush Garg Yt Channel..

## Features

- Shorten long URLs into concise, shareable links.
- View statistics for shortened URLs, such as click counts and creation date.
- Easy-to-use interface for both shortening and accessing URLs.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB &MONGOOSE**: NoSQL database for storing URL data.
- **EJS**: Templating engine for rendering dynamic HTML pages.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or accessible through a cloud service.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vansh16aug/ur-shortner.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Url-Shortner
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up MongoDB:

   - Create a MongoDB database and obtain the connection string.
   - Update the `../models/url.js` file with your MongoDB connection string.

5. Start the application:

   ```bash
   nodemon index.js
   ```

6. Open your browser and visit [http://localhost:8001](http://localhost:8001) to use the URL shortener.

## Usage

1. Shorten a URL:

   - Enter a long URL in the provided input field.
   - Click the "Shorten" button to generate a short URL.

2. Access short URLs:

   - Enter a short URL in the browser to be redirected to the original long URL.

3. View statistics:
   - Navigate to the "Statistics" page to see the number of clicks and creation date for each short URL.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
