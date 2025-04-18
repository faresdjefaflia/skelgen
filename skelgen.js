#!/usr/bin/env node
const inquirer = require("inquirer").default;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// قائمة الفريموركات للفرونت إند
const frontendFrameworks = ["React", "Vue", "Angular", "Svelte"];
// قائمة الفريموركات للباك إند
const backendFrameworks = ["Express", "Django", "NestJS", "Flask"];

// وظيفة لإنشاء المجلد
function createDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory created: ${dir}`);
  }
}

// دالة لتثبيت الحزم باستخدام npm
function installPackages(cwd, packages) {
  try {
    execSync(`npm install ${packages}`, { cwd: cwd, stdio: "inherit" });
  } catch (error) {
    console.error(`Error installing packages: ${error.message}`);
  }
}

// دالة لإنشاء هيكل المشروع
async function createProjectStructure() {
  // استلام اسم المشروع من المستخدم
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
    },
  ]);

  const projectName = answers.projectName;
  const basePath = path.join(process.cwd(), projectName);

  // إنشاء مجلدات المشروع: frontend, backend, database
  createDirectory(path.join(basePath, "frontend"));
  createDirectory(path.join(basePath, "backend"));
  createDirectory(path.join(basePath, "database"));
  console.log(`Project directories created at ${basePath}`);

  // استلام اختيار الفريمورك للفرونت إند
  const frontendAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "frontendFramework",
      message: "Select frontend framework:",
      choices: frontendFrameworks,
    },
  ]);

  const frontendChoice = frontendAnswers.frontendFramework;
  const frontendPath = path.join(basePath, "frontend");

  // استلام اختيار الفريمورك للباك إند
  const backendAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "backendFramework",
      message: "Select backend framework:",
      choices: backendFrameworks,
    },
  ]);

  const backendChoice = backendAnswers.backendFramework;
  const backendPath = path.join(basePath, "backend");

  // الآن بدأ التثبيت: أولاً للفرونت إند
  console.log(`Setting up frontend with ${frontendChoice}...`);
  if (frontendChoice === "React") {
    execSync("npx create-react-app .", { cwd: frontendPath, stdio: "inherit" });
  } else if (frontendChoice === "Vue") {
    execSync("npm init vue@latest", { cwd: frontendPath, stdio: "inherit" });
  } else if (frontendChoice === "Angular") {
    execSync("ng new my-angular-app", { cwd: frontendPath, stdio: "inherit" });
  } else if (frontendChoice === "Svelte") {
    execSync("npm init svelte@next", { cwd: frontendPath, stdio: "inherit" });
  }

  // ثم البدء بتثبيت التبعيات للباك إند
  console.log(`Setting up backend with ${backendChoice}...`);
  if (backendChoice === "Express") {
    execSync("npm init -y", { cwd: backendPath, stdio: "inherit" });

    // تثبيت Express
    console.log("Installing Express...");
    execSync("npm install express", { cwd: backendPath, stdio: "inherit" });

    // تشغيل express-generator
    console.log(`Running npx express-generator in ${backendPath}...`);
    execSync("npx express-generator", { cwd: backendPath, stdio: "inherit" });

    console.log(`Express project structure created in ${backendPath}`);
  } else if (backendChoice === "Django") {
    execSync("django-admin startproject myproject .", { cwd: backendPath, stdio: "inherit" });
  } else if (backendChoice === "NestJS") {
    execSync("npm i -g @nestjs/cli", { cwd: backendPath, stdio: "inherit" });
    execSync("nest new my-nest-app", { cwd: backendPath, stdio: "inherit" });
  } else if (backendChoice === "Flask") {
    fs.writeFileSync(path.join(backendPath, "app.py"), "from flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hello():\n    return 'Hello, World!'\nif __name__ == '__main__':\n    app.run(debug=True)");
  }

  // إنشاء مجلد قاعدة البيانات
  const dbPath = path.join(basePath, "database");
  createDirectory(dbPath);
  console.log(`Database directory created at ${dbPath}`);

  // تأكيد من إتمام جميع العمليات
  console.log("Project structure setup complete.");
}

// تشغيل الوظيفة
createProjectStructure().catch((error) => {
  console.error("Error creating project structure:", error);
});
