# MMM-contacts

A [MagicMirror](https://magicmirror.builders/) module to handle contacts.

## Installation

Navigate to the `modules` folder and clone the repository:

`git clone git@github.com:oenstrom/MMM-contacts.git`

## Configuration

Navigate to the `config/config.js` file and add a new entry in `modules` (see [MagicMirror Module Configuration documentation](https://docs.magicmirror.builders/modules/configuration.html)).

The `config` parameter has __X__ optional arguments.
* `config` which is a object...

A possible configuration could be:

```js
{
  module: "MMM-contacts",
  position: "top_right",
  config: {},
},
```

## API

The module exposes the following routes:

| Method    | Path                   | Params              | Description                                               |
|-----------|------------------------|---------------------|-----------------------------------------------------------|
| GET       | `/MMM-contacts/list`   | `None`              | Get all contacts.                                         |
| POST      | `/MMM-contacts/add`    | `body: {something}` | Add a new contact.                                        |
| GET       | `/MMM-contacts/get`    | `query: {?}`        | Get a specific contact, based on name? or something else? |
| DELETE    | `/MMM-contacts/delete` | `body: {something}` | Delete a contact.                                         |
