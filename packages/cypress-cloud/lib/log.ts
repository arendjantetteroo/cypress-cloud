import chalk from "chalk";
import util from "util";

const log = (...args: unknown[]) => console.log("  ", util.format(...args));

export const info = log;

export const warn = (...args: unknown[]) =>
  log(chalk.bgYellow.black(" WARNING "), util.format(...args));

export const success = (...args: unknown[]) =>
  log(chalk.green(util.format(...args)));

export const error = (...args: unknown[]) =>
  log(chalk.bgRed.white(" ERROR "), util.format(...args));

type Color = "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";
export const title = (color: Color, ...args: unknown[]) =>
  info("\n" + "  " + chalk[color].bold(util.format(...args)) + "  " + "\n");

export const divider = () =>
  console.log("\n" + chalk.gray(Array(100).fill("=").join("")) + "\n");

export const spacer = (n: number = 2) =>
  console.log(Array(n).fill("").join("\n"));

export const cyan = chalk.cyan;
export const blue = chalk.blueBright.bgWhite;
export const red = chalk.red;
export const green = chalk.greenBright;
export const gray = chalk.gray;
export const white = chalk.white;
export const magenta = chalk.magenta;
export const bold = chalk.bold;
