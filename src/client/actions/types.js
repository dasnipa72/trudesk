import { defineAction } from 'redux-define';
import { ERROR, SUCCESS } from './stateConstants';

// Common Nav Change
export const NAV_CHANGE = defineAction('NAV_CHANGE');

// Settings
export const FETCH_SETTINGS = defineAction('FETCH_SETTINGS', [SUCCESS, ERROR]);
export const UPDATE_SETTING = defineAction('UPDATE_SETTING', [SUCCESS, ERROR]);