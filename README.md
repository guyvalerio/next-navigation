# Next Navigation

Contains templates and minimal styling for the navigation contained in the header/footer

Includes

*  Top Level Navigation bar
*  Contents of the 'All' dropdown (to be replicated in footer)

## Installation

    $ git clone git@github.com:Financial-Times/next-navigation.git
    $ cd next-navigation
    $ make install

## Development

Currently, the nav is defined by [nav.json](./config/nav.json). To make a change to the nav, updated the json file and
build the templates with

    $ make build

To view the demo

    $ make demo

**NOTE: Run `make pre-commit` before checking in**

## Todo

 * Move the nav configuration into the Lists API
 * Better way of creating the templates without depending on a manual build step
