import { ESLint } from "eslint";
import fs from "fs";
import path from "path";
import ts from "typescript";

async function main() {
  const results = {};

  // 1. ESLint
  try {
    const eslint = new ESLint();
    const lintResults = await eslint.lintFiles(["src/**/*.{js,ts,jsx,tsx}"]);
    const lintErrors = lintResults.filter(r => r.errorCount > 0 || r.warningCount > 0);
    results.eslint = lintErrors.map(r => ({
      filePath: r.filePath,
      messages: r.messages.map(m => `[${m.ruleId}] ${m.line}:${m.column} - ${m.message}`)
    }));
  } catch (e) {
    results.eslintError = e.toString();
  }

  // 2. TypeScript
  try {
    const configPath = ts.findConfigFile("./", ts.sys.fileExists, "tsconfig.json");
    if (configPath) {
      const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
      const parsedConfig = ts.parseJsonConfigFileContent(configFile.config, ts.sys, "./");
      const program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options);
      const emitResult = program.emit();
      const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
      results.typescript = allDiagnostics.map(diagnostic => {
        if (diagnostic.file) {
          const { line, character } = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);
          const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
          return `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`;
        } else {
          return ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
        }
      });
    }
  } catch (e) {
    results.tsError = e.toString();
  }

  fs.writeFileSync("check.json", JSON.stringify(results, null, 2));
}

main();
