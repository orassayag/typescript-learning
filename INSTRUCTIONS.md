# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. The TypeScript compiler is configured via `tsconfig.json`

## Configuration

The TypeScript compiler is configured in `tsconfig.json`:
- **module**: commonjs
- **target**: ES5 (compatible with older browsers)
- **sourceMap**: Disabled for smaller output
- **strictNullChecks**: Enabled for better type safety
- **noUnusedParameters**: Enabled to catch unused parameters

## Running the Application

### Start Development Server
Starts lite-server to serve the HTML page and auto-reload on changes:
```bash
npm start
```

The browser will open automatically at `http://localhost:3000` (or the next available port).

### Compile TypeScript
To manually compile TypeScript to JavaScript:
```bash
tsc
```

This compiles `app.ts` to `app.js` based on the `tsconfig.json` configuration.

## Project Structure

```
typescript-learning/
├── app.ts              # Main TypeScript file with learning examples
├── app.js              # Compiled JavaScript (generated from app.ts)
├── index.html          # HTML page that loads the compiled JavaScript
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript compiler configuration
└── README.md           # Project documentation
```

## Learning Topics Covered

The `app.ts` file demonstrates the following TypeScript/ES6 concepts:

1. **let & const** - Block-scoped variable declarations
2. **Arrow Functions** - Modern function syntax and implicit returns
3. **Default Parameters** - Setting default values for function parameters
4. **Rest & Spread Operators** - Working with variable arguments and array spreading
5. **Destructuring** - Unpacking arrays and objects
6. **Template Literals** - String interpolation and multi-line strings

## Development Workflow

1. Edit `app.ts` to add or modify TypeScript code
2. Save the file (TypeScript will auto-compile if using an IDE with TypeScript support)
3. If not auto-compiling, run `tsc` manually
4. Run `npm start` to view results in the browser
5. Open browser console to see output

## TypeScript Compilation

The project uses TypeScript compiler settings optimized for learning:
- Compiles to ES5 for maximum browser compatibility
- Strict null checks enabled for better type safety
- No implicit any allowed (except where explicitly disabled)
- Unused parameters flagged as warnings

## Browser Testing

1. Start the server with `npm start`
2. Open the browser console (F12 or Cmd+Option+I)
3. View console output from the running JavaScript

## Notes

- The `lite-server` automatically refreshes the browser when files change
- All TypeScript code is compiled to JavaScript before running in the browser
- The compiled `app.js` file should not be edited manually (edit `app.ts` instead)
- Comments in `app.js` may contain TypeScript-specific syntax that doesn't affect execution

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
