# Project Name

This module will render the Details section from Meetup.com. In addition to rendering the text, it also includes a photo carousel for event images. 

## Related Projects

  - https://github.com/TeamSparkles/service-header
  - https://github.com/TeamSparkles/service-attendees
  - https://github.com/TeamSparkles/service-comments-and-reviews
  - https://github.com/TeamSparkles/service-where-when
  - https://github.com/TeamSparkles/service-suggestions

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To use the module, first ensure the mongo database is started.
    In terminal, run 'mongod'
  Seed the database by running 'npm run seed' in a new terminal tab (this only needs to be done the first time)

  To start the service, run 'npm start'
  Navigate to 'http://localhost:4000/event/fmtsvnyxfbcc/details/'
  This is the page for one specific event with the id of '247627544'

  The id's for all of the events are located in the database.
    To see them: in new terminal tab, run 'mongo', then 'use meetup_details', then 'db.details.find()'
    Now you should see all of the entries in the db, and can find the ids for each entry.
    To see another event page, navigate to 'http://localhost:4000/event/[ID_YOU_CHOOSE]/details/'

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

