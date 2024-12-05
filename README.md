# j-lib-calc 📚

**j-lib-calc** is a calculator library implemented in TypeScript, designed to simplify basic and advanced mathematical operations with a focus on simplicity and extensibility.

> **Note**: This project was developed as part of a Software Engineering class.

## 🚀 Features

- **Basic Operations**: Addition, subtraction, multiplication, division.  
- **TypeScript Support**: Full type safety for better development experience.  
- **Easy to Use**: Intuitive and well-documented API.  
- **Extensible**: Add new features easily.  
- **Automated Testing**: Fully tested with high test coverage.  
- **Quality Assurance**: Integrated with SonarQube for code analysis.  

---

## 📦 Installation

Install the library from npm:

```bash
npm install j-lib-calc
```

Or using Yarn:

```bash
yarn add j-lib-calc
```

---

## 🔧 Usage

### Basic Example

```typescript
import { Calculator } from 'j-lib-calc';

const calc = new Calculator();

console.log(calc.add(5, 3)); // Output: 8
console.log(calc.multiply(4, 2)); // Output: 8
```

### Supported Operations

- **`add(a: number, b: number): number`** - Adds two numbers.
- **`subtract(a: number, b: number): number`** - Subtracts two numbers.
- **`multiply(a: number, b: number): number`** - Multiplies two numbers.
- **`divide(a: number, b: number): number`** - Divides two numbers (with zero-division check).

---

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or Yarn

### Setup Steps

1. Clone the repository:

```bash
git clone https://github.com/joaomrpimentel/j-lib-calc.git
```

2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

---

## 🤖 CI/CD

This project uses GitHub Actions for automation:

1. **Automated Tests**: Run on every commit to ensure reliability.
2. **Quality Analysis**: Integrated with [SonarQube](https://sonarcloud.io).
3. **npm Publishing**: Automatically publishes to npm when changes are pushed to the `main` branch.
4. **Discord Notifications**: Updates the team about new published versions.

---
