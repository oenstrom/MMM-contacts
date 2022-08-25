# MMM-contacts

A [MagicMirror](https://magicmirror.builders/) module to display contacts sent from MyCroft.

## Dependencies
- [MMM-mycroft-bridge](https://github.com/oenstrom/MMM-mycroft-bridge)
- [contacts-skill](https://github.com/oenstrom/contacts-skill)
- [jitsi-magicmirror-skill](https://github.com/oenstrom/jitsi-magicmirror-skill)

## Installation

Navigate to the `modules` folder and clone the repository:

```
git clone git@github.com:oenstrom/MMM-contacts.git
```

## Configuration

Navigate to the `config/config.js` file and add a new entry in `modules` (see [MagicMirror Module Configuration documentation](https://docs.magicmirror.builders/modules/configuration.html)).

A possible configuration could be:

```js
{
  module: "MMM-contacts",
  position: "top_right",
},
```
## Notification subscribtions
| Name                | Payload                      | Description                             |
|---------------------|------------------------------|-----------------------------------------|
| `LIST-ALL`          | `payload: {contacts: Array}` | Display the array of contacts received. |
| `MYCROFT_CONNECTED` | `None`                       | Request the array of contacts on start. |


## Notifications sent through MMM-mycroft-bridge
| Name                            | Data sent                                            | Description                                                  |
|---------------------------------|------------------------------------------------------|--------------------------------------------------------------|
| `contacts-skill:get_contacts`   | `data: {sender: String}`                             | Request the array of contacts. Pass the name of this module. |
| `jitsi-magicmirror-skill:call`  | `data: {name: String, email: String, phone: String}` | Request to make a call to the contact passed.                |
| `contacts-skill:delete_contact` | `data: {name: String, email: String, phone: String}` | Request to delete the contact passed.                        |
