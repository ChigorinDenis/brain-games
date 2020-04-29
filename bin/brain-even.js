#!/usr/bin/env node
import { askName, greeting, gameEven } from '../src/cli.js';

const user = askName();
greeting(user);
gameEven(user);
