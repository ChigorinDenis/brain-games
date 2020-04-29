#!/usr/bin/env node
import { askName, greeting, gameEven } from '../cli.js';

const user = askName();
greeting(user);
gameEven(user);
