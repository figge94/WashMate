import { washer } from "./machines/washer";
import { dryer } from "./machines/dryer";

import type { Machine } from "~/types/machine";

export const machines: Machine[] = [washer, dryer];
