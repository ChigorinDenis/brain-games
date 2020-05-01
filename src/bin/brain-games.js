#!/usr/bin/env node
import { askName, greeting } from '../cli.js';

const user = askName();
greeting(user);
