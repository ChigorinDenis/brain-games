#!/usr/bin/env node
import { askName, greeting } from '../src/cli.js';

const user = askName();
greeting(user);
