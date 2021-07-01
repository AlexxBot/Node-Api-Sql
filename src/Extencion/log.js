"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4js = require('log4js');
log4js.configure({
    appenders: { PortalProveedor: { type: 'file', filename: './ProPortal_Service.log' } },
    categories: { default: { appenders: ['PortalProveedor'], level: 'info' } }
});
exports.logger = log4js.getLogger('PortalProveedor');
