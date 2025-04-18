### **Features:**
- **Automatic folder creation** for frontend, backend, and database.
- **Frontend framework selection**: Choose from **React**, **Vue**, **Angular**, or **Svelte**.
- **Backend framework selection**: Choose from **Express**, **Django**, **NestJS**, or **Flask**.
- **Automatic dependency installation** for both frontend and backend.
- **Express Setup**: Uses the `express-generator` to quickly set up an Express backend project.
- **Django Setup**: Automatically sets up a Django backend project.
- **NestJS Setup**: Installs `nestjs/cli` and sets up a NestJS backend project.
- **Flask Setup**: Creates a simple `Flask` project with a basic `app.py`.

---

## **Installation**

### **1. Install the Tool**
To install the **Skelgen** globally on your machine, use npm:

```bash
npm i skelgen
```

This will install the tool globally so that it can be used from anywhere on your machine.

---

## **How to Use**

### **2. Running the Tool**
To run the **Skelgen** and create your project structure, simply execute the following command in your terminal:
in root:

```bash
Skelgen
```

### **3. Project Setup Process**

When you run the tool, you will be guided through a series of prompts. Here's what will happen step by step:

1. **Project Name**: You will first be asked to provide a name for your project. This name will be used for the main folder of the project.
   
2. **Directory Structure**: The tool will create the following directories:
    - `frontend`: A folder for the frontend framework files.
    - `backend`: A folder for the backend framework files.
    - `database`: A folder for storing any database-related files.

3. **Frontend Framework**: The tool will ask you to choose a frontend framework from the following list:
   - **React**
   - **Vue**
   - **Angular**
   - **Svelte**

   After you select a framework, it will create the necessary files and install the required dependencies for that framework.
   
4. **Backend Framework**: Next, you will be asked to choose a backend framework from the following list:
   - **Express**
   - **Django**
   - **NestJS**
   - **Flask**

   The tool will install the dependencies for the selected backend framework and generate the appropriate project structure.

5. **Installation of Dependencies**: After selecting both the frontend and backend frameworks, the tool will automatically install the necessary dependencies for both. Here’s how it works for each framework:

   - **Frontend**:
     - **React**: Runs `npx create-react-app` in the frontend directory.
     - **Vue**: Runs `npm init vue@latest` to set up a Vue project.
     - **Angular**: Runs `ng new my-angular-app` to set up an Angular project.
     - **Svelte**: Runs `npm init svelte@next` to create a Svelte project.

   - **Backend**:
     - **Express**: Initializes a new Express project with `express-generator` after installing `express` as a dependency.
     - **Django**: Runs `django-admin startproject` to set up a Django project.
     - **NestJS**: Uses the `nestjs/cli` to generate a new NestJS project.
     - **Flask**: Creates a simple `app.py` file with a basic Flask project structure.

---

## **Directory Structure**

Once the tool has finished running, the following directories will be created:

```
my-project-name/
├── backend/
│   ├── app (or other backend structure depending on framework choice)
├── database/
│   └── (Database-related files can go here)
└── frontend/
    ├── (Files for the frontend framework you selected)
```

- **Frontend Directory**: Contains all the necessary files and dependencies for your selected frontend framework.
- **Backend Directory**: Contains all the files related to your selected backend framework.
- **Database Directory**: Empty at the moment but can be used to store database scripts or migration files.

---

## **Example Usage**

### Example 1: Creating a React and Express Project

1. Run the tool:
   ```bash
   Skelgen
   ```

2. Provide the project name when prompted (e.g., `my-react-express-project`).

3. Select **React** for the frontend framework.

4. Select **Express** for the backend framework.

5. The tool will generate the project structure with both frontend and backend directories, install dependencies, and set up the React app and Express project.

---

## **Contributing**

If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. When contributing, make sure to test your changes thoroughly and ensure that the tool works for all the supported frameworks.

---

## **License**

This project is open-source and available under the **MIT License**.

---

## **Questions or Issues?**

If you encounter any issues or have questions, please feel free to open an issue on the [GitHub page](https://github.com/yourusername/Skelgen/issues).

---

## **Requirements**

Before using the **Skelgen**, make sure you have the following installed:

- **Node.js** and **npm** (You can download them from [nodejs.org](https://nodejs.org/))
- **Django** (if you are using Django backend)
- **express-generator** (for Express backend)

You can install the required dependencies via npm when prompted by the tool.

---