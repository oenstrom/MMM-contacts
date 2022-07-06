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

  // defaults: {
  // },

  // getScripts: function () {
  //   return [];
  // },

  getTranslations: function() {
    return {
      en: "translations/en.json",
      sv: "translations/sv.json"
    };
  },

  start: function () {
    var self = this;
    this.contacts = [];
    self.sendSocketNotification("INIT", {}); // Here we can pass config to the node_helper if needed.
  },

  // socketNotificationReceived from node_helper
  socketNotificationReceived: function (notification, payload) {
    if (notification === "LIST-ALL") {
      this.contacts = payload.contacts;
      this.updateDom(0);
    } else if (notification === "MMM-contacts-GET") {
      // Get a single contact
    } else if (notification === "MMM-contacts-ADD") {
      // Add a user
    } else if (notification === "MMM-contacts-DELETE") {
      // Delete a user
    }
  },

  getDom: function () {
    var self = this;
    let wrapper = document.createElement("div");
    wrapper.style.width = "320px";
    if (self.contactToDelete) {
      wrapper.className = "wrapper";

      let pName  = document.createElement("p");
      let pEmail = document.createElement("p");
      let pPhone = document.createElement("p");
      pName.innerText  = self.contactToDelete[0];
      pEmail.innerText = self.contactToDelete[1];
      pPhone.innerText = self.contactToDelete[2];
      self.contactToDelete = undefined;

      let buttonWrapper = document.createElement("div");
      buttonWrapper.className = "button-wrapper";
      let callBtn = document.createElement("button");
      callBtn.textContent = self.translate("CALL");
      callBtn.className = "call";

      let cancelBtn = document.createElement("button");
      cancelBtn.textContent = self.translate("BACK");
      cancelBtn.className = "cancel";
      cancelBtn.addEventListener("pointerup", () => self.updateDom(300));

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = self.translate("DELETE");
      deleteBtn.className = "delete";

      buttonWrapper.append(callBtn, cancelBtn, deleteBtn);
      wrapper.append(pName, pEmail, pPhone, buttonWrapper);
    } else if (this.contacts.length > 0) {
      let table = document.createElement("table");
      this.contacts.forEach((item) => {
        const tr    = document.createElement("tr");
        tr.addEventListener("pointerup", () => {self.contactToDelete = item; self.updateDom(300);});
        const name  = document.createElement("td");
        // const email = document.createElement("td");
        const phone = document.createElement("td");
        name.innerText  = item[0];
        // email.innerText = item[1];
        phone.innerText = item[2];
        tr.append(name, phone);
        table.appendChild(tr);
      });
      wrapper.appendChild(table);
    } else {
      wrapper.innerHTML = self.translate("NO_CONTACTS");
    }
    return wrapper;
  },

  getStyles: function() {
    return [this.file("css/style.css")];
  },
});