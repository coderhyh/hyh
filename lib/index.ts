#!/usr/bin/env ts-node

import { program } from "commander";

import { helpOptions } from "./core/help";
import { createCommand } from "./core/createCommand";

helpOptions();

createCommand()

program.parse(process.argv);
