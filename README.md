# Tables

Predix UI has some useful helpers for common `<table>` patterns. This module is a fork of the [inuitcss Table module](https://github.com/inuitcss/objects.tables).

## Dependencies

Predix UI's Tables module depends on two other Px modules:

* [px-colors-design](https://github.com/PredixDev/px-colors-design)
* [px-defaults-design](https://github.com/PredixDev/px-defaults-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-tables-design

Once installed, `@import` into your project's Sass file in its **Base** layer:

    @import "px-tables-design/_base.tables.scss";

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-table--fixed
    $inuit-enable-table--small
    $inuit-enable-table--large
    $inuit-enable-table--rows
    $inuit-enable-table--columns
    $inuit-enable-table--no-cells

The following variables are available for use in the module:

    $inuit-table-border-width
    $inuit-table-border-style
    $inuit-table-border-color

## Options

These classes are available if the variable flags listed above are set to `true`:

* `table--fixed`: force tables into having equal-width columns.
* `table--small`: tables with tightly packed cells.
* `table--large`: tables with widely padded cells.
* `table--rows`: add borders only to `table`’s rows.
* `table--columns`: add borders only to `table`’s columns.
* `table--no-cells`: remove borders around a `table`.

view the full API [here](http://predixdev.github.io/px-tables-design/sassdoc/)
