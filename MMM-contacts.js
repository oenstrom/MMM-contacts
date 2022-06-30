/* global Module */

/* Magic Mirror
 * Module: MMM-contacts
 *
 * By Olof Enström
 * 
 * 
 * Copyright (C) 2022  Olof Enström
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

Module.register("MMM-contacts", {
  requiresVersion: "2.1.0", // Required version of MagicMirror

  defaults: {
  },

  getScripts: function () {
    return [];
  },

  getStyles: function() {
    return [];
  },

  start: function () {
    var self = this;
    self.sendSocketNotification("INIT", {}); // Here we can pass config to the node_helper if needed.
  },

  getDom: function () {
    var self = this;
    this.wrapper = document.createElement("div");
    return this.wrapper;
  },

  notificationReceived: function (notification, payload, sender) {
    if (notification === "MMM-contacts-LIST") {
      // Get all contacts
    } else if (notification === "MMM-contacts-GET") {
      // Get a single contact
    } else if (notification === "MMM-contacts-ADD") {
      // Add a user
    } else if (notification === "MMM-contacts-DELETE") {
      // Delete a user
    }
  },

  // socketNotificationReceived from node_helper
  socketNotificationReceived: function (notification, payload) {
    if (notification === "MMM-contacts-LIST") {
      // Get all contacts
    } else if (notification === "MMM-contacts-GET") {
      // Get a single contact
    } else if (notification === "MMM-contacts-ADD") {
      // Add a user
    } else if (notification === "MMM-contacts-DELETE") {
      // Delete a user
    }
  },
});