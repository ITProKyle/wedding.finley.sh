# wedding.finley.sh

**Development Site:** [https://wedding.dev.finley.sh](https://wedding.dev.finley.sh)

**Production Site:** [https://wedding.dev.finley.sh](https://wedding.dev.finley.sh)

## Usage

This repo uses a Makefile to simplify actions.

|  target  | description                            |
|:--------:|:--------------------------------------:|
| `deploy` | deploy to the current environment      |
|  `help`  | show help message                      |
|  `sync`  | create and/or sync virtual environment |

## Testing Locally

The static site can be run locally by changing directory into `staticsite.web` and running `npm start`.

_note: `npm install` needs to be run prior to the first usage of the above command and any time dependencies change._
